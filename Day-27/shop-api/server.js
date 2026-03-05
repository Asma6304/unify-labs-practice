const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
const PORT = 5000;

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let db;

app.use(cors());
app.use(express.json());


// CONNECT DATABASE
async function connectDB() {

try {

await client.connect();

db = client.db("unify_labs");

console.log("Database connected");

} catch (error) {

console.error("DB connection error:", error);

}

}

connectDB();


// POST PRODUCT
app.post("/products", async (req, res) => {

try {

const { name, price, stock } = req.body;

const product = {

name,
price,
stock

};

const result = await db.collection("products").insertOne(product);

res.json(result);

} catch (error) {

res.status(500).json({ error: "Failed to add product" });

}

});


// PATCH UPDATE STOCK
app.patch("/products/:id", async (req, res) => {

try {

const id = req.params.id;
const { stock } = req.body;

const result = await db.collection("products").updateOne(
{ _id: new ObjectId(id) },
{ $set: { stock: stock } }
);

res.json(result);

} catch (error) {

res.status(500).json({ error: "Update failed" });

}

});


// DELETE PRODUCT
app.delete("/products/:id", async (req, res) => {

try {

const id = req.params.id;

const result = await db.collection("products").deleteOne(
{ _id: new ObjectId(id) }
);

res.json(result);

} catch (error) {

res.status(500).json({ error: "Delete failed" });

}

});


// SERVER START
app.listen(PORT, () => {

console.log(`Server running on port ${PORT}`);

});