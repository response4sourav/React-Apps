"use strict"

console.log("-this-");


//-------------------------------------------
// function-binding
//-------------------------------------------


/*

    ==> executing function by an object

    2 types

    a. static
    b. dynamic

*/

//-------------------------------------------
//    a. static function-binding
//-------------------------------------------
/* 
function sayNameForAll() {
    console.log("im " + this.name);
}

let p1 = {
    name: 'Nag',
    sayName: sayNameForAll,
    teach: function () {
        console.log(this.name + " teaching .js");
    }
};
let p2 = {
    name: 'Ria',
    sayName: sayNameForAll,
    play: function () {
        console.log(this.name + " playing..");
    }
};

// sayNameForAll(); // error

p1.sayName();
p1.teach();
p2.sayName();
p2.play()

 */

//-------------------------------------------
//    b. dynamic function-binding
//-------------------------------------------

// function doTraining(sub, duration, location) {
//     console.log(`${this.name} , => ${sub} : ${duration} - ${location}`);
// }


// doTraining(); //Error

// let tnr = { name: 'Nag' }
// let newTnr = { name: 'New Tnr' }
// Object.preventExtensions(tnr)
// Object.preventExtensions(newTnr)

//-------------------------
//way-1 : call()
//-------------------------

// doTraining.call(tnr, 'react', 15, 'virtual')

//-------------------------
//way-2 : apply()
//-------------------------
// doTraining.apply(newTnr, ["redux", 3, 'virtual'])

//-------------------------
//way-2 : bind()
//-------------------------

// let newF=doTraining.bind(tnr,'react')
// newF(10,'uinverse')
// newF(15,'virtual')



//---------------------------------------
// summary
//---------------------------------------

/*
function func(){
    console.log(this);  
}

func();  //  this ==> undefined

let o1={name:'One',func:func}  // static function-binding
o1.func();  // this ==> o1

let o2={name:'Two'}
func.call(o2)  // this ==> o2   // dynamic function-binding

*/


//----------------------------------------------------------
// Quiz-1
//----------------------------------------------------------

/*
// let pName="Global"

let person = {
    pName: 'Nag',
    sayName: function () {
        let pName = "Local"
        console.log('im ' + pName); // scope hierarchy data
        console.log('im ' + person.pName) // obj's data
        console.log('im ' + this.pName); // owner of current scope data
    }
};

// person.sayName();
let oldPerson = person;
person = { pName: 'Ria' }
oldPerson.sayName();

*/



//----------------------------------------------------------
// Quiz-2
//----------------------------------------------------------

/*

let tnr = {
    name: 'Nag',
    doTeach: function () {
        console.log(this.name + " teaching .js..");
        let notes = ".js-notes"
        let self = this;  
        let doLearn = function () {
            console.log(this.name + " learning with " + notes + " from " + self.name);
        }
        console.log("teaching ends..");
        return doLearn;
    }
}

let doLearn = tnr.doTeach();
// doLearn(); // error
let emp = { name: 'EMP' }
doLearn.call(emp);

let newTnr = { name: 'Praveen' }
doLearn = tnr.doTeach.call(newTnr)
doLearn.call(emp);


*/


//----------------------------------------------------------------

// Ex.

function sessionStart() {
    function doTeach(sub, duration) {
        console.log(this.name + " teaching " + sub);
        let notes = sub + "-notes";
        let self = this;
        let doLearn = function () {
            console.log(this.name + " learning from " + self.name);
        }
        console.log("teaching ends");
        return doLearn;
    }
    function Trainer(name) {
        this.name = name;
    }
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.work = function () {
        console.log(this.name + " working after teach & learn");
    }
    let tnr = new Trainer('Nag');
    let e1 = new Employee('E1')
    let e2 = new Employee('E2') 
    let doLearn = doTeach.call(tnr, 'react', 15)
    doLearn.call(e1);
    doLearn.call(e2);
    e1.work();
    e2.work();
}
sessionStart();