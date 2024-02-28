import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar/Navbar";
// import { usePathname } from "next/navigation";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const disabledNavbar = ["/auth", "/dashboard"];
// const pathname = usePathname();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>
          <Navbar />
        </header>
        {/* <header className="relative">{!disabledNavbar.includes(pathname) && <Navbar />}</header> */}
        {children}
      </body>
    </html>
  );
}
