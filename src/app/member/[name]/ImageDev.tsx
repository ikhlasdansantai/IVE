"use client";

import Image from "next/image";

export default function ImageDev({ src }: any) {
  return (
    <Image
      src={src}
      alt={`${src} img`}
      loading="lazy"
      width={200}
      height={100}
      quality={100}
      style={{ width: "100%", height: "auto" }}
      className="opacity-0 duration-500"
      // placeholder="blur"
      // blurDataURL="https://placehold.co/600x400"
      onLoadingComplete={(item) => item.classList.remove("opacity-0")}
    />
  );
}
