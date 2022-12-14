"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var theColor = prompt("What is your favorite color");

function analyzeColor (theColor){
        if (theColor === "blue") {
          alert("blue is the color of the sky");
      } else if (theColor === "red") {
           alert("strawberries are red")
        } else {
           alert("I dont know anything about " + theColor);
        }
}
console.log(analyzeColor(theColor));



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor))
/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
 var analyzeColor = prompt("What is your favorite color");
 switch(analyzeColor){
  case "pink":
     alert("Pink is a very pretty color");
        break;
    default:
        alert(analyzeColor + " is a nice color");
        break;
 }
   console.log(analyzeColor);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var whatNumber = prompt("What is your lucky number?");
function calculateTotal(whatNumber){
    if (whatNumber > 1){
            alert("Sorry but 0 is not a lucky number. No discount for you, please try again");
    }
   if (whatNumber === 1){
        alert("Congratulations! You get a 10% OFF discount!" +" Your new total is " + (0.10 * 100) - 100);
    }
    else if (whatNumber === 2){
        alert("Congratulations! you get a 25% OFF discount!" + " Your new total is " + (0.25 * 100) - 100);
    }
    else if (whatNumber === 3){
        alert("Congratulations! you get a 35% OFF discount!" + " Your new total is " + (0.35 * 100) - 100);
    }
    else if (whatNumber === 4){
        alert("Congratulations! You get a 50% OFF discount!" +" Your new total is " + (0.50 * 100)- 100)
    }
    else if (whatNumber === 5){
        alert("Congratulations! You get a 10% OFF discount!" +" You GET EVERYTHING FREE");
           }
           else {
               alert("Please stop trying to steal. We will call the cops.")
           }
}


        /**
         * TODO:
         * Uncomment the line below to generate a random number between 0 and 5.
         * (In this line of code, 0 is inclusive, and 6 is exclusive)
         *
         * Prompt the user for their total bill, then use your `calculateTotal` function
         *
         * and alerts to display to the user what their lucky number was, what their
         * price before the discount was, and what their price after the discount is.
         */
//Generate a random number between 0 and 6
        var luckyNumber = Math.floor(Math.random() * 6);
        var oldBill = prompt("What is your bill total");
        if(luckyNumber === 1){
            alert("Your lucky number was: " + luckyNumber + " Your price BEFORE the discount is: " + oldBill + " Your NEW total is : " + "$90")
        }
        if(luckyNumber === 2){
            alert("Your lucky number was: " + luckyNumber + " Your price BEFORE the discount is: " + oldBill + " Your NEW total is : " + "$75")
        }
        if(luckyNumber === 3){
            alert("Your lucky number was: " + luckyNumber + " Your price BEFORE the discount is: " + oldBill + " Your NEW total is : " + "$65")
        }
        if(luckyNumber === 4){
            alert("Your lucky number was: " + luckyNumber + " Your price BEFORE the discount is: " + oldBill + " Your NEW total is : " + "$50")
        }
        if(luckyNumber === 5){
            alert("Your lucky number was: " + luckyNumber + " Your price BEFORE the discount is: " + oldBill + " Your NEW total is : " + "0! YOU GET EVERYTHING FREE")
        }


        /**
         * TODO:
         * Write some JavaScript that uses a `confirm` dialog to ask the user if they
         * would like to enter a number. If they click 'Ok', prompt the user for a
         * number, then use 3 separate alerts to tell the user:
         **/
       let smallConfirm = confirm("Would you like to enter a number?");
        if(smallConfirm === true){
            var bigPrompt = prompt("What number would you like to choose?")
        }
       if(bigPrompt % 2 === 0 && bigPrompt > 0){
           alert("This number is even and positive")
       }
       if(bigPrompt % 2 !== 0 && bigPrompt > 0){
           alert("This number is odd")
            alert(bigPrompt + " + 100 " + " = " + (parseInt(bigPrompt) + 100))
      }
      if(bigPrompt < 0){
           alert("This number is negative")
       }
       if(bigPrompt ==! typeof 9){
          alert("That is not a number, please try again")
      }
      else{ alert("That is not a number please try again")};



 /**
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

