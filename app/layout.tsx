import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  preload: false,
  display: "swap",
  variable: "--font-noto-kr",
});

export const metadata: Metadata = {
  title: {
    default: "상암하늘치과의원",
    template: "%s | 상암하늘치과의원",
  },
  description:
    "상암동 보철과 전문의가 직접 진단부터 제작·관리까지. 크라운·브릿지·임플란트·틀니. 화·목 야간진료.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoKR.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
