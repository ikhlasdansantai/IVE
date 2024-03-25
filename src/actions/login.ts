"use server";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { email, password } = validatedFields.data;
  const existsingUser = await getUserByEmail(email);

  if (!existsingUser) return { error: "Username or Password Invalid!" };

  const Hashedpassword = await bcrypt.compare(
    password,
    existsingUser.password as string,
  );
  if (!Hashedpassword) return { error: "Password Is Incorrect!" };

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: "Email Sent!" };
  } catch (e) {
    if (e instanceof AuthError) {
      return { error: "Something went wrong" };
    }
    throw e;
  }
};
