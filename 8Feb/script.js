"use strict";
console.log("File Loaded")
//Flight booking
//Default Params in Function
const bookings = [];
const createBooking = function(flightNum,
    numPassengers = 1,
    price = 1000*numPassengers){
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    bookings.push(booking);
}

createBooking("LH123");
createBooking("LB232",2);
createBooking("JH563",4,80000);
createBooking("MH456",undefined,10000);


console.log(bookings);

//How arg passing works: Value vs Reference
// Number, String, Boolean, NULL, Undefined and Symbol
const flight = "TH293";
const arjitData = {
    name: "Arjit Verma",
    passPortNumber : "1234567890",
}

const checkIn = function(flightNum,passengerData){
    flightNum = "LH123";
    passengerData.name = 'Mr ' + passengerData.name;

    if(passengerData.passPortNumber === "1234567890"){
        console.log("Welcome to India");
    }else{
        console.log("You are not eligible to board");
    }
}

checkIn(flight,arjitData);
// it is same as
// const flightNum = flight
// const passengerData = arjitData

console.log(flight);
console.log(arjitData);

//Functions accepting callback functions

// Callback : a function accepting another fn as param 
// to envoke later 


const mybtn = document.querySelector(".btn");
console.log(mybtn);

function sayHello(){
    console.log('👋')
}

mybtn.addEventListener("click",sayHello);

// let name = prompt("Enter your name");
// console.log(name)

function greeting(name){
    console.log(`Hello ${name}`);
}

function getUserInput(callback){
    const name = prompt("Enter your name");
    callback(name);
}

// getUserInput(greeting);


// Higher Order Functions in js

function multiplier(factor){
    return function(number){
        return number * factor;
    }
}
// function(number){
//     return number * 2;
// }

const double = function(num){
    return num *2;
}

const tripple = function(num){
    return num *3;
}

const doubler = multiplier(2);
const tripler = multiplier(3);

console.log(doubler(10));
console.log(tripler(10));


function createDiscountApplier(discountPercent){
    return function(price){
        return price - (price * discountPercent /100);
    }
}

const applyTenPercentDiscount = createDiscountApplier(10);
const applyTwentyPercentDiscount = createDiscountApplier(20);

console.log(applyTenPercentDiscount(1000));
console.log(applyTwentyPercentDiscount(1000));
