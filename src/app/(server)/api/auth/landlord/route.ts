import { NextRequest, NextResponse } from "next/server";
import LandLordModel from "@/app/(server)/models/landLord";
import { monogoConnect } from "@/app/(server)/config/db";
import bcrypt from "bcrypt";
import { HttpStatusCode } from "axios";
import { UserRoles } from "@/enum/UserRoles";

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
      role: UserRoles.LANDLORD,
    });

    await newLandLord.save();

    return NextResponse.json(
      { message: "Account created successfully" },
      {
        status: HttpStatusCode.Created,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: err },
      {
        status: 500,
      }
    );
  }
};
