"use strict"

console.log('-arrow-function-')


//-------------------------------------------------------
// function-expression
//-------------------------------------------------------

//--------------------
// syntax
//--------------------

// let getPrice = function () {
//     return 100 + 200;
// }


// or


// let getPrice = () => {
//     return 100 + 200;
// }



// let getPrice = (count) => {
//     return count * (100 + 200);
// }

//or

// let getPrice = count => {
//     return count * (100 + 200);
// }



// let getPrice = (count, tax) => {
//     return count * (100 + 200) + tax;
// }

//or

// let getPrice = (count, tax) => count * (100 + 200) + tax;


// let getPrice = (count, tax) => {
//     let cost = count * (100 + 200);
//     let total = cost + tax;
//     return total
// }


//----------------------------------------------------
// why / where we arrow function ?
//----------------------------------------------------

// use-1 : to make compact function-argument


/*

let nums = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
// nums.sort();
// nums.sort(function (x, y) { return x - y })
//or
// nums.sort((x, y) => { return x - y })
//or
nums.sort((x, y) => x - y)

*/


// use-2 : to capture 'this'

/*

    by default , regular-function(s) can be bindable to any object
    statically or dynamically

    but

    arrow-function always belongs to creator-object

*/

/*

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js");
        // let askQues = function (q) {
        //     console.log(this.name + " answering " + q);
        // }
        //or
        let askQues = (q) => {
            console.log(this.name + " answering " + q);
        }
        console.log("teaching ends");
        return askQues;
    }
};

let askQues = tnr.doTeach();
askQues.call(tnr, "Q1")

let enemyTnr = { name: 'Praveen' }
askQues.call(enemyTnr, "Q2")


*/

//----------------------------------------------------
// Quiz
//----------------------------------------------------

/* 
// console.log(this)

let regFunc=function(){
    console.log(this);  
}

let arrFunc=()=>{
    console.log(this);  
}

// regFunc(); 
// arrFunc();


let o1={
    regFunc:regFunc,
    arrFunc:arrFunc
}

o1.regFunc();
o1.arrFunc(); 

*/

//----------------------------------------------------


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed");
//     }
// }

//


// let invoice = {
//     num: 123,
//     process: () => {
//         console.log("INV-" + this.num + " processed");
//     }
// }



// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed partially");
//         return function(){
//             console.log("INV-" + this.num + " processed completly");
//         }
//     }
// }


// let invoice = {
//     num: 123,
//     process: function () {
//         console.log("INV-" + this.num + " processed partially");
//         return ()=>{
//             console.log("INV-" + this.num + " processed completly");
//         }
//     }
// }

// let complete=invoice.process()
// complete();