// Import axios
import axios from "axios";

const BASE_URL = '';

axios.defaults.baseURL = BASE_URL;

// Helper function to update landlord
export const updateLandlord = async (landLordId: string, data: any) => {
  try {
    const response = await axios.put(
      ``,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error updating landlord: ", error);
    throw error;
  }
};
