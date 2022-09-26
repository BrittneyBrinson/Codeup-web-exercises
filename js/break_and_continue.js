var oddNumber = prompt("Pick an odd number between 1 and 50");
for(oddNumber; oddNumber < 51; oddNumber++) {
    if (oddNumber % 2 === 2) {
        break;
    }
    prompt("The number must be ODD. Try again please.");
    break;
}

for (oddNumber; oddNumber < 51; oddNumber++){
    if(oddNumber === oddNumber){
        continue;}
    console.log("The number to skip is: " + oddNumber)
}

