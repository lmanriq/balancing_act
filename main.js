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
function hide(banner) {
  var box = document.getElementById(banner);
  box.style.display = 'none';
};

var person = prompt("What is your name?", "Juju");

console.log(person);
console.log(document.getElementById("message"));

if (person != null) {
  document.getElementById("message").innerHTML =
  "Welcome, " + person + "!";
};
