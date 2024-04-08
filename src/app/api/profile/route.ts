import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

const IveMemberName: string[] = [
  "Yujin",
  "Gaeul",
  "Rei",
  "Wonyoung",
  "Liz",
  "Leeseo",
];

export async function GET() {
  const getIveMemberProfile = await db.iveMemberProfile.findMany({
    select: {
      name: true,
      positions: true,
      emoji: true,
      votes: true,
      assets: { select: { mainProfileImage: true, detailProfileImages: true } },
    },
  });

  return NextResponse.json({ statu: 200, data: getIveMemberProfile });
}

export async function POST(req: Request) {
  const { userId, bias } = await req.json();

  const findUserById = await db.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      bias: true,
    },
  });

  if (!findUserById)
    return NextResponse.json({ status: 404, message: "User not found" });

  if (!IveMemberName.includes(bias))
    return NextResponse.json({ status: 404, message: "Bias is not found" });

  if (findUserById && IveMemberName.includes(bias)) {
    const biasName = findUserById?.bias.some((biasData) => {
      return biasData.name === bias;
    });

    if (biasName) {
      return NextResponse.json({
        status: 400,
        message: "Already voted!",
      });
    }

    const getIveMemberProfile = await db.iveMemberProfile.findFirst({
      where: {
        name: bias,
      },
    });

    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        bias: {
          connect: {
            id: getIveMemberProfile?.id as string,
          },
        },
      },
    });

    await db.iveMemberProfile.update({
      where: {
        id: getIveMemberProfile?.id as string,
      },
      data: {
        votes: { increment: 1 },
        userId,
      },
    });

    const getVoteDatas = await db.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        bias: {
          select: {
            name: true,
          },
        },
      },
    });

    return NextResponse.json({
      status: 201,
      message: "Vote Success!",
      data: getVoteDatas,
    });
  }
}
