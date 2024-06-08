"use server";
import { db } from "@/lib/prisma";

export async function getMemberProfiles() {
  const getMemberProfiles = await db.iveMemberProfile.findMany({
    include: {
      assets: { select: { mainProfileImage: true, detailProfileImages: true } },
    },
  });
  return getMemberProfiles;
}
