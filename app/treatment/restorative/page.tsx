import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { restorativeFAQs, cavityFAQs, rootCanalFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "상암동 충치치료·신경치료",
  description:
    "자연치아를 최대한 보존하는 방향으로 치료합니다. 충치·신경치료 상담은 상암하늘치과로.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment/restorative`,
  },
};

export default function RestorativePage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };
  const faqSchema = getFAQSchema(restorativeFAQs);

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
      <section className="bg-orange-50 px-5 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">보존치료</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            자연치아를 최대한 보존하는 방향으로 치료합니다.<br />
            충치 초기에 발견할수록 치아를 더 많이 지킬 수 있습니다.
          </p>
        </div>
      </section>

      {/* ── 충치치료 ── */}
      <section id="cavity" className="bg-white px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">충치치료</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            충치의 진행 정도에 따라 레진, 인레이, 크라운 등 적합한 방법을 선택합니다.
            초기에 발견할수록 치아를 더 많이 지킬 수 있습니다.
          </p>
          <FAQSection faqs={cavityFAQs} />
        </div>
      </section>

      {/* ── 신경치료 ── */}
      <section id="root-canal" className="bg-surface px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">신경치료</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            충치가 신경(치수)까지 침범한 경우 신경치료를 통해 치아를 살립니다.
            치료 후 크라운으로 보호해 치아의 기능을 최대한 유지합니다.
          </p>
          <FAQSection faqs={rootCanalFAQs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">불편한 증상이 있다면 조기에 내원하시는 것을 권장합니다.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:02-375-8278" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full hover:bg-blue-700 transition-colors">
              전화 예약 &middot; 02-375-8278
            </a>
            <a href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-full" style={{ backgroundColor: "#03C75A", color: "#ffffff" }}>
              네이버 예약
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
