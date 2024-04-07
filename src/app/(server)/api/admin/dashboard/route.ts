import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import StudentModel from "@/app/(server)/models/student";
import LandLordModel from "@/app/(server)/models/landLord";
import WardenModel from "@/app/(server)/models/warden";

export const GET = async (request: NextRequest) => {
  try {
    await monogoConnect();

    const studentCount = await StudentModel.countDocuments();
    const landlordCount = await LandLordModel.countDocuments();
    const wardenCount = await WardenModel.countDocuments();

    return NextResponse.json(
      {
        data: {
          students: studentCount,
          landlords: landlordCount,
          wardens: wardenCount,
        },
      },
      {
        status: HttpStatusCode.Ok,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {},
      {
        status: HttpStatusCode.InternalServerError
      }
    );
  }
};