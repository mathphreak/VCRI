var headID = document.getElementsByTagName("head")[0];         
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'http://mathphreak.github.com/VCRI/vcri.js?crap=' + Math.random();
headID.appendChild(newScript);

var useAJAXVote = localStorage.getItem("settings-ajaxvoting");
var useInsertDown = localStorage.getItem("settings-insertdown");
var useRandomPwnage = localStorage.getItem("settings-randommenu");
var useLoop = localStorage.getItem("settings-offerloop");
var useSettings = localStorage.getItem("settings-showlink");

if (document.URL.indexOf("#settings") != -1) {
	$("#content").html("<h1>SETTINGS</h1><hr /><table class='alignLeft' id='settings-table'></table><div style='display: none;' id='thumbnail'>keeping CanvasRider from completely dying - ignore this</a>");
	$("<tr><td><input type='checkbox' id='ajaxvoting' onchange='saveAllSettings()' /></td><td>AJAX (non-refresh) voting</td></tr>").appendTo("#settings-table");
	$("<tr><td><input type='checkbox' id='insertdown' onchange='saveAllSettings()' /></td><td>Insert thumbs-down for 'featured' tracks to preserve freedom of speech</td></tr>").appendTo("#settings-table");
	$("<tr><td><input type='checkbox' id='randompwnd' onchange='saveAllSettings()' /></td><td>Random menu (positive / apathetic)</td></tr>").appendTo("#settings-table");
	$("<tr><td><input type='checkbox' id='showloopon' onchange='saveAllSettings()' /></td><td>Offer loop mode (random positive track on voting)</td></tr>").appendTo("#settings-table");
	$("<tr><td><input type='checkbox' id='shwthislnk' onchange='saveAllSettings()' /></td><td>Show link to settings</td></tr>").appendTo("#settings-table");
	$("title").html($("title").html() + " - VCRI Settings");
}

if (useLoop == "true") {
	var loopMode = localStorage.getItem("loopMode");
	if (loopMode == null) loopMode = "disabled";
	if (loopMode == "enabled") {
		var loopIndication = $("<span style='float: right; padding-right: 30px;' id='loopMode'><a href='javascript:loopToggle();'>Loop mode is ON</a></span>");
	} else {
		var loopIndication = $("<span style='float: right; padding-right: 30px;' id='loopMode'><a href='javascript:loopToggle();'>Loop mode is OFF</a></span>");
	}
	loopIndication.appendTo('#menu');
}

if (useSettings == "true") {
	if (document.URL.indexOf("#settings") == -1) {
		var settingsLink = $("<span style='float: left; padding-left: 10px;' id='settingsLink'><a href='/#settings'>options</a></span>");
	} else {
		var settingsLink = $("<span style='float: left; padding-left: 10px;' id='settingsLink'>options</span>");
	}
	settingsLink.prependTo('#menu');
}

if ((document.URL.match(/tracks\/\d+/) || document.URL.match(/tracks\/random/)) && useAJAXVote == "true") { // we're playing something
	var both = $('h1 a[href^="tracks/"]');
	var thumbsDown = both.first();
	var thumbsUp = both.last();
	
	thumbsDown.attr("onClick", "void();");
	if (thumbsUp.attr("onClick") == "void();" && useInsertDown == "true") {
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

if (useRandomPwnage == "true") {
	var navMenu = $("#menu");
	var randomTrack = $("a[href^='tracks/random']");
	randomTrack.attr("href", "javascript:showRandomMenu();");
}