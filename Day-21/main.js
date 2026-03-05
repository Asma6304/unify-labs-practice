import { saveSettings, loadSettings } from "./settings.js";


const toggle = document.getElementById("themeToggle");
const language = document.getElementById("language");
const status = document.getElementById("status");


let settings = loadSettings();


// APPLY SAVED SETTINGS

if(settings.theme === "dark"){

document.body.classList.add("dark");
toggle.checked = true;

}

language.value = settings.language;

status.innerText = `Language: ${settings.language}`;



// THEME TOGGLE

toggle.addEventListener("change", ()=>{

settings.theme = toggle.checked ? "dark" : "light";

document.body.classList.toggle("dark");

saveSettings(settings);

});


// LANGUAGE CHANGE

language.addEventListener("change", ()=>{

settings.language = language.value;

status.innerText = `Language: ${settings.language}`;

saveSettings(settings);

});