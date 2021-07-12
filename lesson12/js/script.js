
function Menu() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
  }

  //Slider Js
  var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 6000);
 }

 //Event Json
 const eventApI = "https://sergjcerro.github.io./lesson12/event.json";
 fetch(eventApI)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
     document.getElementById("images").src = jsObject.Chamber_events[0].images;
     document.getElementById("name1").innerHTML = jsObject.Chamber_events[0].name;
     document.getElementById("day1").innerHTML= jsObject.Chamber_events[0].day;
     document.getElementById("month1").innerHTML = jsObject.Chamber_events[0].month;
     document.getElementById("images2").src = jsObject.Chamber_events[1].images;
     document.getElementById("name2").innerHTML = jsObject.Chamber_events[1].name;
     document.getElementById("day2").innerHTML= jsObject.Chamber_events[1].day;
     document.getElementById("month2").innerHTML = jsObject.Chamber_events[1].month;
     document.getElementById("images3").src = jsObject.Chamber_events[2].images;
     document.getElementById("name3").innerHTML = jsObject.Chamber_events[2].name;
     document.getElementById("day3").innerHTML= jsObject.Chamber_events[2].day;
     document.getElementById("month3").innerHTML = jsObject.Chamber_events[2].month;
     document.getElementById("images4").src = jsObject.Chamber_events[3].images;
     document.getElementById("name4").innerHTML = jsObject.Chamber_events[3].name;
     document.getElementById("day4").innerHTML= jsObject.Chamber_events[3].day;
     document.getElementById("month4").innerHTML = jsObject.Chamber_events[3].month;
     //News
     document.getElementById("imga").src = jsObject.chamber_news[0].image;
     document.getElementById("nam").innerHTML = jsObject.chamber_news[0].name;
     document.getElementById('des').innerHTML = jsObject.chamber_news[0].description;

     document.getElementById("imga2").src = jsObject.chamber_news[1].image;
     document.getElementById("nam1").innerHTML = jsObject.chamber_news[1].name;
     document.getElementById('des1').innerHTML = jsObject.chamber_news[1].description;

     document.getElementById("imga3").src = jsObject.chamber_news[2].image;
     document.getElementById("nam2").innerHTML = jsObject.chamber_news[2].name;
     document.getElementById('des2').innerHTML = jsObject.chamber_news[2].description;
    });
   