// This is the hosted/injected VCRI code.

function vote(target, finishMsg, loopMode) {
	var social = document.getElementById('social');
	social.innerHTML = 'Voting...';
	var ajax = new XMLHttpRequest();
	ajax.open('GET', target, true);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			if (response.indexOf('You already voted for that track!') != -1) {
				social.innerHTML = 'You already voted for that track!';
			} else if (response.indexOf('Your vote has been refused') != -1) {
				social.innerHTML = 'Your vote has been refused.';
			} else {
				social.innerHTML = finishMsg;
			}
			if (loopMode) {
				setTimeout("randomPositive()", 1000);
			}
		}
	};
	ajax.send(null);
}

function randomPositive() {
	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://canvasrider.com/tracks/random', true);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			if (response.indexOf('class="green"') != -1) { // assume the only green thing is the voting score if it's green
				var i = response.indexOf('canvas_ride(') + 'canvas_ride('.length;
				var j = response.indexOf(')', i);
				var s = response.substring(i, j);
				window.location.assign('http://canvasrider.com/tracks/' + s);
			} else {
				randomPositive(); // try again if it's red
			}
		}
	};
	ajax.send(null);
};

function showRandomMenu() {
	var m = document.getElementById('menu');
	m.innerHTML += "<hr /><a href='javascript:randomPositive();'>Random positive track</a> / <a href='http://canvasrider.com/tracks/random'>Any random track</a>";
}

function loopToggle() {
	var loopMode = localStorage.getItem("loopMode");
	if (loopMode == null) loopMode = "disabled";
	if (loopMode == "disabled") {
		localStorage.setItem("loopMode", "enabled");
		randomPositive();
	} else if (loopMode == "enabled") {
		localStorage.setItem("loopMode", "disabled");
	}
}

function saveSettings(ajaxv, insertd, randomm, offerl, settlnk) {
	localStorage.setItem("settings-ajaxvoting", ajaxv);
	localStorage.setItem("settings-insertdown", insertd);
	localStorage.setItem("settings-randommenu", randomm);
	localStorage.setItem("settings-offerloop", offerl);
	localStorage.setItem("settings-showlink", settlnk);
}

function saveAllSettings() {
	var ajaxVote = document.getElementById("ajaxvoting").checked;
	var nsrtDown = document.getElementById("insertdown").checked;
	var rndmMenu = document.getElementById("randompwnd").checked;
	var offrLoop = document.getElementById("showloopon").checked;
	var settLink = document.getElementById("shwthislnk").checked;
	saveSettings(ajaxVote, nsrtDown, rndmMenu, offrLoop, settLink);
}

function loadSettings() {
	var ajaxVote = localStorage.getItem("settings-ajaxvoting");
	var nsrtDown = localStorage.getItem("settings-insertdown");
	var rndmMenu = localStorage.getItem("settings-randommenu");
	var offrLoop = localStorage.getItem("settings-offerloop");
	var settLink = localStorage.getItem("settings-showlink");
	document.getElementById("ajaxvoting").checked = (ajaxVote == "true");
	document.getElementById("insertdown").checked = (nsrtDown == "true");
	document.getElementById("randompwnd").checked = (rndmMenu == "true");
	document.getElementById("showloopon").checked = (offrLoop == "true");
	document.getElementById("shwthislnk").checked = (settLink == "true");
}

if (document.URL.indexOf("#settings") != -1) {
	loadSettings();
}