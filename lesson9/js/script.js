function log() {
  setTimeout(
    console.log.bind(
      console,
      "%c Created by : Sergio J Cerritos %c",
      "background-color: #bdd4e7;background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);padding:5px;border-radius: 5px;line-height: 26px;",
      ""
    )
  );
}
log();
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
var dateStr = day1[day] + ", " + date + " " + month1[month] + " ";
document.querySelector("#Year").textContent = year;
document.querySelector("#LastUpdate").textContent = dateStr;
if (day1[day] == "Friday") {
  document.getElementById("announce").innerHTML =
    "Saturday = Preston Pancakes 🥞 in the Park!🏞️  9:00 a.m. Saturday at the city park pavilion.";
  document.getElementById("announce").style.display = "block";
} else if (day1[day] == "Saturday") {
  document.getElementById("announce").textContent =
    "Preston Pancakes 🥞 in the Park!🏞️  9:00 a.m. Today At City Park Pavilion";
} else {
  document.getElementById("announce").style.display = "none";
}

function Menu() {
  document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   towns.sort((a,b) => (a.averageRainfall > b.averageRainfall) ? 1 : ((b.averageRainfall > a.averageRainfall) ? -1 : 0));
   towns.reverse();
   for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
      let card = document.createElement('section');
      let name = document.createElement('h2');
      let motto = document.createElement('h3');
      let image = document.createElement('img');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let details = document.createElement('div');
      name.textContent = towns[i].name;
      motto.textContent = towns[i].motto;
      currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
      averageRainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall + ' ' + 'in.';
      yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
      //image.setAttribute('src', towns[i].photo); //Did not want to pull the imaages so i made my own way
      image.setAttribute('src','/lesson9/images/' + towns[i].photo); //Gets images with the name from line 70
      image.setAttribute('alt', towns[i].name);
      details.setAttribute('id', 'details');
      card.appendChild(details);
      card.appendChild(image);
      details.appendChild(name);
      details.appendChild(motto);
      details.appendChild(yearFounded);
      details.appendChild(currentPopulation);
      details.appendChild(averageRainfall);
      document.querySelector('div.cards').appendChild(card);
      }
   }
});
