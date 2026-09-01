import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { implantFAQs } from "@/data/faqs";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "?곸븫???꾪뵆???,
  description:
    "蹂댁쿋怨??꾨Ц?섍? ?앸┰遺???щ씪?닿퉴吏 吏곸젒 ?대떦?⑸땲?? 臾댁젅媛쑣룹쫱?쑣룸펷?댁떇쨌媛?대뱶 ?꾪뵆????곷떞? ?곸븫?섎뒛移섍낵濡?",
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

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">?꾪뵆???/h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            蹂댁쿋怨??꾨Ц?섍? ?앸┰遺???щ씪?닿퉴吏 吏곸젒 ?대떦?⑸땲??<br />
            ?앸┰ ?뺥솗?꾩? 蹂댁쿋 ?꾩꽦?? ??媛吏瑜?紐⑤몢 梨낆엫吏묐땲??
          </p>
        </div>
      </section>

      {/* ?? ?꾪뵆??몃? ?? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">?꾪뵆??몃?</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            鍮좎쭊 移섏븘??肉뚮━瑜???좏빐 ?뉖じ堉덉뿉 ?고????쎌뒪泥섎? ?ш퀬, 洹??꾩뿉 蹂댁쿋臾??щ씪?????뚯썙
            ?먯뿰移섏븘? ?좎궗??湲곕뒫???뚮났?섎뒗 移섎즺?낅땲??
            ?ㅼ뒪?? ?댄떚?? IBS ??寃利앸맂 ?쒗뭹???ъ슜?⑸땲??
          </p>
          <FAQSection faqs={implantFAQs.slice(0, 5)} />
        </div>
      </section>

      {/* ?? 移섎즺 怨쇱젙 ?? */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">移섎즺 怨쇱젙</h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            3D CT 珥ъ쁺???듯빐 堉??곹깭? ?좉꼍 ?꾩튂瑜??뺣? 遺꾩꽍????移섎즺 怨꾪쉷???몄썎?덈떎.
            堉덉씠???꾩슂 ?щ?, 移섎즺 湲곌컙, ?щ씪???щ즺源뚯? ?곷떞?먯꽌 ?덈궡?⑸땲??
          </p>
          <FAQSection faqs={[...implantFAQs.slice(5, 9), ...implantFAQs.slice(12, 14)]} />
        </div>
      </section>

      {/* ?? 臾댁젅媛쑣룹쫱?쑣룰??대뱶 ?? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            臾댁젅媛쑣룹쫱?쑣룰??대뱶 ?꾪뵆???          </h2>
          <p className="text-sm text-charcoal-light leading-relaxed mb-8">
            ?섏옄 ?곹깭???곕씪 臾댁젅媛? 利됱떆 ?앸┰, 媛?대뱶 ?섏닠 ??理쒖쟻??諛⑹떇???좏깮?⑸땲??
            紐⑤뱺 諛⑹떇??紐⑤뱺 ?섏옄?먭쾶 ?곹빀??寃껋? ?꾨땲硫? CT 遺꾩꽍 ??寃곗젙?⑸땲??
          </p>
          <FAQSection faqs={implantFAQs.slice(9, 12)} />
        </div>
      </section>

      {/* ?? 鍮꾩슜쨌蹂댄뿕 ?? */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-4">鍮꾩슜쨌蹂댄뿕</h2>
          <FAQSection faqs={implantFAQs.slice(14)} />
        </div>
      </section>

      {/* ?? 愿??吏꾨즺 ?? */}
      <section className="bg-white px-5 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">愿??吏꾨즺</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/treatment/prosthetics" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              蹂댁쿋移섎즺
            </Link>
            <Link href="/fees" className="text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2 hover:border-primary hover:text-primary transition-colors">
              鍮꾧툒???섍???            </Link>
          </div>
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">?꾪뵆????곷떞 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">蹂댁쿋怨??꾨Ц?섍? 吏곸젒 ?곷떞?⑸땲??</p>
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


