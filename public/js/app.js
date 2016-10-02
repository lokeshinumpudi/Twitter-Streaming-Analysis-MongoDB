$(function () {


	function setCurrentSelectedtopic(text) {
		document.getElementById("selected-topic-for-metrics").innerText = text;
		// loadingclass(true);
	}

	function loadingclass(bool) {
		if (bool) {
			document.getElementById("setCurrentSelectedtopic").classList.remove("hide");
		} else {
			document.getElementById("setCurrentSelectedtopic").classList.add("hide");
		}
	}


	var StaticData = {
		"amazon": {
			"lang": {
				"ar": "12",
				"bg": "0",
				"bn": "3",
				"ba": "49",
				"da": "0",
				"de": "537",
				"el": "2",
				"en": "37551",
				"es": "1220",
				"et": "42",
				"fa": "2",
				"fi": "9",
				"fr": "293",
				"gu": "0",
				"hi": "2",
				"ht": "139",
				"hu": "4",
				"hy": "0",
				"in": "133",
				"is": "0",
				"it": "596",
				"iw": "1",
				"ja": "14406",
				"kn": "0",
				"ko": "2",
				"lt": "15",
				"lv": "2",
				"ml": "0",
				"nl": "43",
				"no": "50",
				"pl": "24",
				"pt": "121",
				"ru": "6",
				"sl": "13",
				"sv": "13",
				"ta": "0",
				"th": "3",
				"te": "0",
				"tl": "39",
				"tr": "25",
				"uk": "2",
				"und": "1506",
				"vi": "2",
				"zh": "15"
			},
			"sources": {
				"amazonLab": "80",
				"BufferApp": "311",
				"Twitter/Android": "1718",
				"Twitter/Iphone": "2290",
				"Twitter.com": "18016",
				"Twitbot": "1484",
				"Twitterfeed": "2396",
				"Mobile.twitter.com": "884",
				"Facebook.com/twitter": "357",
				"ebayrt.co": "368",
				"Feed140.net": "129",
				"Google": "180",
				"dlver.it": "12146",
				"IFTTT": "2053",
				"Instagram": "264",
				"Linkis": "269",
				"HootSuite": "1512",
				"SocialOoph": "354",
				"SudoCart": "1739",
				"RoundTeam.co": "668"
			},
			"polarity": {
				"negative": "4518",
				"neutral": "17804",
				"positive": "34558"
			}
		},
		"android": {
			"lang": {
				"ar": "14",
				"bg": "0",
				"bn": "4",
				"ba": "0",
				"da": "70",
				"de": "134",
				"el": "10",
				"en": "86908",
				"es": "866",
				"et": "52",
				"fa": "2",
				"fi": "20",
				"fr": "994",
				"gu": "8",
				"hi": "62",
				"ht": "122",
				"hu": "6",
				"hy": "0",
				"in": "130",
				"is": "4",
				"it": "92",
				"iw": "0",
				"ja": "3666",
				"kn": "2",
				"ko": "0",
				"lt": "8",
				"lv": "16",
				"ml": "0",
				"nl": "100",
				"no": "36",
				"pl": "88",
				"pt": "142",
				"ru": "4",
				"sl": "2",
				"sv": "34",
				"ta": "4",
				"th": "0",
				"te": "6",
				"tl": "96",
				"tr": "22",
				"uk": "0",
				"und": "7835",
				"vi": "0",
				"zh": "6"
			},
			"sources": {
				"bit.ly": "1188",
				"Bufferapp": "536",
				"citeco.net": "670",
				"dlvr.it": "1440",
				"IFTTT": "16298",
				"Linkis": "548",
				"Publicize.wp": "472",
				"Radionomy": "470",
				"Twitter.com": "22450",
				"Twitter/Android": "5822",
				"Twitter/Iphone": "818",
				"Twitter/Ipad": "120",
				"Twitterfeed": "2116",
				"Facebook.com/twitter": "426",
				"gameinsight.com": "18184",
				"Google": "970",
				"Digitalstonwindow.com": "222",
				"Instagram": "172",
				"Leadstories.com": "202",
				"Mobile.twitter.com": "360"
			},
			"polarity": {
				"negative": "11429",
				"neutral": "30178",
				"positive": "59944"
			}
		},
		"iphone6": {
			"lang": {
				"ar": "53",
				"bg": "1",
				"bn": "0",
				"ba": "0",
				"da": "14",
				"de": "164",
				"el": "2",
				"en": "11530",
				"es": "465",
				"et": "18",
				"fa": "0",
				"fi": "6",
				"fr": "199",
				"gu": "0",
				"hi": "10",
				"ht": "6",
				"hu": "12",
				"hy": "0",
				"in": "104",
				"is": "4",
				"it": "163",
				"iw": "0",
				"ja": "8637",
				"kn": "0",
				"ko": "47",
				"lt": "9",
				"lv": "4",
				"ml": "0",
				"nl": "31",
				"no": "10",
				"pl": "28",
				"pt": "121",
				"ru": "92",
				"sl": "1",
				"sv": "11",
				"ta": "0",
				"th": "21",
				"te": "0",
				"tl": "33",
				"tr": "39",
				"uk": "17",
				"und": "2400",
				"vi": "4",
				"zh": "27"
			},
			"sources": {
				"Bufferapp": "238",
				"Twiiter/Android": "624",
				"Twitter/Iphone": "1952",
				"Twitter.com": "4315",
				"Twitbot": "781",
				"Twitter/Ipad": "278",
				"Twitterfeed": "2689",
				"Mobile.twitter.com": "300",
				"Facebook/twitter": "207",
				"Google": "117",
				"dlvr.it": "280",
				"IFTTT": "3803",
				"Instagram": "1465",
				"HootSuite": "348",
				"RoundTeam": "45",
				"Twibble.io": "92",
				"Crowy.net": "296",
				"CodingOnlineDrom": "503",
				"LearnSwift": "577",
				"TweetDeck": "370",
				"iPhoneRTPro": "303"
			},
			"polarity": {
				"negative": "2475",
				"neutral": "11871",
				"positive": "9937"
			}
		}
		,
		"obama": {
			"lang": {
				"ar": "60",
				"bg": "0",
				"bn": "1",
				"ba": "0",
				"da": "8",
				"de": "316",
				"el": "3",
				"en": "29787",
				"es": "1417",
				"et": "18",
				"fa": "4",
				"fi": "19",
				"fr": "745",
				"gu": "2",
				"hi": "47",
				"ht": "15",
				"hu": "4",
				"hy": "1",
				"in": "119",
				"is": "0",
				"it": "305",
				"iw": "0",
				"ja": "893",
				"kn": "1",
				"ko": "2",
				"lt": "9",
				"lv": "7",
				"ml": "2",
				"nl": "76",
				"no": "9",
				"pl": "30",
				"pt": "98",
				"ru": "26",
				"sl": "2",
				"sv": "7",
				"ta": "5",
				"th": "1",
				"te": "3",
				"tl": "56",
				"tr": "143",
				"uk": "4",
				"und": "1674",
				"vi": "2",
				"zh": "7"
			},
			"sources": {
				"dlvrt.it": "750",
				"Bufferapp": "182",
				"fanatdecal": "489",
				"Twitter.com": "10797",
				"Twitbott": "781",
				"Twitter/Ipad": "1223",
				"Twitter/Android": "4092",
				"Twitter/Iphone": "4747",
				"Twitterfeed": "768",
				"Crowy.net": "296",
				"Facebook.com/Twitter": "207",
				"HootSuite": "398",
				"Linkis": "534",
				"Mobile.twitter": "868",
				"nyc.epeak": "617",
				"patriotjournalist": "252",
				"publicize.wp": "534",
				"1stheadlines.com": "206",
				"poliotdecal.com": "266",
				"newsinn.org": "125"
			},
			"polarity": {
				"negative": "13211",
				"neutral": "9685",
				"positive": "12846"
			}
		},

	};

	var cacheTweets = {};

	var currentSelectedTopic;

	// select  a source something by default

	RenderCharts(StaticData["obama"], true);
	currentSelectedTopic = "obama";

	var StaticContainer = $(".static-container");

	var statickeys = Object.keys(StaticData);
	statickeys.forEach(function (data) {
		var btn = $('<button class="btn btn-default"></button>');
		btn.click(handleStaticClick);
		btn.text(data);
		StaticContainer.append(btn);
	});


	function handleStaticClick(e) {
		// remove if any active class on realtime searched topics
		removeActiveClass();
		var clickedText = $(e.target).text();
		currentSelectedTopic = clickedText;
		var data = StaticData[clickedText];
		RenderCharts(data, true);
	}

	// toggle credits 

	var isCreditsActive = false;
	$("#credits-btn").click(function () {

		if (isCreditsActive) {
			$("#credits-charts").empty();
			isCreditsActive = !isCreditsActive;
			return;
		}
		// clear the div before adding the svg
		$("#credits-charts").empty();
		var finalData = { "content": [{ label: "Chaithanya pramodh", value: 1 }, { label: "Lokesh Chandra", value: 1 }, { label: "Ranjith Singh", value: 1, }] };
		var config = {
			"header": {
				"title": {
					"text": "",
					"fontSize": 36,
					"font": "courier",
					"color": "#3f51b5"
				},
				"subtitle": {
					"text": "On twitter",
					"color": "#1597d7",
					"fontSize": 19,
					"font": "courier"
				},
				"location": "pie-center",
				"titleSubtitlePadding": 10
			},
			"footer": {
				"text": "* others include the various other small sources altogether",
				"color": "#999999",
				"fontSize": 12,
				"font": "open sans",
				"location": "bottom-right"
			},
			"size": {
				"canvasHeight": 520,
				"canvasWidth": 930,
				"pieInnerRadius": "67%",
				"pieOuterRadius": "90%"
			},
			"data": {
			},
			"labels": {
				"outer": {
					"format": "label-value1",
					"pieDistance": 49
				},
				"inner": {
					"hideWhenLessThanPercentage": 1
				},
				"mainLabel": {
					"color": "#060000",
					"fontSize": 11
				},
				"percentage": {
					"color": "#0e0000",
					"fontSize": 11,
					"decimalPlaces": 1
				},
				"value": {
					"color": "#ee0598",
					"fontSize": 11
				},
				"lines": {
					"enabled": true,
					"style": "straight"
				},
				"truncation": {
					"enabled": true
				}
			},
			"tooltips": {
				"enabled": true,
				"type": "placeholder",
				"string": "{label}: {value}, {percentage}%",
				"styles": {
					"color": "#ffffff",
					"fontSize": 15
				}
			},
			"effects": {
				"load": {
					"speed": 700
				},
				"pullOutSegmentOnClick": {
					"effect": "easeInOut",
					"speed": 250,
					"size": 25
				}
			},
			"misc": {
				"colors": {
					"segmentStroke": "#000000",
					segments: ["#03A9F4", "#E1f5fe", "#d3e5fc", "#81d4fa", "#4fc3f7", "#29B6f6", "#03A9F4", "#039be5", "#0288D1", "#0277BD", "01579B",
						"#80d8ff", "#40c4ff", "#00b0ff", "#0091ea", "#00acc1"]
				},
				"pieCenterOffset": {
					"x": 0
				}
			}
		};//config
		config.header.title.text = "A project By:"
		config.data = finalData;

		var source = document.getElementById("credits-charts");
		d3pie(source, config);
		isCreditsActive = !isCreditsActive;
	});

	var ApiEndPoint;
	if (location.hostname != "localhost") {
		ApiEndPoint = location.origin;
	} else {
		ApiEndPoint = "http://localhost:5000";
	}




	var topTopicsContainer = $("#topTopicContainer");
	// realtime search of topics

	$("form").submit(function (e) {
		e.preventDefault();
		$searchText = $("#searchfield").val().trim();
		currentSelectedTopic = $searchText;
		//show some loading status
		setCurrentSelectedtopic("Fetching latest tweets on "+ currentSelectedTopic + " and processing....");

		$.ajax({
			url: ApiEndPoint + "/search",
			method: "GET",
			data: { "searchText": $searchText }
		}).done(function (res) {
			// console.log(res);
			// create a button 
			var eachbtn = $("<a></a>");
			eachbtn.addClass("btn btn-default");
			eachbtn.attr("type", "button");
			eachbtn.attr("href", ApiEndPoint + "/collection/" + $searchText)
			eachbtn.addClass("TopTopicsBtns");
			eachbtn.text($searchText);
			topTopicsContainer.append(eachbtn);
			eachbtn.click(handleTopTopicBtnClick);

			res = JSON.parse(res);
			setCurrentSelectedtopic(currentSelectedTopic);
			RenderCharts(res, false);
		});
	});//form submit

	// get the names of availbale collections in db
	$.ajax({
		url: ApiEndPoint + "/getCollections",
		method: "GET",
	}).done(function (res) {
		res = JSON.parse(res);
		res.forEach(function (btndata) {
			var eachbtn = $("<a></a>");
			eachbtn.addClass("btn btn-default");
			eachbtn.attr("type", "button");
			eachbtn.attr("href", ApiEndPoint + "/collection/" + btndata.trim())
			eachbtn.addClass("TopTopicsBtns");
			eachbtn.text(btndata.trim());
			topTopicsContainer.append(eachbtn);
		});//forEach
		//add event listeners for buttons
		$(".TopTopicsBtns").click(handleTopTopicBtnClick);
	});//get collectionNames


	// handle tabs click

	// find tab buttons and add listeners on them
	var $tabs = $("#tabs button");
	Array.prototype.forEach.call($tabs, function (tab) {
		tab.addEventListener("click", handleTabClick);
	});
	// var sectionToTarget = tab.getAttribute("data-target");
	// var sectionTarget = document.getElementById(sectionToTarget);
	function handleTabClick(e) {
		//remove active class to other tabs
		Array.prototype.forEach.call($tabs, function (tab) {
			tab.classList.remove("active");
		});
		// now add active class to the current tab
		e.target.classList.add("active");
		// 
		if (e.target.getAttribute("data-target") == "tweets-section") {
			$("#tweets-section").removeClass("hide");
			$("#metrics-section").addClass("hide");
			return;
		}
		$("#tweets-section").addClass("hide");
		$("#metrics-section").removeClass("hide");
	}//handleTabClick




	$("#tweets-source-btn").click(function () {

		//check to see if we have any currentSelectedTopic
		//see if currentSelectedTopic is not in static topics
		if (currentSelectedTopic && currentSelectedTopic != null && !(currentSelectedTopic in StaticData) && !cacheTweets[currentSelectedTopic]) {
			//now fetch the tweets of th etopic
			$.ajax({
				url: ApiEndPoint + "/tweets/" + currentSelectedTopic,
				method: "GET"
			}).done(function (res) {
				res = JSON.parse(res);
				cacheTweets[currentSelectedTopic] = res;
				// console.log(res);
				renderTweets(res);
			});

		}//if checks

		// available in cache so dont htto request again
		if (currentSelectedTopic && currentSelectedTopic != null && cacheTweets[currentSelectedTopic]) {
			var tweets = cacheTweets[currentSelectedTopic];
			// console.log(tweets);
			renderTweets(tweets);
		}

	});
	// view source tweets button


	function renderTweets(tweets) {
		// before rendering clean up any earlier left overs
		var $tweetsSection = $("#tweets-section");
		$tweetsSection.empty();
		$tweetsSection.append($('<span class="label label-success">	Classified Positive</span>\
			<span class="label label-danger">	Classified Negative</span> '));
		Array.prototype.forEach.call(tweets, function (tweet) {
			var $template = $('<a id="tweet_link" target="blank" href="">\
		<div class="media">\
          <div class="media-body">\
            <h4 class="media-heading"><span id="time"></span></h4>\
            <p id="text"></p>\
         </div>\
       </div>\
	   </a>');
			// $template.find("#tweet-image").attr("src",tweet["entities"]["media"][0].media_url);
			var date = new Date(tweet.created_at);
			// console.log(date.day
			if (tweet.polarity == 2) {
				return;
			}
			$template.children().parent().attr("href", "https://twitter.com/" + tweet["user"]["id_str"] + "/status/" + tweet["id_str"]);
			$template.find("#time").text(date.getUTCDate() + "-" + (parseInt(date.getMonth(), 10) + 1) + "-" + date.getFullYear());
			$template.find("#text").text(tweet.text);
			if (tweet.polarity == 0) {
				$template.find(".media").addClass("negativeTweet");
			} else if (tweet.polarity == 4) {
				$template.find(".media").addClass("positiveTweet");
			}
			$("#tweets-section").append($template);
		});



	}//render tweets


	function removeActiveClass() {
		$(".TopTopicsBtns").each(function () {
			var currentBtn = $(this);
			currentBtn.removeClass("active");
		});
	}

	// when a given button is clicked we fetch the required aggr data of the respective buttons topic
	function handleTopTopicBtnClick(e) {
		e.preventDefault();
		var $clickedBtn = $(this);
		//remove active class for rest of the buttons
		removeActiveClass();
		$clickedBtn.addClass("active");
		//get the url and make a ajax call
		var btnUrl = $clickedBtn.attr("href");
		var urlsplit = btnUrl.split("/");
		currentSelectedTopic = urlsplit[urlsplit.length - 1];
		// now that a button is clicked lets trigger the tweet-section selected [so itll fetch the tweets]
		$("#tweets-source-btn").trigger("click");

		setCurrentSelectedtopic("Gathering tweets and metrics for  "+currentSelectedTopic+" ...");

		$.ajax({
			url: btnUrl,
			method: "GET",
		}).done(function (res) {
			res = JSON.parse(res);
			//render our charts
			setCurrentSelectedtopic(currentSelectedTopic);
			console.log("wtf")
			RenderCharts(res);
		});

	}//handleTopTopicBtnClick




	function RenderCharts(data, isStatic) {
		// polarity
		// console.log(data);

		// static means [pre collected and analysed tweets ;ex amazon,android,iphone,obama]
		if (isStatic) {
			// console.log("static");
			var polarityData = getStaticPolarity(data);
			// console.log(polarityData);
			//remove any elements previously in polarity space
			$(".polarity").empty();
			drawPolarityDashboard(".polarity", polarityData);
			$(".source").empty();
			drawStaticSourceDashboard(data);

			// var canvasEle = $('<canvas id="lang" width="400" height="370"></canvas>');
			// 		canvasEle.appendTo($(".lang"));
			// 		var langContainer = $("#lang").get(0).getContext("2d");
			var Bardata = getStaticBarData(data);
			// console.log(Bardata);
			//clear previous bar complain
			$(".lang").empty();
			var canvasEle = $('<canvas id="lang" width="400" height="370"></canvas>');
			canvasEle.appendTo($(".lang"));
			var langContainer = $("#lang").get(0).getContext("2d");
			var nutChart = new Chart(langContainer, {
				type: "doughnut",
				data: Bardata,
			});
			return;
		}//end of static charts


		//End of static charts


		// only for non static data graphs
		var polarityData = getPolarityData(data["polarity"], data["name"]);
		//remove any elements previously in polarity space
		$(".polarity").empty();
		drawPolarityDashboard(".polarity", polarityData);
		$(".source").empty();
		drawSourceDashboard(data["devices"], data["name"]);

		// var canvasEle = $('<canvas id="lang" width="400" height="370"></canvas>');
		// 		canvasEle.appendTo($(".lang"));
		// 		var langContainer = $("#lang").get(0).getContext("2d");
		var Bardata = getBarData(data["lang"]);
		// console.log(Bardata);
		//clear previous bar complain
		$(".lang").empty();
		var canvasEle = $('<canvas id="lang" width="400" height="370"></canvas>');
		canvasEle.appendTo($(".lang"));
		var langContainer = $("#lang").get(0).getContext("2d");
		var nutChart = new Chart(langContainer, {
			type: "doughnut",
			data: Bardata,
		});

		//render time series
		$(".time-series").empty();
		var canvasEle = $('<canvas id="time-series" width="400" height="370"></canvas>');
		canvasEle.appendTo($(".time-series"));
		var timeContainer = $("#time-series").get(0).getContext("2d");
		var barChart = new Chart(timeContainer, {
			type: "bar",
			data: { labels: ["0"], datasets: [{ label: "Tweet counts for each minute", data: [1] }] },
		});

		updatetimes(data["timeSeries"], barChart);
		function updatetimes(data, chart) {
			var time = 1500;

			data.forEach(function (eachtime) {

				var eachdata = eachtime;

				setTimeout(function () {
					barChart.data.labels.push(eachdata["_id"]);
					barChart.data.datasets[0].data.push(eachdata["count"]);
					// console.log(eachtime);
					barChart.update();
				}, time);
				time += 1500;
			});
		}

		// polarity end
	}//RenderCharts function

	// utilities

	// Static utilities

	function getStaticPolarity(data) {
		// data is polariy,devices,lang,timeseries

		// console.log(data["polarity"]);
		var returnSeries = [{ state: "Sentiment", freq: {} }];

		returnSeries[0]["freq"]["neutral"] = parseInt(data["polarity"]["neutral"], 10);
		returnSeries[0]["freq"]["positive"] = parseInt(data["polarity"]["positive"], 10);
		returnSeries[0]["freq"]["negative"] = parseInt(data["polarity"]["negative"], 10);

		// data["polarity"].forEach(function (eachdata) {
		// 	switch (eachdata["_id"]) {
		// 		case 0:
		// 			returnSeries[0]["freq"]["negative"] = eachdata["total"];
		// 			break;
		// 		case 2:
		// 			returnSeries[0]["freq"]["neutral"] = eachdata["total"];
		// 			break;
		// 		case 4:
		// 			returnSeries[0]["freq"]["positive"] = eachdata["total"];
		// 			break;
		// 	};
		// });//forEach

		return returnSeries;
	}//getStaticPolarity

	function getStaticBarData(data) {
		var labels = [];
		var datvalues = [];
		var langs = Object.keys(data.lang);

		langs.forEach(function (eachlang) {
			labels.push(eachlang);
			datvalues.push(data.lang[eachlang]);
		});
		var finaldata = {
			labels: labels, datasets: [{
				labels: "polarity", data: datvalues,
				backgroundColor: ["#2962ff", "#82b1ff", "#448aff", "#2979aff", "#ef5350", "#f443336", "#e53935", "#d32f2f", "#e65100", "#f57c00", "#ef6c00", "#fb8c00", "#ffa000", "#ffca28", "#ffc107", "#ffd300", "#ffa000", "#ffc107", "#b2ff59",
					"#76ff03", "#64dd17", "#c6ff00", "#aeea00", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#69f0ae", "#00e676", "#00c853", "#18ffff", "#00e5ff", "#00d8d4", "#e91e63", "#d81b60", "#c2185b", "#c2185b", "#ad1457", "#880e4f", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#00897b", "#00796b", "#00695c", "#004d40", "#ffff00", "#ffea00", "#ffd600", "#ffeb3b"],
				hoverBackgroundColor: []
			}]
		};
		// console.log(finaldata);
		return finaldata;

	}//Static lang
	// end
	function getBarData(data, name) {
		var labels = [];
		var datavalues = [];
		data.forEach(function (eachdata) {
			labels.push(eachdata["_id"]);
			datavalues.push(eachdata["total"]);
		});


		var finalData = {
			labels: labels, datasets: [{
				label: "AwesomeDAta", data: datavalues,

				backgroundColor: ["#ffeb3b", "#2962ff", "#82b1ff", "#448aff", "#2979aff", "#ef5350", "#f443336", "#e53935", "#d32f2f", "#e65100", "#f57c00", "#ef6c00", "#fb8c00", "#ffa000", "#ffca28", "#ffc107", "#ffd300", "#ffa000", "#ffc107", "#b2ff59",
					"#76ff03", "#64dd17", "#c6ff00", "#aeea00", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#69f0ae", "#00e676", "#00c853", "#18ffff", "#00e5ff", "#00d8d4", "#e91e63", "#d81b60", "#c2185b", "#c2185b", "#ad1457", "#880e4f", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1", "#00897b", "#00796b", "#00695c", "#004d40", "#ffff00", "#ffea00", "#ffd600",],
				hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#1B4353", "#ECA400", "#5A2530", "#985F99"]
			}]
		};
		// console.log(finalData);
		return finalData;
	}

	//returns formatted polarity data
	function getPolarityData(data, name) {
		var returnSeries = [{ state: name, freq: {} }];
		//loop over polarity and seperate,rename th polarity based on values
		data.forEach(function (eachdata) {
			switch (eachdata["_id"]) {
				case 0:
					returnSeries[0]["freq"]["negative"] = eachdata["total"];
					break;
				case 2:
					returnSeries[0]["freq"]["neutral"] = eachdata["total"];
					break;
				case 4:
					returnSeries[0]["freq"]["positive"] = eachdata["total"];
					break;
			};
		});//forEach
		return returnSeries;

	}//getPolarityData


	function drawStaticSourceDashboard(data) {
		// console.log(data);


		var finalData = { "content": [] };
		var config = {
			"header": {
				"title": {
					"text": "",
					"fontSize": 36,
					"font": "courier",
					"color": "#3f51b5"
				},
				"subtitle": {
					"text": "Top  tweet sources",
					"color": "#1597d7",
					"fontSize": 19,
					"font": "courier"
				},
				"location": "pie-center",
				"titleSubtitlePadding": 10
			},
			"footer": {
				"text": "* others include the various other small sources altogether",
				"color": "#999999",
				"fontSize": 12,
				"font": "open sans",
				"location": "bottom-left"
			},
			"size": {
				"canvasHeight": 520,
				"canvasWidth": 930,
				"pieInnerRadius": "67%",
				"pieOuterRadius": "90%"
			},
			"data": {
			},
			"labels": {
				"outer": {
					"format": "label-value1",
					"pieDistance": 49
				},
				"inner": {
					"hideWhenLessThanPercentage": 1
				},
				"mainLabel": {
					"color": "#060000",
					"fontSize": 11
				},
				"percentage": {
					"color": "#0e0000",
					"fontSize": 11,
					"decimalPlaces": 1
				},
				"value": {
					"color": "#ee0598",
					"fontSize": 11
				},
				"lines": {
					"enabled": true,
					"style": "straight"
				},
				"truncation": {
					"enabled": true
				}
			},
			"tooltips": {
				"enabled": true,
				"type": "placeholder",
				"string": "{label}: {value}, {percentage}%",
				"styles": {
					"color": "#ffffff",
					"fontSize": 15
				}
			},
			"effects": {
				"load": {
					"speed": 700
				},
				"pullOutSegmentOnClick": {
					"effect": "easeInOut",
					"speed": 250,
					"size": 25
				}
			},
			"misc": {
				"colors": {
					"segmentStroke": "#000000"
				},
				"pieCenterOffset": {
					"x": 0
				}
			}
		};//config
		var sources = Object.keys(data.sources);
		sources.forEach(function (sourcename) {
			finalData["content"].push({ label: sourcename, value: parseInt(data.sources[sourcename], 10) });
		});
		config.data = finalData;

		var source = document.getElementById("source");
		d3pie("source", config);
	}//drawStaticDashboard

	function drawSourceDashboard(data, name) {
		var finalData = { "content": [] };
		var sourceATagsToNames = {
			'<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>': "IPhone",
			'<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>': "Android",
			'<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>': "TweetDeck",
			'<a href="https://mobile.twitter.com" rel="nofollow">Mobile Web (M5)</a>': "Mobile Twitter client",
			'<a href="http://twitter.com/#!/download/ipad" rel="nofollow">Twitter for iPad</a>': "Twitter for Ipad",
			'<a href="http://www.twitter.com/download/windows" rel="nofollow">Twitter for Windows</a>': "Twitter For Windows",
			'<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>': "Twitter Web Client",

		}
		var config = {
			"header": {
				"title": {
					"text": "",
					"fontSize": 36,
					"font": "courier",
					"color": "#3f51b5"
				},
				"subtitle": {
					"text": "Top  tweet sources",
					"color": "#1597d7",
					"fontSize": 19,
					"font": "courier"
				},
				"location": "pie-center",
				"titleSubtitlePadding": 10
			},
			"footer": {
				"text": "* others include the various other small sources altogether",
				"color": "#999999",
				"fontSize": 12,
				"font": "open sans",
				"location": "bottom-right"
			},
			"size": {
				"canvasHeight": 520,
				"canvasWidth": 930,
				"pieInnerRadius": "67%",
				"pieOuterRadius": "90%"
			},
			"data": {
			},
			"labels": {
				"outer": {
					"format": "label-value1",
					"pieDistance": 49
				},
				"inner": {
					"hideWhenLessThanPercentage": 1
				},
				"mainLabel": {
					"color": "#060000",
					"fontSize": 11
				},
				"percentage": {
					"color": "#0e0000",
					"fontSize": 11,
					"decimalPlaces": 1
				},
				"value": {
					"color": "#ee0598",
					"fontSize": 11
				},
				"lines": {
					"enabled": true,
					"style": "straight"
				},
				"truncation": {
					"enabled": true
				}
			},
			"tooltips": {
				"enabled": true,
				"type": "placeholder",
				"string": "{label}: {value}, {percentage}%",
				"styles": {
					"color": "#ffffff",
					"fontSize": 15
				}
			},
			"effects": {
				"load": {
					"speed": 700
				},
				"pullOutSegmentOnClick": {
					"effect": "easeInOut",
					"speed": 250,
					"size": 25
				}
			},
			"misc": {
				"colors": {
					"segmentStroke": "#000000",
					segments: ["#03A9F4", "#E1f5fe", "#d3e5fc", "#81d4fa", "#4fc3f7", "#29B6f6", "#03A9F4", "#039be5", "#0288D1", "#0277BD", "01579B",
						"#80d8ff", "#40c4ff", "#00b0ff", "#0091ea", "#00acc1"]
				},
				"pieCenterOffset": {
					"x": 0
				}
			}
		};//config

		config.header["title"].text = name;
		data.forEach(function (eachsource) {
			var eachclient = sourceATagsToNames[eachsource["_id"]];
			if (eachclient) {
				finalData["content"].push({ label: eachclient, value: eachsource["total"] });
			}
		});
		config.data = finalData;
		var sourcePie = d3pie("source", config);
		//now use finalData to render the charts


	}//sourcedashboard



	// utilities end



});//init function
