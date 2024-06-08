"use server";

import { ChatSchema } from "@/schema";
import * as z from "zod";

export const chats = async (values: z.infer<typeof ChatSchema>) => {
  const validatedFields = ChatSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid Fields!" };

  console.log(values);
};
