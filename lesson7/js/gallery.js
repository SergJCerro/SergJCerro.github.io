  /*const days = [
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
  var datumein = localStorage.date;
  var datumzwei = new Date();
  
  var einsTagen = 1000 * 60 * 60 * 24;
  //var date1 = new Date(datumein);
  //var date2 = new Date(datumzwei);
  var subtraction = datumein - datumzwei;
  var result = Math.round(subtraction / einsTagen );
  document.querySelector('#figure').textContent = `Days Since Last Visit  ${result} days.`; 
  console.log(result);
  

  if (typeof Storage !== "undefined") {
    if (localStorage.visit) {
      document.querySelector("#day").textContent =
        "Welcome back, you've been here " +
        localStorage.visit +
        " times before.";
      localStorage.visit = Number(localStorage.visit) + 1;
    } else {
      localStorage.visit = 1;
      document.querySelector("#day").textContent =
        "This is your first time here! Welcome.";
    }
  }
  */
 // One day Time in ms (milliseconds)
 const one_day = 1000 * 60 * 60 * 24
  
 // To set present_dates to two variables
 const visit_date = localStorage.Date;
   
 // 0-11 is Month in JavaScript
 const present_day = new Date()
   
   
 // To Calculate the result in milliseconds and then converting into days
 const Result = Math.round(present_day.getTime() - present_day.getTime()) / (one_day);
   
 const Final_Result = Result.toFixed(0);
   
 //To display the final_result value
 document.querySelector('#display').textContent="Your Last Visit was " 
                 
                + Final_Result +" Days ago";