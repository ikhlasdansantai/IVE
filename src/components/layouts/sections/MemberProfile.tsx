"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "@/app/member/loading";
import iveLogo from "@/assets/logo.svg";
import Link from "next/link";

export default function MemberProfile() {
  const [members, setMembers] = useState<any | null>(null);
  async function getMemberDatas() {
    try {
      const response = await fetch("/api/profile");
      if (response.ok) {
        const results = await response.json();
        setMembers(results);
      } else console.log("Server internal error");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getMemberDatas();
  }, []);

  if (!members) return <Loading />;

  return (
    <section className="section__container min-h-[100dvh] px-0 pb-10 md:py-20">
      <h2 className="text-3xl lg:text-4xl">Members Profile</h2>
      <div className="member__profile__container mt-4 grid grid-cols-1 gap-10 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
        {members?.data.map((member: any, index: number) => {
          return (
            <Link href={`/profiles/${member.name}`} key={index}>
              <figure className="relative w-full border-4">
                <Image
                  src={member?.assets?.[0].mainProfileImage}
                  alt={`${member.name} image`}
                  width={350}
                  height={100}
                  quality={100}
                  loading="lazy"
                  className="max-w-full object-cover md:aspect-[3/4]"
                />
                <div className="member_details_container absolute bottom-0 left-0 right-0 bg-white p-2">
                  <div className="member__details__header flex items-center justify-between">
                    <div className="member__name py-2">
                      <h5 className="text-xl font-semibold">{member.name}</h5>
                      <p className="text-black/60">
                        {member.positions.join(" | ")}
                      </p>
                    </div>
                    <figure>
                      <Image
                        src={iveLogo}
                        alt="Gambar Logo"
                        width={40}
                        height={40}
                      />
                    </figure>
                  </div>
                </div>
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
