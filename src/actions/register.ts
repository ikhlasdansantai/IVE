"use server";

import { RegisterSchema } from "@/schema";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/prisma";
import { isValidEmail } from "@/lib/isValidEmail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { username, email, password } = validatedFields.data;
  const validatedEmail = isValidEmail(values.email);

  if (!validatedEmail)
    return {
      error: `Please use an email with a "yahoo.com" or "google.com" domain for registration.`,
    };

  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await db.user.findFirst({
    where: { email: email },
  });

  if (existingUser) return { error: "Email Already Exist" };
  else {
    await db.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });
    return {
      success: "Email Sent To The Server!",
    };
  }
};
