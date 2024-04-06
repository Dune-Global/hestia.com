import { UserRoles } from "@/enum/UserRoles";
import mongoose, { models } from "mongoose";

const wardenSchema = new mongoose.Schema(
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
      default: UserRoles.WARDEN,
    },
  },
  { timestamps: true }
);

const WardenModel =
  models.warden || mongoose.model("warden", wardenSchema);
export default WardenModel;
