'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Smith',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian rupee'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Create function to seperate initials from accounts

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUi = function (acc) {
  calcDisplayBalance(acc);
  displayMovements(acc.movements);
  calcSummary(acc);
};



const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}`;
};

const displayMovements = function (movements,sort =false) {
  containerMovements.innerHTML = '';

  console.log("Value of sorted in display movements", sort)

  const movs = sort? movements.slice().sort((a,b)=>a-b):movements;

  console.log("Value of movs ", movs)

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    console.log(type);

    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>

    <div class="movements__value">${mov}</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcSummary = function (acc) {
  const moneyIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = moneyIn;

  const moneyOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(moneyOut)}`;
};


const showToast = function (text, type) {
  Toastify({
    text: text,
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: `${type === 'success' ? 'green' : 'red'}`,
      color: 'white',
    },
    onClick: function () {}, // Callback after click
  }).showToast();
};


let currentAccount;
// Login Event Handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const enteredUsername = inputLoginUsername.value;
  const enteredPassword = inputLoginPin.value;
  console.log(enteredPassword, enteredUsername);
  currentAccount = accounts.find(acc => acc.username === enteredUsername);
  if (currentAccount?.pin === Number(enteredPassword)) {
    showToast("Login Successful","success")
    labelWelcome.textContent = `Welcome back , ${
      currentAccount.owner.split(' ')[0]
    }`;
    inputLoginUsername.value = inputLoginPin.value = '';
    updateUi(currentAccount);
    containerApp.style.opacity = 100;
  } else {
    showToast("Invalid Credentials","error")

  }

  inputLoginPin.blur()
});

//Request Loan Feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // console.log(currentAccount)
  if (amount > 0 && amount <= currentAccount.balance * 0.1) {
    currentAccount.movements.push(amount);
    console.log(currentAccount);
    showToast(`Loan Approved for ${amount}`,"success")
    updateUi(currentAccount);
  } else {
    showToast("Amount should be less than 10% of balance","error")
     }
  inputLoanAmount.value = '';
});

//Transfer Amount Feature

btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receivingAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  )

  if(amount >0 && 
    receivingAcc && 
    currentAccount.balance >= amount &&
    receivingAcc?.username !== currentAccount.username){
      currentAccount.movements.push(-amount);
      receivingAcc.movements.push(amount);
      updateUi(currentAccount)
      showToast("Sent Successfully","success")

    }
    else{
      showToast("Unable to send","error")
    }
    inputTransferAmount.value = inputTransferTo.value = '';

})

let sorted = false;

btnSort.addEventListener('click',function(e){
  e.preventDefault();
  sorted = !sorted;
  console.log(sorted)
  displayMovements(currentAccount.movements , sorted)
})