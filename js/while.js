var byTwo= 1;
 while(byTwo < 65500){
    console.log(byTwo*=2)

}
var conesToSell = Math.floor(Math.random() * 50) + 50;
//do (this action) while thie (Condition) is true
do { let conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("You want to buy: " + conesBought + " ?" + " There are " + conesToSell + " left in my store")
    if(conesBought > conesToSell){
        console.log("We're all sold out. Thank you come again");
        continue;
    }
    // subtract from the remaining conesToSell variable by the random number generated
    conesToSell -= conesBought;
    if( conesToSell === 0){
        console.log("Yay I sold them all ")
    }

} while(conesToSell > 0);
