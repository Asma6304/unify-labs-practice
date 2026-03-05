export async function fetchCoins(){

try{

const res = await fetch(
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20"
);

if(!res.ok) throw new Error("API Error");

return await res.json();

}catch(error){

console.error(error);
throw error;

}

}