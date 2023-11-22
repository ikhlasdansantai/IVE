"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
require("dotenv").config();

function TimeAgo({ getDate }: any): string {
  const currentDate: any = new Date();
  const date: any = new Date(getDate);

  const timeDifference = currentDate - date;
  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const monthsDifference = Math.floor(daysDifference / 30);
  const yearsDifference = Math.floor(monthsDifference / 12);

  if (yearsDifference > 0) {
    return yearsDifference + " tahun yang lalu";
  } else if (monthsDifference > 0) {
    return monthsDifference + " bulan yang lalu";
  } else if (daysDifference > 0) {
    return daysDifference + " hari yang lalu";
  } else if (hoursDifference > 0) {
    return hoursDifference + " jam yang lalu";
  } else if (minutesDifference > 0) {
    return minutesDifference + " menit yang lalu";
  } else {
    return secondsDifference + " detik yang lalu";
  }
}

function Emojis({ newVideoDatas, videoId }: { newVideoDatas: any; videoId: any }) {
  const emojiData = newVideoDatas.find((data: any) => data.id === videoId);

  if (emojiData) {
    // Jika data reaksi ditemukan, Anda dapat menampilkan data reaksi sesuai dengan ID video
    return (
      <>
        <p>{emojiData.id}</p>
        {/* Tambahkan tampilan data reaksi lainnya di sini */}

        <div className="mt-4 flex gap-2">
          {emojiData.emojis.map((emojiObject: any, index: number) => (
            <div key={index}>
              {Object.keys(emojiObject).map((emojiKey: string) => (
                <figure key={emojiKey} className="inline-flex bg-[#f0f0f0] rounded-xl px-3 py-1 gap-1 cursor-pointer">
                  {/* <span key={emojiKey}> */}
                  {/* <img src={emojiKey} alt="" /> */}
                  {/* <span>{emojiObject[emojiKey]}</span> */}
                  <img src={emojiKey} alt="EmojiPNG" className="block w-4 h-auto" />
                  <figcaption className="text-xs text-[#151515]">{emojiObject[emojiKey]}</figcaption>
                </figure>
                // </span>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  } else {
    // Jika data reaksi tidak ditemukan, Anda dapat menampilkan pesan atau elemen lain
    return (
      <>
        <Icon icon="fluent:emoji-add-24-regular" className="mt-4 text-xl block" />
        {/* <p>Data reaksi tidak ditemukan.</p>; */}
      </>
    );
  }
}

export default function MusicVideosLayout({ videos }: { videos: any }) {
  const [newVideoDatas, setNewVideoDatas] = useState([
    {
      id: "Da4P2uT4mVc",
      emojis: [{ "https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif": 1 }, { "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif": 1 }, { "https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif": 1 }],
    },
    {
      id: "_ApV7Lm87cg",
      emojis: [{ "https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif": 2 }, { "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif": 2 }, { "https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif": 2 }],
    },
    {
      id: "_Hu4GYtye5U",
      emojis: [{ "https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif": 3 }, { "https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif": 3 }, { "https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif": 3 }],
    },
  ]);

  if (videos === null) return <div>Loading....</div>;

  const router = useRouter();

  const handleVideoClick = (id: string) => {
    alert(`ID is: ${id}`);
    // alert("Clicked!");
    // router.push(`/contents/${id}`);
  };

  const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUA///AAAAAAAAAAAAAAAAAAABmZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

  return (
    <div className="mv__cards mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative overflow-hidden ">
      {videos
        .filter((data: any) => data.snippet.title.includes("MV"))
        .slice(0, 6)
        .map((data: any, index: number) => (
          <div onClick={() => handleVideoClick(data.snippet?.resourceId?.videoId)} key={index} className="card overflow-hidden">
            <Image
              src={data.snippet.thumbnails.maxres.url}
              alt={`img`}
              sizes="100%"
              width={1280}
              height={720}
              quality={50}
              className="object-contain hover:scale-105 transition duration-300 cursor-pointer"
              loading="lazy"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <h2 className="mt-2 text-lg">{data.snippet.title}</h2>
            <span className="text-xs -mt-2">
              <TimeAgo getDate={data.snippet.publishedAt} />
            </span>
            <Emojis newVideoDatas={newVideoDatas} videoId={data.snippet?.resourceId?.videoId} />
          </div>
        ))}
    </div>
  );
}

// const filter = newVideoDatas
// .map((data) => {
//   return data.emojis.map((emoji) => emoji);
//   // if ("Da4P2uT4mVc" === data.id) {
//   //   console.log("True Mint");
//   // } else {
//   //   return false;
//   // }
// })
// .filter((id) => {
//   id === "Da4P2uT4mVc";
// });

// <div className="emojis mt-4 flex gap-2">
//   <figure className="inline-flex bg-[#f0f0f0] rounded-xl px-3 py-1 gap-1 cursor-pointer">
//     <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.webp" type="image/webp" />
//     <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f970/512.gif" alt="🥰" className="block w-4 h-auto" />
//     <figcaption className="text-xs text-[#151515]">200</figcaption>
//   </figure>
//   <figure className="inline-flex bg-[#f0f0f0] rounded-xl px-3 py-1 gap-1 cursor-pointer">
//     <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp" type="image/webp" />
//     <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.gif" alt="🔥" className="block w-4 h-auto" />
//     <figcaption className="text-xs text-[#151515]">240</figcaption>
//   </figure>
//   <figure className="inline-flex bg-[#f0f0f0] rounded-xl px-3 py-1 gap-1 cursor-pointer">
//     <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.webp" type="image/webp" />
//     <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/2764_fe0f/512.gif" alt="❤" className="block w-4 h-auto" />
//     <figcaption className="text-xs text-[#151515]">400</figcaption>
//   </figure>
// </div>
