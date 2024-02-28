"use client";
import Heading from "../../common/heading/Heading";

export default function SectionHeader({ title, link }: { title: string; link: string }) {
  return (
    <div className="flex justify-between items-center">
      <Heading type="h2" color="default" size="medium" className="text-center" children={title} />
      <span className="block text-right underline text-[#e0115f]">View More</span>
    </div>
  );
}
