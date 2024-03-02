"use client";

import ImageDev from "@/app/member/[name]/ImageDev";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MemberProfileProps } from "@/types";

export default function MemberProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const [memberProfile, setMemberProfile] = useState<
    MemberProfileProps | undefined
  >(undefined);

  useEffect(() => {
    async function getMemberData() {
      const response = await fetch(`/api/profile/${slug}`);
      const data = await response.json();
      setMemberProfile(data);
      console.log(data);
    }
    getMemberData();
  }, []);

  // const getMemberData = generateStaticParams(slug);
  return (
    <section className="min-h-[100dvh]">
      <div className="mx-auto mt-20 max-w-5xl px-4 py-10 sm:py-20">
        {memberProfile === undefined && (
          <p className="mt-40 text-center">Loading....</p>
        )}
        {memberProfile?.status === 404 && (
          <div className="mt-20 flex flex-col items-center justify-center gap-4 text-center">
            <figure>
              <Image
                src={
                  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NiMHc1bXRsZTJyOXloNmRnazQ0am0yaTJvYnV3Z2xpYndlOHpmeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qiKPTZdYCppWo6g3dz/giphy.gif"
                }
                alt="GIF by GIPHY"
                width={400}
                height={400}
                loading="lazy"
              />
            </figure>
            <p className="flex justify-center gap-2 text-xl">
              Sorry,{" "}
              <p className="font-semibold">{memberProfile?.message} :(</p>
            </p>
          </div>
        )}
        {memberProfile?.status === 200 && (
          <>
            <div>
              <h1 className="text-2xl font-semibold sm:text-5xl">
                {memberProfile?.data?.stageName}
              </h1>
              <ul className="mt-4 flex gap-2 text-slate-400">
                {memberProfile?.data?.positions?.map(
                  (data: string, index: number) => (
                    <li key={index}>
                      {data}
                      {data !==
                      memberProfile?.data?.positions[
                        memberProfile?.data?.positions.length - 1
                      ]
                        ? ","
                        : "."}
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="image__profile my-8 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {memberProfile?.data?.assets?.[0]?.detailProfileImages.map(
                (image: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className="relative w-full overflow-hidden"
                    >
                      <ImageDev src={image} />
                    </div>
                  );
                },
              )}
            </div>

            <div className="member_bio">
              <h2 className="text-2xl">Biodata</h2>
              <p>
                Leeseo adalah member terakhir dari IVE, dia diberi julukan baby
                lion.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="border-l-4 border-red-900 pl-2">
                  Nama Panggung: {memberProfile.data.name}
                </li>
                <li className="border-l-4 border-red-900 pl-2">
                  Nama Lahir: {memberProfile.data.birthName}
                </li>
                <li className="border-l-4 border-red-900 pl-2">
                  Posisi: {memberProfile.data.positions[0]}
                </li>
                <li className="border-l-4 border-red-900 pl-2">
                  Ulang Tahun: {memberProfile.data.birthday}
                </li>
                <li className="border-l-4 border-red-900 pl-2">
                  Kebangsaan: {memberProfile.data.nation}
                </li>
                <li className="border-l-4 border-red-900 pl-2">
                  Zodiak: Pisces
                </li>
                <li className="border-l-4 border-red-900 pl-2">
                  Tinggi: {memberProfile.data.height}cm
                </li>
              </ul>
            </div>

            <h2 className="mt-10 text-2xl">Fakta Unik</h2>
            <ul className="mt-3 space-y-3">
              {memberProfile.data.funFacts.map(
                (data: string, index: number) => (
                  <li key={index} className="border-l-4 border-red-900 pl-2">
                    {data}
                  </li>
                ),
              )}
            </ul>

            {/* 
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
          </div
            </div> > */}

            {/* <h2 className="text-2xl mt-20">From Community</h2>
            <p className="mb-4">Submit Your Contents From Your Fav Bias❤</p> */}
            {/* <div className="cards grid md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
            {/* </div> */}
            {/* <InfiniteMovingCards items={testimonials}>
          <PostCardDemo />
        </InfiniteMovingCards> */}
          </>
        )}
      </div>
    </section>
  );
}
