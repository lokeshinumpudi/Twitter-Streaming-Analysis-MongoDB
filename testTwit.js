var twitterkeys = require("./config/twitter-config.js");

var  Twit = require("twit");



var T = new Twit({
    consumer_key: twitterkeys.consumer_key,
    consumer_secret: twitterkeys.consumer_secret,
    access_token: twitterkeys.access_token,
    access_token_secret: twitterkeys.access_token_secret,
    timeout_ms: 60 * 1000,
});



 var stream = T.stream("statuses/filter", { track: ["taylor swift"] });


console.log(stream);

 stream.on("tweet",function (data) {
     

     console.log(data);
 })