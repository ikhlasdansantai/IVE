"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/layouts/Navbar/Navbar";

export default function LayoutProviders({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const noNav: string[] = ["/login", "/register", "/demo"];

  return (
    <>
      {noNav.includes(path) ? null : (
        <header>
          <Navbar />
        </header>
      )}
      {children}
    </>
  );
}
