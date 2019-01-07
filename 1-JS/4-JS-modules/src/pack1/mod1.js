
console.log('-pack1/mod1.js-');

// var obj={
//     doWork:function(){
//         console.log("im mod1");  
//     }
// }

var APP = APP || {};

(function () {

    APP.mod2.doWork();

    var obj = {
        doWork: function () {
            console.log("im mod1");
        }
    }

    let pri = 12;

    APP.mod1 = obj;

})();