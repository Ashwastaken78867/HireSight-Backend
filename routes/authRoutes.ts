// backend/routes/authRoutes.ts
import express from "express";
import { registerRecruiter, loginRecruiter } from "../controllers/authController";

const router = express.Router();

// Register route (optional, can seed manually instead)
router.post("/register", registerRecruiter);

// Login route
router.post("/login", loginRecruiter);

export default router;
