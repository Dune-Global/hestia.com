import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Property from "@/app/(server)/models/property";

export const GET = async (request: NextRequest) => {
  const landlordId = request.nextUrl.searchParams.get("landlordId");

  try {
    await monogoConnect();

    const pendingCount = await Property.countDocuments({
      landlord: landlordId,
      status: "pending",
    });
    console.log(`Pending count: ${pendingCount}`);

    const approvedCount = await Property.countDocuments({
      landlord: landlordId,
      status: "approved",
    });
    console.log(`Approved count: ${approvedCount}`);

    const rejectedCount = await Property.countDocuments({
      landlord: landlordId,
      status: "rejected",
    });
    console.log(`Rejected count: ${rejectedCount}`);

    return NextResponse.json(
      {
        pending: pendingCount,
        approved: approvedCount,
        rejected: rejectedCount,
      },
      {
        status: HttpStatusCode.Ok,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {},
      {
        status: HttpStatusCode.InternalServerError,
      }
    );
  }
};
