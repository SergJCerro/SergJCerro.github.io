const listLI = document.querySelector('ul');
const addItemInput = document.querySelector('input');
const addItemButton = document.querySelector('button');
const lis = listLI.children;

function attachListItemButtons(li) {
  /*let up = document.createElement('button');
  up.className = 'upButton';
  up.textContent = 'Up';
  li.appendChild(up);
  let down = document.createElement('button');
  down.className = 'downButton';
  down.textContent = 'Down';
  li.appendChild(down);*/
  let remove = document.createElement('button');
  remove.className = 'removeButton';
  remove.textContent = '❌';
  li.appendChild(remove);
}
for(let i=0; i<lis.length; i+=1) {
  attachListItemButtons(lis[i]);
}
// adds a new item on the To Do List
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
 ul.appendChild(li);
 if (addItemInput.value === ''){
   alert("Please enter a Scripture");
 }
  addItemInput.value = '';
});
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// clicking the buttons

listLI.addEventListener('click', (event) => {
  if(event.target.tagName == 'BUTTON'){
    if (event.target.className == 'removeButton') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } 
    if (event.target.className == 'upButton') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) { ul.insertBefore(li, prevLi); }
    }
    if (event.target.className == 'downButton') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) { ul.insertBefore(nextLi, li); }
    }
  }
});

//Adding of touch of my Style





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
      "url('stars.png')";
  }
}
function log() {
  setTimeout(console.log.bind(console, "%c Sergio J Cerritos %c", "background-color:  #90d5ec;background-image: linear-gradient(315deg, #90d5ec 0%, #fc575e 74%);padding:5px;border-radius: 5px;line-height: 26px;", ""));
  console.log("Hello, This Was Created by");
}


log();