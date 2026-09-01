import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { periodontalFAQs, scalingFAQs, gumTreatmentFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "상암동 스케일링·잇몸치료",
  description:
    "정기적인 스케일링과 치주치료로 잇몸 건강을 관리합니다. 스케일링·잇몸치료 상담은 상암하늘치과로.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment/periodontal`,
  },
};

export default function PeriodontalPage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };
  const faqSchema = getFAQSchema(periodontalFAQs);

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
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">치주치료</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            정기적인 스케일링과 치주치료로 잇몸 건강을 관리합니다.<br />
            치주질환은 조기 발견과 꾸준한 관리가 핵심입니다.
          </p>
        </div>
      </section>

      {/* ── 스케일링 ── */}
      <section id="scaling" className="bg-white px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">스케일링</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            치아 표면의 치석과 세균막을 제거하는 기본 치료입니다.
            만 19세 이상은 연 1회 건강보험이 적용됩니다.
          </p>
          <FAQSection faqs={scalingFAQs} />
        </div>
      </section>

      {/* ── 잇몸치료 ── */}
      <section id="gum-treatment" className="bg-surface px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">잇몸치료</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            스케일링만으로 해결이 어려운 깊은 치주낭은 치근활택술(잇몸치료)로 관리합니다.
            치주질환은 조기 발견과 꾸준한 유지 치료가 핵심입니다.
          </p>
          <FAQSection faqs={gumTreatmentFAQs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">잇몸이 붓거나 피가 나면 조기에 내원하시는 것을 권장합니다.</p>
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
