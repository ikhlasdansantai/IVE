"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="space-y-3">
        <Image
          src={"https://media.giphy.com/media/qiKPTZdYCppWo6g3dz/giphy.gif"}
          alt={"GIF"}
          width={250}
          height={200}
          loading="lazy"
          className="mx-auto h-auto max-w-full"
        />
        <h2 className="text-center">
          <b>Maaf</b>, video yang anda cari, Tidak Ditemukan :(
        </h2>
        <Link href={"/contents"} className="mx-auto block text-center">
          Kembali Ke Content Video
        </Link>
      </div>
    </div>
  );
}
