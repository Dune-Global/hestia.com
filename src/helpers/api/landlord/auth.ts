import axios from "axios";

export const registerLandlord = async (values:any) => {
    try {
        const response = await axios.post("/api/auth/landlord", values);
        return response;
    } catch (error:any) {
        return error.response;
    }
}