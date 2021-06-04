const day1 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month1 = [
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
var d = new Date();
var day = d.getDay();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var dateStr = day1[day] + ", " + date + " " + month1[month] + " " ;
document.querySelector("#Year").textContent = year;
document.querySelector("#LastUpdate").textContent = dateStr;
if (day1[day] == "Friday") {
  document.getElementById("announce").innerHTML =
    "Saturday = Preston Pancakes 🥞 in the Park!🏞️  9:00 a.m. Saturday at the city park pavilion.";
  document.getElementById("announce").style.display = "block";
} else if (day1[day] == "Saturday"){
  document.getElementById("announce").textContent = 
  "Preston Pancakes 🥞 in the Park!🏞️  9:00 a.m. Today At City Park Pavilion"
} else {
  document.getElementById("announce").style.display = "none";
}

function change() {
  var time = new Date().getHours();
  var body = document.body;
  var bstyle = body.style;
  if (time > 5 && time < 9) {
    bstyle.backgroundColor = "#f6d365";
    bstyle.backgroundImage =
      "linear-gradient(to right, rgba(246, 211, 101, 0.5), rgba(253, 160, 133, 0.5))";
  } else if (time > 10 && time < 19) {
    bstyle.backgroundColor = "#fa709a";
    bstyle.backgroundImage =
      "linear-gradient(to right, rgba(250, 112, 154, 0.5), rgba(254, 225, 64, 0.5))";
  } else {
    bstyle.backgroundColor = "#4B79A1";
    bstyle.backgroundColor =
      "-webkit-gradient(linear, left bottom, left top, from(#283E51), to(#0A2342))";
    bstyle.backgroundImage = "url('stars.png')";
  }
}

function Menu() {
  document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}


function log() {
  setTimeout(
    console.log.bind(
      console,
      "%c Sergio J Cerritos %c",
      "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
      ""
    )
  );
  console.log("Hello, This Was Created by");
}
log();
