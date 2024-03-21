import { Button } from "@/components/ui/button";
import IVELogo from "/public/ive__logo.jpg";
import Image from "next/image";
import Instagram from "@/components/common/icons/instagram";
import Youtube from "@/components/common/icons/youtube";

export default function Footer() {
  return (
    <footer className="w-full bg-[#181a2a]">
      <div className="mx-auto grid max-w-7xl grid-cols-3 px-4 py-8">
        <div className="left">
          <figure className="grid__content w-12">
            <Image
              src={IVELogo}
              alt="IVE"
              style={{ maxWidth: "100%", height: "100%" }}
              className="block max-w-full"
            />
          </figure>
          <h5 className="mt-2 text-xl text-white">IVE Fanmade Website</h5>
          <p className="text-white/50">© 2024 IVE</p>
        </div>
        <div className="middle">
          <h2 className="mt-2 text-xl text-white/50">Assets</h2>
          <ul className="mt-2 text-white">
            <li className="cursor-pointer hover:underline">
              IVE Characters Pixel
            </li>
          </ul>
        </div>
        <div className="right__to">
          <h2 className="mt-2 text-xl text-white/50">Social Media</h2>
          <ul className="mt-2 flex gap-3 text-white">
            <li className="cursor-pointer hover:underline">
              <Instagram />
            </li>
            <li className="cursor-pointer hover:underline">
              <Youtube />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
