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

dashButton.addEventListener('click', function() {makeTeal(dashButton,
  transactionsButton, profileButton)});

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
transactionsButton.addEventListener('click', function () {hide('dash-page')});

//Add transactions section when clicking wallet
transactionsButton.addEventListener('click', function () {addTransactionsSection()})

function addTransactionsSection() {
  var newTransactionSection = document.getElementById('transaction-section-to-add');
  newTransactionSection.innerHTML =
  '<section id="body2">' +
    `<div id="transactions-section" class="lefty">
      <header id="chart-head-trans">
        <h1 id="transactions-title">Transactions</h1>
        <section class="trans-buttons">
          <button class="trans-toggle" id="allButton">ALL</button>
          <button class="trans-toggle" id="inflow">INFLOW</button>
          <button class="trans-toggle" id="outflow">OUTFLOW</button>
        </section>
      </header>
      <div id="trans-table">
        <table>
          <colgroup span="5"></colgroup>
          <tr>
            <th>Date</th>
            <th>Account</th>
            <th>Payee</th>
            <th>Inflow</th>
            <th>Outflow</th>
          </tr>
          <tr>
            <td>Oct 25, 2019</td>
            <td>Target</td>
            <td>Credit Card</td>
            <td>-</td>
            <td>$82.35</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Credit Card</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
          <tr>
            <td>Oct 22, 2019</td>
            <td>Checking</td>
            <td>Paycheck</td>
            <td>$1,319.12</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 21, 2019</td>
            <td>Credit Card</td>
            <td>Trader Joe's</td>
            <td>-</td>
            <td>$54.92</td>
          </tr>
          <tr>
            <td>Oct 20, 2019</td>
            <td>Credit Card</td>
            <td>Shell</td>
            <td>-</td>
            <td>$46.23</td>
          </tr>
          <tr>
            <td>Oct 19, 2019</td>
            <td>Rent</td>
            <td>$800.00</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Oct 19, 2019</td>
            <td>Checking</td>
            <td>Hapa Sushi</td>
            <td>-</td>
            <td>$13.97</td>
          </tr>
          <tr>
            <td>Oct 18, 2019</td>
            <td>Credit Card</td>
            <td>Pig Train</td>
            <td>-</td>
            <td>$4.83</td>
          </tr>
          <tr>
            <td>Oct 18, 2019</td>
            <td>Checking</td>
            <td>RTD</td>
            <td>-</td>
            <td>$6.00</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Checking</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Checking</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Checking</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Checking</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
          <tr>
            <td>Oct 24, 2019</td>
            <td>Checking</td>
            <td>Express</td>
            <td>-</td>
            <td>$212.24</td>
          </tr>
        </table>
      </div>
      </div>
      <form class="righty formy">
        <h3>New Transaction</h3>
        <p>Type of Transaction:</p>
        <select>
          <option value="expense">Expense</option>
          <option value="entertainment">Entertainment</option>
          <option value="cat-toys">Cat Toys</option>
        </select>
        <p>Category:</p>
        <select>
          <option value="select-one">-Select One-</option>
          <option value="entertainment">Food</option>
          <option value="cat-toys">Rent</option>
        </select>
        <p>Account from:</p>
        <select>
          <option value="select-one">-Select One-</option>
          <option value="checking">Checking</option>
          <option value="savings">Savings</option>
          <option value="credit-card">Credit Card</option>
        </select>
        <p>Payee:</p>
        <input type="text" name="payee">
        <p>Inflow:</p>
        <input type="text" name="inflow">
        <p>Outflow:</p>
        <input type="text" name="outflow">
        <button id="log">Log Expense</button>
      </form>
  </section>`;
}

//Show content again when clicking clipboard
function showAgain(content) {
  var allContent = document.querySelector(content);
  allContent.style.display = '';
  document.getElementById('transaction-section-to-add').innerHTML = '';
}

dashButton.addEventListener('click', function () {showAgain('main')});
