import mongoose from "mongoose";

export const monogoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log("Connected to MongoDB");
  } catch (error) {
    return console.log("Error connecting to MongoDB", error);
  }
};
