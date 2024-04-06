import axios from "axios";

export const registerWarden = async (values: any) => {
  try {
    const response = await axios.post("/api/auth/warden", values);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
