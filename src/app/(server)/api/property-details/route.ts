import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";
import mongoose from "mongoose";
import { monogoConnect } from "@/app/(server)/config/db";
import Property from "@/app/(server)/models/property";
import LandLordModel from "../../models/landLord";

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get("id");
  const propertyStatus = request.nextUrl.searchParams.get("status");

  if (!mongoose.Types.ObjectId.isValid(id!)) {
    return NextResponse.json(
      {},
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
        {},
        {
          status: HttpStatusCode.BadRequest,
        }
      );
    }

    const property = await Property.find(query).populate({ path: 'landlord', select: '-password -role' });

    if (!property) {
      return NextResponse.json(
        {},
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }
    return NextResponse.json({ property }, { status: HttpStatusCode.Ok });
  } catch (err: any) {
    return NextResponse.json(
      {},
      {
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
};