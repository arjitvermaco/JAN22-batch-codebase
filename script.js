'use strict';
// console.log("Hey!!")
// console.log("How are you!!")
// let db = [1,2,3].map((el)=>{
//    return el*2
// })
// console.log(db)
// console.log("Lets Catch Up!!")
// console.log("Later!!!")

//Our First API call
const countriesContainer = document.querySelector('.countries');
const loader = document.querySelector('.loader');
// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // console.log(this.responseText)
//     // console.log(JSON.parse(this.responseText))
//     const data = JSON.parse(this.responseText);
//     console.log(data[0]);
//     renderData(data[0]);

//     //Get neighbours data
//     const neighbour = data[0].borders[0];

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log('Data2 is', data2);
//       renderData(data2[0]);

//       //get more country
//     });
//   });
// }

// getCountryData('in');

function renderData(data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population).toFixed(
          1
        )} people</p>
      </div>
    </article>
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}
// // setTimeout(() => {
// //     console.log('1 second passed');
// //     setTimeout(() => {
// //       console.log('2 seconds passed');
// //       setTimeout(() => {
// //         console.log('3 second passed');
// //         setTimeout(() => {
// //           console.log('4 second passed');
// //         }, 1000);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);

//   //Promises

//   const myPromise = new Promise((resolve,reject)=>{

//       let randomNum = Math.random() + 1;

//       setTimeout(()=>{
//         if(randomNum > 0.5){
//           resolve("Promise Was SuccessFull")
//         }else{
//           reject("Promise Failed!!!")
//         }

//       },2000)
//   })

//   myPromise.then((data)=>{console.log(data)}).catch(err => {console.log(err)})

// Load a user's profile from a server.
// Once the profile is loaded, fetch the user's posts.
// After the posts are fetched, load comments for the first post.

//Fetch

// fetch('https://restcountries.com/v3.1/alpha/in').then((res)=>{
//   return res.json()
// }).then(data => {console.log(data)})

// fetch('https://v2.jokeapi.dev/joke/Programming').then((response)=>{
//   console.log(response)
//   if(!response.ok){
//     throw new Error("Network Response was not OK!!")
//   }
//    return response.json()
// }).then(data =>{
//     console.log("Data recieved from server", data)
// }).catch(error => console.error("Failed to fetch data",error))

const getCountryData = country => {
  //Country 1
  fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      renderData(data[0]);
      const neighbour = data[0].borders[0];

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Country not found ${response.status}`);
      }
      return response.json();
    })
    .then(data => renderData(data[0]))
    .catch(err => console.log(err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
      loader.style.opacity = 0;
    });
};

// getCountryData('in');

let api_key = '628324115113111858438x74715';

function getUserLocation() {
  //  navigator.geolocation.getCurrentPosition((position)=>{
  //     console.log(position)
  //  },(err)=>{
  //   console.error(err)
  //  })

  // return new Promise(function (resolve, reject) {
  //   navigator.geolocation.getCurrentPosition(
  //     postion => resolve(postion),
  //     err => reject(err)
  //   );
  // });

  const locationPromise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      postion => {
        resolve(postion);
      },
      err => {
        reject(err);
      }
    );
  });

  return locationPromise;
}

const whereAmI = function () {
  getUserLocation()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      console.log('Lat', lat);
      console.log('Lang', lng);
      return fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=${api_key}`);
    })
    .then(res => {
      if (!res.ok) throw new Error('Problem with geolocation api!!');
      return res.json();
    })
    .then(data => {
      // console.log(data)
      const userCountry = data.country.slice(0, 2).toLowerCase();
      return fetch(`https://restcountries.com/v3.1/alpha/${userCountry}`);

      //Make country api call
    })
    .then(res => {
      if (!res.ok) throw new Error('Problem with Country api!!');
      return res.json();
    })
    .then(data => {
      console.log(data[0]);
      renderData(data[0]);
    })
    .catch(err => console.error('error with geolocation', err))
    .finally(() => {
      countriesContainer.style.opacity = 1;
      loader.style.opacity = 0;
    });
};
whereAmI();

const getJsonData = function (url, errorMsg = 'Something when wrong') {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

//  async function getData(){
//     const response = await fetch('https://restcountries.com/v3.1/alpha/in');
//     console.log(response)
//     console.log("After fetch!!!")
//     const data = await response.json()
//     console.log(data)
// }

// getData()

// function getSyncData(){
//   const res =  fetch('https://restcountries.com/v3.1/alpha/in');
//   console.log(res)
//   console.log("Under Fetch!!")
// }

// async function getCountry(){
//   const countryData = await getJsonData('https://restcountries.com/v3.1/alpha/in');
//   console.log(countryData)
// }

function getCountry() {
  const countryData = getJsonData('https://restcountries.com/v3.1/alpha/in');
  console.log(countryData);
}
getCountry();

// getSyncData()

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    // <img></img>
    img.src = imgPath;
    // <img src="imgPath"/>


    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found!!'));
    });
  });
};


// createImage('images/img-1').then(img => {
//   console.log(img);
//   return createImage('images/img-2.jpg')
// }).then(img=>{
//   console.log(img)
// }).catch(err=>console.error(err))

async function loadImage(){
  try{
    let img = await createImage('images/img-1.jpg')
    console.log(img)
  }catch(err){
    console.error(err)
  }
}

loadImage()