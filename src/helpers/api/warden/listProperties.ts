import { PropertyStatus } from "@/enum/Property";
import axios from "axios";

export const getProperties = async (status: PropertyStatus) => {
  try {
    const response = await axios.get(`/api/properties/warden?status=${status}`);

    return response;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
