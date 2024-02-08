"use strict";
//Descructuring in Arrays

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;

const [a1, , c1] = arr;
console.log(a1, c1);

let num1 = "a";
let num2 = "b";

//switch
// const temp = a;
// a = b;
// b = temp;

[num1, num2] = [num2, num1];
console.log("Value of Num1", num1);
console.log("Value of Num2", num2);

const nested = [2, 4, [6, 8]];
const [a2, , [c2, d2]] = nested;

//Default Values
const [a3, b3, c3 = 3] = [1, 2, 6];
console.log(a3, b3, c3);

//Object destructuring

let myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1964,
  color: "Blue",
  //   carIntro(){
  //     console.log(`This is a ${this.year} ${this.color} ${this.make} ${this.model}`);
  //   }
};

let { make: companyName, model, year, color = "Red" } = myCar;
console.log(companyName, model, year, color);

//Short Circuiting (&& and ||)
// Flasy values in Js
// 0 | false | undefined | null | ""

// || => returns the first truthy value or else the last value
console.log(3 || "arjit");
console.log(false || "arjit");
console.log(true || "arjit");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || false || 3 || "arjit");

let myCarLocation = myCar.location || "Unknown";
console.log(myCarLocation);

console.log("------AND Operator------");
// && => returns the first falsy value or else the last value
console.log(0 && "arjit");
console.log(false && "arjit");
console.log(true && "arjit");
console.log("Hello" && "World" && "arjit" && 0 && true);

myCar.carIntro && myCar.carIntro();

//Logical Assingment Operators
const pizzaRest = {
  name: "Vito Pizza",
  capacity: 0,
  address: {
    street: "12345",
    city: "Bangalore",
    pincode: "560001",
    country: "India",
  },
};

let restCapacity = pizzaRest.capacity || 10;
console.log(restCapacity);

// ??= => if the value is not undefined or null then it
//  will return the value

let restCap = pizzaRest.capacity ?? 10;
console.log(restCap);

//Optional Chaining
console.log(pizzaRest.address.city);
console.log(pizzaRest.address?.country);

if (pizzaRest.address.city && pizzaRest.address.country) {
  console.log("Both city and country exist");
}

console.log(pizzaRest.address?.city);

let userProfile = {
  name: "Jane Doe",
  contact: {
    email: "jane.doe@example.com",
    socialMedia: {
      twitter: "@janedoe",
      facebook: "facebook.com/jane.doe",
    },
  },
};

let twitterHandle = userProfile && userProfile.contact && userProfile.contact.socialMedia && userProfile.contact.socialMedia.twitter;

let twitterAc = userProfile?.contact?.socialMedia?.twitter;
console.log(twitterHandle, twitterAc);


// Working with strings 
const airlines = "The United Airlines";
const plane = "Boeing 747";


console.log(plane[0])
console.log(plane[1])
console.log(plane[3])
console.log(plane.length)
console.log("arjit".length)

console.log(plane.indexOf("g"))
console.log(plane.lastIndexOf("7"))
console.log(airlines.indexOf('United'))

console.log(plane.slice(0, 3))
console.log(plane.slice(3, 7))
console.log(plane.slice(0,plane.indexOf(' ')))

console.log(plane.slice(-2))
console.log(plane.slice(1,-1))

//11A
//32F
//23D

// b and E 

const checkMiddleSeat = function(seat){
    const s = seat.slice(-1);
    if(s === "B" || s === "E"){
        console.log("You got Middle Seat!!");
    }else{
        console.log("You got Lower Seat!!");
    }
}
checkMiddleSeat("11A");
checkMiddleSeat("32F");
checkMiddleSeat("23B");


//Working with Strings 
console.log(airlines.toUpperCase())
console.log(airlines.toLowerCase())

const passenger = "aRjit"; //Arjit
const passengerLower = passenger.toLowerCase();
const passengerFixed = 
passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerFixed)

let userEmail = " arjit@offcampus.io     ";
let newEmail = "iotech@gmail.io"
console.log(userEmail.trim())

//Replace
userEmail = userEmail.replace("io", "com")

newEmail = newEmail.replaceAll("io", "com")

console.log(newEmail.trim())   