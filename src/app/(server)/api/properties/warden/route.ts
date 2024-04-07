import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Property from "@/app/(server)/models/property";
import { PropertyStatus } from "@/enum/Property";

export const GET = async (request: NextRequest) => {
  const status = request.nextUrl.searchParams.get("status");

  try {
    await monogoConnect();

    let properties = [];

    if (status) {
      properties = await Property.find({ status: status })
        .populate("landlord", "-password -role")
        .sort({ createdAt: -1 });
    } else {
      properties = await Property.find()
        .populate("landlord", "-password -role")
        .sort({ createdAt: -1 });
    }

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
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
};

export const PATCH = async (request: NextRequest) => {
  const propertyId = request.nextUrl.searchParams.get("id");
  const newStatus = request.nextUrl.searchParams.get("status");

  if (!propertyId || !newStatus) {
    return NextResponse.json(
      { message: "Missing property id or status" },
      {
        status: HttpStatusCode.BadRequest,
      }
    );
  }

  try {
    await monogoConnect();

    const property = await Property.findById(propertyId);
    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }

    property.status = newStatus;
    if (newStatus === PropertyStatus.Approved) {
      property.approvedDate = new Date();
    }
    await property.save();

    return NextResponse.json(
      { property },
      {
        status: HttpStatusCode.Ok,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      {
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
};
