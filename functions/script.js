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


// -----------------------function to check if contains duplicates-------------------------
function containsDuplicates(a) {
    let duplicates = false;
    let map = {};
    for (let i = 0; i < a.length; i++) {
        if (map[a[i]]) {
            duplicates = true;
            // terminate the loop
            break;
        }
        // add entry in object with the element as key
        map[a[i]] = true;
    }
    return duplicates
}

// -----------------------pair of numbers from a and b that sum to give v?-------------------------

function sumOfTwo(a, b, v) {
    let exists = false;

    let hashTable = {};

    b.forEach((b, index) => hashTable[b] = index);
    let numsIndexes = {};
    for (let i = 0; i <= a.length; i += 1) {
        let currentDifference = v - a[i];
        // console.log(`current dif: ${currentDifference}`);
        if (hashTable[currentDifference] !== undefined) {
            exists = true;
            return exists;
        }
    }
    return exists
}

//----------------------check palindrome------------------------
function checkPalindrome(inputString) {
    rev = inputString.split('').reverse().join('');
    return rev === inputString ? true : false
}


//-------------------adjacent elements largest product-----------------------
function adjacentElementsProduct(inputArray) {
    // let j = i;
    let prod = inputArray[0] * inputArray[1];
    let prev = 0;
    let post = 0;
    for (i in inputArray) {


        prev = i > 0 ? (inputArray[i] * inputArray[i - 1]) : prod
        post = i < inputArray.length ? (inputArray[i] * inputArray[i + 1]) : prod
        if (prod < prev) {
            prod = prev;
        } else if (prod < post) {
            prod = post;
        }

    }
    return prod
}

//-----------------make array consecutive-------------------
function makeArrayConsecutive2(statues) {
    let arr = [];
    for (i = Math.min(...statues); i <= Math.max(...statues); i++) {
        arr.push(i);
    }
    console.log(Math.min(...statues))

    return arr.length - statues.length
}

// ---------------------binary search iterative------------------------
// Iterative function to implement Binary Search
let iterativeFunction = function (arr, x) {

    let start = 0, end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {

        // Find the mid index
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True
        if (arr[mid] === x) return true;

        // Else look in left or right half accordingly
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return false;
}

//----------------------binary search recursive----------------------
let recursiveFunction = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end);
}