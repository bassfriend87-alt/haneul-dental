import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default function OGImage() {
  const logoBuffer = readFileSync(
    join(process.cwd(), "public/images/logo-white.png")
  );
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1a1a1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 28,
        }}
      >
        <img src={logoSrc} width={520} height={86} />
        <div
          style={{
            color: "#8a8a8a",
            fontSize: 26,
            fontFamily: "sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          보철과 전문의 · 상암동
        </div>
      </div>
    ),
    { ...size }
  );
}
