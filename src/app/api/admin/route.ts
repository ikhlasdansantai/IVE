import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";

const IveMemberName = ["Yujin", "Gaeul", "Rei", "Wonyoung", "Liz", "Leeseo"];

export async function POST(req: Request) {
  const {
    name,
    emoji,
    age,
    about,
    stageName,
    birthName,
    birthday,
    positions,
    nation,
    height,
    funFacts,
    mainProfileImage,
    detailProfileImages,
  } = await req.json();

  const existingIveMember = await db.iveMemberProfile.findFirst({
    where: { name },
  });

  if (existingIveMember)
    return NextResponse.json({
      status: 400,
      message: "Member's Already Exist!",
    });

  if (IveMemberName.includes(name) === false) {
    return NextResponse.json({
      status: 400,
      message: "Invalid Member's Name!",
    });
  }
  await db.iveMemberProfile.create({
    data: {
      name,
      emoji,
      age,
      about,
      stageName,
      birthName,
      birthday,
      positions,
      nation,
      height,
      funFacts,
      assets: {
        create: {
          mainProfileImage: mainProfileImage as string,
          detailProfileImages: detailProfileImages as string[],
        },
      },
    },
  });

  const iveMemberProfileUpdated = await db.iveMemberProfile.findFirst({
    where: { name },
    include: {
      assets: { select: { mainProfileImage: true, detailProfileImages: true } },
    },
  });

  return NextResponse.json({
    status: 201,
    message: "Member Created!",
    data: iveMemberProfileUpdated,
  });
}

export async function PATCH(req: Request) {
  const {
    id,
    name,
    emoji,
    about,
    age,
    stageName,
    birthName,
    birthday,
    positions,
    nation,
    height,
    funFacts,
    mainProfileImage,
    detailProfileImages,
  } = await req.json();

  const getIveMemberProfile = await db.iveMemberProfile.findFirst({
    where: { id },
    include: {
      assets: {
        select: { id: true, mainProfileImage: true, detailProfileImages: true },
      },
    },
  });

  if (!getIveMemberProfile)
    return NextResponse.json({
      status: 404,
      message: "ID Member tidak ditemukan",
    });

  await db.iveMemberProfile.update({
    where: { id },
    data: {
      name,
      emoji,
      age,
      about,
      stageName,
      birthName,
      birthday,
      positions,
      nation,
      height,
      funFacts,
      assets: {
        update: {
          where: { id: getIveMemberProfile.assets[0].id as string },
          data: {
            mainProfileImage: mainProfileImage as string,
            detailProfileImages: detailProfileImages as string[],
          },
        },
      },
    },
  });

  const iveMemberProfileUpdated = await db.iveMemberProfile.findFirst({
    where: { id },
    include: {
      assets: { select: { mainProfileImage: true, detailProfileImages: true } },
    },
  });

  return NextResponse.json({
    status: 201,
    message: "Member Updated!",
    data: iveMemberProfileUpdated,
  });
}

export async function GET(req: Request) {
  const getIveMemberProfile = await db.iveMemberProfile.findMany({
    include: {
      assets: { select: { mainProfileImage: true, detailProfileImages: true } },
    },
  });

  return NextResponse.json({ message: "OK", data: getIveMemberProfile });
}
