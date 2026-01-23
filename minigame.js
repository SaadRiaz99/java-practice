console.log("lets play a Game")
// let num = prompt("Enter a Number for game ")
// let guessnuum = 55
let guessNum = 55;
let num = Number(prompt("Enter a number for the game")); // Convert to number

while(num !== guessNum) { 
    console.log(" Wrong guess, try again");
    num = Number(prompt("Enter a number for the game")); 
}

console.log(" You have won the game!");