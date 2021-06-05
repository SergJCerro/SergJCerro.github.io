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
  
  
  if (typeof Storage !== "undefined") {
    if (localStorage.visits) {
      document.querySelector("#day").textContent =
        "Welcome back, you've been here " +
        localStorage.visits +
        " times before.";
      localStorage.visits = Number(localStorage.visits) + 1;
    } else {
      localStorage.visits = 1;
      document.querySelector("#day").textContent =
        "This is your first time here! Welcome.";
    }
  }
  
  window.localStorage.date = `${d.getDate} ${month} ${year}`; 
  const datumein = localStorage.date;
  const datumzwei = new Date();
  
  const einsTagen = 1000 * 60 * 60 * 24;
  const date1 = new Date(datumein);
  const date2 = new Date(datumzwei);
  const subtraction = date1.getTime() - date2.getTime();
  const result = Math.round(subtraction / einsTagen);
  document.querySelector('#figure').textContent = `Days Since Last Visit  ${result} days.`; 
  