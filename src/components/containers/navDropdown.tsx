"use client";

import Link from "next/link";
import { LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";

function UserLogin({ image }: { image?: string | any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <figure className="w-20 cursor-pointer overflow-hidden rounded-full">
          {image !== null ? (
            <Image
              src={image}
              alt="gambar user"
              style={{ maxWidth: "100%", height: "auto" }}
              width={200}
              height={200}
            />
          ) : (
            <User className="ml-auto block h-8 w-8" />
          )}
        </figure>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard" className="flex">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/api/auth/signout" className="flex">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function NavDropdown({ user }: any) {
  return (
    <div className="flex items-center justify-end">
      <UserLogin image={user?.data?.user?.image} />;
    </div>
  );
}
