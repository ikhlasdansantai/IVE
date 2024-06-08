import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;

  const findMatchVideo = await db.videoWithEmoji.findFirst({
    where: {
      videoUrl: id as string,
    },
    include: {
      chats: true,
      emojis: {
        include: {
          reactByUsers: true,
        },
      },
    },
  });

  if (!findMatchVideo) {
    await db.videoWithEmoji.create({
      data: {
        videoUrl: id as string,
      },
    });

    const updatedVideoContent = await db.videoWithEmoji.findFirst({
      where: {
        videoUrl: id as string,
      },
      include: {
        chats: true,
        emojis: {
          include: {
            reactByUsers: true,
          },
        },
      },
    });

    return NextResponse.json({
      status: 201,
      message: "Created",
      data: updatedVideoContent,
    });
  }

  return NextResponse.json({
    status: 200,
    message: "Success",
    data: findMatchVideo,
  });
}
