
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
/*
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
*/

//--------------------type conversion and coercion---------------------------
//can convert to number, string, boolean
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('kev')) // give NaN
// console.log(String(23), 23) // give NaN

// //type coercion + auto converts to string
// console.log('i am ' + 23 + ' years old')

// //type coercion - auto converts to number
// console.log('23' - '10' - 3)

// let n = '1' + 1;
// n = n - 1;
// console.log(n) // n is a number 10

//--------------------truthy and falsy values---------------------------
// 5 falsy vals: 0, '', undefined, null, NaN
//will become false when converted to boolean
// everything else converts to true
// console.log(Boolean({})) // empty object converts to true

// ------------------------------equality operators == / === -------------------------
// always use ===
// const age = 18;
// if (age === 18) console.log(`you just became an adult`);

// // const fav = prompt(`Whats your fav number`);
// const fav = Number(prompt(`Whats your fav number`));
// console.log(fav)
// console.log(typeof fav) // the prompt returns a string unless converted

// if (fav === 23) {
//     console.log('cool, 23 is a number')
// } else if (fav === 7) {
//     console.log(`7 is also a cool number`)
// } else {
//     console.log(`number isn't 23 or 7`)
// }

// ------------------------------logical operators-------------------------

// const hasDriverLicense = true;
// const hasGoodVision = false;

// if (hasDriverLicense && hasGoodVision) {
//     console.log(`can drive`);
// } else {
//     console.log(`cant drive safely`);
// }

// -----------------------------challenge 3---------------------------------

// dolphinScore = (96 + 108 + 89) / 3
// koalaScore = (88 + 91 + 110) / 3
// console.log(`dolphins: ${dolphinScore}, koalas: ${koalaScore}`);

// if (dolphinScore > koalaScore && dolphinScore >= 100) {
//     console.log(`dolphins win ${dolphinScore} : ${koalaScore}`)
// } else if (koalaScore > dolphinScore && koalaScore >= 100) {
//     console.log(`koalas win ${koalaScore} : ${dolphinScore}`)
// } else if (dolphinScore >= 100) {
//     console.log(`draw`);
// } else {
//     console.log(`no one`);
// }

// ---------------------- switch statement -------------------
// const day = `monday`

// switch (day) {
//     case `monday`:
//         console.log(`go to code meetup`);
//         break;
//     case `tuesday`:
//         console.log(`make video`);
//         break;
//     case `wed`:
//     case `thurs`:
//         console.log(`write code`);
//         break
//     case `fri`:
//         console.log(`review`);
//         break;
//     case `sat`:
//     case `sun`:
//         console.log(`review`);
//         break;
//     default:
//         console.log(`not valid day`);
// }