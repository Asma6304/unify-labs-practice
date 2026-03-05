// USER NAME

const userName = "Asma";

console.log("Welcome " + userName);


// VARIABLES FOR CALCULATIONS

let num1 = 10;
let num2 = 5;


// ARITHMETIC OPERATIONS

let sum = num1 + num2;
let product = num1 * num2;
let remainder = num1 % num2;


console.log("Sum:", sum);
console.log("Product:", product);
console.log("Remainder:", remainder);


// TYPE CHECKING

console.log("Type of num1:", typeof num1);
console.log("Type of userName:", typeof userName);
console.log("Type of sum:", typeof sum);


// MAGIC 8 BALL

const question = "Will I become a great developer?";

console.log(userName + " asked: " + question);


// RANDOM ANSWER

const randomNumber = Math.floor(Math.random() * 5);

let answer = "";

switch(randomNumber){

case 0:
answer = "Yes definitely";
break;

case 1:
answer = "Maybe";
break;

case 2:
answer = "Ask again later";
break;

case 3:
answer = "Don't count on it";
break;

case 4:
answer = "Very likely";
break;

}

console.log("Magic 8 Ball says:", answer);s