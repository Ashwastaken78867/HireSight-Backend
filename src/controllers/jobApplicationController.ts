import { Request, Response } from "express";
import JobApplication, { IJobApplication } from "../src/models/JobApplications";

// 📌 Add a new job application
export const createJobApplication = async (req: Request, res: Response) => {
  try {
    const { candidateName, role, experience, resumeLink, status } = req.body;

    const newApplication: IJobApplication = new JobApplication({
      candidateName,
      role,
      experience,
      resumeLink,
      status,
    });

    await newApplication.save();
    res.status(201).json(newApplication);
  } catch (error: any) {
    res.status(500).json({ message: "Error creating job application", error: error.message });
  }
};

// 📌 Get all job applications
export const getAllJobApplications = async (req: Request, res: Response) => {
  try {
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    res.status(200).json(applications);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching job applications", error: error.message });
  }
};

// 📌 Get single application by ID
export const getJobApplicationById = async (req: Request, res: Response) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.status(200).json(application);
  } catch (error: any) {
    res.status(500).json({ message: "Error fetching job application", error: error.message });
  }
};

// 📌 Update status (e.g., Applied -> Interview -> Offer/Rejected)
export const updateJobApplicationStatus = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.status(200).json(application);
  } catch (error: any) {
    res.status(500).json({ message: "Error updating status", error: error.message });
  }
};

// 📌 Delete application
export const deleteJobApplication = async (req: Request, res: Response) => {
  try {
    const application = await JobApplication.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ message: "Application not found" });
    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Error deleting job application", error: error.message });
  }
};
