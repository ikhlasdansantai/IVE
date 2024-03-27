"use client";

import classNames from "classnames";
import { CircleUser, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type linkProps = {
  label: string;
  href: string;
  icon: JSX.Element;
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();
  const links: linkProps[] = [
    { label: "Overview", href: "/dashboard", icon: <CircleUser /> },
    { label: "Settings", href: "/dashboard/settings", icon: <Settings /> },
  ];

  return (
    <main className="min-h-[100dvh] w-full bg-[#f1f5f9] pb-20 pt-40">
      <section className="mx-auto max-w-7xl rounded-tl-lg rounded-tr-lg bg-white">
        <ul className="mx-6 flex items-center justify-start gap-10 border-b-2 pt-6">
          {links.map((link: linkProps, index: number) => (
            <li
              key={index}
              className={classNames({
                "border-b-2 border-black": currentPath === link.href,
                "text-slate-400": currentPath !== link.href,
                "pb-4 transition duration-300 hover:text-slate-600 focus:text-slate-600":
                  true,
              })}
            >
              <Link
                href={link.href}
                className="flex cursor-pointer items-center gap-1"
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </main>
  );
}
