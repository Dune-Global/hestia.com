import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Article from "@/app/(server)/models/article";

export const POST = async (request: NextRequest) => {
  const articleData = await request.json();

  try {
    await monogoConnect();

    const article = new Article(articleData);
    await article.save();

    return NextResponse.json(
      { message: "Article added successfully", article },
      {
        status: HttpStatusCode.Created,
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

export const GET = async () => {
  try {
    await monogoConnect();

    const articles = await Article.find().sort({ createdAt: -1 });

    return NextResponse.json(
      { articles },
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
