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

// const friends = ['michael', 'steve', 'peter'];
// console.log(friends);

// const y = new Array(1990, 1234, 1235);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'jake';
// console.log(friends);

// const kev = ['michael', friends, 2037 - 1995];
// console.log(kev);

// // exercise
// const calcAge = function (birthyear) {
//     return 2037 - birthyear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
// console.log(ages)

// // ------------------------------------Array operations--------------------------------------------
// // push, unshift, pop, shift, indexOf, includes
// const friends = ['michael', 'steve', 'peter'];
// friends.push('jay') // push adds to end or array. also return length of new array
// console.log(friends)

// friends.unshift('john'); // element to start of array
// console.log(friends)

// friends.pop(); // returns removed element (removes from end)
// console.log(friends)

// friends.shift(); // removes first element
// console.log(friends.indexOf('steve'))

// console.log(friends.includes('steve')) //  true if includes. tests with strict equality ===


// -------------------------------------------challenge 2---------------------------------------------------

// const betterCalc = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// }


// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }



// console.log(calcTip(100))

// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// console.log(tips) 

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(total)


// -------------------------------------------objects---------------------------------------------------
// key value pairs aka properties

// object literal syntax
// const kev = {
//     firstName: 'kev',
//     lastName: 'flannagain',
//     age: 2037 - 1991,
//     job: 'engineer',
// }

// -------------------------------------------dot vs bracket notation---------------------------------------------------
// const kev = {
//     firstName: 'kevin',
//     lastName: 'oflannagain',
//     friends: ['steve', 'mike', 'niamh'],
//     age: 2037 - 1991,
//     job: 'engineer',
// }

// console.log(kev);
// console.log(kev.lastName);
// console.log(kev['lastName']);
// console.log(kev['lastName']);
// const nameKey = 'Name';
// console.log(kev['first' + nameKey]);


// const interest = prompt('what do you want to know about kev? choose between firstName, lastName')
// console.log(interest)
// console.log(kev.interest) // gives undefined
// console.log(kev[interest])

// kev.location = 'ireland'
// kev['twitter'] = '@kev'
// console.log(kev)

// console.log(`${kev.firstName} has ${kev.friends.length} and his best friend is ${kev.friends[0]}`)

// -------------------------------------------object methods---------------------------------------------------

// const kev = {
//     firstName: 'kevin',
//     lastName: 'oflannagain',
//     birthyear: 1995,
//     friends: ['steve', 'mike', 'niamh'],
//     job: 'engineer',
//     hasDriversLicense: true,

//     // calcAge: function (birthyear) {
//     //     return 2037 - birthyear;
//     // }
//     // calcAge: function () {
//     //     return 2037 - this.birthyear;
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthyear
//         return this.age;
//     },
//     // ------------------------------------------challenge---------------------------------------------------

//     getSummary: function () {
//         return `kev is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`
//     }
// }

// console.log(kev.calcAge()) // here only need to do calculation once then its stored in age
// console.log(kev.age)
// console.log(kev.age)
// console.log(kev.age)
// console.log(kev.age)


// console.log(kev.getSummary())
// // console.log(kev['calcAge'](1995))


// ------------------------------------------challenge 3---------------------------------------------------
// const mark = {
//     fullName: 'mark miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// }
// const john = {
//     fullName: 'john smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// }

// console.log(`johns BMI ${john.calcBMI()} is ${john.calcBMI() > mark.calcBMI() ? 'higher' : 'lower'} than marks ${mark.calcBMI()}`)

// ------------------------------------------loops---------------------------------------------------
