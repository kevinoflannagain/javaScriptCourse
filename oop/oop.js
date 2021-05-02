// 4 fundamental principles: abstraction, encapsulation, inheritance, polymorphism
// all ojects linked to prototypes(contain methods...), objs can use methods and properties from them
// 3 ways create prototypes: constructor function technique, es6 classes (just const fns with nicer syntax), object.create

'use strict';

const Person = function (firstName, birthyear) {
    // instance properties
    this.firstName = firstName;
    this.birthyear = birthyear;

    // never do this (method inside constructor fn  - cos copy for every instance)
    // this.calcAge = function () {
    //     console.log(2037 - this.birthyear)
    // };
}

const kev = new Person('kev', 1995)
console.log(kev)

//---------------------------------------------
// 1. new empty obj ({}) is created
// 2. fn is called, this keyword = {} ^^
// 3. {} linked to prototype
// 4. fn auto returns {}
//---------------------------------------------

console.log(kev instanceof Person);


//--------------------------prototypes------------------------
