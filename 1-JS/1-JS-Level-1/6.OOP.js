

"use strict"

console.log("-OOP-");

//-----------------------------------
// class
//-----------------------------------

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

var p = new Person('Nag', 35)

*/


//-----------------------------------
// class , from ES6
//-----------------------------------


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age;
        this.address = 'Universe'
        console.log("Person::constructor()");
    }
    sayName() {
        console.log("im " + this.name);
    }
    sayAge() {
        console.log("im " + this.age + " old");
    }
}

// let p1 = new Person('Nag', 35)


class Employee extends Person {

    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
        console.log("Employee::constructor");
    }
    saySalary() {
        console.log("i wont..");
    }
    askForBonus() {
        return this.salary * 0.02;
    }

}

// let e = new Employee('Nag', 35, 1000.00)

class Boss extends Employee {

    askForBonus() {
        return this.salary * 0.2 + super.askForBonus();
    }

}

let boss = new Boss('Nag', 35, 1000.00);


class Abc {
    static staMethod() {
        console.log("sta method...");
    }
}
Abc.staVar = 1
Abc.staVar2 = 2

Abc.staMethod();


