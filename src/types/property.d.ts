import { PropertyType, ShareType,PropertyStatus } from "./../enum/Property";
import { Gender } from "./../enum/Gender";

interface GoogleMapLocation {
  latitude: number;
  longitude: number;
}

interface Address {
  line1: string;
  line2?: string;
  line3?: string;
  line4?: string;
  city: string;
  stateOrProvince: string;
  postalCode: string;
  googleMapLocation: GoogleMapLocation;
}

interface Amenities {
  wifi: boolean;
  tv: boolean;
  airConditioning: boolean;
  pool: boolean;
  outdoorDining: boolean;
  exercise: boolean;
  firstAid: boolean;
  fireExtinguisher: boolean;
  smokeAlarm: boolean;
}

interface Basics {
  guests: number;
  bedrooms: number;
  bedsPerRoom: number;
  bathrooms: number;
}

interface Property {
  landlord: string;
  name: string;
  description: string;
  address: Address;
  propertyType: PropertyType;
  shareType: ShareType;
  amenities: Amenities;
  images: string[];
  genders: Gender;
  basics: Basics;
  status: PropertyStatus;
  createdAt: Date; 
  updatedAt: Date; 
}