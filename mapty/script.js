'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const { latitude } = position.coords; // destructuring instead of position.coords.latitude
            const { longitude } = position.coords;
            console.log(latitude, longitude)
            console.log(`https://www.google.ie/maps/@${latitude},${longitude}`);

            const coords = [latitude, longitude];
            const map = L.map('map').setView(coords, 13);
            // can probably use google maps instead of openstreetmap
            L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            L.marker(coords).addTo(map)
                .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                .openPopup();

        }, function () {
            alert(`Could not get your position`)
        }); // 2 callback, success, error
}