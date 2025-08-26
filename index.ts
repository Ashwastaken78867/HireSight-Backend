import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import jobApplicationRoutes from "./routes/jobApplicationRoutes";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Job Application Routes
app.use("/api/applications", jobApplicationRoutes);
// Auth Routes
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
