'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout{
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords,distance,duration){
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}


class Running extends Workout{
  type = 'running'
  constructor(coords,distance,duration,cadence){
    super(coords,distance,duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription()
  }

  calcPace(){
    this.pace = this.distance / this.duration;
    return this.pace
  }
}

class Cycling extends Workout{
  type = 'cycling'
  constructor(coords,distance,duration,elevationGain){
    super(coords,distance,duration);
    this.elevationGain = elevationGain;
    this.calcSpeed()
    this._setDescription()
  }

  calcSpeed(){
    
    this.speed = this.distance / (this.duration/60)
    return this.speed
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);

// console.log(run1)
// console.log(cycling1)


class App {
  #map;
  #mapZoomLevel = 15;
  #mapEvent;
  #workouts = [];

  constructor() {
    //get user position

    this._getPosition();

    form.addEventListener('submit',this._newWorkout)
    inputType.addEventListener('change',this._toggleElevationField)
  }


  _toggleElevationField(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
  
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this._loadMap(position);
        },
        () => {
          alert('Cannot Load your position!!');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];
    console.log(coords);
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    this.#map.on('click',this._showForm.bind(this))
  }

  _showForm(mapE){
    console.log("Map was clicked") ;
    console.log(mapE);
    this.#mapEvent = mapE;
    form.classList.remove('hidden')
    inputDistance.focus()
  }

  _newWorkout(event){
    event.preventDefault()
    console.log("New workout envoked!!!");

    const type = inputType.value;
    const distance = Number(inputDistance.value);
    const duration = +inputDuration.value
    const {lat,lng} = this.#mapEvent.latlng
    //if workout is cycling crate a cycling obj
    if(type === 'cycling'){
      const elevation = +inputElevation.value;

      // Create a new Cycling object from cycling class
      workout = new Cycling([lat,lng] , distance, duration,elevation)
    }

    if(type === 'running'){
      const cadence = +inputCadence.value;

      // Create a new Running object from Running class
      workout = new Running([lat,lng], distance, duration,cadence)
    }

    //Add workout to array

    this.#workouts.push(workout);
    console.log(this.#workouts)



  }

}

const app = new App();
