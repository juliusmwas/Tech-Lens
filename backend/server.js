// backend/server.js
import dotenv from "dotenv";
dotenv.config(); // MUST be at the top

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";

// TEMP: check if env variables are loaded
console.log("JWT_SECRET =", process.env.JWT_SECRET);

if (!process.env.JWT_SECRET) {
  console.error("⚠️ JWT_SECRET is not defined in .env! Server will not start.");
  process.exit(1);
}

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Static folder for uploaded images
app.use("/uploads", express.static("uploads"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/articles", articleRoutes);

// Test route
app.get("/", (req, res) => res.send("TechLens backend 🚀"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
