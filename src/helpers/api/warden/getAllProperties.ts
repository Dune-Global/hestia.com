// Import axios
import axios from "axios";

// Define BASE_URL
const BASE_URL = "http://localhost:3000/api";

axios.defaults.baseURL = BASE_URL;

// Helper function to get property by ID
export const getAllProperties = async () => {
  try {
    const response = await axios.get("/properties");
    console.log("\nProperty details: ", response.data);

    return response.data;
  } catch (error) {
    console.error("Error getting property details by ID: ", error);
    throw error;
  }
};
