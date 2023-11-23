import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/layouts/Header/Header";
import Navbar from "./components/layouts/Navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <header>{/* <Navbar/> */}</header>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
