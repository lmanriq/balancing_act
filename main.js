// Attempt 1
// document.onclick = function() {
//   document.getElementById('welcome').classname = "hidden";
// }


// Attempt 2
// document.querySelector("#x").addEventListener("click", hide);
//
// function hide () {
//   var name = document.getElementById("welcome");
//   name.classname = "hidden";
// }

// Attempt 3


// var welcome = document.getElementById('welcome');
var x = document.getElementById('x');

function hide(banner) {
  var item = document.getElementById(banner);
  item.style.display = 'none';
}

x.addEventListener('click', function () {hide('welcome')});

var person = prompt("What is your name?", "Buttercup");

if (person != null) {
  document.getElementById("message").innerHTML =
  "Welcome, " + person + "!";
};

// var icons = document.getElementsByClassName('icon');
// // var dashIcon = icons[0];
// // var transactionIcon = icons[1];
// // var profileIcon = icons[2];
//
// console.log(icons[1]);
//
// var tealBorderLeft = '2px solid #1CA3BA';
//
// icons[1].addEventListener('click', '')
//
//
// for (var i = 0; i < icons.length; i++) {
//   if (icons[i].style.borderLeft === tealBorderLeft) {
//     icons[i].addEventListener('click', () => {
//     icons[i].style.borderLeft = 'none';
//   })} else {
//     icons[i].addEventListener('click', () => {
//     icons[i].style.borderLeft = tealBorderLeft;
//   })}
// };


// if (dashIcon.style.borderLeft === tealBorderLeft) {
//   dashIcon.addEventListener('click', () => {
//   dashIcon.style.borderLeft = '';
// })} else {
//   dashIcon.addEventListener('click', () => {
//   dashIcon.style.borderLeft = tealBorderLeft;
// })};
//
// transactionIcon.addEventListener('click', () => {
//   transactionIcon.style.borderLeft = '2px solid #1CA3BA';
// });
//
// profileIcon.addEventListener('click', () => {
//   profileIcon.style.borderLeft = '2px solid #1CA3BA';
// });
