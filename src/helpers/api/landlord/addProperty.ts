import axios from "axios";

export const addProperty = async (
  landlordId: string,
  name: string,
  description: string,
  line1: string,
  line2: string,
  line3: string,
  line4: string,
  city: string,
  stateOrProvince: string,
  postalCode: string,
  latitude: number,
  longitude: number,
  propertyType: string,
  shareType: string,
  wifi: boolean,
  tv: boolean,
  airConditioning: boolean,
  pool: boolean,
  outdoorDining: boolean,
  exercise: boolean,
  firstAid: boolean,
  fireExtinguisher: boolean,
  smokeAlarm: boolean,
  images: [],
  genders: string,
  guests: number,
  bedrooms: number,
  bedsPerRoom: number,
  bathrooms: number
) => {
  try {
    console.log(
      "*********************************Add Property API*********************************"
    );
    const body = {
      landlord: landlordId,
      name: name,
      description: description,
      address: {
        line1: line1,
        line2: line2,
        line3: line3,
        line4: line4,
        city: city,
        stateOrProvince: stateOrProvince,
        postalCode: postalCode,
        googleMapLocation: {
          latitude: latitude,
          longitude: longitude,
        },
      },
      propertyType: propertyType,
      shareType: shareType,
      amenities: {
        wifi: wifi,
        tv: tv,
        airConditioning: airConditioning,
        pool: pool,
        outdoorDining: outdoorDining,
        exercise: exercise,
        firstAid: firstAid,
        fireExtinguisher: fireExtinguisher,
        smokeAlarm: smokeAlarm,
      },
      images: images,
      genders: genders,
      basics: {
        guests: guests,
        bedrooms: bedrooms,
        bedsPerRoom: bedsPerRoom,
        bathrooms: bathrooms,
      },
    };
    const response = await axios.post(`/api/properties`, body);
    return response;
  } catch (error: any) {
    return error.response;
  }
};
