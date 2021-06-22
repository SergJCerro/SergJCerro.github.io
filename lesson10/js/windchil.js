

const temp = document.querySelector('#temp').innerHTML;
const windspeed = document.querySelector('#windspeed').innerHTML;


let windchills = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
  if (temp <= 50 && windspeed > 3) {
     windchills = Math.round(windchills);
  } else {
     windchills = "N/A";
  }
document.querySelector('#windchill').textContent = windchills;