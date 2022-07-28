
let username, userGuess;

let range = 2; 
let stage = 1; 
let point = 0;

const generate = (range) => {
  return Math.random() * (range) + 1;
};

const welcome = () => {
  username = prompt("Enter your username: ");
  
  console.log("\nHi " + username + ", Welcome to the number guessing game!");
  userGuess = parseInt(prompt("\nEnter your guess number: "));
};

welcome();

while(true){
  let randomNumber = parseInt(generate(range));
  
  if (userGuess === randomNumber){
    
    range++;
    stage++;
    point++;

    console.log("\n You guessed the number right! \n");
    console.log("The random number generated is: ",randomNumber);
    console.log("\nYou now have ",point,"point");
    
    userGuess = parseInt(prompt("\nHey user you have now moved to stage " + stage + ", guess another number: "));
    
  }else{
    console.log("\nGame over. you guessed incorrectly.\n\nThe number is: " ,randomNumber);
    break;
  }
}
