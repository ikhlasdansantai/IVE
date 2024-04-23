"use server";
import { db } from "@/lib/prisma";
export const getVoteDatas = async ({ id }: { id: undefined | string }) => {
  const getVoteDatas = await db.user.findFirst({
    where: {
      id,
    },
    select: {
      bias: {
        select: {
          name: true,
        },
      },
    },
  });

  return getVoteDatas?.bias;
};
