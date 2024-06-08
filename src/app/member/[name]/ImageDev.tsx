"use client";

import Image from "next/image";

export default function ImageDev({ src }: any) {
  return (
    <Image
      src={src}
      alt={`${src} img`}
      loading="lazy"
      width={400}
      height={400}
      quality={100}
      className="opacity-0 duration-500 max-w-full object-cover overflow-hidden aspect-square"
      // placeholder="blur"
      // blurDataURL="https://placehold.co/600x400"
      onLoadingComplete={(item) => item.classList.remove("opacity-0")}
    />
  );
}
