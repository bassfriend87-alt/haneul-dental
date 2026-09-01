import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
import { tmjFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "?곸븫???깃??덉튂猷?,
  description:
    "???듭쬆쨌?뚮━쨌媛쒓뎄 ?쒗븳 ???깃???利앹긽??移섎즺?⑸땲?? 援먰빀?덉젙?μ튂쨌?깃??덉튂猷??곷떞? ?곸븫?섎뒛移섍낵濡?",
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

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">?깃??덉튂猷?/h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            ???듭쬆쨌?뚮━쨌媛쒓뎄 ?쒗븳 ???깃???利앹긽??移섎즺?⑸땲??<br />
            蹂댁〈??移섎즺瑜??곗꽑?쇰줈, 援먰빀 臾몄젣? 援ш컯 ???먯씤??以묒떖?쇰줈 ?묎렐?⑸땲??
          </p>
        </div>
      </section>

      {/* ?? 移섎즺 ?덈궡 ?? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">援먰빀?덉젙?μ튂쨌?깃???移섎즺</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            ?깃????μ븷???닿컝?? ???낅Ъ湲? 援먰빀 遺덇퇏?????ㅼ뼇???먯씤??蹂듯빀?곸쑝濡??묒슜?⑸땲??
            援먰빀?덉젙?μ튂(?ㅽ뵆由고듃) ?μ갑, 臾쇰━移섎즺, ?쎈Ъ移섎즺, ?낆뒿愿 援먯젙 ?깆쓣
            ?⑤룆 ?먮뒗 蹂묓뻾?섏뿬 移섎즺?⑸땲??
          </p>
          <FAQSection faqs={tmjFAQs} />
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">吏꾨즺 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">??利앹긽??媛蹂띾뜑?쇰룄 諛⑹튂?섎㈃ 吏꾪뻾?????덉뒿?덈떎.</p>
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

