var oddNumber = prompt("Pick an odd number between 1 and 50");
while(true) {
    if (oddNumber % 2 !== 0 && oddNumber > 50) {
        prompt("That is not an odd number please try again");
        break;
    }

}
