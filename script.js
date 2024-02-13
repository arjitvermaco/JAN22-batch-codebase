// Managing a Bookstore Inventory
// You are tasked with creating a JavaScript
// program for a bookstore's inventory management
// system. The inventory is represented as an array
//  of book objects, where each book has properties
//  like title, author, genre, and quantity.
// 1. Initialization:
// - Create an initial array to represent the bookstore's
// inventory with at least 5 books.
// 2. Task 1: Out of Stock Books
// - Write a function that takes the
// inventory array as a parameter and
//  returns an array containing only the
//  books that are out of stock (quantity is 0).
// 3. Task 2: Update Quantity
// in the inventory.
// - Implement a function that
//  takes the inventory array,
//   a book title, and a new quantity
//    as parameters. The function should \
//    update the quantity of the specified book
// 4. Task 3: Filter by Genre
// - Create a function that filters the inventory array based on a given genre. It should return an array containing only the books of the specified genre.
// 5. Task 4: Total Quantity
// - Write a function that calculates and returns the total quantity of all books in the inventory.
// 6. Task 5: Sorting by Author
// - Implement a function that sorts
//  the inventory array alphabetically
//   by the author's name.
// 7. Task 6: Add New Book
// - Create a function that takes the inventory
//  array and a new book object as parameters.
//   It should add the new book to the inventory.
// 8. Task 7: Unique Genres
// // - Write a function that returns

//  an array containing unique genres present in the
let booksInventory = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Psychological Thriller",
    quantity: 0,
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    genre: "Coming-of-Age Fiction",
    quantity: 18,
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    quantity: 30,
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    genre: "Autobiography",
    quantity: 0,
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    genre: "Fiction",
    quantity: 15,
  },
  {
    title: "The Testaments",
    author: "Margaret Atwood",
    genre: "Dystopian Fiction",
    quantity: 22,
  },
  {
    title: "Circe",
    author: "Madeline Miller",
    genre: "Fantasy",
    quantity: 0,
  },
  {
    title: "The Nickel Boys",
    author: "Colson Whitehead",
    genre: "Historical Fiction",
    quantity: 10,
  },
  {
    title: "The Giver of Stars",
    author: "Jojo Moyes",
    genre: "Historical Fiction",
    quantity: 17,
  },
  {
    title: "The Water Dancer",
    author: "Ta-Nehisi Coates",
    genre: "Historical Fiction",
    quantity: 0,
  },
];

// // Task 2 :
// create a for of loop
// books with quantity 0 will be pushed to a new array
// return the new array

// Array.filter

// Map - Filter - Reduce

const outOfStock = booksInventory.filter((book) => {
  return book.quantity === 0;
});

console.log("Books that are out of stock", outOfStock);

//Quantity of books in even nu

const evenQty = booksInventory.filter((book) => book.quantity % 2 === 0);

function updateQuantity(inventory, title, newQuantity) {
  const bookIndex = inventory.findIndex((book) => {
    return book.title === title;
  });
  if (bookIndex >= 0) {
    inventory[bookIndex].quantity = newQuantity;
  } else {
    console.log("Book not found");
  }
}

updateQuantity(booksInventory, "The Water Dancer", 12);
console.log(booksInventory);

function filterByGenre(inventory, genre) {
  return inventory.filter((book) => book.genre === genre);
}
console.log(filterByGenre(booksInventory, "Historical Fiction"));

const totalQty = booksInventory.reduce((total, book) => {
  return total + book.quantity;
}, 0);

console.log(totalQty);

const numbers = [13, 23, 34, 2124, 343, 343, 123];

const sum = numbers.reduce(
  (total, num, currentIndex, array) => total + num,
  100
);
console.log(sum);

console.log(numbers.sort());
//Ascending Order
console.log(numbers.sort((a, b) => a - b));
//Descending Order
console.log(numbers.sort((a, b) => a - b).reverse());
//If it returns less than 0 then sort 'a' before 'b'
//If it returns greater than 0 then sort 'b' before 'a'
//If it returns 0 then unchanged with respect to each
// other

console.log("b".localeCompare("z"));
const myFriends = ["John", "Paul", "George", "Ringo"];

console.log(
  myFriends.sort((a, b) => {
    return a.localeCompare(b);
  })
);

function sortByAuthors(inventory) {
  return inventory.sort((a, b) => a.author.localeCompare(b.author));
}

console.log(sortByAuthors(booksInventory));

//create an array with all the genres
// create a set from genres array
//expand the set and return the array

let geners = booksInventory.map((book) => book.genre);
console.log(geners);

const uniqueGenre = new Set(geners);
console.log(uniqueGenre);

console.log(Array.from(uniqueGenre));
console.log([...uniqueGenre]);

//For . For in , For of , For each

for (let i = 0; i <= 10; i++) {
  //Print even numbers
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//For In => Objects
const obj = { a: 1, b: 2, c: 3 };
const array = [10, 20, 30];

for (let key in obj) {
  console.log(key);
  console.log(obj[key]);
}

for (let item in array) {
  console.log(item);
  // console.log(array[item])
}

//For Of
// Arrays
// strings
// set
// map
// NodeList

let myName = "ARjit Verma";

for (let item of array) {
  console.log(item);
}

for (let char of myName) {
  console.log(char);
}

let paraItems = document.querySelectorAll("p");
console.log(paraItems);

for (let item of paraItems) {
  item.addEventListener("click", () => {
    console.log("Clicked");
  });
}

//For Each
array.forEach((item, index, array) => {
  console.log("Hello");
  console.log(item);
});

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Filter out all the even numbers
// then double them and then
//sum of all numbers

//Chaining Properties in arrays

let filteredArray = myNumber.filter((item) => item % 2 === 0);
let doubledArray = filteredArray.map((item) => item * 2);
let sumOfArray = doubledArray.reduce((total, item) => total + item, 0);

const mySum = myNumber
  .filter((item) => item % 2 === 0)
  .map((item) => item * 2)
  .reduce((total, item) => total + item, 0);

console.log(mySum);

// Flat and Flatmaps
const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

console.log(nestedArray.flat());
console.log(nestedArray.flat(2));
console.log(nestedArray.flat(Infinity));

const people = [
  { name: "Alice", hobbies: ["Painting", "Reading", "Cycling"] },
  { name: "Bob", hobbies: ["Chess", "Cycling"] },
  { name: "Charlie", hobbies: ["Reading", "Hiking"] },
];
//   Extract all hobbies into a single array.

// const hobbies = people.map((person) => person.hobbies);
// console.log(hobbies)
// const hobbiesFlat = hobbies.flat(Infinity);
// console.log(hobbiesFlat)

// Flatmap -> performce
//  map operation and then flattens the result 

const hobbies = people.flatMap((person) => person.hobbies);
console.log(hobbies)

let uniqueHobbies = [...new Set(hobbies)];
console.log(uniqueHobbies)

//Ways to create and fill arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

const x = new Array(10);
x.fill("arjit");
console.log(x)
arr1.fill(10);
console.log(arr1)

x.fill("a",1,3)
x.fill("a",-4,x.length)
console.log(x)


// Array.from
const y = Array.from({length:10},()=>1);

const z = Array.from({length:10},(value,index) => index*10+5);
console.log(y) 
console.log(z)  

let str = "Hello World";
let arr5 = Array.from(str);
console.log(arr5)
