// "use client";
import Link from "next/link";
import Heading from "../../common/heading/Heading";
import { Button } from "@/components/ui/button";

export default function SectionHeader({ title, link }: { title: string; link: string }) {
  return (
    <div className="flex justify-between items-center">
      <Heading type="h2" color="default" size="medium" className="text-center" children={title} />
      <Button variant="link" className="block text-right text-[#e0115f]" asChild>
        <Link href={link}>View More</Link>
      </Button>
    </div>
  );
}
