"use client";

import { useSession } from "next-auth/react";
import DashboardContents from "@/components/layouts/Dashboard/DashboardContents";

export default function DashboardPage() {
  const session = useSession();
  return (
    <section className="mx-auto flex max-w-7xl items-start gap-10 rounded-lg bg-white p-6">
      {session && <DashboardContents />}
    </section>
  );
}
