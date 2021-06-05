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
  const st = document.lastModified;
  const tagNamen= days[iDatum.getDay()];
  const monatNamen = months[iDatum.getMonth()];
  const jahr = iDatum.getFullYear();
  
  
  window.localStorage.date = `${iDatum.getDate()} ${tagNamen} ${jahr}`; 
  const datumein = localStorage.date;
  const datumzwei = new Date();
  
  const einsTagen = 1000 * 60 * 60 * 24;
  const date1 = new Date(datumein);
  const date2 = new Date(datumzwei);
  const subtraction = date1.getTime() - date2.getTime();
  const result = Math.round(subtraction / einsTagen);
  document.querySelector('#figure').textContent = `Days Since Last Visit  ${result} days.`; 
  

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