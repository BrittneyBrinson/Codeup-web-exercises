/**
 * Online Shopping
 * Create a function named freeShipping that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.**
* Examples
* freeShipping({ Shampoo: 5.99, Rubber_Ducks: 15.99 }) ➞ false
* freeShipping({ Flatscreen_TV: 399.99 }) ➞ true
* freeShipping({ Monopoly: 11.99, Secret_Hitler: 35.99, Bananagrams: 13.99 }) ➞ true
*
* Notes
* Ignore tax or additional fees when calculating the total order cost.
*/

function freeShipping(cost){
    let sum = Object.values(cost);
    let pushNum = sum.push(0,0)
    let totalOne = sum[1];
    let totalTwo = sum[0];
    let totalThree = sum[2];
    let freeItems = totalOne + totalTwo + totalThree;
    if (freeItems > 50){
        return true;
    }
    else return false;
}

/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.*/
/**
* * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */
function getBudgets(obj){
    let budgetOne = obj[0].budget;
    let budgetTwo = obj[1].budget;
    let budgetThree = obj[2].budget;
    let bigBudget = budgetOne + budgetTwo + budgetThree
    return bigBudget
}

/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 * /** Examples
 *  *
 *  * >> convertAddressToObject('8626 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 *  * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 *  */

function convertAddressToObject(input){
    let streetNumber = input.substring(0,4);
    let streetName = input.substring(4);
    return {streetNumber, streetName}
}





/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
*/
function totalPets(obj){
    let petOne = obj[0].pets;
    let petTwo = obj[1].pets;
    let petThree = obj[2].pets;
    bigPets = petOne + petTwo + petThree
   return bigPets
}


