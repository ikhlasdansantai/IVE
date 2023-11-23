import { NextResponse } from "next/server";

export async function GET() {
  const data = ["Hello World"];

  return NextResponse.json({ status: 200, message: "Success", data });
}
