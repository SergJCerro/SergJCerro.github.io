//belize City
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=17.4995&lon=-88.1976&exclude=hourly,daily&units=imperial&appid=dfe0e85eddf4bfb77854617730ea1c0d"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let main = jsObject.current.weather[0].main;
        document.getElementById('currently1').innerHTML = main.charAt(0).toUpperCase() + main.slice(1);
        document.getElementById('feels_like1').innerHTML = jsObject.current.feels_like;
        document.getElementById('temperature1').innerHTML = jsObject.current.temp;
        document.getElementById('humidity1').innerHTML = jsObject.current.humidity;
        document.getElementById('windspeed1').innerHTML = Math.round(jsObject.current.wind_speed);
        document.getElementById('img1').src= "https://openweathermap.org/img/w/" + jsObject.current.weather[0].icon + ".png";
        document.getElementById('img1').alt = jsObject.current.weather[0].description;
    });
//Belize District
const apiURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=17.25&lon=-88.1667&exclude=hourly,daily&units=imperial&appid=dfe0e85eddf4bfb77854617730ea1c0d"
fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let main = jsObject.current.weather[0].main;
        document.getElementById('currently2').innerHTML = main.charAt(0).toUpperCase() + main.slice(1);
        document.getElementById('feels_like2').innerHTML = jsObject.current.feels_like;
        document.getElementById('temperature2').innerHTML = jsObject.current.temp;
        document.getElementById('humidity2').innerHTML = jsObject.current.humidity;
        document.getElementById('windspeed2').innerHTML = Math.round(jsObject.current.wind_speed);
        document.getElementById('img2').src= "https://openweathermap.org/img/w/" + jsObject.current.weather[0].icon + ".png";
        document.getElementById('img2').alt = jsObject.current.weather[0].description;
    });
//Belize in a whole
const apiURL2 = "https://api.openweathermap.org/data/2.5/onecall?lat=17.25&lon=-88.75&exclude=hourly,daily&units=imperial&appid=dfe0e85eddf4bfb77854617730ea1c0d"
fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let main = jsObject.current.weather[0].main;
        document.getElementById('currently').innerHTML = main.charAt(0).toUpperCase() + main.slice(1);
        document.getElementById('feels_like').innerHTML = jsObject.current.feels_like;
        document.getElementById('temperature').innerHTML = jsObject.current.temp;
        document.getElementById('humidity').innerHTML = jsObject.current.humidity;
        document.getElementById('windspeed').innerHTML = Math.round(jsObject.current.wind_speed);
        document.getElementById('img').src= "https://openweathermap.org/img/w/" + jsObject.current.weather[0].icon + ".png";
        document.getElementById('img').alt = jsObject.current.weather[0].description;
    });