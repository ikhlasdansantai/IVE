"use client";

import { SmilePlus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import EmojiModal from "./emojiModal";
import EmojiIcon from "./emojiIcon";

const emojiActiveDemo = [
  {
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
    alt: "😱",
    counter: 111,
  },
  {
    src: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f631/512.gif",
    alt: "😱",
    counter: 222,
  },
];

export default function ShowEmojis({ id }: { id: string }) {
  const overlay = useRef<any>(null);
  const [emojis, setEmojis] = useState<any | undefined>();
  const [data, setData] = useState<any | undefined>();
  const [showEmojiSuggest, setShowEmojiSuggest] = useState(false);

  const getEmojis = async () => {
    const response = await fetch(`/api/content/${id}`, {
      method: "GET",
    });
    if (response.ok) {
      const results = await response.json();
      setEmojis(results?.data?.emojis);
      setData(results?.data);
    } else {
      alert("Server internal error \nPlease Refresh Your Browser:)");
      console.log("Server internal error");
    }
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (!overlay.current.contains(e.target))
        return setShowEmojiSuggest(false);
    };
    document.addEventListener("mousedown", handler);

    getEmojis();
  }, []);

  return (
    <div className="relative mt-4 flex items-start gap-4" ref={overlay}>
      <SmilePlus
        onClick={() => setShowEmojiSuggest(!showEmojiSuggest)}
        className="cursor-pointer max-[640px]:mt-3"
      />
      <EmojiModal
        state={showEmojiSuggest}
        data={data}
        revalidator={getEmojis}
      />
      <div className="emojis space-x-4 max-[640px]:space-y-2">
        {emojis?.map((emoji: any, index: number) => (
          <EmojiIcon
            key={index + 1}
            emojiCode={emoji.emojiCode}
            alt={emoji.emojiIcon}
            total={emoji.emojiTotal}
          />
        ))}
      </div>
    </div>
  );
}
