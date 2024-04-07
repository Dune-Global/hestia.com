import mongoose from "mongoose";
import { Gender } from "@/enum/Gender";
import { PropertyType, ShareType, PropertyStatus } from "@/enum/Property";
import LandLordModel from "./landLord";

const googleMapLocationSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

const addressSchema = new mongoose.Schema({
  line1: String,
  line2: String,
  line3: String,
  line4: String,
  city: String,
  stateOrProvince: String,
  postalCode: String,
  googleMapLocation: googleMapLocationSchema,
});

const amenitiesSchema = new mongoose.Schema({
  wifi: Boolean,
  tv: Boolean,
  airConditioning: Boolean,
  pool: Boolean,
  outdoorDining: Boolean,
  exercise: Boolean,
  firstAid: Boolean,
  fireExtinguisher: Boolean,
  smokeAlarm: Boolean,
});

const basicsSchema = new mongoose.Schema({
  guests: Number,
  bedrooms: Number,
  bedsPerRoom: Number,
  bathrooms: Number,
});

const propertySchema = new mongoose.Schema({
  landlord: { type: mongoose.Schema.Types.ObjectId, ref: LandLordModel },
  name: String,
  description: String,
  address: addressSchema,
  propertyType: {
    type: String,
    enum: PropertyType,
  },
  shareType: {
    type: String,
    enum: ShareType,
  },
  amenities: amenitiesSchema,
  images: [String],
  genders: {
    type: String,
    enum: Gender,
  },
  basics: basicsSchema,
  status: {
    type: String,
    enum: PropertyStatus,
    default: PropertyStatus.Pending,
  },
}, { timestamps: true }); // Add this line

const Property =
  mongoose.models.Property || mongoose.model("Property", propertySchema);

export default Property;
