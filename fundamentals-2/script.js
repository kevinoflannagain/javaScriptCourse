// -------------------------------strict mode----------------------
'use strict'; // must be first line in scripts

// let hasDriversLicense = false;
// const passTest = true;

// // error on purpose - strict mode tells us var is undefined (spelled wrong)
// if (passTest) hasDriverLicense = true
// if (hasDriversLicense) console.log(`i can drive`);

// // these word sreserved in strict mode
// // const interface = `Audio`;
// // const private = 44;

// ----------------------functions---------------------------

// function logger() {
//     console.log(`my name is kev`);
// }

// //calling /running /invoking the function
// logger();


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// ----------------------function declaration ve expressions---------------------------
// parameter is placeholder for actual argument
// function declaration, can actually call fn before declared

// function calcAge1(birthyear) {
//     return 2037 - birthyear;
// }

// const age1 = calcAge1(1995);
// console.log(age1);

// // function expression. can be stored in variable. cant call expression before declared
// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// }

// const age2 = calcAge2(1995)
// console.log(age1, age2);

// ------------------------------------arrow functions--------------------------------------------
// const calcAge2 = function (birthyear) {
//     return 2037 - birthyear;
// }

// // arrow function (special faster fn expression) value returned automatically
// const calcAge3 = birthyear => 2037 - birthyear
// const age3 = calcAge3(1995)
// console.log(age3);

// const yearsToRetire = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retire = 65 - age;
//     // return retire; // need return if more than 1 line
//     return `${firstName} retires in ${retire} years`;

// }
// console.log(yearsToRetire(1995, 'bob'))


// ------------------------------------functions calling other functions--------------------------------------------

// function cutFruit(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruit(apples);
//     const orangePieces = cutFruit(oranges);

//     console.log(apples, oranges);
//     const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice
// }
// console.log(fruitProcessor(2, 3));


// ------------------------------------reveiwing functions--------------------------------------------


// const calcAge = function (birthyear) {
//     return 2037 - birthyear
// }

// const yearsToRetire = function (birthyear, firstName) {
//     const age = calcAge(birthyear);
//     const retire = 65 - age;
//     return retire;
//     // return `${firstName} retires in ${retire} years`;
// }

// yearsToRetire(1995, 'kev')

// ------------------------------------Challenge 1--------------------------------------------

// const ave = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const dolphins = (ave(85, 54, 41));
// const koalas = (ave(23, 34, 27));

// function checkWinner(dolphin, koala) {
//     console.log(dolphin, koala);
//     if (koala >= dolphin * 2) {
//         return `koalas win (${koalas} vs ${dolphins})`
//     } else if (dolphin >= koala * 2) {
//         return `dolphin win (${dolphin} vs ${koala})`
//     } else {
//         return `no winner`
//     }
// }
// console.log(dolphins, koalas);
// console.log(checkWinner(dolphins, koalas))

// ------------------------------------Arrays--------------------------------------------
// only primitive vals immutable, arrays not immutable
// however cant do: friends = ['bob'] after initializing
const friends = ['michael', 'steve', 'peter'];
console.log(friends);

const y = new Array(1990, 1234, 1235);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'jake';
console.log(friends);

const kev = ['michael', friends, 2037 - 1995];
console.log(kev);

// exercise
const calcAge = function (birthyear) {
    return 2037 - birthyear
}

const years = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
console.log(ages)