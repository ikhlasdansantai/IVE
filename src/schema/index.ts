import * as z from "zod";

export const PostSchema = z.object({
  title: z
    .string({
      invalid_type_error: "Title must be a string",
    })
    .min(1, {
      message: "Title is required",
    })
    .max(50, {
      message: "Title is too long",
    }),
});

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Email must be a string",
    })
    .email({
      message: "Email is required",
    })
    .min(2, {
      message: "Email is required",
    })
    .max(50, {
      message: "Email is too long",
    }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  username: z.string({
    invalid_type_error: "Username must be a string",
  }),
  email: z.string().min(6, {
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const UpdateUserSchema = z.object({
  username: z.string({
    invalid_type_error: "Username must be a string",
  }),
  email: z.string().min(6, {
    message: "Email is required",
  }),
});

export const PostUserSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title must be a string" })
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title is too long" }),
});

export const ChatSchema = z.object({
  chatBody: z
    .string({ invalid_type_error: "Chat must be a string" })
    .min(1, { message: "Chat is required" })
    .max(100, { message: "Chat is too long" }),
});
