import Image from "next/image";
import wony from "/public/wony.jpeg";
import { Button } from "@/components/ui/button";
import { Pen } from "lucide-react";

export default function DashboardPage() {
  return (
    <section className="mx-auto flex max-w-7xl items-start gap-10 rounded-lg bg-white p-6">
      <figure className="relative w-64">
        <Pen
          className="absolute right-0 top-0 cursor-pointer bg-white p-2"
          size={34}
        />
        <Image src={wony} alt="wony" className="block max-w-full" />
      </figure>
      <div className="w-full">
        <div className="dashboard__header flex items-center justify-between">
          <h1 className="text-xl font-semibold">My Profile</h1>
          <Button variant="default" size="lg">
            Edit Profile
          </Button>
        </div>
        <ul className="mt-6 flex gap-10">
          <li>
            <h5 className="font-semibold">Name</h5>
            <p>ikhlasdansantai</p>
          </li>
          <li>
            <h5 className="font-semibold">Email</h5>
            <p>ikhsan@ganteng.com</p>
          </li>
        </ul>
        <h2 className="mt-20 text-xl font-semibold">My Activity</h2>
        <div className="cards mt-10 grid grid-cols-2 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="card rounded-md border-2 p-4 text-left">
              <h2 className="text-2xl font-medium">
                Spread love to my beloved Maknae...
              </h2>
              <div className="tags my-4 flex flex-wrap gap-3">
                <button
                  className="rounded-lg border border-[#ef67a5] bg-[#ef67a5] px-2 py-1 text-xs text-white"
                  title="member-name-tag"
                >
                  Yujin 🐶
                </button>
                <button
                  className="rounded-lg border border-[#ef67a5] bg-[#ef67a5] px-2 py-1 text-xs text-[#2a2a2a]/[.70]"
                  title="member-name-tag"
                >
                  Leeseo 🦁
                </button>
                <button
                  className="rounded-lg border border-[#ef67a5] bg-[#ef67a5] px-2 py-1 text-xs text-white"
                  title="member-name-tag"
                >
                  Liz 🐱
                </button>
              </div>
              <div className="user-info flex gap-2 text-xs font-normal text-slate-600">
                <p>ikhlasdansantai</p>
                <p>2 Hari Yang Lalu</p>
                <p>Reactions 20</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
