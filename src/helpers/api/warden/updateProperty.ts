import axios from "axios";
import { PropertyStatus } from "@/enum/Property";

export const updateProperty = async (id: string, status: PropertyStatus) => {
  try {
    const response = await axios.patch(
      `/api/properties/warden?id=${id}&status=${status}`
    );
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};
