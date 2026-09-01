import { Metadata } from "next";
import { ScheduleCalendar } from "@/app/components/ScheduleCalendar";

export const metadata: Metadata = {
  title: "진료일정",
  description:
    "상암하늘치과의원 월별 진료일정. 격주 휴진일 및 화·목 야간진료 일정을 달력으로 확인하세요.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/schedule`,
  },
};

const regularHours = [
  { day: "평일", time: "08:30 – 17:30", note: "점심 12:30–13:30" },
  { day: "토요일", time: "08:30 – 14:00", note: null },
  { day: "화·목 야간", time: "18:00 – 20:30", note: "사전 예약제" },
  { day: "일·공휴일", time: "휴진", note: null },
  { day: "격주 수·토", time: "휴진", note: null },
];

export default function SchedulePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-orange-50 px-5 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Schedule
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
            진료일정 안내
          </h1>
        </div>
      </section>

      {/* ── 달력 ── */}
      <section className="bg-surface px-5 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <ScheduleCalendar />
        </div>
      </section>

      {/* ── 기본 진료시간 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-charcoal-light tracking-widest uppercase mb-8">
            진료시간
          </p>
          <div className="space-y-1">
            {regularHours.map((h) => (
              <div
                key={h.day}
                className="flex items-start justify-between py-3 border-b border-gray-100 last:border-0"
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
            수요일·토요일은 격주로 휴진합니다. 방문 전 위 달력에서 날짜를 확인해 주세요.
          </p>
        </div>
      </section>
    </>
  );
}
