var MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID
var assert = require("assert");
var request = require("request");
var globalConfig = require("./config/config.js");

var url = "mongodb://127.0.0.1:27017/miniProject";
var globalConfig.sentiApiUrl = " http://www.sentiment140.com/api/bulkClassifyJson?appid=war.cratossai@gmail.com";

MongoClient.connect(globalConfig.localMongoUrl, function (err, db) {
    assert.equal(null, err);
    console.log("Mongo db server running!");
    var tweetsCol = db.collection("tweets");
    var topics = ["apple", "ios", "android", "htc", "googleglass", "oculusrift", "oculus"];
    // text search teh tweets for a specif keyword and place all the found documents under a single collection
    var categoriseTopicsToCol = function (topics) {
        topics.forEach(function (data) {
            console.log(data);
            var cursor = tweetsCol.find({ $text: { $search: data } });
            cursor.toArray(function (err, doc) {
                assert.equal(null, err);
                //now place each doc in its own respective collection
                db.collection(data).insert(doc);
            });
        });
    };//categoriseTopicsToCol
    //    categoriseTopicsToCol(topics);

    //now find polarity of each tweets in their own collection
    function getPolarityandUpdateDb(collectionName, limit) {
        var localArr = { "data": [] };
        var limit = limit ? limit : 20;
        var Collection = db.collection(collectionName);
        Collection.find({}, { text: 1, query: 1, topic: 1 }).limit(limit).toArray(function (err, doc) {
            assert.equal(null, err);
            localArr["data"] = doc;
            // console.log(localArr);
            //now post this data to sentiment server
            request({
                url: globalConfig.sentiApiUrl,
                method: "POST",
                body: localArr,
                json: true
            }, function (err, headers, res) {
                assert.equal(null, err);
                // console.log(headers);
                console.dir(res["data"].length);
                var resdataArr = res["data"];
                resdataArr.forEach(function (eachres) {
                    // console.log(eachres._id);
                    Collection.update({ _id: new ObjectID(eachres._id) }, { $set: { "polarity": eachres["polarity"], "senti_meta": eachres["meta"] } }, function (err, updates) {
                        assert.equal(null, err);
                        // console.log(updates);
                    });
                });
                console.timeEnd("totalTime");
            });//request
        });//find
    }//getPolarity
    // getPolarityandUpdateDb("coachella");
    console.time("totalTime");
    module.exports = getPolarityandUpdateDb;
});//MongoClient.connect