"use client";

import Image from "next/image";
import TimeAgo from "@/components/common/convertTime/convertTime";
import ShowEmojis from "@/components/common/emojis/showEmojis";
require("dotenv").config();

export default function MusicVideosLayout({ videos }: { videos: any }) {
  return (
    <div className="mv__cards relative mt-6 grid grid-cols-1 gap-10 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 ">
      {videos
        .filter((data: any) => data.snippet.title.includes("MV"))
        .slice(0, 6)
        .map((data: any, index: number) => (
          <div key={index} className="card overflow-hidden">
            <Image
              src={data.snippet.thumbnails.maxres.url}
              alt={`img`}
              sizes="100%"
              width={1280}
              height={720}
              quality={50}
              className="cursor-pointer object-contain transition duration-300 hover:scale-105"
              loading="lazy"
            />
            <h2 className="mt-2 text-lg">{data.snippet.title}</h2>
            <span className="-mt-2 text-xs">
              <TimeAgo getDate={data.snippet.publishedAt} />
            </span>
            <ShowEmojis id={data?.snippet?.resourceId?.videoId} />
          </div>
        ))}
    </div>
  );
}
