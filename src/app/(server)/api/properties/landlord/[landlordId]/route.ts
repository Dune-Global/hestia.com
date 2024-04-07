import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Property from "@/app/(server)/models/property";
import LandLordModel from "../../../../models/landLord";
import mongoose from "mongoose";
import { PropertyStatus } from "@/enum/Property";

export const GET = async (request: NextRequest) => {
  const pathParts = request.nextUrl.pathname.split("/");
  if (pathParts.length < 3) {
    return NextResponse.json(
      { message: "Landlord ID not provided" },
      {
        status: 400,
      }
    );
  }

  const landlordId = pathParts.pop();
  if (!landlordId) {
    return NextResponse.json(
      { message: "Landlord ID not provided" },
      {
        status: 400,
      }
    );
  }

  const order = request.nextUrl.searchParams.get("order");

  try {
    await monogoConnect();

    if (!mongoose.Types.ObjectId.isValid(landlordId)) {
      return NextResponse.json(
        { message: "Invalid landlord ID" },
        {
          status: 400,
        }
      );
    }

    const landlord = await LandLordModel.findById(landlordId);
    if (!landlord) {
      return NextResponse.json(
        { message: "Landlord not found" },
        {
          status: 404,
        }
      );
    }

    let approvedProperties = [];
    let allProperties = [];

    if (order === "both") {
      approvedProperties = await Property.find({
        landlord: landlordId,
        status: PropertyStatus.Approved,
      }).sort({ approvedDate: -1 });
      allProperties = await Property.find({ landlord: landlordId }).sort({
        createdAt: -1,
      });
    } else if (order === "approve") {
      approvedProperties = await Property.find({
        landlord: landlordId,
        status: PropertyStatus.Approved,
      }).sort({ approvedDate: -1 });
    } else if (order === "pending") {
      allProperties = await Property.find({
        landlord: landlordId,
        status: PropertyStatus.Pending,
      }).sort({ createdAt: -1 });
    } else {
      allProperties = await Property.find({ landlord: landlordId }).sort({
        createdAt: -1,
      });
    }

    return NextResponse.json(
      { approvedProperties, allProperties },
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
