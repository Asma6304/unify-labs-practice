function startGame(){

let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 5;

let guess;

while(attempts > 0){

guess = Number(prompt("Guess a number between 1 and 100"));

if(guess === randomNumber){

alert("🎉 Correct! You guessed the number!");
return;

}

else if(guess > randomNumber){

attempts--;
alert("Too High! Attempts left: " + attempts);

}

else if(guess < randomNumber){

attempts--;
alert("Too Low! Attempts left: " + attempts);

}

}

alert("Game Over! The number was: " + randomNumber);

}