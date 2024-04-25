"use client";

import { useSession } from "next-auth/react";
import { SendHorizontal } from "lucide-react";
import { useRef, useState } from "react";

export default function ChatInputs({
  data,
  revalidator,
}: {
  data: any;
  revalidator: any;
}) {
  const chatInputRef = useRef<HTMLInputElement>(null);
  const [chats, setChats] = useState<any>([]);
  const session = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  console.log(data?.videoUrl);
  const onSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    alert(e.target[0].value);
    setIsLoading(true);

    const postChat = async () => {
      const response = await fetch(`/api/content/`, {
        method: "POST",
        body: JSON.stringify({
          id: session?.data?.user?.id,
          videoId: data?.videoUrl,
          chatBody: e.target[0].value,
        }),
      });
      setIsLoading(false);
      e.target[0].value = "";

      if (response.ok) {
        const results = await response.json();
        if (results.status === 404) return alert(results.message);
        setChats(results.data);
        revalidator();
      } else {
        alert("Server internal error \nPlease Refresh Your Browser:)");
      }
    };

    postChat();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="chat__input relative mb-auto block border p-4"
    >
      <input
        onClick={() => {
          if (chatInputRef.current) {
            chatInputRef.current.focus();
          }
        }}
        type="text"
        id="chat"
        name="chat"
        className="w-full rounded-lg border p-4"
        placeholder="Write a comment..."
        disabled={isLoading}
      />
      <button type="submit">
        <SendHorizontal className="absolute right-8 top-8 cursor-pointer hover:drop-shadow-lg focus:drop-shadow-lg" />
      </button>
    </form>
  );
}
// useEffect(() => {
//     const handleChatInputClick = () => {
//       if (chatInputRef.current) {
//         chatInputRef.current.focus();
//       }
//     };

//     const chatInputDiv = document.querySelector(".chat__input");
//     chatInputDiv?.addEventListener("click", handleChatInputClick);
//     const getChats = async () => {
//       const response = await fetch(`/api/content/${id}`, {
//         method: "GET",
//       });
//       if (response.ok) {
//         const results = await response.json();
//         setChats(results.data.chats);
//       } else {
//         alert("Server internal error \nPlease Refresh Your Browser:)");
//         console.log("Server internal error");
//       }
//     };
//     getChats();

//     return () => {
//       chatInputDiv?.removeEventListener("click", handleChatInputClick);
//     };
//   }, []);
