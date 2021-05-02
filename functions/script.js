'use strict';


//---------------------------default params------------------------------------
const bookings = [];
// price is input * numPassengers or 199 * nump
const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {

    // because undefined is falsy value (es5 way)
    numPassengers = numPassengers || 1;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('LH123', 2, 800)
createBooking('LH123', 5)
// to skip a default param we want to leave at default
createBooking('LH123', undefined, 1000)

//---------------------------passing arguments vlue vs reference------------------------------------
// js doesnt have passing by reference - when getting reference like oject passed in were actually just passing in a vaule with the adress of the object
const flight = 'LH234';
const kev = {
    name: 'kevin oflannagain',
    passport: 235443
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr ' + passenger.name;

    if (passenger.passport === 235443) {
        alert('Checked in');
    } else {
        alert('Wrong passport');
    }
}

checkIn(flight, kev);
// here flight variable isnt changed, the object is however, the flight is a copy, 
// when objects are copied its just pointing to the same object. primitive type vs
console.log(flight);
console.log(kev);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000)
}

// issues with two fns manipulating same values
newPassport(kev)
console.log(kev);
checkIn(flight, kev);


//---------------------------first class and higher order fns------------------------------------
// Js treats fns as first class citizens aka values. just another type of object
// can call methoed on fns
// higher order fn receives other fn as arg or returns a fn or both

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
};

const UpperFirstWord = function (str) {
    //destructure, spread operator, rest pattern?
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher order fn
const transformer = function (str, fn) {
    console.log(`original string: ${str}`);

    console.log(`Transformed string: ${fn(str)}`);
    console.log(`transformed by: ${fn.name}`);


}
// ----------------------------------callback functions ----------------------------------
transformer('Javascript is the best', UpperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
    console.log('hi')
}
document.body.addEventListener('click', high5);
['jonas', 'martha', 'alice'].forEach(high5);