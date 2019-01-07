
"use strict"

console.log("-promise-api-");



// hotel-module
//----------------------------------------------------

let hotel = {
    getFood() {
        // async
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                let food = "Biryani";
                console.log("hotel, resolving promise");
                resolve(food) // event

                // console.log("hotel, reject promise");
                // reject('Sry, No Food') // event

            }, 3000);

        });
        return promise;
    }
}

//----------------------------------------------------



// bar-module
//----------------------------------------------------

let bar = {
    getDrink() {
        // async
        let promise = new Promise((resolve, reject) => {

            setTimeout(() => {
                let drink = "BIRA BEER";
                console.log("bar, resolving promise");
                resolve(drink) // event
            }, 1000);

        });
        return promise;
    }
}

//----------------------------------------------------



// User-module
//----------------------------------------------------

let user = {
    doWork() {
        console.log("user working....");
        console.log("user feels hungry...ordering food on hotel");
        let promise1 = hotel.getFood();
        let promise2 = bar.getDrink();
        console.log("user got promise, defer food-actions to future..");

        let newPromise=Promise.race([promise1,promise2]).then(
            result => {console.log('yummy with half-' + result);return "HALF-BEER"},
            error => console.log('oops => ' + error)
        )

        newPromise.then(result=>{
            console.log("yummy with "+result);  
        })

        console.log('cont..with other work..')
    }
};

user.doWork();

//----------------------------------------------------