console.log("hello");

// let triangle = {
//   base: 4,
//   height: 3,
//   getHypo: function () {
//     return this.height ** 2 + this.base ** 2;
//   },
// };

// let triangle2 = {
//   base: 5,
//   height: 7,
//   getHypo: function () {
//     return this.height ** 2 + this.base ** 2;
//   },
// };

// let triangle3 = {
//   base: 2,
//   height: 3,
//   getHypo: function () {
//     return this.height ** 2 + this.base ** 2;
//   },
// };

// Class : But a object factory

let usr = {
  name: "Arjit",
  email: "arjit@somethings.com",
};
console.log(usr);

class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }

  getHype() {
    return this.height ** 2 + this.base ** 2;
  }
}

const triangle1 = new Triangle(3, 4);
console.log(triangle1);
console.log(triangle1.getHype());

const triangle2 = new Triangle(4, 5);
console.log(triangle2);
console.log(triangle2.getHype());

// class Car {
//     constructor(brand,make){
//         this.brand = brand;
//         this.make = make;
//     }

//     info(){
//         console.log(`This is a ${this.brand} and ${this.make} car!!`)
//     }
// }

// const myCar = new Car('Hyundai','Venue');
// console.log(myCar)
// myCar.info()

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  honk() {
    console.log("Beep Beep!!");
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
    this.wheels = 4;
  }

  playMusic(){
    console.log("Starting music!!!")
  }
}

const myCar = new Car('Maruti','Swift');
myCar['brand'] = "Tata"
console.log(myCar)
myCar.honk();
myCar.playMusic();

const myVehicle = new Vehicle('Tata');
console.log(myVehicle)
myVehicle.honk()
// myVehicle.playMusic()

class Person{
    constructor(name){
        this._name = name
    }

    get name(){
        return this._name.toUpperCase()
    }

    set name(newName){
        if(newName.length > 3){
            this._name = "Mr " + newName
        }else{
            console.log("name must be 3 characters")
        }
    }
}

const person = new Person("John")
console.log(person.name)

person.name = 'Arjit'
console.log(person.name)
