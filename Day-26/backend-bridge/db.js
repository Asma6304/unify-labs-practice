const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function connectDB() {

try {

await client.connect();

console.log("Database connected successfully");

const db = client.db("unify_labs");

const products = db.collection("products");

const data = await products.find().toArray();

console.log("Products:");

console.log(data);

} catch (error) {

console.error("Connection failed:", error);

} finally {

await client.close();

}

}

connectDB();