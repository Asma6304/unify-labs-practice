# Day 28 – MongoDB Atlas Cloud Deployment

Successfully migrated the local MongoDB database to **MongoDB Atlas Cloud** and connected the Node.js backend to the cloud cluster.

## Tasks Completed

• Created a free MongoDB Atlas Shared Cluster (M0)  
• Configured Network Access using 0.0.0.0/0  
• Created a database user with Read/Write permissions  
• Updated the MongoDB connection string to use Atlas SRV  
• Verified the connection by fetching product data from the cloud  

## Connection String Example

mongodb+srv://username:password@cluster.mongodb.net/unify_labs

## Tech Stack

Node.js  
Express.js  
MongoDB Atlas  
MongoDB Driver  

## Outcome

The backend API now connects to a **cloud-hosted database**, allowing global access and scalable deployment.