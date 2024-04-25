"use client";

import ChatBox from "@/components/common/chats/chatBox";
import ChatInputs from "@/components/layouts/chats/chatInputs";
import ChatBoxLoader from "@/components/layouts/loaders/chatBoxLoader";
import { useEffect, useState } from "react";

export default function ContentDetailChats({
  id,
  className,
}: {
  id: string;
  className: string;
}) {
  const [chats, setChats] = useState<any | undefined>();
  const [data, setData] = useState<any | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getChats = async () => {
    const response = await fetch(`/api/content/${id}`, {
      method: "GET",
    });
    if (response.ok) {
      const results = await response.json();
      setIsLoading(false);
      setChats(results.data?.chats);
      setData(results.data);
    } else {
      alert("Server internal error \nPlease Refresh Your Browser:)");
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  return (
    <section className={`${className} text-center md:col-start-3`}>
      <div className="live__chat flex items-center justify-between p-4 shadow-md">
        <h2>Public Chat</h2>
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
        </span>
      </div>
      <div className="chats h-[30dvh] space-y-4 overflow-y-scroll border p-4 md:h-96">
        {isLoading && <ChatBoxLoader />}
        {!isLoading && data?.chats.length < 1 && (
          <p className="mt-4 text-sm text-gray-400">No Chats Yet</p>
        )}
        {!isLoading && data?.chats.length > 0 && <ChatBox data={data.chats} />}
      </div>
      <ChatInputs data={data} revalidator={getChats} />
    </section>
  );
}
