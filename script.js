const date = new Date();
const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
document.querySelector(
       "#currentdate"
     ).innerHTML = new Date().toLocaleDateString("en-us", options);
document.querySelector("#Year").innerHTML = date.getFullYear();
 document.querySelector("#Lastupdate").innerHTML = document.lastModified;