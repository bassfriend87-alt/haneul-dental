import { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";

export const metadata: Metadata = {
  title: "吏꾨즺怨쇰ぉ",
  description:
    "?곸븫?섎뒛移섍낵?섏썝 吏꾨즺怨쇰ぉ ?덈궡. 蹂댁쿋移섎즺쨌?꾪뵆??맞룸낫議댁튂猷뙿룹튂二쇱튂猷뙿룻꽦愿?덉튂猷? 蹂댁쿋怨??꾨Ц??吏곸젒 吏꾨즺.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment`,
  },
};

const treatments = [
  {
    name: "蹂댁쿋移섎즺",
    desc: "?щ씪?는룸툕由우?쨌???,
    sub: "蹂댁쿋怨??꾨Ц?섍? 吏꾨떒遺???쒖옉쨌愿由ш퉴吏 吏곸젒 ?대떦?⑸땲??",
    href: "/treatment/prosthetics",
  },
  {
    name: "?꾪뵆???,
    desc: "?앸┰遺??蹂댁쿋源뚯? ?쇨? 移섎즺",
    sub: "蹂댁쿋怨??꾨Ц?섍? ?앸┰遺???щ씪?닿퉴吏 吏곸젒 ?대떦?⑸땲??",
    href: "/treatment/implant",
  },
  {
    name: "?щ?移섎즺",
    desc: "?쇰??ㅼ씠??,
    sub: "?꾩옱 以鍮꾩쨷?낅땲??",
    href: "/treatment/aesthetic",
  },
  {
    name: "蹂댁〈移섎즺",
    desc: "異⑹튂쨌?좉꼍移섎즺",
    sub: "?먯뿰移섏븘瑜?理쒕???蹂댁〈?섎뒗 諛⑺뼢?쇰줈 移섎즺?⑸땲??",
    href: "/treatment/restorative",
  },
  {
    name: "移섏＜移섎즺",
    desc: "?ㅼ??쇰쭅쨌?뉖じ移섎즺",
    sub: "?뺢린?곸씤 ?ㅼ??쇰쭅怨?移섏＜移섎즺濡??뉖じ 嫄닿컯??愿由ы빀?덈떎.",
    href: "/treatment/periodontal",
  },
  {
    name: "?깃??덉튂猷?,
    desc: "?ㅽ뵆由고듃쨌援먰빀 ?덉젙",
    sub: "???듭쬆쨌?뚮━쨌媛쒓뎄 ?쒗븳 ???깃???利앹긽??移섎즺?⑸땲??",
    href: "/treatment/tmj",
  },
];

export default function TreatmentPage() {
  return (
    <>
      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Treatment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
            吏꾨즺怨쇰ぉ
          </h1>
        </div>
      </section>

      {/* ?? 吏꾨즺怨쇰ぉ 紐⑸줉 ?? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {treatments.map((t) => (
            <Link
              key={t.name}
              href={t.href}
              className="group border border-gray-100 rounded-2xl p-7 hover:border-primary transition-colors"
            >
              <h2 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors mb-1">
                {t.name}
              </h2>
              <p className="text-sm text-primary mb-3">{t.desc}</p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {t.sub}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ?? CTA ?? */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">吏꾨즺 ?덉빟</h2>
          <p className="text-white/70 text-sm mb-8">
            ?대뼡 移섎즺媛 ?꾩슂?쒖? 紐⑤Ⅴ寃좊떎硫? 癒쇱? ?곷떞??諛쏆븘蹂댁꽭??
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


