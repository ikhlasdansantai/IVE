/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ["image/avif", "image/webp"],
    domains: ["i.ytimg.com", "i.pinimg.com", "media.giphy.com"], // Tambahkan host i.ytimg.com ke dalam array
  },
};

module.exports = nextConfig;
