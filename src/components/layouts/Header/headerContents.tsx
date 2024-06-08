import { Poppins } from "next/font/google";
import ivePixel from "/public/ive__pixel.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function HeaderContents() {
  return (
    <header className="relative mx-auto grid w-full max-w-7xl items-center justify-between gap-10 gap-y-14 overflow-x-hidden px-4 lg:mt-40 lg:grid-cols-2">
      <div className="header__titles relative max-sm:top-10 sm:bottom-20">
        <h2 className="text-5xl text-slate-900 lg:text-7xl">
          IT'S Time To <b>IVE</b>
        </h2>
        <p className="text-balance mt-2 text-sm leading-loose sm:text-base lg:w-[50ch]">
          Saatnya untuk bersinar dan menginspirasi. Bergabunglah dengan mereka
          dalam perjalanan yang penuh semangat dan tak terlupakan.
        </p>
        <div className="buttons mt-4 space-x-6">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
      <figure className="flex">
        <Image
          src={ivePixel}
          alt="ive pixel by ..."
          style={{ maxWidth: "100%", height: "100%" }}
          className="block max-w-full md:ml-auto"
          priority
        />
      </figure>
    </header>
  );
}
