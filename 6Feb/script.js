"use strict";

// console.log("File Loaded");
// let day = "Tuesday";
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const openingHours = {
  [weekdays[0]]: "10:00am - 8:00pm",
  [weekdays[1]]: "10:00am - 8:00pm",
  [weekdays[2]]: "10:00am - 8:00pm",
  [weekdays[3]]: "10:00am - 8:00pm",
  [weekdays[4]]: "10:00am - 8:00pm",
  [weekdays[5]]: "10:00am - 8:00pm",
  [weekdays[6]]: "10:00am - 8:00pm",
};
console.log(openingHours.Saturday);

let address = "123 Main Street, Anytown, USA";

const myCompany = {
  name: "Coding Dojo",
  companyType: "Technology",
  address,
  employees: [
    {
      name: "<NAME>",
      role: "Instructor",
    },
    {
      name: "<NAME>",
      role: "Instructor",
    },
    {
      name: "<NAME>",
      role: "Instructor",
    },
    {
      name: "<NAME>",
      role: "Student",
    },
    {
      name: "<NAME>",
      role: "Student",
    },
    {
      name: "<NAME>",
      role: "Student",
    },
  ],
  //es6 enhanced obj literals
  openingHours,
  companyIntro() {
    return `Welcome to ${this.name}. We are a ${this.companyType} company.`;
  },
};

// console.log(myCompany.openingHours);
// console.log(myCompany.address);
// console.log(myCompany.companyIntro());

// //Maps
// const myMap = new Map();
// myMap.set("location", "India").set("name", "John").set("age", 30);
// myMap.set(true, "I am available for work");
// myMap.set(false, "I am NOT available for work");

// myMap.set("available", false);

// console.log(myMap);

// console.log(myMap.get("age"));
// console.log(myMap.get("location"));
// console.log(myMap.get(true));

// console.log(myMap.get(myMap.get("available")));

// console.log(myMap.size);
// //Returns a boolean value
// console.log(myMap.has("dob"));
// myMap.delete("location");

// const arr = [1, 2];
// myMap.set(arr, "I am an array");
// myMap.set(document.querySelector("h1").textContent, "Heading");
// console.log(myMap);

// console.log(myMap.get(arr));

// //Set
let data  = [
    "Arjit",
    "Ankit",
    "Adarsh",
    "Mahesh",
    "Rajesh",
    "Rahul",
    "Raj",
    "Rajesh"
]
// // To remove duplicate elments from an array
// // let uniq = [...new Set(data)]
// // console.log(uniq)

// const myStudentsData = new Set(data);

// console.log(myStudentsData)

// console.log(myStudentsData.size);
// console.log(myStudentsData.has("Rajesh"));
// console.log(myStudentsData.add("Ketan"));
// console.log(myStudentsData.add("Ketan"));
// console.log(myStudentsData.delete("Mahesh"));
// // myStudentsData.clear();

// for( const student of myStudentsData){
//     console.log(student)
// }

// console.log(myStudentsData)

// console.log(data)

//For Of Loop

for (let student of data){
    console.log(student)
}

//Looping Objects : Object keys , values and Entries

//property names or keys
const properties = Object.keys(myCompany);
console.log(properties)

const values = Object.values(myCompany);
console.log(values)

const entries = Object.entries(myCompany);
console.log(entries)

for (let val of values){
    console.log(val)
}
let i = 0;
for (let index of [...entries]){
    console.log(index)

    // console.log(key,value)
}

//REST pattern and Parameters
// 1) Destructuring 

//Spread Operator => is on right side of =
let arr1 = [3,4,5,6,7,8]
console.log(...arr1)
let arr = [1,2,...arr1]
console.log(arr)
//How to merge two arrays
let x = [...arr,...arr1]
//Rest Operator => on left side 

const [a,b,c,...others] = arr
console.log(a,b,c,others) ;

const {name:companyName,companyType,...otherData} = myCompany;
console.log(companyName,companyType,otherData)