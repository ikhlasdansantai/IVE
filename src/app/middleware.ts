export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/users/(.*)"],
};

// import { NextResponse, NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const isLoggin = false;
//   if (!isLoggin) {
//     return NextResponse.redirect(new URL("/auth", request.url));
//   }
// }

// Matcher
// adalah memungkintkan kita memfilter middleware pada path yang spesifik, contoh
// url yang mana yang mau ditambahkan? /dashboard --> harus login, ketika kita mengakses /dashboar, maka kita harus login terlebih dahulu

// export const config = {
//   // kalo lebih dari satu jadikan array
//   // matcher: ["/dashboard", "/profile"]
//   matcher: "/dashboard",
// };
