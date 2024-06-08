"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="space-y-3">
        <Image src={"https://media.giphy.com/media/qiKPTZdYCppWo6g3dz/giphy.gif"} alt={"GIF"} width={250} height={200} loading="lazy" className="mx-auto max-w-full h-auto" />
        <h2 className="text-center">
          <b>Maaf</b>, video yang anda cari, Tidak Ditemukan :(
        </h2>
        <Link href={"/contents"} className="text-center mx-auto block">
          Kembali Ke Content Video
        </Link>
      </div>
    </div>
  );
}
