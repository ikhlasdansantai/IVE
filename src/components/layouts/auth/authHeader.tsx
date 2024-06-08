import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Iveimg from "/public/Ive_logo_Black.svg";
import Image from "next/image";

interface authHeaderProps {
  title: string;
  description: string;
}
export default function AuthHeader({ title, description }: authHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
      <Image src={Iveimg} alt="ive logo" width={30} height={30} />
    </div>
  );
}
