var assert = require("assert");
var globalConfig = require("../config/config.js");

function aggregateFnc(Collection, cb) {
    //now lets aggregate awesomeness
    // TODO:now do a match in entire collection 
    //cause well be having a single collection in future indexed by text
    var aggrResults = {};
    Collection.aggregate([{ $group: { _id: "$polarity", total: { $sum: 1 } } }]).toArray(function (err, polarityaggrresults) {
        assert.equal(null, err);
        Collection.aggregate([{ $group: { _id: "$source", total: { $sum: 1 } } }]).toArray(function (err, devicesaggrresults) {
            assert.equal(null, err);
            Collection.aggregate([{ $group: { _id: "$lang", total: { $sum: 1 } } }]).toArray(function (err, langaggrresults) {
                assert.equal(null, err);
                // this requires the created_at field to be of type [Date]
                Collection.aggregate([{
                    $project: {
                        year: { $year: "$created_at" },
                        month: { $month: "$created_at" },
                        day: { $dayOfMonth: "$created_at" },
                        hour: { $hour: "$created_at" },
                        minutes: { $minute: "$created_at" },
                        seconds: { $second: "$created_at" },
                        milliseconds: { $millisecond: "$created_at" },
                        dayOfYear: { $dayOfYear: "$created_at" },
                        dayOfWeek: { $dayOfWeek: "$created_at" }
                    }
                },
                    {
                        $group:
                        { _id: "$minutes", count: { $sum: 1 } }
                    },
                    { $sort: { _id: 1 } }]).toArray(function (err, timeresults) {
                        console.log(err);
                        assert.equal(null, err);

                        aggrResults["polarity"] = polarityaggrresults;
                        aggrResults["devices"] = devicesaggrresults;
                        aggrResults["lang"] = langaggrresults;
                        aggrResults["timeSeries"] = timeresults;
                        //send the data to callback
                        cb(aggrResults);
                    });//time series




            });//lang

        });//devices

    });//polarityaggr
}//aggregateFnc


module.exports = aggregateFnc;