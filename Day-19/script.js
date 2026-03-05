const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.querySelector("#taskList");


// ADD TASK

addBtn.addEventListener("click", () => {

if(input.value === "") return;

const li = document.createElement("li");

li.textContent = input.value;


// TOGGLE COMPLETE

li.addEventListener("click", () => {

li.classList.toggle("completed");

});


// DELETE BUTTON

const delBtn = document.createElement("button");

delBtn.textContent = "Delete";

delBtn.classList.add("deleteBtn");

delBtn.addEventListener("click", (e) => {

e.stopPropagation();
li.remove();

});

li.appendChild(delBtn);

list.appendChild(li);

input.value = "";

});