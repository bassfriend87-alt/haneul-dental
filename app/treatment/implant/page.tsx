import { Metadata } from "next";
import Link from "next/link";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { implantFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
// import { KakaoIcon } from "@/app/components/icons"; // 카카오톡 채널 연동 시 활성화

export const metadata: Metadata = {
  title: "상암동 임플란트",
  description:
    "보철과 전문의가 식립부터 크라운까지 직접 담당합니다. 무절개·즉시·뼈이식·가이드 임플란트 상담은 상암하늘치과로.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment/implant`,
  },
};

export default function ImplantPage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };
  const faqSchema = getFAQSchema(implantFAQs);

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
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">임플란트</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            보철과 전문의가 식립부터 크라운까지 직접 담당합니다.<br />
            식립 정확도와 보철 완성도, 두 가지를 모두 책임집니다.
          </p>
        </div>
      </section>

      {/* ── 임플란트란 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">임플란트란</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            빠진 치아의 뿌리를 대신해 잇몸뼈에 티타늄 픽스처를 심고, 그 위에 보철물(크라운)을 씌워
            자연치아와 유사한 기능을 회복하는 치료입니다.
            오스템, 덴티스, IBS 등 검증된 제품을 사용합니다.
          </p>
          <FAQSection faqs={implantFAQs.slice(0, 5)} />
        </div>
      </section>

      {/* ── 치료 과정 ── */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">치료 과정</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            3D CT 촬영을 통해 뼈 상태와 신경 위치를 정밀 분석한 후 치료 계획을 세웁니다.
            뼈이식 필요 여부, 치료 기간, 크라운 재료까지 상담에서 안내합니다.
          </p>
          <FAQSection faqs={[...implantFAQs.slice(5, 9), ...implantFAQs.slice(12, 14)]} />
        </div>
      </section>

      {/* ── 무절개·즉시·가이드 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            무절개·즉시·가이드 임플란트
          </h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            환자 상태에 따라 무절개, 즉시 식립, 가이드 수술 등 최적의 방식을 선택합니다.
            모든 방식이 모든 환자에게 적합한 것은 아니며, CT 분석 후 결정합니다.
          </p>
          <FAQSection faqs={implantFAQs.slice(9, 12)} />
        </div>
      </section>

      {/* ── 비용·보험 ── */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">비용·보험</h2>
          <FAQSection faqs={implantFAQs.slice(14)} />
        </div>
      </section>

      {/* ── 관련 진료 ── */}
      <section className="bg-white px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">관련 진료</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/treatment/prosthetics" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              보철치료
            </Link>
            <Link href="/fees" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              비급여 수가표
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">임플란트 상담 예약</h2>
          <p className="text-white/70 text-sm mb-8">보철과 전문의가 직접 상담합니다.</p>
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
