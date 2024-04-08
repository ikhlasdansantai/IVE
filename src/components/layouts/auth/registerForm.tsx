"use client";
import * as z from "zod";

import { useState, useTransition } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormSuccess from "@/components/layouts/auth/formSuccess";
import FormError from "@/components/layouts/auth/formError";
import CardAuthWrapper from "./cardWrapper";
import { register } from "@/actions/register";

export default function RegisterForm() {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setSuccess("");
    setError("");

    startTransition(() => {
      register(values).then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      });
    });
  };

  return (
    <CardAuthWrapper headerTitle="Register" headerDescription="Register to your account" authTypeHref="/login" authTypeLabel="Already have an account?" showSocial>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="div space-y-4">
            <FormField
              {...form}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Elizabeth" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              {...form}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Email" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              {...form}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*******" {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />
          <Button className="w-full" disabled={isPending}>
            Create an account
          </Button>
        </form>
      </Form>
    </CardAuthWrapper>
  );
}
