import { Metadata } from "next";
import { ScheduleCalendar } from "@/app/components/ScheduleCalendar";
import { ScrollToTop } from "@/app/components/ScrollToTop";
import { PhoneIcon, NaverIcon } from "@/app/components/icons";
// import { KakaoIcon } from "@/app/components/icons"; // 카카오톡 채널 연동 시 활성화

export const metadata: Metadata = {
  title: "진료시간·휴진 안내",
  description:
    "상암하늘치과의원 월별 진료일정. 격주 휴진일 및 화·목 야간진료 일정을 달력으로 확인하세요.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/schedule`,
  },
};

const regularHours = [
  { day: "평일", time: "08:30 – 17:30", note: "점심 12:30–13:30" },
  { day: "토요일", time: "08:30 – 14:00", note: "점심시간 없음" },
  { day: "화·목 야간", time: "18:00 – 20:30", note: "사전 예약제" },
  { day: "일·공휴일", time: "휴진", note: null },
  { day: "격주 수·토", time: "휴진", note: null },
];

export default function SchedulePage() {
  return (
    <>
      <ScrollToTop />
      {/* ── Hero ── */}
      <section className="bg-orange-50 px-5 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Schedule
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
            진료시간·휴진 안내
          </h1>
        </div>
      </section>

      {/* ── 달력 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <ScheduleCalendar />
        </div>
      </section>

      {/* ── 기본 진료시간 ── */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-charcoal-light tracking-widest uppercase mb-8">
            진료시간
          </p>
          <div className="space-y-1">
            {regularHours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
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
          <p className="mt-6 text-xs text-charcoal-light leading-relaxed">
            수요일·토요일은 격주 휴진이니 방문 전 일정을 확인해 주세요(매월 2, 4주 토요일 휴무 기준).
          </p>
          <p className="mt-2 text-xs text-charcoal-light leading-relaxed">
            야간 진료(화·목)는 사전 예약제로 운영됩니다. 야간 진료 당일 예약을 원하시면 전화 문의 부탁드립니다.
          </p>
          <p className="mt-2 text-xs text-charcoal-light leading-relaxed">
            야간 진료는 예약 상황에 따라 일찍 종료될 수 있습니다.
          </p>
        </div>
      </section>
      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">
            전화 또는 네이버 예약으로 방문 일정을 잡으실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:02-375-8278"
              className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors"
            >
              <PhoneIcon className="w-4 h-4 shrink-0" />전화 예약 &middot; 02-375-8278
            </a>
            <a
              href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full"
              style={{ backgroundColor: "#03C75A", color: "#ffffff" }}
            >
              <NaverIcon className="w-4 h-4 shrink-0" />네이버 예약
            </a>
            {/* 카카오톡 채널 연동 시 활성화
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full cursor-not-allowed"
              style={{ backgroundColor: '#FEE500', color: '#191919' }}
            >
              <KakaoIcon className="w-4 h-4 shrink-0" />카카오톡 (준비중)
            </button>
            */}
          </div>
        </div>
      </section>
    </>
  );
}
