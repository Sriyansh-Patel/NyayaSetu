import mongoose from "mongoose";
import '@dotenvx/dotenvx/config';

// Primary Connection
export default async function connectDb() {
  // Logic Fix: Check the variable directly, not as a string
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected to primary MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
}

// Multi-tenant / Multi-DB Connection Cache
const connections = {};

export const getDbConnection = (dbName) => {
  if (connections[dbName]) return connections[dbName];

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  const conn = mongoose.createConnection(`${process.env.MONGODB_URI}/${dbName}`);

  conn.on("error", (err) => console.error(`❌ Connection error for DB ${dbName}:`, err));
  conn.once("open", () => console.log(`✅ Connected to specific DB: ${dbName}`));

  connections[dbName] = conn;
  return conn;
};