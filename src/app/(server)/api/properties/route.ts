import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Property from "@/app/(server)/models/property";
import LandLordModel from "../../models/landLord";
import { PropertyType, ShareType, PropertyStatus } from "@/enum/Property";
import { Gender } from "@/enum/Gender";

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

export const PUT = async (request: NextRequest) => {
  const propertyData = await request.json();
  const propertyId = request.nextUrl.searchParams.get("propertyId");

  try {
    await monogoConnect();

    const property = await Property.findById(propertyId);
    if (!property) {
      throw new Error("Property not found");
    }

    const updatedProperty = await Property.findByIdAndUpdate(
      propertyId,
      propertyData,
      { new: true }
    );

    return NextResponse.json(
      { message: "Property updated successfully", property: updatedProperty },
      {
        status: HttpStatusCode.Ok,
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

export const DELETE = async (request: NextRequest) => {
  const propertyId = request.nextUrl.searchParams.get("propertyId");

  try {
    await monogoConnect();

    const property = await Property.findById(propertyId);
    if (!property) {
      throw new Error("Property not found");
    }

    await Property.findByIdAndDelete(propertyId);

    return NextResponse.json(
      { message: "Property deleted successfully" },
      {
        status: HttpStatusCode.Ok,
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

export const GET = async (request: NextRequest) => {
  const propertyType = request.nextUrl.searchParams.get(
    "propertyType"
  ) as PropertyType;
  const shareType = request.nextUrl.searchParams.get("shareType") as ShareType;
  const gender = request.nextUrl.searchParams.get("gender") as Gender;

  try {
    await monogoConnect();

    // Build the query dynamically
    const query: any = {};
    if (propertyType) query.propertyType = propertyType;
    if (shareType) query.shareType = shareType;
    query.status = PropertyStatus.Approved;

    const properties = await Property.find(query).populate(
      "landlord",
      "-password -role"
    );

    return NextResponse.json(
      { properties },
      {
        status: HttpStatusCode.Ok,
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
