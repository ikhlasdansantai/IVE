import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col justify-end items-center bg-[#000] relative overflow-x-hidden">
      <figure className="coba__parallax bg-fixed"></figure>
      <div className="header__titles absolute max-sm:top-10 sm:bottom-20 text-center">
        <h1 className={`text-[#fe7dfe] text-6xl lg:text-9xl ${poppins.className} `}>I AM</h1>
        <h2 className="text-white text-3xl lg:text-6xl">175 MILLION</h2>
        <h2 className="text-white text-3xl lg:text-6xl">Views On Youtube</h2>
      </div>
    </header>
  );
}
