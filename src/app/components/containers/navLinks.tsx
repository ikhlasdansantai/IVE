"use client";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const currentPath = usePathname();
  type linkProps = {
    label: string;
    href: string;
  };
  const links: linkProps[] = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profiles" },
    { label: "Contents", href: "/contents" },
    { label: "Community", href: "/community" },
  ];

  return (
    <ul className="flex justify-between space-x-8">
      {links.map(({ label, href }, index) => (
        <Link
          key={index}
          href={href}
          className={classNames({
            "font-semibold text-[#212121]": currentPath === href,
            "text-[#666]": currentPath !== href,
            "text-2xl": true,
          })}
        >
          {label}
        </Link>
      ))}
    </ul>
  );
}
