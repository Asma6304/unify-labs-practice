// MASTER PIN LOGIN

const MASTER_PIN = 9999;
let attempts = 3;
let loggedIn = false;

while(attempts > 0){

let pin = Number(prompt("Enter Master PIN"));

if(pin === MASTER_PIN){

loggedIn = true;
break;

}else{

attempts--;
alert("Incorrect PIN. Attempts left: " + attempts);

}

}

if(!loggedIn){

alert("SYSTEM SELF-DESTRUCT");
throw new Error("Access Denied");

}


// ASCII BANNER

console.log(
"========================\n" +
" Welcome to Virtual Core v1.0\n" +
"========================"
);


// GLOBAL STATE

let balance = 1000;

const UNIT_PRICE = 50;

const secretWord = "matrix";



// MAIN TERMINAL LOOP

while(true){

let command = prompt("[V-CORE]> Type command: (bank, shop, vault, exit)");

switch(command){

// BANK MODULE

case "bank":

while(true){

let bankCmd = prompt("Bank Command (deposit, withdraw, balance, back)");

if(bankCmd === "deposit"){

let amount = parseFloat(prompt("Enter deposit amount"));

balance += amount;

alert("Deposited. New balance: " + balance);

}

else if(bankCmd === "withdraw"){

let amount = parseFloat(prompt("Enter withdraw amount"));

if(amount > balance){

alert("INSUFFICIENT FUNDS");

}else{

balance -= amount;

alert("Withdraw successful. Balance: " + balance);

}

}

else if(bankCmd === "balance"){

alert("Current Balance: " + balance);

}

else if(bankCmd === "back"){

break;

}

}

break;


// SHOP MODULE

case "shop":

let qty = Number(prompt("Enter quantity"));

let discount = 0;

if(qty <= 5){

discount = 0;

}else if(qty <= 10){

discount = 0.1;

}else{

discount = 0.2;

}

let total = qty * UNIT_PRICE;

total = total - (total * discount);

if(total > balance){

alert("Not enough balance");

}else{

balance -= total;

alert("Purchase complete. Remaining balance: " + balance);

}

break;


// VAULT MODULE

case "vault":

alert("Hint: famous sci-fi simulation");

let guess = prompt("Guess the secret word");

if(guess === secretWord){

alert("ACCESS GRANTED\nSecret Message: Welcome to the hidden layer!");

}else{

alert("Wrong word. Returning to main menu.");

}

break;


// EXIT

case "exit":

alert("Shutting down Virtual Core");

break;


// ERROR HANDLING

default:

alert("Unknown command");

}

if(command === "exit"){

break;

}

}