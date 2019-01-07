"use strict"

console.log('-new-syntax-');


//---------------------------------------------------
// generator-functions
//---------------------------------------------------



// function normalFunc(){
//     let i=0;
//     while(i<10){
//         console.log(i);
//         i++  
//     }
// }
// normalFunc();



// function* genFunc() {
//     console.log("started...");
//     //..
//     console.log("step-1");
//     yield;
//     console.log("step-2");
//     console.log("step-3");
//     yield;
//     console.log("step-4");
//     return;

// }
// genFunc();



// e.g

// function* sumIt() {
//     console.log("started to collect numbers");
//     let x = yield "give me value of X"
//     console.log(x);
//     let y = yield "give me value of Y"
//     console.log(y);
//     let z = yield "give me value of Z"
//     console.log(z);
//     return x + y + z
// }


function* eat() {
    console.log("start eating...");
    let item1 = yield "give me idly";
    console.log("thanks for idly ");
    let item2 = yield "give me sambar";
    console.log(`yummy with ` + item1 + "+" + item2);
}




//---------------------------------------------------
// symbol-type , Iterable objects , for-of loop  
//---------------------------------------------------

/*

    symbol:

    unique & immutable value , used as obj's identifier property

*/

// let menu = ["idly", "vada", 'poori']

// let newMenu = [...menu, "biryani"]
// let [m1, m2, m3] = newMenu;
// for (let m of menu) {
//     console.log(m);
// }

/*

// how to create custom iterable object

let myList = {
    [Symbol.iterator]: function () {
        let n = 0;
        return {
            next: function () {
                n++;
                return { value: n <= 10 ? n : undefined, done: n <= 10 ? false : true }
            }
        }
    }
}

let nums = [...myList];
let [n1, n2, n3] = myList
for (let n of myList) {
    console.log(n);
}


let javaSymbol = Symbol.for('java')
let jsSymbol = Symbol.for('js')


let e1 = { name: 'A', [javaSymbol]: 'java,spring' }
let e2 = { name: 'B', [jsSymbol]: 'js,react' }


if(e1[Symbol.for('java')]){
    console.log("welcome my friend...");  
}


*/

//---------------------------------------------------
// spread operator
//---------------------------------------------------

// function func(a, b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// let nums = [10, 20, 30]
// func(nums[0], nums[1], nums[2])
//or
// func(...nums)

// let max=Math.max(...nums);


//#1



// let arr1 = [1, 2, 3]
// let arr2 = [7, 8, 9]
// let newArr = [...arr1, 4, 5, 6, ...arr2]




// #2


// let o1 = { x: 1, y: 2 }
// let o2 = { y: 3, z: 4 }

// let newO = { ...o2, ...o1 }

//---------------------------------------------------
// de-structuring
//---------------------------------------------------


/* function renderReview(review) {
    return `
        <div>
            <span>${review.stars}</span> &mdash ${review.author}
            <hr/>
            <p>${review.body}</p>
        </div>
    `
}
 */

/* 
function renderReview(review) {
    let stars = review.stars
    let author = review.author
    let body = review.body;
    return `
        <div>
            <span>${stars}</span> &mdash ${author}
            <hr/>
            <p>${body}</p>
        </div>
    `
} */


/* 
function renderReview(review) {
    // let stars = review.stars
    // let author = review.author
    // let body = review.body;
    //or
    let { stars, author, body } = review // de-structuring
    return `
        <div>
            <span>${stars}</span> &mdash ${author}
            <hr/>
            <p>${body}</p>
        </div>
    `
}



let review = { stars: 5, author: 'who@email.com', body: 'bla bla bla' }
let out = renderReview(review)
// console.log(out);

 */


// let person = {
//     name: 'Nag',
//     age: 35
// }

// let myName = person.name;
// let myAge = person.age;

//or

// let { name: myName, age: myAge } = person
// let { name: name, age: age } = person;
//or
// let { name, age } = person; 

// let name, age;
// ({ name, age } = person);


// array de-structuring


// let arr = [10, 20, 30, 40, 50, [60, 70]]

// let n1=arr[0]
// let n2=arr[1];

//or

// let [n1, n2, n3 = 3, , n5, [n6, n7]] = arr;


//---------------------------------------------------
// Obj-literal enhancements
//---------------------------------------------------

/*
var name = "Nag"
var age = 35;

// ES5
var person1 = {
    name: name,
    age: age,
    3: 'three',
    address: 'chennai',
    sayName: function () {
        //
    }
}

// ES6
let addressType = "office"; // home | office | vacation
let person2 = {
    name,
    age,
    [1 + 2]: 'three',
    [addressType + "-address"]: 'chennai',
    sayName() {
        //..
    }
}

*/