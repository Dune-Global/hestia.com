import { NextRequest, NextResponse } from "next/server";
import StudentModel from "@/app/(server)/models/student";
import { monogoConnect } from "@/app/(server)/config/db";
import bcrypt from "bcrypt";
import { HttpStatusCode } from "axios";
import { UserRoles } from "@/enum/UserRoles";

export const POST = async (request: NextRequest) => {
  const {
    firstName,
    lastName,
    userName,
    email,
    universityEmail,
    phoneNumber,
    password,
  } = await request.json();

  try {
    await monogoConnect();

    const existingStudent = await StudentModel.findOne({ email });
    const userNameExist = await StudentModel.findOne({ userName });

    if (existingStudent) {
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

    const newStudent = new StudentModel({
      firstName,
      lastName,
      userName,
      email,
      universityEmail,
      phoneNumber,
      password: hashedPassword,
      role: UserRoles.STUDENT,
    });

    await newStudent.save();

    return NextResponse.json(
      { message: "Student account created successfully" },
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
