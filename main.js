//Use x to exit welcome banner
var x = document.getElementById('x');

function hide(banner) {
  var item = document.getElementById(banner);
  item.style.display = 'none';
}

x.addEventListener('click', function () {hide('welcome')});

//Prompt for username
var person = prompt("What is your name?", "Buttercup");

if (person != null) {
  document.getElementById("message").innerHTML =
  "Welcome, " + person + "!";
};


//Toggle left teal border on click for icons
var dashButton = document.getElementById('dash');
var transactionsButton = document.getElementById('transactions');
var profileButton = document.getElementById('profile');

dashButton.addEventListener('click', function() {makeTeal(dashButton, transactionsButton,
  profileButton)});

transactionsButton.addEventListener('click', function () {makeTeal(transactionsButton,
  dashButton, profileButton)});

profileButton.addEventListener('click', function () {makeTeal(profileButton,
  transactionsButton, dashButton)});

function makeTeal(button1, button2, button3) {
  button1.classList.add('tealClick');
  button2.classList.remove('tealClick');
  button3.classList.remove('tealClick');
}

// Hide main when clicking wallet
function hide(content) {
  var allContent = document.querySelector(content);
  allContent.style.display = 'none';
}

transactionsButton.addEventListener('click', function () {hide('main')});

//Show content again when clicking clipboard
function showAgain(content) {
  var allContent = document.querySelector(content);
  allContent.style.display = '';
}

dashButton.addEventListener('click', function () {showAgain('main')});
