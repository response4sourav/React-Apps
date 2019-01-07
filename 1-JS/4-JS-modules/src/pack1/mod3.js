
console.log('-pack1/mod3.js-');

// var obj={
//     doWork:function(){
//         console.log("im mod3");  
//     }
// }

var APP = APP || {};

(function () {

    var obj = {
        doWork: function () {
            console.log("im mod3");
        }
    }

    APP.mod3 = obj;

})();