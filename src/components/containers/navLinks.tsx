"use client";

import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { links, linkProps } from "@/types";
export default function NavLinks({ size }: { size: string }) {
  const currentPath = usePathname();

  return (
    <ul
      className={classNames({
        "hidden justify-between space-x-8 md:flex": size === "desktop",
        "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-evenly gap-4 bg-white p-4 shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] md:hidden":
          size === "mobile",
      })}
    >
      {links.map(({ label, href }: linkProps, index: number) => (
        <Link
          key={index}
          href={href}
          className={classNames({
            "font-semibold text-[#212121]": currentPath === href,
            "text-[#666]": currentPath !== href,
            "text-lg md:text-2xl": true,
          })}
        >
          {label}
        </Link>
      ))}
    </ul>
  );
}
