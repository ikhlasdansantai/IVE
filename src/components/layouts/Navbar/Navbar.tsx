import ive from "/public/Ive_logo_Black.svg";
import Image from "next/image";
import NavDropdown from "../../containers/navDropdown";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import NavLinks from "@/components/containers/navLinks";

export default function Navbar() {
  const user = useSession();
  return (
    <nav>
      <div className="fixed left-0 right-0 top-0 z-50 overflow-hidden bg-white p-4 shadow-md duration-300">
        <div className="nav__contents mx-auto flex max-w-7xl items-center justify-between">
          <Link href={"/"} className="w-14 md:w-20">
            <Image src={ive} alt="anjay" className="block max-w-full" />
          </Link>
          <NavLinks size="desktop" />
          {user.data === null ? (
            <Button asChild>
              <Link href={"/register"}>SignUp</Link>
            </Button>
          ) : (
            <NavDropdown user={user} />
          )}
        </div>
      </div>
      <NavLinks size="mobile" />
    </nav>
  );
}
