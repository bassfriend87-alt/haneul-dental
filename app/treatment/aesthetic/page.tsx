import { Metadata } from "next";
import { dentistSchema, getFAQSchema, getSpecialHours } from "@/lib/schema";
import { aestheticFAQs } from "@/data/faqs";
import { PhoneIcon } from "@/app/components/icons";
import { FAQSection } from "@/app/components/FAQSection";

export const metadata: Metadata = {
  title: "?곸븫???쇰??ㅼ씠???щ?移섎즺",
  description:
    "蹂댁쿋怨??꾨Ц?섍? 吏곸젒 ?ㅺ퀎쨌?쒖옉?섎뒗 ?쇰??ㅼ씠?? 移섏븘 ?뺥깭? ?됱긽 媛쒖꽑 ?곷떞? ?곸븫?섎뒛移섍낵濡?",
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

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">Treatment</p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">?щ?移섎즺</h1>
          <p className="text-charcoal-light leading-relaxed max-w-lg">
            蹂댁쿋怨??꾨Ц?섍? 吏곸젒 ?뺥깭? ?됱긽???ㅺ퀎쨌?쒖옉?⑸땲??
          </p>
          <div className="mt-6 inline-block text-sm text-charcoal-light border border-gray-200 rounded-full px-4 py-1.5">
            ?꾩옱 以鍮꾩쨷?낅땲??          </div>
        </div>
      </section>

      {/* ?? FAQ ?? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-charcoal mb-8">?먯＜ 臾삳뒗 吏덈Ц</h2>
          <FAQSection faqs={aestheticFAQs} />
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">吏꾨즺 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">沅곴툑???먯? ?꾪솕濡?臾몄쓽??二쇱꽭??</p>
          <a href="tel:02-375-8278" className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors">
            <PhoneIcon className="w-4 h-4 shrink-0" />?꾪솕 ?덉빟 &middot; 02-375-8278
          </a>
        </div>
      </section>
    </>
  );
}

