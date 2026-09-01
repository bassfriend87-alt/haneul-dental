import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { aestheticFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";
import { PhoneIcon } from "@/app/components/icons";

export const metadata: Metadata = {
  title: "상암동 라미네이트 심미치료",
  description:
    "보철과 전문의가 직접 설계·제작하는 라미네이트. 치아 형태와 색상 개선 상담은 상암하늘치과로.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment/aesthetic`,
  },
};

export default function AestheticPage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };
  const faqSchema = getFAQSchema(aestheticFAQs);

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
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">심미치료</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            보철과 전문의가 직접 형태와 색상을 설계·제작합니다.
          </p>
          <div className="mt-6 inline-block text-sm text-charcoal-light border border-gray-200 rounded-full px-4 py-1.5">
            현재 준비중입니다
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-8">자주 묻는 질문</h2>
          <FAQSection faqs={aestheticFAQs} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">궁금한 점은 전화로 문의해 주세요.</p>
          <a href="tel:02-375-8278" className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors">
            <PhoneIcon className="w-4 h-4 shrink-0" />전화 예약 &middot; 02-375-8278
          </a>
        </div>
      </section>
    </>
  );
}
