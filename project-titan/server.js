const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("titan_store");
  console.log("Connected to MongoDB Atlas");
}

connectDB();


// GET PRODUCTS
app.get("/api/products", async (req, res) => {

  const { category, search } = req.query;

  let query = {};

  if (category) query.category = category;

  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  const products = await db.collection("products").find(query).toArray();

  res.json(products);

});


// SAVE ORDER
app.post("/api/orders", async (req, res) => {

  const { customer, items } = req.body;

  const order = {
    customer,
    items,
    status: "pending",
    createdAt: new Date()
  };

  const result = await db.collection("orders").insertOne(order);

  res.json({ orderId: result.insertedId });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});