const input = document.getElementById("inputText");
const result = document.getElementById("result");


// TITLE CASE FUNCTION

const titleCase = () => {

let text = input.value.trim();

let words = text.split(" ");

let formatted = words.map(word =>
word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
);

result.innerText = formatted.join(" ");

};


// COUNT VOWELS

const countVowels = () => {

let text = input.value.toLowerCase();

let vowels = "aeiou";

let count = 0;

for(let char of text){

if(vowels.includes(char)){

count++;

}

}

result.innerText = "Total Vowels: " + count;

};


// SECRET MESSAGE GENERATOR

const secretMessage = () => {

let text = input.value;

let bannedWords = ["secret","password","code"];

bannedWords.forEach(word =>{

let regex = new RegExp(word,"gi");

text = text.replace(regex,"***");

});

result.innerText = text;

};