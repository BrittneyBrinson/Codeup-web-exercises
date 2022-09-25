var oddNumber = prompt("Pick an odd number between 1 and 50");
for(oddNumber; oddNumber < 51; oddNumber++) {
    if (oddNumber % 2 === 2) {
        prompt("The number must be ODD. Try again please.");

        break;
    }
    console.log("Number to skip is: " + oddNumber)
}

