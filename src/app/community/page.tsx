"use client";
// import Image from "next/image";
import { useEffect, useState, useTransition } from "react";
import Loading from "./loading";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useInternalFetch } from "@/hooks/useInternalFetch";
import { useForm } from "react-hook-form";
import { PostUserSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import classNames from "classnames";
import { CircleUser, User } from "lucide-react";

interface PostProps {
  id: string;
  title: string;
  tags: string[];
  author: string;
}

interface Tag {
  value: string;
  label: string;
}

function FromFans() {
  const [reqBody, setReqBody] = useState({});
  const [post, setPost] = useState<null | PostProps[]>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (values: z.infer<typeof PostUserSchema>) => {
    // e.preventDefault();
    try {
      // const fetchData = await useInternalFetch({ url: "/api/post", method: "POST", requestBody: e.target.elements.text.value });
      // handleGetPostUser();
      console.log("values:", values);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePost = async () => {
    // const fetchData = await fetch("/api/post", {
    //   method: "POST",
    //   body: JSON.stringify(reqBody),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // console.log(`ISI:`, reqBody);
    // handleGetPostUser();
  };

  const form = useForm<z.infer<typeof PostUserSchema>>({
    resolver: zodResolver(PostUserSchema),
    defaultValues: {
      title: "",
      // tags: [],
    },
  });

  const handleGetPostUser = async () => {
    const fetchData = await useInternalFetch({
      url: "/api/post",
      method: "GET",
    });
  };

  useEffect(() => {
    handleGetPostUser();
  }, []);

  const tags: Tag[] = [
    { value: "yujin", label: "Yujin 🐶" },
    { value: "gaeul", label: "Gaeul 🦊" },
    { value: "rei", label: "Rei 🐥" },
    { value: "wonyoung", label: "Wonyoung 🐰" },
    { value: "liz", label: "Liz 🐱" },
    { value: "leeseo", label: "Leeseo 🦁" },
  ];

  const handleTagClick = (tagValue: string) => {
    console.log("Tag diklik:", tagValue);
  };

  return (
    <>
      <div className="write-msg w-full ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Write a message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-left" />
                </FormItem>
              )}
            ></FormField>
            {/* <div className="flex justify-between items-center">
              <div className="input__box__foter w-full flex items-start gap-3 my-4">
                <p>Tags</p>
                <ul className="tags flex gap-3 flex-wrap">
                  {tags.map((tag) => (
                    <li key={tag.value}>
                      <button className="text-xs border px-2 py-1 rounded-lg text-[#2a2a2a] border-[#2a2a2a]" title="member-name-tag">
                        {tag.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
            <Button className="ml-auto mt-2 block" disabled={isPending}>
              Post
            </Button>
          </form>
        </Form>
      </div>
      {post === null ? (
        <p className="mt-20">Belum ada postingan terbaru 😊</p>
      ) : (
        <>
          {post.map((data) => (
            <div key={data.id} className="card mt-10 text-left">
              <h2 className="text-2xl font-medium">{data.title}</h2>
              <div className="tags my-4 flex flex-wrap gap-3">
                <button
                  className="rounded-lg border border-[#ef67a5] bg-[#ef67a5] px-2 py-1 text-xs text-white"
                  title="member-name-tag"
                >
                  Yujin 🐶
                </button>
                <button
                  className="rounded-lg border border-[#ef67a5] bg-[#ef67a5] px-2 py-1 text-xs text-[#2a2a2a]/[.70]"
                  title="member-name-tag"
                >
                  Leeseo 🦁
                </button>
                <button
                  className="rounded-lg border border-[#ef67a5] bg-[#ef67a5] px-2 py-1 text-xs text-white"
                  title="member-name-tag"
                >
                  Liz 🐱
                </button>
              </div>
              <div className="user-info flex gap-2 text-xs font-normal text-slate-600">
                <p>{data.author}</p>
                <p>2 Hari Yang Lalu</p>
                <p>Reactions 20</p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default function Page() {
  return (
    <section className="relative mx-auto mt-40 grid min-h-[100dvh] w-full max-w-5xl grid-cols-2 text-center">
      <div className="left fixed space-y-4 text-left">
        <h2 className="text-2xl font-semibold"> 👋 Selamat Datang</h2>
        <ul className="space-y-2">
          <li className="text-2xl">
            Dari Fans Untuk <b>IVE</b>
          </li>
          <li>Kalian bisa memposting sesuatu disini</li>
        </ul>
      </div>
      <div className="right col-start-2">
        <FromFans />
      </div>
    </section>
  );
}
