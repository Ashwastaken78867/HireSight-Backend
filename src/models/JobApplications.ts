import mongoose, { Schema, Document } from "mongoose";

export interface IJobApplication extends Document {
  candidateName: string;
  role: string;
  experience: number;
  resumeLink: string;
  status: "Applied" | "Interview" | "Offer" | "Rejected";
  createdAt: Date;
}

const JobApplicationSchema: Schema = new Schema(
  {
    candidateName: { type: String, required: true },
    role: { type: String, required: true },
    experience: { type: Number, required: true },
    resumeLink: { type: String, required: true },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<IJobApplication>(
  "JobApplication",
  JobApplicationSchema
);
