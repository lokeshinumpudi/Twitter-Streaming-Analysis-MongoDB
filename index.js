var twitterkeys = require("./config/twitter-config.js");
var globalConfig = require("./config/config.js");
var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;
var assert = require("assert");
var request = require("request");
var Twit = require("twit");
var qs = require("qs");
var serveStatic = require("serve-static");
var polarityFnc = require("./utilities/polarityfinder.js");
var aggrFnc = require("./utilities/aggregate.js");

// express init and bodyParser,json init with Access-Control configured
var app = require("express")();
var bodyParser = require("body-parser");
app.set('port',process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use("/", serveStatic("public"));


// returns the avg of a given array[nums]
var avg = function (array) { return (array.reduce(function (a, b) { return a + b })) / array.length; }

var T = new Twit({
    consumer_key: twitterkeys.consumer_key,
    consumer_secret: twitterkeys.consumer_secret,
    access_token: twitterkeys.access_token,
    access_token_secret: twitterkeys.access_token_secret,
    timeout_ms: 60 * 1000,
});

// determines the db connection [cloud or local]
var isCloudDB = false;
MongoClient.connect(globalConfig.cloudMongoUrl, function (err, db) {
    assert.equal(null, err);
    console.log("Mongo db server running!");
    db.stats().then(function (data) {
        if (data["db"] == "lokisdb") {
            console.log(listnames);
            isCloudDB = true;
            //this is cloud db :so we have some extra collections
        } else {
            //local db no problem
            isCloudDB = false;
        }
    });
    //   var stream =  T.stream("statuses/filter", { track: 'apple,ios,android,htc,googleglass,oculusrift,oculus' });
    //     stream.on("tweet",function (tweet) {
    //         // console.log(tweet);
    //         tweetsCol.insert(tweet);
    //     });
    // request({
    //     url:sentiurl,
    //     method:"POST",
    //     body:{"data":[{text:"this movie is super awesome"},{text:"this car is super awesome",query:"car"}]},
    //     json:true
    // },function(err,headers,data){
    //     assert.equal(null,err);

    //     console.log(data);
    // });
    //Endpoint: takes the search keyterm and process it [twitterApi -> db->polarity->aggregation->return result] 
    app.get("/search", function (req, res, next) {
        console.time("totalTime");
        var searchterm = req.query.searchText;
        // console.log(searchterm);
        searchterm = searchterm.split(",")[0].trim();
        var collectionId = searchterm + Date.now();
        console.log(searchterm);
        var tmpCol = db.collection(searchterm);
        var stream = T.stream("statuses/filter", { track: searchterm });
        var count = 0;
        var countTimes = [];
        var countIncrTimeOld = Date.now();

        stream.on("tweet", function (tweet) {
            // console.log("tweet came");
            tweet["created_at"] = new Date(tweet["created_at"]);
            count += 1;
            var newcountIncrTime = Date.now();
            var updateTimeForCount = newcountIncrTime - countIncrTimeOld;
            countIncrTimeOld = newcountIncrTime;
            countTimes.push(updateTimeForCount);
            if (count < 2) {
                countTimes.shift();
            } else {
                var avgtimes = avg(countTimes);
            }
            // console.log(count);
            // todo:change the tweet created_at[type from string to date]
            // so we can us use it to extract month,year,day using mongodb native project operators[$date,$month,$month]
            tmpCol.insert(tweet);
            // console.log(count);
            if (count > 60 || countTimes.length > 15 && avgtimes > 350 || countTimes.length > 8 && avgtimes > 500) {
                console.log("Stream stopped");
                stream.stop();
                //now that stream has stopped
                // change the created_at type from string to date object
                // var bulkOps = [];
                // tmpCol.find({ "created_at": { "$exists": true, "$type": 2 } }).forEach(function (doc) {
                //     var newDate = new Date(doc.created_at);
                //     bulkOps.push(
                //         {
                //             "updateOne": {
                //                 "filter": { "_id": doc._id },
                //                 "update": { "$set": { "created_at": newDate } }
                //             }
                //         }
                //     );
                // });
                // tmpCol.bulkWrite(bulkOps, { "ordered": true });

                //fetch the db and find the polarity
                tmpCol.updateMany({}, { $set: { query: searchterm, topic: searchterm } }, function (err) {
                    assert.equal(null, err);
                    polarityFnc(searchterm, null, 200, db, function () {
                        //called after entire polarity updates are done
                        //aggregate and send the response                        
                        setTimeout(function () {
                            // returns the aggregation result in callback function
                            aggrFnc(tmpCol, function (data) {
                                //send the client aggr results
                                res.end(JSON.stringify(data));
                            });
                        }, 400);
                    });//polarityFnc
                    console.log(countTimes);
                });//update
            }//if>200
        });//stream.on

        stream.on("error", function (err) {
            console.log(err.message);
        });

    });//app.get

    // dummy api
    app.get("/staticCharts", function (req, res, next) {
        var enteredText = req.params.staticText;
    });

    // Endpoint:returns the availbale collection names in db
    app.get("/getCollections", function (req, res, next) {
        db.listCollections().toArray(function (err, names) {
            assert.equal(null, err);
            console.log(names);
            var listnames = [];
            names.forEach(function (eachName) {
                if (eachName["name"] != "objectlabs-system" && eachName["name"] != "objectlabs-system.admin.collections" && eachName["name"] != "system.indexes")
                    listnames.push(eachName["name"]);
            });
            if (!isCloudDB) {
                // listnames.shift();
            } else {
                console.log(listnames);
            }
            // return to the client 
            res.end(JSON.stringify(listnames));
        });
    });//getCollections

    // Endpoint: Aggr results for a specific topic
    app.get("/collection/:collectionName", function (req, res, next) {
        var collectionName = req.params.collectionName;
        try {
            var Collection = db.collection(collectionName.trim());
            //if that collection exists aggregate and send the response back
            aggrFnc(Collection, function (data) {
                data["name"] = collectionName;
                res.end(JSON.stringify(data));
            });//aggregateFnc
        } catch (error) {
            // collection does not exist
            console.log(error);
            return next(error);
        }
    });//get collectionname api
    app.get("/tweets/:tweetCollectionName", function (req, res, next) {
        var colname = req.params.tweetCollectionName;
        try {
            var Collection = db.collection(colname.trim());
            //now that collection exists get the tweets from the collection
            Collection.find({}, { created_at: 1, text: 1, timestamp_ms: 1, "entities.media": 1, user: 1, id_str: 1, polarity: 1, lang: 1 }).toArray(function (err, docs) {
                assert.equal(null, err);
                res.end(JSON.stringify(docs));
            });
        } catch (error) {
            return next(error);
        }

    });//get tweets of a collection

});//connect mongo [all db using routes go inside]

// app.get("/test", function (req, res, next) {
//     var param = req.query;
//     console.log(param);
//     res.end(JSON.stringify(param));
// });



// listen on port

// // serve static here
// app.get("/",),

app.listen(app.get('port'), function () {


    console.log("Server listening on port:",app.get('port'));
});
