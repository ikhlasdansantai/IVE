import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  const { userId, image } = await req.json();

  const findUserById = await db.user.findUnique({ where: { id: userId } });

  if (!findUserById)
    return NextResponse.json({
      status: 404,
      message: "User not found",
      data: null,
    });

  await db.user.update({
    where: { id: userId },
    data: {
      image,
    },
  });

  const getUpdatedUser = await db.user.findUnique({ where: { id: userId } });

  return NextResponse.json({
    status: 200,
    message: "Edit Profile Success",
    image,
    data: getUpdatedUser,
  });
}
