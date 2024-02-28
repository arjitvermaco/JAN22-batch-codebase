'use strict';

// const private = 'some'

// const Person = function(firstName,birthYear){
//   this.firstName = firstName;
//   this.birthYear = birthYear

// }

// const arjit = new Person("Arjit",1991)
// console.log(arjit)

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const adarsh = new Person("Adarsh", 1996)
// const rahul = new Person("Rahul", 1997)
// const rishabh = "Rishabh"

// console.log(rahul instanceof Person)
// console.log(rishabh instanceof Person)


// Person.hey = function(){
//   console.log("Hey 👋")
//   console.log(this)
// }

// Person.hey()

// // console.log(arjit.hey())

// //Prototypes


// // const myArr = new Array()


// Person.prototype.calcAge = function(){
//   console.log(2024-this.birthYear)
// }


// console.log(Person.prototype)

// arjit.calcAge()
// rahul.calcAge()

// console.log(arjit.__proto__)
// console.log(arjit.__proto__ === Person.prototype);
// console.log(arjit.prototype)

// Person.prototype.species = "Home Sapiens"

// console.log(arjit.species)

// const myArr = [23,34,534,23,55,2,232] //new Array

// console.log(myArr.__proto__ === Array.prototype)

// console.log(myArr.__proto__)
// console.log(myArr.__proto__.__proto__)


class PersonCl{
  constructor(fullName,birthYear){
    this.fullName = fullName
    this.birthYear = birthYear
  }
  calcAge(){
    console.log(2024 - this.birthYear)
  }
  greet(){
    console.log(`Hey!! ${this.fullName}`)
  }

  get age(){
    return 2024 - this.birthYear
  }

  set fullName(name){
    if(name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`)
  }

  get fullName(){
    return this._fullName
  }

}

const aman = new PersonCl('Aman Singh', 1996);
console.log(aman)
aman.calcAge()
console.log(aman.age)

console.log(aman.__proto__ === PersonCl.prototype)
aman.greet()