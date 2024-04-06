// Import axios
import axios from "axios";

// Define BASE_URL
const BASE_URL = '';

axios.defaults.baseURL = BASE_URL;

// Helper function to get Landlord by ID
export const getLandlordById = async (landLordId: number) => {
  try {
    const response = await axios.get(``);
    return response.data;
  } catch (error) {
    console.error("Error getting landlordId: ", error);
    throw error;
  }
};
