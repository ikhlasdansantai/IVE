import { db } from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findFirst({
      where: { email },
    });
    return user;
  } catch (e) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (e) {
    return null;
  }
};
