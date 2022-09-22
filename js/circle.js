(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
           return console.log(3.14 * Math.pow(3,2))
            // TODO: complete this method
            // hint: area = pi * radius^2

            ; // TODO: return the proper value
        },
        logInfo: function (doRounding) {
            if(doRounding < 30)
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(28.26))
        }
    };


    // log info about the circle
    console.log("Raw circle information");
    circle.getArea();
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    var circleTwo = {
        radius: 5,
        doArea: function(){
            return console.log(3.14 * Math.pow(5,2))
        }
    }

    // log info about the circle
    console.log("Raw circle information");
    circleTwo.doArea();
    console.log("Circle information rounded to the nearest whole number " + Math.round(78.5));
})();