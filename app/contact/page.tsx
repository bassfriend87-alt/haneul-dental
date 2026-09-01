import { Metadata } from "next";
import { dentistSchema, getSpecialHours } from "@/lib/schema";
import { PhoneIcon, NaverIcon, KakaoIcon } from "@/app/components/icons";

export const metadata: Metadata = {
  title: "?덉빟쨌?ㅼ떆??湲?,
  description:
    "?곸븫?섎뒛移섍낵?섏썝 ?덉빟 ?덈궡. ?꾪솕 02-375-8278. ?쒖슱 留덊룷援??곸븫?? ?붋룸ぉ ?쇨컙吏꾨즺.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/contact`,
  },
};

const NAVER_BOOKING_URL =
  "https://booking.naver.com/booking/13/bizes/1555012/items/7265789";

const hours = [
  { day: "?됱씪", time: "08:30 ??17:30", note: "?먯떖 12:30??3:30" },
  { day: "?좎슂??, time: "08:30 ??14:00", note: null },
  { day: "?붋룸ぉ ?쇨컙", time: "18:00 ??20:30", note: "?ъ쟾 ?덉빟?? },
  { day: "?셋룰났?댁씪", time: "?댁쭊", note: null },
  { day: "寃⑹＜ ?샕룻넗", time: "?댁쭊", note: null },
];

export default function ContactPage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
      />

      {/* ?? Hero ?? */}
      <section className="bg-orange-50 px-5 py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            ?덉빟 쨌 ?ㅼ떆??湲?          </h1>
        </div>
      </section>

      {/* ?? ?덉빟 諛⑸쾿 ?? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
            ?덉빟 諛⑸쾿
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:02-375-8278"
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 rounded-full font-bold text-white"
              style={{ backgroundColor: "#1E3A5F" }}
            >
              <PhoneIcon className="w-6 h-6" />
              <span className="text-base">?꾪솕 ?덉빟</span>
              <span className="text-sm font-normal opacity-90">02-375-8278</span>
            </a>
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 rounded-full font-bold text-white"
              style={{ backgroundColor: "#03C75A" }}
            >
              <NaverIcon className="w-6 h-6" />
              <span className="text-base">?ㅼ씠踰??덉빟</span>
              <span className="text-sm font-normal opacity-90">諛붾줈 ?덉빟?섍린</span>
            </a>
            <button
              disabled
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 rounded-full font-bold cursor-not-allowed opacity-60"
              style={{ backgroundColor: "#FEE500", color: "#191919" }}
            >
              <KakaoIcon className="w-6 h-6" />
              <span className="text-base">移댁뭅?ㅽ넚</span>
              <span className="text-sm font-normal">以鍮꾩쨷</span>
            </button>
          </div>
        </div>
      </section>

      {/* ?? 吏꾨즺?쒓컙 ?? */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
            吏꾨즺?쒓컙
          </p>
          <div className="space-y-1">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-start justify-between py-3.5 border-b border-gray-100 last:border-0"
              >
                <span className="text-sm font-medium text-charcoal">{h.day}</span>
                <div className="text-right">
                  <span className="text-sm text-charcoal">{h.time}</span>
                  {h.note && (
                    <p className="text-xs text-charcoal-light mt-0.5">{h.note}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-charcoal-light mt-6 leading-relaxed">
            ?쇨컙吏꾨즺(?붋룸ぉ)???ъ쟾 ?덉빟?쒕줈 ?댁쁺?⑸땲?? ?꾪솕 ?먮뒗 ?ㅼ씠踰??덉빟?쇰줈 誘몃━ ?쇱젙???≪븘二쇱꽭??
          </p>
        </div>
      </section>

      {/* ?? ?ㅼ떆??湲??? */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
            ?ㅼ떆??湲?          </p>
          <address className="not-italic space-y-2 mb-8">
            <p className="text-xl font-bold text-charcoal">?곸븫?섎뒛移섍낵?섏썝</p>
            <p className="text-charcoal-light">?쒖슱?밸퀎??留덊룷援??곸븫?곕줈1湲?69, 302??/p>
            <a
              href="tel:02-375-8278"
              className="block text-primary font-medium hover:underline"
            >
              02-375-8278
            </a>
          </address>
          {/* 吏??*/}
          <div className="rounded-2xl overflow-hidden border border-gray-100 mb-6" style={{ height: '400px' }}>
            <iframe
              src="https://maps.google.com/maps?q=37.5801378,126.8835080&z=16&output=embed&hl=ko"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="?곸븫?섎뒛移섍낵?섏썝 ?꾩튂"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://map.naver.com/v5/search/?곸븫?섎뒛移섍낵?섏썝"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-charcoal text-sm font-medium px-5 py-3 rounded-full hover:border-charcoal transition-colors"
            >
              ?ㅼ씠踰?吏?꾩뿉??李얘린 ??            </a>
            <a
              href="https://maps.google.com/?q=37.5801378,126.8835080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-charcoal text-sm font-medium px-5 py-3 rounded-full hover:border-charcoal transition-colors"
            >
              援ш? 吏?꾩뿉??李얘린 ??            </a>
          </div>
        </div>
      </section>
    </>
  );
}

