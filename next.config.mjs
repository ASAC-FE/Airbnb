/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/members/new", // POST 요청을 보낼 경로를 일치
  //       destination: "http://localhost:8080/members/new", // 대상 경로로 Spring의 POST Mapping 되어있는 주소
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a0.muscache.com",
      },
    ],
  },
};

export default nextConfig;
