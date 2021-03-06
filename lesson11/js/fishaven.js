


function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
   }

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
  
  

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1";

fetch(apiURL)
.then((response) => response.json())
.then((town) => {
  console.log(town);
  let description = town.weather[0].description;
  document.getElementById('currently').innerHTML = description.charAt(0).toUpperCase() + description.slice(1);
  document.getElementById('temp').innerHTML = Math.round(town.main.temp);
  document.getElementById('humidity').innerHTML = town.main.humidity;
  document.getElementById('windspeed').innerHTML = Math.round(town.wind.speed);
});

// 5 day forecast

const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=da923bb8ec61575a7dfe5e3106bb43c1"

fetch(apiURL_forecast)
  .then(response => response.json())
  .then((jsObject) => {
      console.log(jsObject);
      const forecastData = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));

console.log(forecastData);

const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  let day = 0;
forecastData.forEach(forecast => {
  let x = new Date(forecast.dt_txt);
  document.getElementById('temp'+(day+1)).textContent = Math.round(forecast.main.temp) + ' °F';
  document.getElementById('img'+(day+1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
  document.getElementById('img'+(day+1)).alt = forecast.weather[0].description
document.getElementById('day'+(day+1)).textContent = weekdays[x.getDay()];
day++;	  
});
});

//Get town events section information
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
 .then(function (response) {
   return response.json();
 })
 .then(function (jsonObject) {
   const towns = jsonObject['towns'];
   for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven') {
      let events = towns[i].events;
      for (let i=0; i < events.length; i++) {
      let event = document.createElement('p');
      event.innerHTML = events[i];
      document.querySelector('.townEvents').appendChild(event);
      }
    }
   }
});