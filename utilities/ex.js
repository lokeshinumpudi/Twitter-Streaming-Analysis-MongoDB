db.ios.aggregate([{$project:{polarity:1,lang:1,source:1}}]);

// update a type of a field to all documents in a collections
tmpCol.find({ "created_at": { "$exists": true, "$type": 2 } }).forEach(function (doc) {
                            var newDate = new Date(doc.created_at);
                            bulkOps.push(
                                {
                                    "updateOne": {
                                        "filter": { "_id": doc._id },
                                        "update": { "$set": { "created_at": newDate } }
                                    }
                                }
                            );
                        });
                        tmpCol.bulkWrite(bulkOps, { "ordered": true });