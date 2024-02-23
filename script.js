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

function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText)
    // console.log(JSON.parse(this.responseText))
    const data = JSON.parse(this.responseText);
    console.log(data[0]);
    renderData(data[0]);

    //Get neighbours data
    const neighbour = data[0].borders[0];

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log('Data2 is', data2);
      renderData(data2[0]);

      //get more country
    });
  });
}

getCountryData('in');

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
  countriesContainer.style.opacity = 1;
}
setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('2 seconds passed');
      setTimeout(() => {
        console.log('3 second passed');
        setTimeout(() => {
          console.log('4 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);

  //Promises