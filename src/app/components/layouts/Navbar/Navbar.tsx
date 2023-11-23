import Image from "next/image";
import iveBg from "../../assets/ive__logo.jpg";

export default function Navbar() {
  return (
    <nav className="border-3 fixed z-10 p-4">
      <figure className="w-10">
        <Image src={iveBg} alt={`${iveBg} img`} className="max-w-full block" />
      </figure>
    </nav>
  );
}
