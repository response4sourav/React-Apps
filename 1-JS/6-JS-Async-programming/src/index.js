

"use strict";

import 'bootstrap/dist/css/bootstrap.css'
import {} from './promise-api'



//#1


// function foo(){}
// function bar(){foo()}
// function baz(){bar()}
// baz()


// #2


// function foo(){throw new Error('oops')}
// function bar(){foo()}
// function baz(){bar()}
// baz()


// #3

// function foo(){
//     foo()
// }
// foo()


// #4

// function longRunning(){
//     var i=0;
//     while(i<10){
//         console.log("im long...");
//         i++;
//     }
// }
// function shortRunning(){
//     console.log("im short...");  
// }

// longRunning();
// shortRunning();



// #5

// on event , how .js-runtime execute function ?

/*

    <button class="veg">veg-1</button>
    <button class="veg">veg-2</button>
    <button class="non-veg">non-veg</button>

*/
/* 
console.log("init......");

$.on('.veg','click',function vegHandler(e){
    console.log('handling event on .veg elements');  
});
$.on('.non-veg','click',function nonVegHandler(e){
    console.log('handling event on .non-veg elements'); 
})
console.log('cont..with other work...')

function longRunning(){
    var i=0;
    while(i<10){
        console.log("im long...");
        i++;
    }
}
longRunning(); */


//------------------------------------------------
// IO operations  e. n/w request , read/write locl storage , ...
//------------------------------------------------

/*

console.log('init....')

// IO i.e n/w call
setTimeout(function timeout(){
    console.log('process/consume IO outcome..');  
},4000);

console.log('cont..with other work..')
function longRunning(){
    var i=0;
    while(i<10){
        console.log("im long...");
        i++;
    }
}
longRunning();


*/


//------------------------------------------------


// Quiz

/*
function teach() {
    let tnrName = "Nag"; // will get move to 'heap' end of teach
    try {
        console.log(tnrName + "-teaching .js");
        //throw new Error('js-error')
        setTimeout(function () {
            console.log(tnrName + " teaching react.js");
            //throw new Error('react-error')
            console.log("teaching react.js ends");
        }, 3000);
        console.log("teaching .js ends");
    } catch (e) {
        console.log("i caught => " + e.message);
    }
}

teach();

*/

