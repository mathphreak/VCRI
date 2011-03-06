var headID = document.getElementsByTagName("head")[0];         
var newScript = document.createElement('script');
newScript.type = 'text/javascript';
newScript.src = 'http://mathphreak.github.com/VCRI/vcri.js?crap=' + Math.random();
headID.appendChild(newScript);

if (document.URL.match(/tracks\/\d+/) || document.URL.match(/tracks\/random/)) { // we're playing something
	var both = $('h1 a[href^="tracks/"]');
	var thumbsDown = both.first();
	var thumbsUp = both.last();

	var downUrl = thumbsDown.attr("href");
	thumbsDown.attr("href", "javascript:vote('" + downUrl + "', 'Voted down.');");
	var upUrl = thumbsUp.attr("href");
	thumbsUp.attr("href", "javascript:vote('" + upUrl + "', 'Voted up.');");
}

var navMenu = $("#menu");
var randomTrack = $("a[href^='tracks/random']");
randomTrack.attr("href", "javascript:showRandomMenu();");