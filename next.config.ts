import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 개별 매핑 — 명확한 대응 관계
      {
        source: "/inet/sub01/sub01",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/inet/sub02/sub02",
        destination: "/treatment/restorative",
        permanent: true,
      },
      {
        source: "/inet/sub03/sub02",
        destination: "/treatment/prosthetics",
        permanent: true,
      },
      {
        source: "/inet/sub03/sub03",
        destination: "/treatment/prosthetics",
        permanent: true,
      },
      {
        source: "/inet/sub04/sub03",
        destination: "/treatment/implant",
        permanent: true,
      },
      // 포괄 규칙 — 위에서 안 잡힌 나머지 옛 경로 전부
      {
        source: "/inet/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
