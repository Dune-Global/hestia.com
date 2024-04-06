import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Property from "@/app/(server)/models/property";
import LandLordModel from "../../models/landLord";

export const POST = async (request: NextRequest) => {
  const propertyData = await request.json();

  try {
    await monogoConnect();

    const landlord = await LandLordModel.findById(propertyData.landlord);
    if (!landlord) {
      throw new Error("Landlord not found");
    }

    const property = await Property.create(propertyData);

    return NextResponse.json(
      { message: "Property added successfully", property },
      {
        status: HttpStatusCode.Created,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      {
        status: 500,
      }
    );
  }
};
