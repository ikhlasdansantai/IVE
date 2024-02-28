/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "media.giphy.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com ",
      },
    ],
  },
  // images: {
  //   // formats: ["image/avif", "image/webp"],
  //   domains: ["i.ytimg.com", "i.pinimg.com", "media.giphy.com"], // Tambahkan host i.ytimg.com ke dalam array
  // },
};

module.exports = nextConfig;
