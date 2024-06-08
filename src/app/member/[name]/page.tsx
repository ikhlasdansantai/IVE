"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import ImageDev from "./ImageDev";
import styles from "./memberDetail.module.css";

import { Suspense, useEffect, useState } from "react";
import Loading from "../loading";
import NotFound from "../not-found";

// export const dynamicParams = true;
// export async function generateStaticParams() {
//   "use server";
//   const getData = await fetch("/api/memberProfile");
//   const data = await getData.json();

//   return data.map((data: any) => {
//     name: data?.data?.name;
//   });
// }

interface MemberData {
  id: number;
  name: string;
  nickname: string;
  age: number;
  assets: string[];
  positions?: string[];
  birthday: string;
}

interface ResponseData {
  data: MemberData[];
}

async function getMemberData() {
  const response = await fetch("/api/member");
  try {
    if (!response.ok) notFound();
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}

export default function MemberName({ params }: any) {
  const [data, setData] = useState<ResponseData | null>(null);

  const getData = async () => {
    const response = await getMemberData();
    setData(response);
    console.log(response);
  };

  useEffect(() => {
    getData();
  }, []);

  if (data === null) return <Loading />;
  if (!data) return <p>No profile data</p>;

  const filteredMember = data.data.find((member) => member.name === params.name);
  if (!filteredMember) return <NotFound />;

  const getImages = filteredMember?.assets;
  const getName = filteredMember?.nickname;
  const getPositions = filteredMember?.positions;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <span className={`test__CSS_MODULE ${styles.bgOrange}`}></span>
        <div className="max-w-5xl mx-auto px-4 mt-20 py-10 sm:py-20">
          <h1 className="text-2xl sm:text-5xl">{getName}</h1>
          <ul className="flex gap-2 flex-wrap mt-2 text-slate-400">
            {getPositions &&
              getPositions.map((data: string, index: number) => (
                <li key={index}>
                  {data}
                  {data !== getPositions[getPositions.length - 1] ? "," : "."}
                </li>
              ))}
          </ul>
          <div className="image__profile grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-8">
            {getImages?.map((data: any, index: number) => {
              return (
                <div key={index} className="relative w-full  overflow-hidden">
                  <ImageDev src={data} />
                </div>
              );
            })}
          </div>

          <div className="member_bio">
            <h2 className="text-2xl">Biodata</h2>
            <p>Leeseo adalah member terakhir dari IVE, dia diberi julukan baby lion.</p>
            <ul className="mt-4 space-y-2">
              <li className="border-l-4 border-red-900 pl-2">Nama Panggung: Leeseo (이서)</li>
              <li className="border-l-4 border-red-900 pl-2">Nama Lahir: Lee Hyun Seo (이현서)</li>
              <li className="border-l-4 border-red-900 pl-2">Posisi: {getPositions && getPositions[0]}</li>
              <li className="border-l-4 border-red-900 pl-2">Ulang Tahun: {data?.data[5]?.birthday}</li>
              <li className="border-l-4 border-red-900 pl-2">Kebangsaan: Korea</li>
              <li className="border-l-4 border-red-900 pl-2">Zodiak: Pisces</li>
              <li className="border-l-4 border-red-900 pl-2">Tinggi: 166cm</li>
            </ul>
          </div>

          <h2 className="text-2xl mt-10">Fun Fact</h2>
          <ul className="mt-3 space-y-4">
            <li className="border-l-4 border-red-900 pl-2">Karakter MINIVE -nya adalah anak kucing bernama CHEEZ .</li>
            <li className="border-l-4 border-red-900 pl-2">Liz memiliki kepribadian pemalu dan pendiam.</li>
            <li className="border-l-4 border-red-900 pl-2">Saat ditanya member mana yang akan dia ajak berlibur, Liz memilih Yujin karena sama-sama lebih memilih diam di rumah.</li>
            <li className="border-l-4 border-red-900 pl-2">Dia memiliki tulisan tangan yang lucu.</li>
          </ul>

          <h2 className="text-2xl mt-10">Fans Contents</h2>
          <p>Submit Your Contents From Your Fav Bias❤</p>

          <div className="gallery__fans__contents mt-3">
            <div className="gallery__contents grid grid-cols-2 sm:grid-cols-4 gap-4 ">
              <figure>
                <Image src={"https://media.giphy.com/media/vmomRe26NaB0Xf8pBz/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
              </figure>
              <figure>
                <Image src={"https://media.giphy.com/media/c8ML5OLvAUy6bldZtB/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
              </figure>
              <figure>
                <Image src={"https://media.giphy.com/media/otWUtkrOXxeudjXOzb/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
              </figure>
              <figure>
                <Image src={"https://media.giphy.com/media/yWEP7B4COOd7IVRKot/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
              </figure>
            </div>
          </div>

          <h2 className="text-2xl mt-20">From Community</h2>
          <p className="mb-4">Submit Your Contents From Your Fav Bias❤</p>
          {/* <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          {/* </div> */}
          <InfiniteMovingCards items={testimonials}>
            <PostCardDemo />
          </InfiniteMovingCards>
        </div>
      </Suspense>
    </>
  );
}

function PostCardDemo() {
  return (
    <div className="card text-left">
      <h2 className="text-2xl font-medium">Spread love to my beloved maknae leeseo🦁</h2>
      <div className="tags my-4 flex gap-3 flex-wrap">
        <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
          Yujin 🐶
        </button>
        <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-[#2a2a2a]/[.70]" title="member-name-tag">
          Leeseo 🦁
        </button>
        <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
          Liz 🐱
        </button>
      </div>
      <div className="user-info flex gap-2 text-slate-600 font-normal text-xs">
        <p>ikhsan ganteng</p>
        <p>2 Hari Yang Lalu</p>
        <p>Reactions 20</p>
      </div>
    </div>
  );
}

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

// function InfiniteMovingCardsDemo() {
//   return (
//     <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//       <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
//     </div>
//   );
// }

// Kode
{
  /* <Suspense fallback={<Loading />}>
<span className={`test__CSS_MODULE ${styles.bgOrange}`}></span>
<div className="max-w-5xl mx-auto px-4 py-10 sm:py-20">


  <h1 className="text-2xl sm:text-5xl">{getName}</h1>
  <ul className="flex gap-2 flex-wrap mt-2 text-slate-400">
    {getPositions.map((data: string, index: number) => (
      <li key={index}>
        {data}
        {data !== getPositions[getPositions.length - 1] ? "," : "."}
      </li>
    ))}
  </ul>
  <div className="image__profile grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-8">
    {getImages.map((data: any, index: number) => {
      return (
        <div key={index} className="relative w-full  overflow-hidden">
          <ImageDev src={data} />
        </div>
      );
    })}
  </div>

  <div className="member_bio">
    <h2 className="text-2xl">Biodata</h2>
    <p>Leeseo adalah member terakhir dari IVE, dia diberi julukan baby lion.</p>
    <ul className="mt-4 space-y-2">
      <li className="border-l-4 border-red-900 pl-2">Nama Panggung: Leeseo (이서)</li>
      <li className="border-l-4 border-red-900 pl-2">Nama Lahir: Lee Hyun Seo (이현서)</li>
      <li className="border-l-4 border-red-900 pl-2">Posisi: {getPositions[0]}</li>
      <li className="border-l-4 border-red-900 pl-2">Ulang Tahun: {data[5].birthday}</li>
      <li className="border-l-4 border-red-900 pl-2">Kebangsaan: Korea</li>
      <li className="border-l-4 border-red-900 pl-2">Zodiak: Pisces</li>
      <li className="border-l-4 border-red-900 pl-2">Tinggi: 166cm</li>
    </ul>
  </div>

  <h2 className="text-2xl mt-10">Fun Fact</h2>
  <ul className="mt-3 space-y-4">
    <li className="border-l-4 border-red-900 pl-2">Karakter MINIVE -nya adalah anak kucing bernama CHEEZ .</li>
    <li className="border-l-4 border-red-900 pl-2">Liz memiliki kepribadian pemalu dan pendiam.</li>
    <li className="border-l-4 border-red-900 pl-2">Saat ditanya member mana yang akan dia ajak berlibur, Liz memilih Yujin karena sama-sama lebih memilih diam di rumah.</li>
    <li className="border-l-4 border-red-900 pl-2">Dia memiliki tulisan tangan yang lucu.</li>
  </ul>

  <h2 className="text-2xl mt-10">Fans Contents</h2>
  <p>Submit Your Contents From Your Fav Bias❤</p>

  <div className="gallery__fans__contents mt-3">
    <div className="gallery__contents grid grid-cols-2 sm:grid-cols-4 gap-4 ">
      <figure>
        <Image src={"https://media.giphy.com/media/vmomRe26NaB0Xf8pBz/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
      </figure>
      <figure>
        <Image src={"https://media.giphy.com/media/c8ML5OLvAUy6bldZtB/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
      </figure>
      <figure>
        <Image src={"https://media.giphy.com/media/otWUtkrOXxeudjXOzb/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
      </figure>
      <figure>
        <Image src={"https://media.giphy.com/media/yWEP7B4COOd7IVRKot/giphy.gif"} alt={"GIF"} width={200} height={200} style={{ width: "100%", height: "auto" }} loading="lazy" />
      </figure>
    </div>
  </div>
</div>
</Suspense> */
}
