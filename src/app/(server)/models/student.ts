import { UserRoles } from "@/enum/UserRoles";
import mongoose, { models } from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    universityEmail: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: UserRoles.STUDENT
    },
  },
  { timestamps: true }
);

const StudentModel = models.student || mongoose.model("student", studentSchema);
export default StudentModel;
