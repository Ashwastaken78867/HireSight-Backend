import express from "express";
import {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  updateJobApplicationStatus,
  deleteJobApplication,
} from "../controllers/jobApplicationController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

// Create a new application
router.post("/", protect,createJobApplication);

// Get all applications
router.get("/", protect,getAllJobApplications);

// Get single application by ID
router.get("/:id", protect,getJobApplicationById);

// Update status
router.put("/:id/status", protect,updateJobApplicationStatus);

// Delete application
router.delete("/:id", protect,deleteJobApplication);

export default router;
