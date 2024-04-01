import LandLordModel from "@/app/(server)/models/landLord";
import { monogoConnect } from "@/app/(server)/config/db";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { HttpStatusCode } from "axios";

export const POST = async (request: NextRequest) => {

  const { fullName, userName, email, phoneNumber, password } =
    await request.json();

    try {

    await monogoConnect();

    const existingLandLord = await LandLordModel.findOne({ email });
    const userNameExist = await LandLordModel.findOne({ userName });

    if (existingLandLord) {
      return NextResponse.json(
        { message: "Email exist" },
        { status: HttpStatusCode.Conflict }
      );
    } else if (userNameExist) {
      return NextResponse.json(
        { message: "Username exist" },
        { status: HttpStatusCode.Conflict }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newLandLord = new LandLordModel({
      fullName,
      userName,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    await newLandLord.save();

    return new NextResponse("Landlord created successfully", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
