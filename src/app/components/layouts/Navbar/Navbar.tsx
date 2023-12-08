"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import ive from "../../../../../public/Ive_logo_Black.svg";
import Image from "next/image";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
// import { LogOut, CircleUser, Settings } from "lucide-react";
import NavLinks from "../../containers/navLinks";
import NavDropdown from "../../containers/navDropdown";

export default function Navbar() {
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });
  }, []);

  return (
    <nav
      className={classNames({
        "bg-white": y >= 100,
        "fixed left-0 right-0 top-0 z-50 p-4  transition duration-300 overflow-hidden": true,
      })}
    >
      <div className="nav__contents max-w-7xl mx-auto flex items-center justify-between">
        <figure className="w-20">
          <Image src={ive} alt="anjay" className="block max-w-full" />
        </figure>
        <NavLinks />
        <NavDropdown />
        {/* <DropdownMenu>
          <DropdownMenuTrigger>
            <CircleUser size={60} className="cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52 mt-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              <CircleUser className="mr-2" />
              <span>Login</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
    </nav>
  );
}
