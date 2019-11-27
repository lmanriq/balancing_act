var accountsHTML =
`<section id="accounts">
  <section id="your-profile-section">
    <h3>Your Profile</h3>
      <div id="profile-box">
        <h4>Oscar Holt</h4>
        <p>Denver, CO</p>
        <p>Member Since: 2014</p>
        <p>Birthday: December 19, 2011</p>
        <button id="edit-info">EDIT MY INFO</button>
      </div>
    </section>
  <section id="your-accounts-section">
    <h3>Your Accounts</h3>
    <div class="account account1">
      <p class="account-name">Wells Fargo</p>
      <p class="account-type">Savings</p>
      <p>Status: <span class="active">Active</span></p>
      <section class="accounts-buttons">
        <button class="edit">EDIT</button>
        <button class="delete">DELETE</button>
      </section>
    </div>
    <div class="account account2">
      <p class="account-name">Wells Fargo</p>
      <p class="account-type">Checking</p>
      <p>Status: <span class="active">Active</span></p>
      <section class="accounts-buttons">
        <button class="edit">EDIT</button>
        <button class="delete">DELETE</button>
      </section>
    </div>
    <div class="account account3">
      <p class="account-name">Amazon Credit</p>
      <p class="account-type">Credit Card</p>
      <p>Status: <span class="active">Active</span></p>
      <section class="accounts-buttons">
        <button class="edit">EDIT</button>
        <button class="delete">DELETE</button>
      </section>
    </div>
    <div class="account account4">
      <p class="account-name">Southwest Credit</p>
      <p class="account-type">Credit Card</p>
      <p>Status: <span class="active">Active</span></p>
      <section class="accounts-buttons">
        <button class="edit">EDIT</button>
        <button class="delete">DELETE</button>
      </section>
    </div>
    <section id="add-account">
      <h4>Add an Account</h4>
      <div id="fields">
        <section class="field">
          <p>Type:</p>
          <input type="text">
        </section>
        <section class="field">
          <p>Nickname:</p>
          <input type="text">
        </section>
        <section class="field">
          <p>Status</p>
          <select>
            <option value="active">Active</option>
            <option value="hold">Hold</option>
          </select>
        </section>
        <button type="button" id="add-account-button">ADD ACCOUNT</button>
      </div>
    </section>
  </section>
</section>`;
var dashButton = document.getElementById('dash');
var dashHTML =
`<main id="dash-page">
  <h1>Balancing Act</h1>
  <div id="left">
    <section id="welcome">
      <p id="message"></p>
      <img id="x" src="assets/close.svg"/>
    </section>
    <section class="overview">
      <section id="income">
        <h2>INCOME</h2>
        <p>$2,119.12</p>
      </section>
      <section id="expenses">
        <h2>EXPENSES</h2>
        <p>$420.54</p>
      </section>
      <section id="credit_score">
        <h2>CREDIT SCORE</h2>
        <p>673</p>
      </section>
    </section>
  <section class="accounts">
    <h3>Accounts</h3>
    <button>MANAGE ACCOUNTS</button>
  </section>
    <section class="account_names">
      <section id="checking">
      <img class ="lefty" src="assets/checking.svg">
      <p class="lefty">Wells Fargo</p>
      <p class="righty">Checking</p>
    </section>
    <section id="savings">
      <img class="lefty" src="assets/savings.svg">
      <p class="lefty">Wells Fargo</p>
      <p class="righty">Savings</p>
    </section>
    <section id="amazon_cc">
      <img class="lefty" src="assets/credit-card.svg">
      <p class="lefty">Amazon Credit</p>
      <p class="righty">Credit Card</p>
    </section>
    <section id="southwest_cc">
      <img class="lefty" src="assets/credit-card.svg">
      <p class="lefty">Southwest Credit</p>
      <p class="righty">Credit Card</p>
    </section>
  </section>
</div>
<div id="right">
  <header class="chart-head">
    <h4 id="recent-trans">Recent Transactions</h4>
    <button>NEW TRANSACTION</button>
  </header>
  <table>
    <colgroup span="4"></colgroup>
    <tr>
      <th>Date</th>
      <th>Payee</th>
      <th>Inflow</th>
      <th>Outflow</th>
    </tr>
    <tr>
      <td>Oct 25, 2019</td>
      <td>Target</td>
      <td>-</td>
      <td>$82.35</td>
    </tr>
    <tr>
      <td>Oct 24, 2019</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>Oct 22, 2019</td>
      <td>Paycheck</td>
      <td>$1,319.12</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Oct 21, 2019</td>
      <td>Trader Joe's</td>
      <td>-</td>
      <td>$54.92</td>
    </tr>
    <tr>
      <td>Oct 20, 2019</td>
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
      <td>Hapa Sushi</td>
      <td>-</td>
      <td>$13.97</td>
    </tr>
    <tr>
      <td>Oct 18, 2019</td>
      <td>Pig Train</td>
      <td>-</td>
      <td>$4.83</td>
    </tr>
    <tr>
      <td>Oct 18, 2019</td>
      <td>RTD</td>
      <td>-</td>
      <td>$6.00</td>
    </tr>
  </table>
</div>
</main>`;
var person = prompt("What is your name?", "Buttercup");
var profileButton = document.getElementById('profile');
var transactionsButton = document.getElementById('transactions');
var transHTML =
`<section id="body2">
  <div id="transactions-section" class="lefty">
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
        <option value="select-one">-Select One-</option>
        <option value="inflow">Inflow</option>
        <option value="outflow">Outflow</option>
      </select>
      <p>Category:</p>
      <select>
        <option value="select-one">-Select One-</option>
        <option value="groceries">Groceries</option>
        <option value="bills">Bills</option>
        <option value="fun-money">Fun Money</option>
        <option value="paycheck">Paycheck</option>
      </select>
      <p>Account from:</p>
      <select>
        <option value="select-one">-Select One-</option>
        <option value="checking">Checking</option>
        <option value="savings">Savings</option>
        <option value="amazon-credit-card">Amazon Credit Card</option>
        <option value="southwest-credit-card">Southwest Credit Card</option>
      </select>
      <p>Payee:</p>
      <input id="payee" type="text" name="payee">
      <p>Amount:</p>
      <input id="amount" type="text" name="inflow">
      <p>Memo (Optional):</p>
      <input id="memo" type="text" name="outflow">
      <button type="button" id="log">Log Expense</button>
    </form>
    <section id="expense-section" class="hidden">
      <p id="expense-message"></p>
      <img id="x2" src="assets/close.svg"/>
    </section>
</section>`;
var x = document.getElementById('x');

if (person != null) {
  document.getElementById("message").innerHTML =
  "Welcome, " + person + "!";
};


dashButton.addEventListener('click', function () {
  addDashSection();
  showAgain('dash-page', 'transaction-section-to-add', 'accounts-section-to-add');
  makeTeal(dashButton, transactionsButton, profileButton);
});

profileButton.addEventListener('click', function () {
  addAccountsSection();
  showAgain('accounts-section-to-add', 'transaction-section-to-add', 'dash-page');
  makeTeal(profileButton, transactionsButton, dashButton);
});

transactionsButton.addEventListener('click', function () {
  addTransactionsSection();
  showAgain('transaction-section-to-add', 'accounts-section-to-add', 'dash-page');
  makeTeal(transactionsButton, dashButton, profileButton);
});

x.addEventListener('click', function () {hide('welcome')});

function addAccountsSection() {
  var newAccountsSection = document.getElementById('accounts-section-to-add');
  newAccountsSection.innerHTML = accountsHTML;
}

function addDashSection() {
  var mainDashSection = document.getElementById('dash-page');
  mainDashSection.innerHTML = dashHTML;
}

function addTransactionsSection() {
  var newTransactionSection = document.getElementById('transaction-section-to-add');
  newTransactionSection.innerHTML = transHTML;
  addTransEventListeners();
}

function addTransEventListeners() {
  // On button click, either log expense or show fields that need to be updated
  var expenseButton = document.getElementById('log');
  expenseButton.addEventListener('click', logNewExpense);
  // Exit out of expense pop up
  x2.addEventListener('click', function () {hide('expense-section')});
  // Mark empty required fields in red
}

function hide(banner) {
  var item = document.getElementById(banner);
  item.style.display = 'none';
}

//Expense banner function
function logNewExpense() {
  var payee = document.getElementById('payee');
  var amount = document.getElementById('amount');
  var dollarAmount = document.getElementById('amount').value;
  var expenseAmountMessage = `Your expense of $${dollarAmount} has been logged.`;
  var expenseSection = document.getElementById('expense-section');

  if (payee.value === '' && amount.value === '') {
    payee.classList.add('wrong');
    amount.classList.add('wrong');
  } else if(payee.value === '') {
    payee.classList.add('wrong');
  } else if (amount.value === '') {
    amount.classList.add('wrong');
  } else {
    payee.classList.remove('wrong');
    amount.classList.remove('wrong');
    document.getElementById('expense-message').innerText = expenseAmountMessage;
    expenseSection.classList.remove('hidden');
    expenseSection.classList.add('expense-confirmation');
  }

  payee.addEventListener('input', function () {clearRed(payee)});
  amount.addEventListener('input', function () {clearRed(amount)});

  function clearRed(field) {
    field.classList.remove('wrong');
  }
}

function makeTeal(button1, button2, button3) {
  button1.classList.add('tealClick');
  button2.classList.remove('tealClick');
  button3.classList.remove('tealClick');
}

//Show content again when clicking clipboard
function showAgain(content, toHide1, toHide2) {
  var allContent = document.getElementById(content);
  allContent.style.display = '';
  document.getElementById(toHide1).innerHTML = '';
  document.getElementById(toHide2).innerHTML = '';
}
