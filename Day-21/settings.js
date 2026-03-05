const KEY = "userSettings";


export function saveSettings(settings){

localStorage.setItem(KEY, JSON.stringify(settings));

}


export function loadSettings(){

const data = localStorage.getItem(KEY);

return data ? JSON.parse(data) : {

theme:"light",
language:"English"

};

}