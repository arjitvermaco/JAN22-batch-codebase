//Numbers

//Coversion
console.log(Number('56'))
console.log(Number('arjit'))
console.log(+'23')

//Parsing
console.log(parseInt('30px'))
console.log(parseInt('e23'))
console.log(parseInt('   2.5rem   '))
console.log(parseFloat('   2.5rem   '))

//Check if a value is NaN
console.log(isNaN(20))
console.log(isNaN('20'))
console.log(isNaN(+'20X'))
console.log(isNaN(23/0))

//Check if a value is a number

console.log(isFinite(20))
console.log(isFinite('20'))
console.log(isFinite(+'20X'))
console.log(isFinite(23/0))


console.log(Number.isInteger(20))
console.log(Number.isInteger('20'))
console.log(Number.isInteger(+'20X'))
console.log(Number.isInteger(23/0))



//Maths and Rounding
console.log(Math.sqrt(25))

console.log(Math.min(5,123,32,53,1,45))
console.log(Math.max(5,123,32,53,1,45))
console.log(Math.max(5,123,'32px',53,1,45))


console.log(Math.PI)

//Find the area of the circle in DOm and 
// append the answer in DOM 
const circle = document.querySelector('.circle')
const style = getComputedStyle(circle)
console.log(style.getPropertyValue('height'))
const circleRadius = parseInt(style.getPropertyValue('width'))/2;
console.log("Circle Radius", circleRadius)

const area = Math.PI * (circleRadius **2);
console.log(area)
let html = `<p>Area of circle: ${parseInt(area)}</p>`
circle.insertAdjacentHTML("afterend",html)

console.log(Math.random())
// between 0 and 1 

const randomInt = (min,max) => (Math.random() * (max-min) +1) + min

console.log(Math.floor(randomInt(10,20)))

//Rounding Int

console.log(Math.round(23.3))
console.log(Math.round(23.9))
console.log(Math.ceil(23.1))
console.log(Math.ceil(23.9))
console.log(Math.floor(23.1))
console.log(Math.floor(23.9))
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));
console.log(Math.ceil(-23.3));

//Remainder Operator
console.log(5%2)
console.log(10%2)

console.log(8/3)

const diameter = 232_343_434_23;
console.log(diameter)

//BigInt

// console.log(2**53-1)
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2**53+1)
// console.log(2**53+2)
// console.log(2**53+3)
// console.log(2**53+4)
// console.log(2**53+10
const bigNum = 20289830237283728378237n;
const num = 23
console.log(bigNum * BigInt(num))
console.log(typeof(466666095457525752699451n))

console.log(20n > 15)
console.log(20n === 20)
console.log(20n == '20')

//Creating Dates

const now = new Date();
console.log(now)

console.log(new Date('Aug 02 2020 18:20:10'))
console.log(new Date('Decenber 24 , 2015'))
console.log(new Date('2020-04-01T10:17:24.185Z'))

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 1, 1));

//JAn 01 : 1970

console.log(new Date(2037,0,0));

const futureDate = new Date(2026,10,8,15,30)
const pastDate = new Date(1970,0,1,0,0,0)
console.log(futureDate)
console.log(futureDate.getFullYear())
console.log(futureDate.getMonth())
console.log(futureDate.getDate())
console.log(futureDate.getDay())
console.log(futureDate.getHours())
console.log(futureDate.getMinutes())
console.log(futureDate.getSeconds())
console.log(futureDate.toISOString())
console.log(futureDate.getTime())
console.log(pastDate)
console.log(pastDate.getTime())


futureDate.setFullYear(2040)
console.log(futureDate)


//Internationalizing Number(Intl)
const cost = 34323423.32

const options = {
    style:'currency',
    currency:'INR'
}

// console.log('US', new Intl.NumberFormat('en-US',options).format(cost))
console.log('INDIA', new Intl.NumberFormat(navigator.language,options).format(cost))

console.log(navigator.language)








