import axios from "axios";

export const registerStudent = async (values: any) => {
  try {
    const response = await axios.post("/api/auth/student", values);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
