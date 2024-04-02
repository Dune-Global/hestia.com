import { UserRoles } from "@/enum/UserRoles";
import mongoose, { models } from "mongoose";

const landLordSchema = new mongoose.Schema(
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
      default:UserRoles.LANDLORD
    },
  },
  { timestamps: true }
);

const LandLordModel =
  models.landLord || mongoose.model("landLord", landLordSchema);
export default LandLordModel;
