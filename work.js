var headID = document.getElementsByTagName("head")[0];         
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'http://mathphreak.github.com/VCRI/vcri.js?crap=' + Math.random();
headID.appendChild(newScript);

var loopMode = localStorage.getItem("loopMode");
if (loopMode == null) loopMode = "disabled";
if (loopMode == "enabled") {
	var loopIndication = $("<span style='float: right; padding-right: 30px;' id='loopMode'><a href='javascript:loopToggle();'>Loop mode is ON</a></span>");
} else {
	var loopIndication = $("<span style='float: right; padding-right: 30px;' id='loopMode'><a href='javascript:loopToggle();'>Loop mode is OFF</a></span>");
}
loopIndication.appendTo('#menu');

if (document.URL.match(/tracks\/\d+/) || document.URL.match(/tracks\/random/)) { // we're playing something
	var both = $('h1 a[href^="tracks/"]');
	var thumbsDown = both.first();
	var thumbsUp = both.last();
	
	thumbsDown.attr("onClick", "void();");
	if (thumbsUp.attr("onClick") == "void();") {
		// we don't have a thumbs down - stupid Canvas Rider!  probably we're on a featured track of some sort.
		// featured tracks get enough preferential treatment without being banned from down voting.
		thumbsDown = $("<a><img src='images/down.jpg' /></a>");
		score = $('span.green, span.red');
		thumbsDown.insertBefore(score);
		thumbsDown.attr("href", thumbsUp.attr("href").replace("up", "down"));
	}

	var truefalse;
	if (loopMode == "enabled") {
		truefalse = "true";
	} else {
		truefalse = "false";
	}
	var downUrl = thumbsDown.attr("href");
	thumbsDown.attr("href", "javascript:vote('" + downUrl + "', 'Voted down.', " + truefalse + ");");
	var upUrl = thumbsUp.attr("href");
	thumbsUp.attr("href", "javascript:vote('" + upUrl + "', 'Voted up.', " + truefalse + ");");
}

var navMenu = $("#menu");
var randomTrack = $("a[href^='tracks/random']");
randomTrack.attr("href", "javascript:showRandomMenu();");