"use client";

import { useEffect, useState } from "react";
import { MemberProfileProps } from "@/types";
import MemberDetailLoader from "@/components/layouts/loaders/memberDetailLoader";
import MemberDetailLayout from "@/components/layouts/MemberDetail/MemberDetailLayout";
import MemberDetailNotFound from "@/components/layouts/NotFound/MemberDetailNotFound";

export default function MemberProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const [memberProfile, setMemberProfile] = useState<
    MemberProfileProps | any
  >();

  useEffect(() => {
    async function getMemberData() {
      const response = await fetch(`/api/profile/${slug}`);
      const data = await response.json(); 
      setMemberProfile(data);
    }
    getMemberData();
  }, []);

  return (
    <main className="min-h-[100dvh]">
      <section className="mx-auto mt-20 max-w-5xl px-4 py-10 sm:py-20">
        {memberProfile === undefined && <MemberDetailLoader />}
        {memberProfile?.status === 404 && (
          <MemberDetailNotFound memberProfile={memberProfile} />
        )}
        {memberProfile?.status === 200 && (
          <MemberDetailLayout memberProfile={memberProfile} />
        )}
      </section>
    </main>
  );
}
