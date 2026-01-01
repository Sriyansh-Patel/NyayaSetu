// src/db/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDb = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    // UPDATED: connect() no longer accepts deprecated options like useNewUrlParser
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("✅ Connected to MongoDB with Mongoose");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

const connections = {};

export const getDbConnection = (dbName) => {
  if (connections[dbName]) return connections[dbName];

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  // UPDATED: createConnection() also works without the options
  const conn = mongoose.createConnection(`${uri}/${dbName}`);

  // Optional: Add event listeners to debug connection issues specific to this instance
  conn.on("error", (err) => console.error(`❌ Connection error for DB ${dbName}:`, err));
  conn.once("open", () => console.log(`✅ Connected to specific DB: ${dbName}`));

  connections[dbName] = conn;
  return conn;
};