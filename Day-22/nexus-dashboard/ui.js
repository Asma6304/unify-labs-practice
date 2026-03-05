export function renderCoins(coins,container,favorites){

container.innerHTML = "";

coins.forEach(coin=>{

const card = document.createElement("div");

card.className = "card";

card.innerHTML = `

<h3>${coin.name}</h3>

<p>Price: $${coin.current_price}</p>

<button class="favBtn">

${favorites.includes(coin.id) ? "★ Favorite" : "☆ Add Favorite"}

</button>

`;

container.appendChild(card);

});

}