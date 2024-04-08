import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  const findMatchVideo = await db.videoWithEmoji.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!findMatchVideo)
    return NextResponse.json({ status: 404, message: "NOT FOUND" });

  NextResponse.json({ status: 200, message: "OK", data: params.id });
}
