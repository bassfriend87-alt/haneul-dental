import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { tmjFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
// import { KakaoIcon } from "@/app/components/icons"; // 카카오톡 채널 연동 시 활성화

export const metadata: Metadata = {
  title: "상암동 턱관절치료(TMJ)",
  description:
    "턱 통증·소리·개구 제한 등 턱관절 증상을 치료합니다. 교합안정장치·턱관절치료 상담은 상암하늘치과로.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment/tmj`,
  },
};

export default function TMJPage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };
  const faqSchema = getFAQSchema(tmjFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-orange-50 px-5 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">턱관절치료</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            턱 통증·소리·개구 제한 등 턱관절 증상을 치료합니다.<br />
            보존적 치료를 우선으로, 교합 문제와 구강 내 원인을 중심으로 접근합니다.
          </p>
        </div>
      </section>

      {/* ── 치료 안내 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">교합안정장치·턱관절 치료</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            턱관절 장애는 이갈이, 이 악물기, 교합 불균형 등 다양한 원인이 복합적으로 작용합니다.
            교합안정장치(스플린트) 장착, 물리치료, 약물치료, 악습관 교정 등을
            단독 또는 병행하여 치료합니다.
          </p>
          <FAQSection faqs={tmjFAQs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">턱 증상이 가볍더라도 방치하면 진행될 수 있습니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:02-375-8278" className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors">
              <PhoneIcon className="w-4 h-4 shrink-0" />전화 예약 &middot; 02-375-8278
            </a>
            <a href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full" style={{ backgroundColor: "#03C75A", color: "#ffffff" }}>
              <NaverIcon className="w-4 h-4 shrink-0" />네이버 예약
            </a>
            {/* 카카오톡 채널 연동 시 활성화
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full cursor-not-allowed"
              style={{ backgroundColor: '#FEE500', color: '#191919' }}
            >
              <KakaoIcon className="w-4 h-4 shrink-0" />카카오톡 (준비중)
            </button>
            */}
          </div>
        </div>
      </section>
    </>
  );
}
