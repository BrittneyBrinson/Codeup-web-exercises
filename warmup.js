




function stringReverse (str){
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    return joinArray
};
stringReverse();


    for(let x = 1; x < 101; x++){
        if (x % 3 === 0){
            console.log("Fizz " + x)
        }
        if(x % 5 === 0){
            console.log("Buzz " + x)
        }
        if (x % 5 === 0 && x % 3 === 0){
            console.log("FizzBuzz " + x)
        }
         else if (x % 5 !== 0 && x % 3 !== 0){
             console.log("No FizzBuzz for you " + x)
        }
};

//Shuffle an array: Write a function to shuffle an array to a completely and entirely random order.//



