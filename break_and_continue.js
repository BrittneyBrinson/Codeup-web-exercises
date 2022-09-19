var oddNumber = prompt("Pick an odd number between 1 and 50");

do { console.log("Number to skip is:" + oddNumber)

} while(oddNumber ==! 2 );



for (let x = 1; x < 50 && x > 0; x++){
    console.log("Here is an odd number: " + x--);

}
