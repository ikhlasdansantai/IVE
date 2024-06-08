"use client";

import { EmojiProps, baseEmojis } from "@/types";
import EmojiIcon from "./emojiIcon";
import classNames from "classnames";
import { useSession } from "next-auth/react";

export default function EmojiModal({
  state,
  data,
  revalidator,
}: {
  state: boolean;
  // data: EmojiProps;
  data: any;
  revalidator?: () => void;
}) {
  const session = useSession();
  const postEmojis = async ({ emojiCode, emojiIcon }: any) => {
    const response = await fetch("/api/content", {
      method: "POST",
      body: JSON.stringify({
        id: session?.data?.user?.id,
        videoId: data?.videoUrl,
        emojiIcon: emojiIcon,
        emojiCode: emojiCode,
      }),
    });

    if (response.ok) {
      const results = await response.json();
      if (results.status === 404) return alert(results.message);
      revalidator && revalidator();
    } else {
      alert("Server internal error \nPlease Refresh Your Browser:)");
    }
  };

  return (
    <div
      className={classNames({
        "absolute -top-32 left-0 grid grid-cols-3 gap-4 rounded-lg bg-white p-4 shadow-md":
          true,
        "pointer-events-none translate-y-[60px] opacity-0 transition duration-300 ease-in":
          !state,
        "opacity-1 pointer-events-auto translate-y-[0px] transition duration-300 ease-in":
          state,
      })}
    >
      {baseEmojis.map((emoji: EmojiProps) => (
        <EmojiIcon
          onClick={() =>
            postEmojis({
              emojiIcon: emoji.emojiIcon,
              emojiCode: emoji.emojiCode,
            })
          }
          key={emoji.emojiIcon}
          emojiCode={emoji.emojiCode}
          alt={emoji.emojiIcon}
        />
      ))}
    </div>
  );
}
