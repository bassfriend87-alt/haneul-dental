import { Metadata } from "next";
import Link from "next/link";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { prostheticsFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "상암동 보철치료 크라운·브릿지·틀니",
  description:
    "보철과 전문의가 직접 진단부터 제작·관리까지 담당합니다. 크라운·브릿지·틀니 상담은 상암하늘치과로.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment/prosthetics`,
  },
};

export default function ProstheticsPage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };
  const faqSchema = getFAQSchema(prostheticsFAQs);

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
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Treatment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            보철치료
          </h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            잘 만든 보철은, 환자가 잊고 삽니다.<br />
            보철과 전문의가 진단부터 제작·관리까지 직접 담당합니다.
          </p>
        </div>
      </section>

      {/* ── 크라운 ── */}
      <section id="crown" className="bg-white px-5 py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">크라운</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            치아가 손상되어 원래 형태를 유지하기 어려울 때 씌워 보호하는 보철물입니다.
            충치가 깊거나 신경치료 후 약해진 치아, 깨지거나 금이 간 치아에 적용합니다.
            재료는 지르코니아·골드·PFM 중 치아 위치와 상태에 따라 선택합니다.
          </p>
          <FAQSection faqs={prostheticsFAQs.slice(0, 5)} />
        </div>
      </section>

      {/* ── 브릿지 ── */}
      <section id="bridge" className="bg-surface px-5 py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">브릿지</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            빠진 치아 양옆의 치아를 지대치로 삼아 연결하는 보철물입니다.
            수술 없이 비교적 짧은 기간에 치료할 수 있으며,
            임플란트와의 장단점을 비교해 환자 상태에 맞는 방법을 안내합니다.
          </p>
          <FAQSection faqs={prostheticsFAQs.slice(5, 8)} />
        </div>
      </section>

      {/* ── 틀니 ── */}
      <section id="denture" className="bg-white px-5 py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">틀니</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            여러 개의 치아가 상실된 경우에 적용하는 보철물입니다.
            일반 틀니와 임플란트 틀니 중 잇몸뼈 상태와 전신 건강을 고려해 적합한 방식을 선택합니다.
          </p>
          <FAQSection faqs={prostheticsFAQs.slice(8, 12)} />
        </div>
      </section>

      {/* ── 자주 묻는 질문 ── */}
      <section className="bg-surface px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-8">자주 묻는 질문</h2>
          <FAQSection faqs={prostheticsFAQs.slice(12)} />
        </div>
      </section>

      {/* ── 관련 진료 ── */}
      <section className="bg-white px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            관련 진료
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/treatment/implant" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              임플란트
            </Link>
            <Link href="/fees" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              비급여 수가표
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">보철 상담 예약</h2>
          <p className="text-white/70 text-sm mb-8">
            보철과 전문의가 직접 상담합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:02-375-8278"
              className="inline-flex items-center justify-center bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors"
            >
              전화 예약 &middot; 02-375-8278
            </a>
            <a
              href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-full"
              style={{ backgroundColor: "#03C75A", color: "#ffffff" }}
            >
              네이버 예약
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
