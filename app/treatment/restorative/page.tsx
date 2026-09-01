import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
import { restorativeFAQs, cavityFAQs, rootCanalFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "?곸븫??異⑹튂移섎즺쨌?좉꼍移섎즺",
  description:
    "?먯뿰移섏븘瑜?理쒕???蹂댁〈?섎뒗 諛⑺뼢?쇰줈 移섎즺?⑸땲?? 異⑹튂쨌?좉꼍移섎즺 ?곷떞? ?곸븫?섎뒛移섍낵濡?",
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

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">蹂댁〈移섎즺</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            ?먯뿰移섏븘瑜?理쒕???蹂댁〈?섎뒗 諛⑺뼢?쇰줈 移섎즺?⑸땲??<br />
            異⑹튂 珥덇린??諛쒓껄?좎닔濡?移섏븘瑜???留롮씠 吏?????덉뒿?덈떎.
          </p>
        </div>
      </section>

      {/* ?? 異⑹튂移섎즺 ?? */}
      <section id="cavity" className="bg-white px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">異⑹튂移섎즺</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            異⑹튂??吏꾪뻾 ?뺣룄???곕씪 ?덉쭊, ?몃젅?? ?щ씪?????곹빀??諛⑸쾿???좏깮?⑸땲??
            珥덇린??諛쒓껄?좎닔濡?移섏븘瑜???留롮씠 吏?????덉뒿?덈떎.
          </p>
          <FAQSection faqs={cavityFAQs} />
        </div>
      </section>

      {/* ?? ?좉꼍移섎즺 ?? */}
      <section id="root-canal" className="bg-surface px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">?좉꼍移섎즺</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            異⑹튂媛 ?좉꼍(移섏닔)源뚯? 移⑤쾾??寃쎌슦 ?좉꼍移섎즺瑜??듯빐 移섏븘瑜??대┰?덈떎.
            移섎즺 ???щ씪?댁쑝濡?蹂댄샇??移섏븘??湲곕뒫??理쒕????좎??⑸땲??
          </p>
          <FAQSection faqs={rootCanalFAQs} />
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">吏꾨즺 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">遺덊렪??利앹긽???덈떎硫?議곌린???댁썝?섏떆??寃껋쓣 沅뚯옣?⑸땲??</p>
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

