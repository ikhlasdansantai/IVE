"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./loading";

function FromFans({ data }: { data: any }) {
  const handleMsg = (e: any) => {
    console.log(e);
  };

  return (
    <div>
      <div className="write-msg">
        <div className="inputBox flex justify-normal gap-2">
          <figure className="w-14 h-12 rounded-full bg-gray-600"></figure>
          <input type="text" name="text" onChange={(e) => handleMsg(e.target.value)} placeholder="Tulis Pesan...." className="border-2 px-2 border-slate-800 w-full rounded-lg" />
        </div>
      </div>

      {/* Development */}
      {data.map((data, index) => (
        <div className="card text-left mt-10">
          <h2 className="text-2xl font-medium">{data.comment}</h2>
          <div className="tags my-4 flex gap-3 flex-wrap">
            <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
              Yujin 🐶
            </button>
            <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-[#2a2a2a]/[.70]" title="member-name-tag">
              Leeseo 🦁
            </button>
            <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
              Liz 🐱
            </button>
          </div>
          <div className="user-info flex gap-2 text-slate-600 font-normal text-xs">
            <p>Love Wony</p>
            <p>2 Hari Yang Lalu</p>
            <p>Reactions 20</p>
          </div>
        </div>
      ))}

      {/* End Of Development */}

      {/* Card Design */}
      <div className="card text-left mt-10">
        <h2 className="text-2xl font-medium">Ini Adalah Sebuah Pesan Dari Fans Untuk Idol nya</h2>
        <div className="tags my-4 flex gap-3 flex-wrap">
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
            Yujin 🐶
          </button>
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-[#2a2a2a]/[.70]" title="member-name-tag">
            Leeseo 🦁
          </button>
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
            Liz 🐱
          </button>
        </div>
        <div className="user-info flex gap-2 text-slate-600 font-normal text-xs">
          <p>Love Wony</p>
          <p>2 Hari Yang Lalu</p>
          <p>Reactions 20</p>
        </div>
      </div>

      {/* Card Design */}
      <div className="card text-left mt-10">
        <h2 className="text-2xl font-medium">Ini Adalah Sebuah Pesan Dari Fans Untuk Idol nya</h2>
        <div className="tags my-4 flex gap-3 flex-wrap">
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
            Yujin 🐶
          </button>
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-[#2a2a2a]/[.70]" title="member-name-tag">
            Leeseo 🦁
          </button>
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
            Liz 🐱
          </button>
        </div>
        <div className="user-info flex gap-2 text-slate-600 font-normal text-xs">
          <p>Love Wony</p>
          <p>2 Hari Yang Lalu</p>
          <p>Reactions 20</p>
        </div>
      </div>
      {/* Card Design */}
      <div className="card text-left mt-10">
        <h2 className="text-2xl font-medium">Surat terbuka untuk Kim Jiwoon</h2>
        <div className="tags my-4 flex gap-3 flex-wrap">
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-white" title="member-name-tag">
            Gaeul 🦊
          </button>
          <button className="text-xs bg-[#ef67a5] border border-[#ef67a5] px-2 py-1 rounded-lg text-[#2a2a2a]/[.70]" title="member-name-tag">
            Leeseo 🦁
          </button>
        </div>
        <div className="user-info flex gap-2 text-slate-600 font-normal text-xs">
          <p>Love Wony</p>
          <p>2 Hari Yang Lalu</p>
          <p>Reactions 20</p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [data, setData] = useState(null);

  const getComments = async () => {
    const res = await fetch("/api/community");
    if (!res.ok) {
      alert("Server Internal Error \nTry Again Later");
    }
    const data = await res.json();
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  if (data === null) return <Loading />;
  const commentDatas = data.data;

  return (
    <div className="grid grid-cols-2 text-center max-w-5xl mx-auto mt-40">
      <ul className="space-y-10 text-left">
        <li className="text-2xl">👋 Selamat Datang</li>
        <li className="text-2xl">
          Dari Fans Untuk <b>IVE</b>
        </li>
      </ul>
      <FromFans data={commentDatas} />
    </div>
  );
}
