"use client";

import { Button } from "@/components/ui/button";
// import { GithubIcon, Facebook } from "lucide-react";
import GoogleIcon from "/public/icons/google_icon.svg";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export default function Social() {
  const handleClick = () => signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  return (
    <div className="flex w-full gap-2 items-center">
      <Button size="lg" variant="outline" className="w-full" onClick={handleClick}>
        <Image src={GoogleIcon} alt="google" width={40} height={40} />
      </Button>
    </div>
  );
}
