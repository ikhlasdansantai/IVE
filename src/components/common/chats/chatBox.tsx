import { CircleUser, } from "lucide-react";

export default function ChatBox({ data }: { data: any }) {
  return (
    <>
      {data.map((chat: any) => (
        <div
          key={chat.id}
          className="chat__box flex items-start gap-3 border-b pb-2 text-left"
        >
          <CircleUser className="text-4xl" color="#1a1a1a" />
          <div className="chat__profile -mt-[3px]">
            <h5>{chat.userName}</h5>
            <p className="text-md text-slate-500">{chat.chatBody}</p>
          </div>
        </div>
      ))}
    </>
  );
}
