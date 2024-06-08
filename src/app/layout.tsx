import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layouts/Navbar/Navbar";
import LayoutProviders from "@/app/layoutProviders";
import { Suspense } from "react";
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"] });
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Footer from "@/components/layouts/Footer/footer";

export const metadata: Metadata = {
  title: "IVE | Fanmade Website",
  description: "Created by ikhlasdansantai",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`${manrope.className} flex flex-col justify-between`}>
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutProviders>
              {children}
              <Footer />
            </LayoutProviders>
          </Suspense>
        </body>
      </html>
    </SessionProvider>
  );
}
