(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
let person = {
    firstName: "Brittney",
    lastName: "Brinson",
    heyName:  function sayHello ()
            {console.log("Hello from " + this.firstName + " " + this.lastName)

    }
    };
person.heyName()




    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250 },
         {name: 'George', amount: 320}
     ];
   var hebOffer = 200;
   var ryanPay = shoppers[1].amount;
   var camPay = shoppers[0].amount;
   var gPay = shoppers[2].amount;
   var totalNew = 250 - (0.12 * 250)
   var newTotal = 320 - (0.12 * 320)
if (ryanPay > hebOffer){
    console.log("Hello "+ shoppers[1].name +" You spent: " + ryanPay + ", Congrats! You get the 12% OFF discount!" + " Your new total is: " + totalNew)
}   if (camPay !== hebOffer){
    console.log("Hello " + shoppers[0].name + " You spent: " + camPay + ", And you did not spend enough to qualify for the discount")
    }
     if (gPay > hebOffer){
         console.log("Hello " + shoppers[2].name + " You spent: " + gPay  +", Congrats! You qualify for the 12% OFF discount!" + " Your new balance is: " + newTotal )
     };







    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

var books = [{title:"The Salmon of Doubt",
        author:{firstName:"Jan", lastName:"Brooks"}
    },
        {title:"Atomic Habits",
            author:{firstName:"James", lastName:"Clear"}
        }
            ,{title:"Green Eggs and Ham",
            author:{firstName:"Doctor", lastName:"Sueuss"}
        },
        {title:"The Mastery of Self",
            author:{firstName:"Don Miguel", lastName:"Ruiz"}
        }]

console.log(books[0].author)





    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

books.forEach(function(book){
    console.log(books)
});



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();