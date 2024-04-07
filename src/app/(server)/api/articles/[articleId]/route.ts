import { NextRequest, NextResponse } from "next/server";
import { monogoConnect } from "@/app/(server)/config/db";
import { HttpStatusCode } from "axios";
import Article from "@/app/(server)/models/article";
import mongoose from "mongoose";

export const PUT = async (request: NextRequest) => {
  const pathParts = request.nextUrl.pathname.split("/");
  const id = pathParts.pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid article ID" },
      {
        status: HttpStatusCode.BadRequest,
      }
    );
  }

  const articleData = await request.json();

  try {
    await monogoConnect();

    const article = await Article.findByIdAndUpdate(id, articleData, {
      new: true,
    });

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }

    return NextResponse.json(
      { message: "Article updated successfully", article },
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

export const DELETE = async (request: NextRequest) => {
  const pathParts = request.nextUrl.pathname.split("/");
  const id = pathParts.pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid article ID" },
      {
        status: HttpStatusCode.BadRequest,
      }
    );
  }

  try {
    await monogoConnect();

    const article = await Article.findByIdAndDelete(id);

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }

    return NextResponse.json(
      { message: "Article deleted successfully" },
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

export const GET = async (request: NextRequest) => {
  const pathParts = request.nextUrl.pathname.split("/");
  const id = pathParts.pop();

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json(
      { message: "Invalid article ID" },
      {
        status: HttpStatusCode.BadRequest,
      }
    );
  }

  try {
    await monogoConnect();

    const article = await Article.findById(id);

    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        {
          status: HttpStatusCode.NotFound,
        }
      );
    }

    return NextResponse.json(
      { message: "Article fetched successfully", article },
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