"use strict"

console.log('-FP-');


/*


2 ways

How to create function ?

1. function-declaration

-> Named function
-> Function-object created at scope-creation phase
-> always get hoist

2. function-expression

-> anonymous function
-> Function-object created at scope-execution phase


*/

//-------------------------------------------------------
// 1. function-declaration
//-------------------------------------------------------

/* 
console.log(add(12,13));  

function add(n1, n2) {
    return n1 + n2;
}

console.log(add(12,13));   
*/



//-------------------------------------------------------
// 2. function-expression
//-------------------------------------------------------

/* 
// console.log(add(12,13));   // error 
let add = function (n1, n2) {
    return n1 + n2;
}
console.log(add(12,13)); 

 */


//-------------------------------------------------------
// 2. function parameters
//-------------------------------------------------------

/* 
function func(a, b, c, d) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(arguments[3]);
}
func(10, 20, 30, 40)

 */

// e.g

/* 
function sum() {
    let i = 0,
        len = arguments.length,
        result = 0;
    while (i < len) {
        result += arguments[i]
        i++
    }
    return result;
} */



//-------------------------------------------------------
// can we overload function .js ? No
//-------------------------------------------------------


// function getFood() {
//     return "No Food";
// }
// // let getFood=new Function('...')
// function getFood(pay) {
//     if (arguments.length === 0) return "No Food"
//     return "Biryani"
// }
// // getFood=new Function('...')

// console.log(getFood());  


//-------------------------------------------------------
// Function + default-params ( es6 )
//-------------------------------------------------------

/* 
function func(a = 1, b = 2) {

    // if (!a) a = 1
    // if (!b) b = 2

    // a = a || 1
    // b = b || 2

    console.log(a);
    console.log(b);
}

func(undefined, 20)
 */



//-------------------------------------------------------
// Function + rest-param ( es6 )
//-------------------------------------------------------

/* 
function func(a=1, b=2, ...rest) {
    console.log(a);
    console.log(b);
    console.log(Array.isArray(rest));
    console.log(rest);
    console.dir(arguments);  
}
func(10, 20, 30, 40)  
*/



//-------------------------------------------------------
// FP - principles
//-------------------------------------------------------


/*

    functions are first-class values/citizens,
    
    so

    - A function can be stored in a variable 
    - A parameter of a function can be a function
    - The return value of a function can be a function

*/


//-------------------------------------------------------
// A function can be stored in a variable 
//-------------------------------------------------------

/* 

function greet(){
    console.log("Hello..");  
}

let sayHello=greet;
sayHello(); 

*/

//-------------------------------------------------------
//  A parameter of a function can be a function
//-------------------------------------------------------

/*

function greet(f) {
    if (f && typeof f === 'function') {
        console.log("----------------------------");
        f();
        console.log("----------------------------");
        return;
    }
    console.log("i dono , how to greet you");
}

// greet();
let en = function () { console.log("Hello.."); }
greet(en)
greet(function () { console.log("ola..."); })


// e.g

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort();
let asc = function (x, y) { return x - y }
nums.sort(asc)
console.log(nums);  


*/



//-------------------------------------------------------
// - The return value of a function can be a function
//-------------------------------------------------------
/* 

function doTeach() {
    console.log("teaching....js");
    let doLearn = function () { console.log("learning...js"); }
    //doLearn();
    console.log("teaching end");
    return doLearn
}
let doLearnFunc=doTeach();
doLearnFunc()
doLearnFunc();

 */

//-------------------------------------------------------
// Higher-Order-Programming/Function
//-------------------------------------------------------


// function f1() {
//     console.log("before : LOG");
//     console.log('f1()');
//     console.log("after  : LOG");
// }
// f1();



// function f2() {
//     console.log("before : LOG");
//     console.log('f2()');
//     console.log("after  : LOG");
// }
// f2();


//   Around-Advice / Proxy pattern ==> separates cross-cutting concerms from main logic

/* 

function f1() {
    console.log('f1()');
}
function f2() {
    console.log('f2()');
}

// Higher-Order-Programing  , enables function-composition ==> we can build complex algorithms from simple functions

function logAround(f) {
    return function () {
        console.log("before : LOG");
        f();
        console.log("after : LOG");
    }
}

let f1WithLog = logAround(f1)
let f2WithLog = logAround(f2)

 */



//-------------------------------------------------------
// Function closures
//-------------------------------------------------------

/*

A closure is a function having access to the parent scope,
even after the parent function has closed.

*/

/* 
function teach(sub) {
    console.log("teaching " + sub);
    let notes = sub + "-notes";
    let fun = "bla bla bla";
    function learn() {
        console.log("learning with - " + notes);
    }
    //learn();
    console.log("teaching ends...");
    return learn;
}


let learnFunc = teach('.js');
learnFunc()
learnFunc=null; 

*/



//-------------------------------------------------------
// why / where need closures ?
//-------------------------------------------------------

// use-1 : to abstract public have of any module

/*
 
    e.g counter-module

    - count
    - increment()
    - get()

*/

/*
function init() {
    let count = 0; // private to init-scope
    function pri(){}
    function increment() {
        count++
    }
    function get() {
        return count;
    }
    return {
        inc: increment,
        get: get
    }
}

const counter1=init();
const counter2=init();

*/


//-------------------------------------------------------
//  self-executable function  / IIFE ( Im.. Invo..Func.. Exp..)  ==> module pattern
//-------------------------------------------------------

/*

const counter = (function () {
    console.log("counter init...");  
    let count = 0; // private to init-scope
    function increment() {
        count++
    }
    function get() {
        return count;
    }
    return {
        inc: increment,
        get: get
    }
})()

*/


//-------------------------------------------------------
//  Quiz
//-------------------------------------------------------


const arr = [];

for (var i = 0; i < 2; i++) {
    const newF = function () {
        console.log(i);
    }
    arr.push(newF)
}

arr[0]()
arr[1]()

// Try It....


