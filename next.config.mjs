/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async headers() {
    const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: indexable ? "index, follow" : "noindex, nofollow"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
