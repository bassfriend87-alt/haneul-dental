import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { DesktopFloatingButtons } from "./components/DesktopFloatingButtons";
import { TapFix } from "./components/TapFix";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { MetaPixelPageView } from "./components/MetaPixelPageView";

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
      <body className="min-h-full flex flex-col antialiased">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=25689882210623811&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <TapFix />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer className="pb-16 md:pb-0" />
        <MobileBottomBar />
        <DesktopFloatingButtons />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <MetaPixelPageView />
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','25689882210623811');
          fbq('track','PageView');
        `}</Script>
      </body>
    </html>
  );
}
