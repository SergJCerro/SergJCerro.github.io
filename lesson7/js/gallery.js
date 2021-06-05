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

const iDatum = new Date();

if (typeof Storage !== "undefined") {
  if (localStorage.visits) {
    document.querySelector("#figure").textContent =
      "Welcome back, you've been here for " +
      localStorage.visits +
      " times now👀";
    localStorage.visits = Number(localStorage.visits) + 1;
  } else {
    localStorage.visits = 1;
    document.querySelector("#figure").textContent =
      "This is your first time here! Welcome 🎉";
  }
}

const besuchsdatum = iDatum;
localStorage.setItem("Datum_Besuch", besuchsdatum);

const einTagen = 1000 * 60 * 60 * 24;
const ersterbesuch = new Date(localStorage.getItem("Datum_Besuch"));
const besuchsdauer = Math.round(iDatum.getTime() - ersterbesuch.getTime()) / einTagen;
const tagSeit = besuchsdauer.toFixed(0);
let botschaft = 0;
if (tagSeit <= 1) {
  botschaft = "You Visited Sunshine View 🌅 Today ";
} else {
  botschaft = tagSeit;
}
document.querySelector("#day").textContent = botschaft;


function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    cvalue = JSON.stringify({username:cvalue,visited:true,visitedOn:d.getTime()});
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+ "=" + cvalue +"; " + expires;
    
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt (0)==' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          var c = c.substring(name.length, c.length);
          return JSON.parse(c);
  
      }
    }
    return "";
  }
  
  function checkCookie(){
    var user = getCookie("username");
  
    if (user.visited)
    {
      alert( "Welcome again " + user.username + " Your Last visit was  at " +  new Date(user.visitedOn).toTimeString() );
      setCookie("username",user.username,365); 

    }
    else
    {
      username=prompt("Please enter your name:","");
      if (username != null && username != "")
      {
          setCookie("username",username,365);
  
      }
    }
  }
  
  checkCookie();