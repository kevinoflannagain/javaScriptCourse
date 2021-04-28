
/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log('jonas')

let firstName = 'Jonas';
console.log('jonas')


let country = 'Ireland'
console.log(country)

let javascriptIsFun = true;
console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);
*/
/*
var job = 'programmer';
job = 'teacher';

lastName = 'oflannagain';

const now = 2021;
const ageKev = now - 1995;
console.log(ageKev * 2);
console.log(ageKev + ' ' + job);

const markWeight = 78;
const markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;
*/
//----------------------challenge 1---------------------------
// let johnWeight = 92;
// let johnHeight = 1.95;
// let johnBMI = johnWeight / johnHeight ** 2;
// console.log(johnBMI);


// let markWeight = 78;
// let markHeight = 1.69;
// let markBMI = markWeight / markHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI);

// console.log(markHigherBMI);

//---------------------------------STRINGs and template literals----------------------------------
/*
const firstname = 'Kev';
const job = 'engineer';
const byear = 1995;
const year = 2021;

const kev = "I'm " + firstname + ', a ' + (year - byear) + ' year old ' + job + '!';
console.log(kev)

//template literal, template string
const kevNew = `I'm ${firstname}, a ${year - byear} year old ${job}!`
console.log(kevNew)

console.log(`normal string`)
console.log('string with \n\
multiple \n\lines')

console.log(`string
multiple
lines`)
*/

//--------------------------if else----------------------
/*
const age = 19;
// const isOldEnough = age >= 18;

if (age >= 18) {
    console.log(`Kev can start driving `)
} else {
    const yearsLeft = 18 - age
    console.log(`Kev is too young. Wait another ${yearsLeft} years`)

}

*/
//------------------------------challenge 2----------------------------------
let johnWeight = 92;
let johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI);


let markWeight = 78;
let markHeight = 1.69;
let markBMI = markWeight / markHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log(markBMI);

console.log(markHigherBMI);

if (markBMI > johnBMI) {
    console.log(`mark's BMI (${markBMI}) is higher than johns(${johnBMI})`)
} else {
    console.log(`john's BMI (${johnBMI}) is higher than marks(${markBMI})`)

}