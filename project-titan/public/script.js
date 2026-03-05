let cart = JSON.parse(localStorage.getItem("unify_cart")) || [];

let allProducts = [];

async function loadProducts(){

const res = await fetch("/api/products");

allProducts = await res.json();

renderProducts(allProducts);

}

function renderProducts(products){

const container = document.getElementById("products");

container.innerHTML = products.map(p => `

<div class="card">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<button onclick="addToCart('${p._id}')">
Add to Cart
</button>

</div>

`).join("");

}


function addToCart(id){

const product = allProducts.find(p => p._id === id);

const existing = cart.find(p => p._id === id);

if(existing){

existing.qty++;

}else{

cart.push({...product, qty:1});

}

saveCart();

updateCartUI();

}


function saveCart(){

localStorage.setItem("unify_cart", JSON.stringify(cart));

}


function updateCartUI(){

const cartDiv = document.getElementById("cart");

cartDiv.innerHTML = cart.map(i => `

<p>${i.name} x ${i.qty}</p>

`).join("");

}


async function checkout(){

const customer = {

name:"Test User",
email:"user@test.com"

};

await fetch("/api/orders",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
customer,
items:cart
})

});

cart=[];

saveCart();

updateCartUI();

alert("Order placed!");

}


document.getElementById("search").oninput = (e)=>{

const text = e.target.value.toLowerCase();

const filtered = allProducts.filter(p =>
p.name.toLowerCase().includes(text)
);

renderProducts(filtered);

};

window.onload = ()=>{
loadProducts();
updateCartUI();
};