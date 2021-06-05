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

if (typeof Storage !== "undefined") {
  if (localStorage.visits) {
    document.querySelector("#figure").textContent =
      "Welcome back, you've been here " +
      localStorage.visits +
      " times before 👀";
    localStorage.visits = Number(localStorage.visits) + 1;
  } else {
    localStorage.visits = 1;
    document.querySelector("#figure").textContent =
      "This is your first time here! Welcome 🎉";
  }
}

const besuchsdatum = iDatum;
localStorage.setItem("Datum_Besuch", besuchsdatum);

const einTagen = 1000 * 60 * 60 * 24;
const ersterbesuch = new Date(localStorage.getItem("Datum_Besuch"));
const besuchsdauer = (iDatum - ersterbesuch) / einTagen;
const tagSeit = besuchsdauer.toFixed(0);
let botschaft = 0;
if (tagSeit <= 1) {
  botschaft = "You Visited Sunshine View🌅 Today ";
} else {
  botschaft = tagSeit;
}
document.querySelector("#day").textContent = botschaft;
