function log() {
    setTimeout(console.log.bind(console, "%c Sergio J Cerritos %c", "background-color:  #90d5ec;background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);padding:5px;border-radius: 5px;line-height: 26px;", ""));
    console.log("Hello, This Was Created by");
  }


  log();
  function change() {
    var time = new Date().getHours();
    var body = document.body;
    var bstyle = body.style;
    if (time > 5 && time < 9) {
      bstyle.backgroundColor = "#f6d365";
      bstyle.backgroundImage =
        "linear-gradient(to right, rgba(246, 211, 101, 0.5), rgba(253, 160, 133, 0.5))";
    } else if (time > 10 && time < 19) {
      bstyle.backgroundColor = "#fa709a";
      bstyle.backgroundImage =
        "linear-gradient(to right, rgba(250, 112, 154, 0.5), rgba(254, 225, 64, 0.5))";
    } else {
      bstyle.backgroundColor = "#4B79A1";
      bstyle.backgroundColor =
        "-webkit-gradient(linear, left bottom, left top, from(#283E51), to(#0A2342))";
      bstyle.backgroundImage =
        "url('https://cdn.glitch.com/4710df49-ef60-4c99-a2a5-a2630ac50f5c%2Fstars.png?v=1619905743243')";
    }
  }

  var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u274c");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please Enter a Scriputre");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u274c");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
