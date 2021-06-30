const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

  const iDatum = new Date(); //Startet
  const zeit = iDatum - new Date(localStorage.lastVisitDate);
  const einTagen = 1000 * 60 * 60 * 24; //Tagen
  const minuten = 60 * 1000; //Minuten
  const zuletzt_besucht = Math.floor( zeit / einTagen);
 // const letzte = Math.floor(localStorage.duration / minuten);
 var botschaft;
  if (typeof Storage !== "undefined") {
    if (localStorage.visits && !isNaN(localStorage.lastVisitDate)) {
      botschaft = "Your Last Visit was " + zuletzt_besucht + " day(s) ago ," ;
    } else{
      localStorage.vistcount = 1 ;
      localStorage.duration = 0;
      localStorage.lastVisitDate= iDatum;
      botschaft= "You are New to Here";
    }
    document.querySelector('#day').textContent = botschaft;
  }



if (typeof Storage !== "undefined") {
  if (localStorage.visits) {
    document.querySelector("#figure").textContent =
      "You've been here for " +
      localStorage.visits +
      " times now👀";
    localStorage.visits = Number(localStorage.visits) + 1;
  } else {
    localStorage.visits = 1;
    document.querySelector("#figure").textContent =
      "This is your first time here! Welcome 🎉";
  }
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  cvalue = JSON.stringify({
    username: cvalue,
    visited: true,
    visitedOn: d.getTime(),
  });
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      var c = c.substring(name.length, c.length);
      return JSON.parse(c);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");

  if (user.visited) {
    document.querySelector("#time").textContent =
      "Welcome again " +
      user.username +
      " Your Last visit was  at " +
      new Date(user.visitedOn).toTimeString();
    setCookie("username", user.username, 365);
  } else {
    username = prompt("Please enter your name:", "");
    if (username != null && username != "") {
      setCookie("username", username, 365);
    }
  }
}

checkCookie();
