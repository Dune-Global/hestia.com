import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  return new NextResponse("Hello World");
};
