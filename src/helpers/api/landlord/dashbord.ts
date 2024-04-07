import axios from "axios";

export const getLandlordLatest = async (
  landlordId: string,
  orderMethod: string
) => {
  try {
    const response = await axios.get(
      `/api/properties/landlord/${landlordId}?order=${orderMethod}`
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};