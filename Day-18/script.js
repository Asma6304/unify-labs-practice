class Pet{

constructor(name,type){

this.name = name;
this.type = type;
this._health = 80;
this.energy = 70;

}


// GETTER

get health(){

return this._health;

}


// SETTER (limit between 0–100)

set health(value){

if(value > 100) value = 100;
if(value < 0) value = 0;

this._health = value;

}


// METHODS

feed(){

this.health += 10;
this.energy += 5;

}


play(){

this.health -= 5;
this.energy -= 10;

}


getStatus(){

return `Health: ${this.health} | Energy: ${this.energy}`;

}

}


// CREATE PET OBJECT

const myPet = new Pet("Fluffy","Dog");


// UI FUNCTIONS

function feedPet(){

myPet.feed();
updateUI();

}

function playPet(){

myPet.play();
updateUI();

}

function showStatus(){

alert(myPet.getStatus());

}

function updateUI(){

document.getElementById("status").innerText = myPet.getStatus();

}