const output = document.getElementById("output");


// MOCK TASK DATABASE

const tasks = [

{ name:"Portfolio Website", status:"Completed" },
{ name:"Weather App", status:"Pending" },
{ name:"Chat Application", status:"Completed" },
{ name:"E-commerce UI", status:"Pending" }

];


// MOCK PRICE DATA

const prices = [100,200,300,400];


// MOCK EXPENSE DATA

const expenses = [500,300,200,400];



// FILTER TASKS

function filterTasks(){

const completed = tasks.filter(task => task.status === "Completed");

const pending = tasks.filter(task => task.status === "Pending");

output.innerHTML =

"<b>Completed:</b> " +
completed.map(t => t.name).join(", ")
+
"<br><br><b>Pending:</b> " +
pending.map(t => t.name).join(", ");

}



// MAP PRICES WITH TAX

function calculateTax(){

const taxRate = 0.18;

const finalPrices = prices.map(price => price + price * taxRate);

output.innerHTML =

"<b>Prices with Tax:</b><br>" + finalPrices.join(", ");

}



// REDUCE TOTAL BUDGET

function totalBudget(){

const total = expenses.reduce((sum,value)=> sum + value,0);

output.innerHTML =

"<b>Total Company Budget:</b> $" + total;

}