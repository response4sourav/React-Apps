"use strict"

console.log('-index.js-');

const greetMod = require('dec-greet')
greetMod.greet('en')
greetMod.greet('es')


let arr1 = [1, 2, 3]
let arr2 = [3, 4, 5]

var lodash = require('lodash');

let diff = lodash.difference(arr1, arr2);
console.log(diff);  


// import primaryItem,{item1,item2} from './hotel/menu'
// console.log(primaryItem)
// console.log(item1);  
// console.log(item2);  


// import primaryItem,{item1 as veg,item2 as nonVeg} from './hotel/menu'
// console.log(primaryItem)
// console.log(veg);  
// console.log(nonVeg);  


import * as items from './hotel/menu';
console.log(items.default);  
console.log(items.item1); 
console.log(items.item2); 

