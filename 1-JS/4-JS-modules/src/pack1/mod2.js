
console.log('-pack1/mod2.js-');

// var obj={
//     doWork:function(){
//         console.log("im mod2");  
//     }
// }

var APP = APP || {};

(function () {

    APP.mod3.doWork();

    var obj = {
        doWork: function () {
            console.log("im mod2");
        }
    }

    APP.mod2 = obj;

})();