/*const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?lat=17.25&lon=-88.1667&units=imperial&APPID=dfe0e85eddf4bfb77854617730ea1c0d";
//const apiURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=17.25&lon=-88.1667&exclude=hourly,daily&units=imperial&appid=dfe0e85eddf4bfb77854617730ea1c0d";
fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
       // console.log(jsObject);
        const forecastData = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));

        console.log(forecastData);

        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        let day = 0;
        forecastData.forEach(forecast => {
            let x = new Date(forecast.dt_txt);
            document.getElementById('feelslike' + (day +1)).textContent = forecast.main.feels_like + ' °F';
            document.getElementById('humidity' + (day +1)).textContent = forecast.main.humidity + ' %';
            document.getElementById('windspeed' +(day +1)).textContent = Math.round(forecast.wind.speed) +' mph';
            document.getElementById('temp' + (day + 1)).textContent = Math.round(forecast.main.temp) + ' °F';
            document.getElementById('img' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
            document.getElementById('img' + (day + 1)).alt = forecast.weather[0].description	;
            document.getElementById('day' + (day + 1)).textContent = weekdays[x.getDay()]; day++;
            document.getElementById('')
        });
    });*/
    const apiURL_forecasts = "https://api.openweathermap.org/data/2.5/forecast?lat=17.4995&lon=-88.1976&units=imperial&APPID=dfe0e85eddf4bfb77854617730ea1c0d";
//const apiURL1 = "https://api.openweathermap.org/data/2.5/onecall?lat=17.25&lon=-88.1667&exclude=hourly,daily&units=imperial&appid=dfe0e85eddf4bfb77854617730ea1c0d";
fetch(apiURL_forecasts)
    .then(response => response.json())
    .then((jsObject) => {
      //  console.log(jsObject);
        const forecastDatas = jsObject.list.filter((element) => element.dt_txt.includes('18:00:00'));

        console.log(forecastDatas);

        const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        let day = 0;
        forecastDatas.forEach(forecasts => {
            let x = new Date(forecasts.dt_txt);
            document.getElementById('feelslik' + (day +1)).textContent = forecasts.main.feels_like + ' °F';
            document.getElementById('humidit' + (day +1)).textContent = forecasts.main.humidity + ' %';
            document.getElementById('windspee' +(day +1)).textContent = Math.round(forecasts.wind.speed) +' mph';
            document.getElementById('tem' + (day + 1)).textContent = Math.round(forecasts.main.temp) + ' °F';
            document.getElementById('img0' + (day + 1)).src = "https://openweathermap.org/img/w/" + forecasts.weather[0].icon + ".png";
            document.getElementById('img0' + (day + 1)).alt = forecasts.weather[0].description	;
            document.getElementById('day1' + (day + 1)).textContent = weekdays[x.getDay()]; day++;
            
        });
    });
 
