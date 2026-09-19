import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
import cloudinary from "./config/cloudinary.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const { Pool } = pg;

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5001;

// PostgreSQL / Supabase connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test database connection
app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      success: true,
      message: "Supabase database connected successfully",
      time: result.rows[0].now,
    });
  } catch (error) {
    console.error("Database connection error:", error);

    res.status(500).json({
      success: false,
      message: "Database connection failed",
      error: error.message,
    });
  }
});

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

app.get("/api/cloudinary-test", async (req, res) => {
  try {
    const result = await cloudinary.api.ping();

    res.json({
      success: true,
      message: "Cloudinary connected successfully",
      status: result.status,
    });
  } catch (error) {
    console.error("Cloudinary connection error:", error);

    res.status(500).json({
      success: false,
      message: "Cloudinary connection failed",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
