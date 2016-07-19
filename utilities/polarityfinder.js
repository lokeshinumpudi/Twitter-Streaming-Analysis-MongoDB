var globalConfig = require("../config/config.js");
var assert = require("assert");
var request = require("request");
var ObjectID = require("mongodb").ObjectID;

//now find polarity of each tweets in their own collection
console.time("polarityFindAndDbUpdate");
function getPolarityandUpdateDb(collectionName, skip, limit, db, cb) {
    // console.log(collectionName,limit,db);
    var localArr = { "data": [] };
    var skip = skip ? skip : 0;
    var limit = limit ? limit : 200;
    var Collection = db.collection(collectionName);
    Collection.find({}, { text: 1, query: 1, topic: 1 }).skip(skip).limit(limit).toArray(function (err, doc) {
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
            console.log(res["data"].length);
            var resdataArr = res["data"];
            resdataArr.forEach(function (eachres) {
                // console.log(eachres._id);
                Collection.update({ _id: new ObjectID(eachres._id) }, { $set: { "polarity": eachres["polarity"], "senti_meta": eachres["meta"] } }, function (err, updates) {
                    assert.equal(null, err);
                    // console.log(updates);
                    //all the updates have been done
                    cb()
                });
            });
            console.timeEnd("polarityFindAndDbUpdate");
        });//request
    });//find
}//getPolarity

module.exports = getPolarityandUpdateDb;