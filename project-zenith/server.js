const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  await client.connect();
  db = client.db("zenith_cms");
  console.log("Connected to Cloud Database");
}

connectDB();


// GET POSTS
app.get("/api/posts", async (req, res) => {
  const posts = await db.collection("blogs").find().toArray();
  res.json(posts);
});


// CREATE POST
app.post("/api/posts", async (req, res) => {
  const { title, category, content } = req.body;

  const post = {
    title,
    category,
    content,
    date: new Date()
  };

  await db.collection("blogs").insertOne(post);

  res.json({ message: "Post created" });
});


// DELETE POST
app.delete("/api/posts/:id", async (req, res) => {
  const id = req.params.id;

  await db.collection("blogs").deleteOne({
    _id: new ObjectId(id)
  });

  res.json({ message: "Post deleted" });
});


// UPDATE POST
app.patch("/api/posts/:id", async (req, res) => {

  const id = req.params.id;
  const { title, category, content } = req.body;

  await db.collection("blogs").updateOne(
    { _id: new ObjectId(id) },
    { $set: { title, category, content } }
  );

  res.json({ message: "Post updated" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});