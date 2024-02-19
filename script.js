'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

const account1 = {
    owner: "Arjit Verma",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    movementsDates: [
      "2019-11-18T21:31:17.178Z",
      "2019-12-23T07:42:02.383Z",
      "2020-01-28T09:15:04.904Z",
      "2020-04-01T10:17:24.185Z",
      "2020-05-08T14:11:59.604Z",
      "2020-07-26T17:01:17.194Z",
      "2020-07-28T23:36:17.929Z",
      "2020-08-01T10:51:36.790Z",
    ],
    currency: "INR",
    locale: "en-IN", // de-DE
  };
  
  const account2 = {
    owner: "Ravi Singh",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    movementsDates: [
      "2019-11-01T13:15:33.035Z",
      "2019-11-30T09:48:16.867Z",
      "2019-12-25T06:04:23.907Z",
      "2020-01-25T14:18:46.235Z",
      "2020-02-05T16:33:06.386Z",
      "2020-04-10T14:43:26.374Z",
      "2020-06-25T18:49:59.371Z",
      "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
  };
  
  const accounts = [account1, account2];

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
  displayMovements(acc);
  calcSummary(acc);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}`;
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  console.log('Value of sorted in display movements', sort);

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  console.log('Value of movs ', movs);

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    console.log(type);
    const date = new Date(acc.movementsDates[i])
    const displayDate = formatDate(date,acc.locale);
    const formateedMov = formatCur(mov,acc.locale,acc.currency)
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">
      ${i + 1} ${type}
    </div>
    <div class="movements__date">${displayDate}</div>

    <div class="movements__value">${formateedMov}</div>
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

const startLogoutTimer = function () {
  let time = 300;

  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    console.log('Time is ', min, sec);
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 seconds , logout user
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Log in to get started';
    }

    time--;
  };
  tick();

  const timer = setInterval(tick, 1000);
};

const formatDate = function(date,locale){
    const calcDaysPassed = (date1,date2)=>{
       Math.round( Math.abs(date2-date1)/(1000*60*60*24))
    }
    const daysPassed = calcDaysPassed(new Date(),date);

    if(daysPassed === 0) return "Today";
    if(daysPassed === 1) return "Yesterday";
    if(daysPassed <= 7) return `${daysPassed} days ago`;

    return new Intl.DateTimeFormat(locale).format(date)
}

const formatCur = function(value,locale,currency){
    return new Intl.NumberFormat(locale,{
        style:"currency",
        currency:currency
    }).format(value)
}

let currentAccount;
// Login Event Handler
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  const enteredUsername = inputLoginUsername.value;
  const enteredPassword = inputLoginPin.value;
  console.log(enteredPassword, enteredUsername);
  currentAccount = accounts.find(acc => acc.username === enteredUsername);
  if (currentAccount?.pin === Number(enteredPassword)) {
    showToast('Login Successful', 'success');
    labelWelcome.textContent = `Welcome back , ${
      currentAccount.owner.split(' ')[0]
    }`;
    inputLoginUsername.value = inputLoginPin.value = '';
    updateUi(currentAccount);
    containerApp.style.opacity = 100;
    startLogoutTimer();
  } else {
    showToast('Invalid Credentials', 'error');
  }

  inputLoginPin.blur();
});

//Request Loan Feature
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  // console.log(currentAccount)
  if (amount > 0 && amount <= currentAccount.balance * 0.1) {
    currentAccount.movements.push(amount);
    console.log(currentAccount);
    showToast(`Loan Approved for ${amount}`, 'success');
    updateUi(currentAccount);
  } else {
    showToast('Amount should be less than 10% of balance', 'error');
  }
  inputLoanAmount.value = '';
});

//Transfer Amount Feature

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receivingAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receivingAcc &&
    currentAccount.balance >= amount &&
    receivingAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receivingAcc.movements.push(amount);
    updateUi(currentAccount);
    showToast('Sent Successfully', 'success');
  } else {
    showToast('Unable to send', 'error');
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  console.log(sorted);
  displayMovements(currentAccount.movements, sorted);
});

// //SetTimeout
// setTimeout(function () {
//   console.log('I am from Timeout');
// }, 10000);

// let interval = setInterval(function () {
//   console.log('I am from Interval');
// }, 4000);

// // clearInterval(interval)

// let clock = document.querySelector('.time');

// let clockInterval = setInterval(() => {
//   let date = new Date();
//   clock.innerHTML = date.toLocaleTimeString();
// }, 1000);

// let clockBtn = document.querySelector('.btn-stop');

// clockBtn.addEventListener('click', function () {
//   clearInterval(clockInterval);
// });

// let clock = document.querySelector('.time');

// setInterval(()=>{
//     let dateNow = new Date();
//     let hours = dateNow.getHours()
//     let min = dateNow.getMinutes()
//     let ms = dateNow.getMilliseconds()

//     clock.innerHTML= `${hours} : ${min} : ${ms}`

// },1)

// let seconds = 10;

// let interval = setInterval(()=>{
//     console.log(seconds)
//     seconds--;

//     if(seconds === 0){
//         console.log("Logout User")
//         clearInterval(interval)
//     }
// },1000)
