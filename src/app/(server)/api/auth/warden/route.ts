import { NextRequest, NextResponse } from "next/server";
import WardenModel from "@/app/(server)/models/warden";
import { monogoConnect } from "@/app/(server)/config/db";
import bcrypt from "bcrypt";
import { HttpStatusCode } from "axios";
import { UserRoles } from "@/enum/UserRoles";

export const POST = async (request: NextRequest) => {
  const { firstName, lastName, email, phoneNumber, password } =
    await request.json();

  try {
    await monogoConnect();

    const existingWarden = await WardenModel.findOne({ email });

    if (existingWarden) {
      return NextResponse.json(
        { message: "Email exist" },
        { status: HttpStatusCode.Conflict }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newWarden = new WardenModel({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hashedPassword,
      role: UserRoles.WARDEN,
    });

    await newWarden.save();

    return NextResponse.json(
      { message: "Warden account created successfully" },
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
