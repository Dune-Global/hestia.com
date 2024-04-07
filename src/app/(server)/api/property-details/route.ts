import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import mongoose from "mongoose";
import { monogoConnect } from "@/app/(server)/config/db";
import Property from "@/app/(server)/models/property";

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get("id");
  const propertyStatus = request.nextUrl.searchParams.get("status");

  if (!mongoose.Types.ObjectId.isValid(id!)) {
    return NextResponse.json(
      { message: "Invalid id" },
      {
        status: HttpStatusCode.BadRequest,
      }
    );
  }

  try {
    await monogoConnect();

    let query: any = {};

    if (propertyStatus) {
      query._id = id;
      query.status = propertyStatus;
    }

    if (!propertyStatus) {
      return NextResponse.json(
        { message: "Property status is required" },
        {
          status: HttpStatusCode.BadRequest,
        }
      );
    }

    const property = await Property.find(query);

    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }
    return NextResponse.json({ property }, { status: HttpStatusCode.Ok });
  } catch (err: any) {
    return NextResponse.json(
      { message: err.message },
      {
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
};
