import { Metadata } from "next";
import { dentistSchema, getSpecialHours } from "@/lib/schema";

export const metadata: Metadata = {
  title: "예약·오시는 길",
  description:
    "상암하늘치과의원 예약 안내. 전화 02-375-8278. 서울 마포구 상암동. 화·목 야간진료.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/contact`,
  },
};

const NAVER_BOOKING_URL =
  "https://booking.naver.com/booking/13/bizes/1555012/items/7265789";

const hours = [
  { day: "평일", time: "08:30 – 17:30", note: "점심 12:30–13:30" },
  { day: "토요일", time: "08:30 – 14:00", note: null },
  { day: "화·목 야간", time: "18:00 – 20:30", note: "사전 예약제" },
  { day: "일·공휴일", time: "휴진", note: null },
  { day: "격주 수·토", time: "휴진", note: null },
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

      {/* ── Hero ── */}
      <section className="bg-orange-50 px-5 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            예약 · 오시는 길
          </h1>
        </div>
      </section>

      {/* ── 예약 방법 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
            예약 방법
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:02-375-8278"
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 rounded-2xl font-bold text-white"
              style={{ backgroundColor: "#F5890A" }}
            >
              <span className="text-base">전화 예약</span>
              <span className="text-sm font-normal opacity-90">02-375-8278</span>
            </a>
            <a
              href={NAVER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 rounded-2xl font-bold text-white"
              style={{ backgroundColor: "#03C75A" }}
            >
              <span className="text-base">네이버 예약</span>
              <span className="text-sm font-normal opacity-90">바로 예약하기</span>
            </a>
            <button
              disabled
              className="flex-1 flex flex-col items-center justify-center gap-1.5 py-6 rounded-2xl font-bold cursor-not-allowed opacity-60"
              style={{ backgroundColor: "#FEE500", color: "#191919" }}
            >
              <span className="text-base">카카오톡</span>
              <span className="text-sm font-normal">준비중</span>
            </button>
          </div>
        </div>
      </section>

      {/* ── 진료시간 ── */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
            진료시간
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
            야간진료(화·목)는 사전 예약제로 운영됩니다. 전화 또는 네이버 예약으로 미리 일정을 잡아주세요.
          </p>
        </div>
      </section>

      {/* ── 오시는 길 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
            오시는 길
          </p>
          <address className="not-italic space-y-2 mb-8">
            <p className="text-xl font-bold text-charcoal">상암하늘치과의원</p>
            <p className="text-charcoal-light">서울특별시 마포구 상암산로1길 69, 302호</p>
            <a
              href="tel:02-375-8278"
              className="block text-primary font-medium hover:underline"
            >
              02-375-8278
            </a>
          </address>
          {/* 지도 */}
          <div className="rounded-2xl overflow-hidden border border-gray-100 mb-6" style={{ height: '400px' }}>
            <iframe
              src="https://maps.google.com/maps?q=37.5801378,126.8835080&z=16&output=embed&hl=ko"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="상암하늘치과의원 위치"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://map.naver.com/v5/search/상암하늘치과의원"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-charcoal text-sm font-medium px-5 py-3 rounded-full hover:border-charcoal transition-colors"
            >
              네이버 지도에서 찾기 →
            </a>
            <a
              href="https://maps.google.com/?q=37.5801378,126.8835080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-charcoal text-sm font-medium px-5 py-3 rounded-full hover:border-charcoal transition-colors"
            >
              구글 지도에서 찾기 →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
