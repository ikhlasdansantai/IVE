"use client";

import Image from "next/image";

export default function EmojiIcon({
  emojiCode,
  alt,
  total,
  onClick,
}: {
  emojiCode: string;
  alt: string;
  total?: number;
  onClick?: any;
}) {
  return (
    <figure
      onClick={onClick}
      className="inline-flex cursor-pointer items-center gap-1 rounded-xl bg-[#f0f0f0] px-3 py-1"
    >
      <Image
        src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${emojiCode}/512.gif`}
        alt={alt}
        className="block h-auto w-6"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {total && (
        <figcaption className="text-base text-[#151515]">{total}</figcaption>
      )}
    </figure>
  );
}
