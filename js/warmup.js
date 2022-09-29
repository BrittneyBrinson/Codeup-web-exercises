




//function stringReverse (str){
//    var splitString = str.split("");
//    var reverseArray = splitString.reverse();
//    var joinArray = reverseArray.join("");

//    return joinArray
//};
//stringReverse();


//    for(let x = 1; x < 101; x++){
//        if (x % 3 === 0){
//            console.log("Fizz " + x)
//        }
//        if(x % 5 === 0){
//            console.log("Buzz " + x)
//        }
//        if (x % 5 === 0 && x % 3 === 0){
//            console.log("FizzBuzz " + x)
//        }
//         else if (x % 5 !== 0 && x % 3 !== 0){
//             console.log("No FizzBuzz for you " + x)
//        }
//};
//Create a function to sort the array from lowest to highest. Make sure the function accepts an array and returns an array.
//function takeArray ([x]){
//    return [x.reverse]

//}
//takeArray([]);
//1.Write a function to return an array of only the Even numbers from an array with the numbers 1 through 10
// example input: [1,2,3,4,5] expected output: [2,4]
// using .filter() method to iterate over the given array
// Look to see if each number doesn't have a remainder when divided by 2 (use modulo%)
//the filter method will only return even numbers in a new array
//var randomArray = [1,2,3,4,5,6,7,8,9,10];
//const evenNumbers = randomArray.filter(number => {
//    return number % 2 === 0;
//})
//console.log(evenNumbers);





// 2.Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string to each of the objects. Return the new array of objects. Don’t mutate the original array.
function arrayOfObjects(x){
    return x.push("Asia") ;


}
arrayOfObjects()

