var both = $('h1 a[href^="tracks/"]');
var thumbsDown = both.first();
var thumbsUp = both.last();

var currurl = document.URL;
var tdAttr = "javascript:var h=new XMLHttpRequest();h.open('GET', '" + currurl + "/down', true);h.onreadystatechange=function(){if(h.readyState==4&&h.status==200){document.getElementById('social').innerHTML='Voted down.';}};h.send(null);"
thumbsDown.attr("href", tdAttr);
thumbsDown.attr("onClicked", tdAttr);
var tuAttr = "javascript:var h=new XMLHttpRequest();h.open('GET', '" + currurl + "/up', true);h.onreadystatechange=function(){if(h.readyState==4&&h.status==200){document.getElementById('social').innerHTML='Voted up.';}};h.send(null);"
thumbsUp.attr("href", tuAttr);
thumbsUp.attr("onClicked", tuAttr);