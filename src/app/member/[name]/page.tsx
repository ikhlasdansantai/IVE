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
  };

  useEffect(() => {
    getData();
  }, []);

  if (data === null) return <Loading />;
  if (!data) return <p>No profile data</p>;
  console.log(params);

  if (!data.data.find((member) => member.name === params.name)) {
    return <NotFound />;
  }

  const filteredMember = data.data.find((member) => member.name === params.name);

  const getImages = filteredMember?.assets;
  const getName = filteredMember?.nickname;
  const getPositions = filteredMember?.positions;

  return (
    <>
      <Suspense fallback={<Loading />}>
        <span className={`test__CSS_MODULE ${styles.bgOrange}`}></span>
        <div className="max-w-5xl mx-auto px-4 py-10 sm:py-20">
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
        </div>
      </Suspense>
    </>
  );
}

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
