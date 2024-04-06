import { UserRoles } from "@/enum/UserRoles";
import mongoose, { models } from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
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
      default: UserRoles.ADMIN,
    },
  },
  { timestamps: true }
);

const AdminModel =
  models.admin || mongoose.model("admin", adminSchema);
export default AdminModel;
