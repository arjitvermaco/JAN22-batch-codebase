// Challenge 1: Array Transformer
// Objective: Write a function that takes an array
// of numbers as input and returns a
// new array where each element is doubled.
let myArray = [1, 2, 3, 4, 5];
let doubleArr = [];
for (let i = 0; i < myArray.length; i++) {
  doubleArr.push(myArray[i] * 2);

  if (i === myArray.length - 1) {
    console.log(doubleArr);
  }
}

// Array.map
//it loops over an array and passes it to a function
// and returns a new array with the result of the function

let dbArr = myArray.map(function (el) {
  return el * 2;
});

let dbArr2 = myArray.map((el) => el * 2);
console.log(dbArr);

//String Reverser
// Objective: Implement a function that reverses a string
// without using the built-in reverse() method.

let str = "hello";
console.log(str.split(""));
console.log(str.split("").reverse());
console.log(str.split("").reverse().join(""));

function reverseString(str) {
  let revString = "";
  for (let char of str) {
    console.log(char);
    revString = char + revString;
  }
  return revString;
}

console.log(reverseString("hello"));

// Dynamic Object Creator
// Objective: Write a function that takes 
// two arrays, one of property names and 
// one of values, and dynamically creates an object.

let arr1 = ["name", "age"];
let arr2 = ["John", 25];
// const obj = {
//     name: "John",
//     age: 25
// }

function createObj (key, value) {
    let obj ={};
    key.forEach((el,i)=>{
        obj[el] = value[i]
    })
    return obj;
}

console.log(createObj(arr1, arr2));

//FizzBuzz problem
// Objective: Write a function that
//  takes a number as input and returns "Fizz" if 
//  the number is divisible by 3,
//   "Buzz" if the number is
//    divisible by 5, and "FizzBuzz"
//    if the number is divisible by both 3 and 5.

function fizzBuzz(num) {
    for(let i=0; i<=num; i++){
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return num;
        }
    }
}

// 100

//  Unique Characters
// Objective: Create a function
// that returns true if a string contains
// only unique characters. Ignore casing.

function hasUniqueChar(str){
    const chars = new Set();
    for(let char of str.toLowerCase()){
        if(chars.has(char)){
            return false;
        }
        chars.add(char);
    }
    return true;
}

// function countCharacters(){
//    const textArea = document.getElementById("textArea");
//    const counter = document.getElementById("counter");
//    counter.textContent = `Characters Count: ${textArea.value.length}`;
// }

// document.getElementById('addItem').addEventListener('click',()=>{
//     const itemValue = document.getElementById('itemInput').value;

//     if(itemValue !== ""){
//         const li = document.createElement('li');
//         li.textContent = itemValue;
//         console.log(li)
//         document.getElementById("itemList").appendChild(li);
//         document.getElementById('itemInput').value = ""
//     }

// })

let images = document.querySelectorAll('.gallery-item')
console.log(images)

images.forEach((item)=>{
    item.addEventListener('click',function(){
        console.log("Image was clicked");
        console.log(this);
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modalImage').src = this.src;
    })
})

document.getElementById('closeModal').addEventListener('click',()=>{
    document.getElementById('modal').style.display = 'none';
})