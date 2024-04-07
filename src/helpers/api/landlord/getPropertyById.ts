// Import axios
import axios from "axios";

// Define BASE_URL
const BASE_URL = "http://localhost:3000/api";

axios.defaults.baseURL = BASE_URL;

// Helper function to get property by ID
export const getPropertyById = async (propertyId: string, status: string) => {
  try {
    const response = await axios.get(
      `/property-details?id=${propertyId}&status=${status}`
    );
    console.log("\nProperty details by ID: ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error getting property details by ID: ", error);
    throw error;
  }
};
