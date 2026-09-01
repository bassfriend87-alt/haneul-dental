import { Metadata } from "next";
import Link from "next/link";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
import { prostheticsFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "?곸븫??蹂댁쿋移섎즺 ?щ씪?는룸툕由우?쨌???,
  description:
    "蹂댁쿋怨??꾨Ц?섍? 吏곸젒 吏꾨떒遺???쒖옉쨌愿由ш퉴吏 ?대떦?⑸땲?? ?щ씪?는룸툕由우?쨌????곷떞? ?곸븫?섎뒛移섍낵濡?",
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

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Treatment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            蹂댁쿋移섎즺
          </h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            ??留뚮뱺 蹂댁쿋?, ?섏옄媛 ?딄퀬 ?쎈땲??<br />
            蹂댁쿋怨??꾨Ц?섍? 吏꾨떒遺???쒖옉쨌愿由ш퉴吏 吏곸젒 ?대떦?⑸땲??
          </p>
        </div>
      </section>

      {/* ?? ?щ씪???? */}
      <section id="crown" className="bg-white px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">?щ씪??/h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            移섏븘媛 ?먯긽?섏뼱 ?먮옒 ?뺥깭瑜??좎??섍린 ?대젮?????뚯썙 蹂댄샇?섎뒗 蹂댁쿋臾쇱엯?덈떎.
            異⑹튂媛 源딄굅???좉꼍移섎즺 ???쏀빐吏?移섏븘, 源⑥?嫄곕굹 湲덉씠 媛?移섏븘???곸슜?⑸땲??
            ?щ즺??吏瑜댁퐫?덉븘쨌怨⑤뱶쨌PFM 以?移섏븘 ?꾩튂? ?곹깭???곕씪 ?좏깮?⑸땲??
          </p>
          <FAQSection faqs={prostheticsFAQs.slice(0, 5)} />
        </div>
      </section>

      {/* ?? 釉뚮┸吏 ?? */}
      <section id="bridge" className="bg-surface px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">釉뚮┸吏</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            鍮좎쭊 移섏븘 ?묒쁿??移섏븘瑜?吏?移섎줈 ?쇱븘 ?곌껐?섎뒗 蹂댁쿋臾쇱엯?덈떎.
            ?섏닠 ?놁씠 鍮꾧탳??吏㏃? 湲곌컙??移섎즺?????덉쑝硫?
            ?꾪뵆??몄????λ떒?먯쓣 鍮꾧탳???섏옄 ?곹깭??留욌뒗 諛⑸쾿???덈궡?⑸땲??
          </p>
          <FAQSection faqs={prostheticsFAQs.slice(5, 8)} />
        </div>
      </section>

      {/* ?? ????? */}
      <section id="denture" className="bg-white px-5 py-8 md:py-16 scroll-mt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">???/h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            ?щ윭 媛쒖쓽 移섏븘媛 ?곸떎??寃쎌슦???곸슜?섎뒗 蹂댁쿋臾쇱엯?덈떎.
            ?쇰컲 ??덉? ?꾪뵆??????以??뉖じ堉??곹깭? ?꾩떊 嫄닿컯??怨좊젮???곹빀??諛⑹떇???좏깮?⑸땲??
          </p>
          <FAQSection faqs={prostheticsFAQs.slice(8, 12)} />
        </div>
      </section>

      {/* ?? ?먯＜ 臾삳뒗 吏덈Ц ?? */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-8">?먯＜ 臾삳뒗 吏덈Ц</h2>
          <FAQSection faqs={prostheticsFAQs.slice(12)} />
        </div>
      </section>

      {/* ?? 愿??吏꾨즺 ?? */}
      <section className="bg-white px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            愿??吏꾨즺
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/treatment/implant" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              ?꾪뵆???            </Link>
            <Link href="/fees" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              鍮꾧툒???섍???            </Link>
          </div>
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">蹂댁쿋 ?곷떞 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">
            蹂댁쿋怨??꾨Ц?섍? 吏곸젒 ?곷떞?⑸땲??
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:02-375-8278"
              className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />?꾪솕 ?덉빟 &middot; 02-375-8278
            </a>
            <a
              href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full"
              style={{ backgroundColor: "#03C75A", color: "#ffffff" }}
            >
              <NaverIcon className="w-4 h-4 shrink-0" />?ㅼ씠踰??덉빟
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

