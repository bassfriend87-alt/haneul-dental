import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // 인블로그 프록시 — 블로그를 서브디렉토리(/blog)로 제공 (인블로그 대시보드 안내 코드 기준)
        {
          source: "/blog",
          destination: "https://proxy.inblog.dev/haneuldental",
        },
        {
          source: "/blog/:path*",
          destination: "https://proxy.inblog.dev/haneuldental/:path*",
        },
      ],
    };
  },
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
      // 옛 블로그 서브도메인(blog.haneuldental.co.kr) → 서브디렉토리(/blog)로 영구 리디렉션
      // host 조건으로 www 쪽 요청에는 영향 없음
      {
        source: "/",
        destination: "https://www.haneuldental.co.kr/blog",
        permanent: true,
        has: [{ type: "host", value: "blog.haneuldental.co.kr" }],
      },
      {
        source: "/:path+",
        destination: "https://www.haneuldental.co.kr/blog/:path+",
        permanent: true,
        has: [{ type: "host", value: "blog.haneuldental.co.kr" }],
      },
    ];
  },
};

export default nextConfig;
