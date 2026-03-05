import { fetchCoins } from "./api.js";
import { renderCoins } from "./ui.js";

const container = document.getElementById("dataContainer");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const loading = document.getElementById("loading");
const themeBtn = document.getElementById("themeToggle");

let state = {

coins:[],
favorites:JSON.parse(localStorage.getItem("favorites")) || []

};


// LOAD DATA

async function init(){

loading.style.display="block";

try{

state.coins = await fetchCoins();

render();

}catch{

container.innerHTML = "Failed to load data";

}

loading.style.display="none";

}


// RENDER

function render(){

let list = [...state.coins];

const term = search.value.toLowerCase();

list = list.filter(c => c.name.toLowerCase().includes(term));

if(sort.value==="price"){

list.sort((a,b)=>b.current_price-a.current_price);

}else{

list.sort((a,b)=>a.name.localeCompare(b.name));

}

renderCoins(list,container,state.favorites);

}


// SEARCH

search.addEventListener("input",render);


// SORT

sort.addEventListener("change",render);


// THEME

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

});


// LOAD SAVED THEME

if(localStorage.getItem("theme")==="true"){

document.body.classList.add("dark");

}


// START

init();