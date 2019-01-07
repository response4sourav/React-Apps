"use strict"

console.log('-data-types-');

/*
    -------------------------------------
    data-types
    -------------------------------------
    1. simple / primitives ==> values

        a.  undefined
        b.  string
        c.  number
        d.  boolean

    2. complex / reference ==> objects

*/


//-----------------------------------------------------------------
// 1. simple / primitive types ==> values
//-----------------------------------------------------------------

//-----------------------------
// a. undefined
//-----------------------------


// var v;


//-----------------------------
// b. string
//-----------------------------

/*

var name = "Nag";
var subject = 'javascript';

var dynamicString = "the trainer is " + name;
//or  ( es6 ==> string interpolation)
var dynamicString2 = `the trainer is ${name}`;
var multiLineString = `
    line-1
    line-2
`;
var htmlTemplate = `
    <div>
    <h1>${name}</h1>
    </div>
`
*/

//-----------------------------
// c. number
//-----------------------------

// var count = 12;
// var cost = 12.12;


//-----------------------------
// d. boolean
//-----------------------------

// var isFound = true; // false

/*
    // imp-note :

    falsy-values => false,0,"",null,undefined,NAN,
    
    ref : https://dorey.github.io/JavaScript-Equality-Table/

*/




//-----------------------------------------------------------------
// 2. complex / reference types ==> objects
//-----------------------------------------------------------------


/*

how to create object ?

syntax:

var ref = new Constructor()

*/

//-----------------------------
// class
//-----------------------------

// ---------
// ES5 ==> class / constructor
// ---------

/*

function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log("im " + this.name);
    return undefined;
}
Person.prototype.sayAge = function () {
    console.log("im " + this.age + " old");
}

var p1 = new Person('Nag', 35)

*/


// -------------------------
// ES6 ==> class / constructor
// -------------------------

/*

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " old");
    }
}

var p1 = new Person('Nag', 35)
var p2 = new Person('Ria', 3)

*/

//-----------------------------------------------------------------
//  dynamic properties
//-----------------------------------------------------------------

/*
    ==> .js-lang is dynamic language, so

    by default, 
    
    => objects are extensible ,
        i.e we can add new properties as you need 
    => also can delete property if not required with 'delete' keyword

*/

// console.log(Object.isExtensible(p1));
// Object.preventExtensions(p1);
// p1.techSkill = "java,js";


// console.log(Object.isSealed(p1));
// Object.seal(p1);
// p1.techSkill = "java,js";
// delete p1.age;

// console.log(Object.isFrozen(p1));  
// Object.freeze(p1);
// p1.techSkill="java,js"
// delete p1.age;
// p1.age = 0;


//-----------------------------------------------------------------
// literal-style object(s)
//-----------------------------------------------------------------

//-----------------------------
// a. Object
//-----------------------------

var reqConfig = new Object(); // obj-wrapper
reqConfig.url = "http://"
reqConfig.httpMethod = "GET"
reqConfig.onSuccess = function () {
    console.log("im running on success");
}

// or

var newReqConfig = {
    url: "http://",
    httpMethod: 'GET',
    onSuccess: function () {
        console.log("im running on success");
    }
};


//-----------------------------
//  Array / List
//-----------------------------


var arr = new Array();
arr.push("item-1")
arr[1] = "item-2"


//or


var newArr = ["item-1", "item-2"];



//-----------------------------
//  RegExp
//-----------------------------


var re = new RegExp("\\d{4}-\\d{4}-\\d{4}")

// or

var newRe = /\d{4}-\d{4}-\d{4}/;


//-----------------------------
//  Function
//-----------------------------


var add = new Function("n1", "n2", "var result=n1+n2;return result;");


// or


function add(n1, n2) {
    this.result = n1 + n2; return result;
}



//-----------------------------------------------------------------
//  How to access obj's properties?
//-----------------------------------------------------------------

/*

    2 ways

    -> '.' , if property-name dont have space or '-' or digit
    
    else
    
    -> '[]' , for any property

*/

// var person = {
//     name: 'Nag',
//     'home-address': "chennai",
//     1:'one',
//     100:'hundred'
// }

// console.log(person.name)
// console.log(person["home-address"]);  
// console.log(person[1]);  



//-----------------------------------------------------------------


// Quiz


// function Employee(name, age) {
//     this.name = name;
//     this.age = age;
// }

// var e = new Employee("emp1", 35)

