import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
import { periodontalFAQs, scalingFAQs, gumTreatmentFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "?곸븫???ㅼ??쇰쭅쨌?뉖じ移섎즺",
  description:
    "?뺢린?곸씤 ?ㅼ??쇰쭅怨?移섏＜移섎즺濡??뉖じ 嫄닿컯??愿由ы빀?덈떎. ?ㅼ??쇰쭅쨌?뉖じ移섎즺 ?곷떞? ?곸븫?섎뒛移섍낵濡?",
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

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">移섏＜移섎즺</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            ?뺢린?곸씤 ?ㅼ??쇰쭅怨?移섏＜移섎즺濡??뉖じ 嫄닿컯??愿由ы빀?덈떎.<br />
            移섏＜吏덊솚? 議곌린 諛쒓껄怨?袁몄???愿由ш? ?듭떖?낅땲??
          </p>
        </div>
      </section>

      {/* ?? ?ㅼ??쇰쭅 ?? */}
      <section id="scaling" className="bg-white px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">?ㅼ??쇰쭅</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            移섏븘 ?쒕㈃??移섏꽍怨??멸퇏留됱쓣 ?쒓굅?섎뒗 湲곕낯 移섎즺?낅땲??
            留?19???댁긽? ??1??嫄닿컯蹂댄뿕???곸슜?⑸땲??
          </p>
          <FAQSection faqs={scalingFAQs} />
        </div>
      </section>

      {/* ?? ?뉖じ移섎즺 ?? */}
      <section id="gum-treatment" className="bg-surface px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">?뉖じ移섎즺</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            ?ㅼ??쇰쭅留뚯쑝濡??닿껐???대젮??源딆? 移섏＜??? 移섍렐?쒗깮???뉖じ移섎즺)濡?愿由ы빀?덈떎.
            移섏＜吏덊솚? 議곌린 諛쒓껄怨?袁몄????좎? 移섎즺媛 ?듭떖?낅땲??
          </p>
          <FAQSection faqs={gumTreatmentFAQs} />
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">吏꾨즺 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">?뉖じ??遺볤굅???쇨? ?섎㈃ 議곌린???댁썝?섏떆??寃껋쓣 沅뚯옣?⑸땲??</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:02-375-8278" className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors">
              <PhoneIcon className="w-4 h-4 shrink-0" />?꾪솕 ?덉빟 &middot; 02-375-8278
            </a>
            <a href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full" style={{ backgroundColor: "#03C75A", color: "#ffffff" }}>
              <NaverIcon className="w-4 h-4 shrink-0" />?ㅼ씠踰??덉빟
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

