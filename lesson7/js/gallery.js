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
  
  /* window.localStorage.date = `${iDatum.getDate()} ${tagNamen} ${jahr}`; 
  var datumein = localStorage.date;
  var datumzwei = new Date();
  
  var einsTagen = 1000 * 60 * 60 * 24;
  //var date1 = new Date(datumein);
  //var date2 = new Date(datumzwei);
  var subtraction = datumein - datumzwei;
  var result = Math.round(subtraction / einsTagen );
  document.querySelector('#figure').textContent = `Days Since Last Visit  ${result} days.`; 
  console.log(result);*/
  

  if (typeof Storage !== "undefined") {
    if (localStorage.visit) {
      document.querySelector("#figure").textContent =
        "Welcome back, you've been here " +
        localStorage.visit +
        " times before.";
      localStorage.visit = Number(localStorage.visit) + 1;
    } else {
      localStorage.visit = 1;
      document.querySelector("#figure").textContent =
        "This is your first time here! Welcome 🎉";
    }
  }
 
  const besuchsdatum = iDatum;
      localStorage.setItem("Datum_Besuch", besuchsdatum);
    
      const einTagen = 1000 * 60 * 60 *24;
      const ersterbesuch = new Date(localStorage.getItem("Datum_Besuch"));
      const besuchsdauer  = iDatum - ersterbesuch; 
      const tagSeit = besuchsdauer / einTagen ;
      let botschaft = 0;
      if (tagSeit <= 1){ 
        botschaft = "You Visited Sunshine View🌅 Today ";
      } else {
       botschaft = tagSeit.toFixed(0);
      }
      document.querySelector("#day").textContent = botschaft;