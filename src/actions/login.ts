"use server";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import * as z from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { db } from "@/lib/prisma";
import { getURL } from "next/dist/shared/lib/utils";
import { getUserByEmail } from "@/data/user";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid Fields!" };

  const { email, password } = validatedFields.data;
  const existsingUser = await getUserByEmail(email);

  if(!existsingUser) return {error: "Uername or Password Invalid!"} ; 

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
