function change() {
  var time = new Date().getHours();
  var body = document.body;
  var bstyle = body.style;
  if (time < 10) {
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

