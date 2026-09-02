"use client";

import { useState } from "react";
import { closedDates, holidays } from "@/lib/schema";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

// month: 0-indexed
function getSeasonTheme(month: number): { card: string; border: string; emoji?: string } {
  if (month === 11)          // 12월 크리스마스
    return { card: "bg-gradient-to-br from-red-50 via-white to-green-50", border: "border-green-100", emoji: "🎄" };
  if (month === 0 || month === 1) // 1·2월 겨울
    return { card: "bg-gradient-to-br from-blue-50 via-white to-slate-50", border: "border-blue-100", emoji: "❄️" };
  if (month >= 2 && month <= 4)   // 봄
    return { card: "bg-gradient-to-br from-rose-50 via-white to-emerald-50", border: "border-rose-100", emoji: "🌸" };
  if (month >= 5 && month <= 7)   // 여름
    return { card: "bg-gradient-to-br from-sky-50 via-white to-cyan-50", border: "border-sky-100", emoji: "☀️" };
  if (month === 9)                // 10월 할로윈
    return { card: "bg-gradient-to-br from-orange-100 via-amber-50 to-purple-50", border: "border-orange-200", emoji: "🎃" };
  return { card: "bg-gradient-to-br from-amber-50 via-white to-orange-50", border: "border-amber-100", emoji: "🍂" }; // 가을
}

function isClosedDate(year: number, month: number, day: number) {
  return (
    closedDates[String(year)]?.[String(month + 1).padStart(2, "0")]?.includes(
      String(day).padStart(2, "0")
    ) ?? false
  );
}

function getHoliday(year: number, month: number, day: number) {
  return (
    holidays[String(year)]?.[String(month + 1).padStart(2, "0")]?.[
      String(day).padStart(2, "0")
    ] ?? null
  );
}

function hasMonthData(year: number, month: number) {
  return !!(closedDates[String(year)]?.[String(month + 1).padStart(2, "0")]);
}

type DayStatus = "outside" | "sunday" | "closed" | "open" | "open-holiday";

function getDayStatus(date: Date, viewYear: number, viewMonth: number): DayStatus {
  if (date.getFullYear() !== viewYear || date.getMonth() !== viewMonth) return "outside";
  const dow = date.getDay();
  if (dow === 0) return "sunday";
  const holiday = getHoliday(date.getFullYear(), date.getMonth(), date.getDate());
  if (holiday?.isOpen) return "open-holiday";
  if (isClosedDate(date.getFullYear(), date.getMonth(), date.getDate())) return "closed";
  return "open";
}

function buildDays(year: number, month: number): Date[] {
  const firstDow = new Date(year, month, 1).getDay();
  const days: Date[] = [];
  for (let i = firstDow; i > 0; i--) days.push(new Date(year, month, 1 - i));
  const end = new Date(year, month + 1, 0).getDate();
  for (let d = 1; d <= end; d++) days.push(new Date(year, month, d));
  for (let n = 1; days.length % 7 !== 0; n++) days.push(new Date(year, month + 1, n));
  return days;
}

export function ScheduleCalendar() {
  const today = new Date();
  const minYear = today.getFullYear();
  const minMonth = today.getMonth();
  const maxMonth = minMonth === 11 ? 0 : minMonth + 1;
  const maxYear = minMonth === 11 ? minYear + 1 : minYear;

  const [year, setYear] = useState(minYear);
  const [month, setMonth] = useState(minMonth);

  const isMin = year === minYear && month === minMonth;
  const isMax = year === maxYear && month === maxMonth;

  const prev = () => {
    if (isMin) return;
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const next = () => {
    if (isMax) return;
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const days = buildDays(year, month);
  const dataAvailable = hasMonthData(year, month);
  const theme = getSeasonTheme(month);

  return (
    <div className={`rounded-2xl border p-5 sm:p-8 ${theme.card} ${theme.border}`}>

      {/* 월 네비게이션 */}
      <div className="flex items-center justify-between mb-7">
        <button
          onClick={prev}
          aria-label="이전 달"
          disabled={isMin}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-lg transition-colors disabled:opacity-20 disabled:cursor-not-allowed text-charcoal-light hover:border-primary hover:text-primary"
        >
          ‹
        </button>
        <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
          {year}년 {month + 1}월
          {theme.emoji && <span className="text-2xl">{theme.emoji}</span>}
        </h2>
        <button
          onClick={next}
          aria-label="다음 달"
          disabled={isMax}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-lg transition-colors disabled:opacity-20 disabled:cursor-not-allowed text-charcoal-light hover:border-primary hover:text-primary"
        >
          ›
        </button>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 mb-1.5">
        {WEEK_DAYS.map((d, i) => (
          <div
            key={d}
            className={`text-center text-xs font-medium py-1.5 ${i === 0 ? "text-red-400" : "text-charcoal-light"}`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, i) => {
          const status = getDayStatus(date, year, month);
          const isToday = date.toDateString() === today.toDateString();
          const holiday = (status === "closed" || status === "open-holiday" || status === "open")
            ? getHoliday(date.getFullYear(), date.getMonth(), date.getDate())
            : null;

          if (status === "outside") return <div key={i} />;

          // 셀 배경
          let cellStyle = "";
          if (status === "sunday" || status === "closed") cellStyle = "bg-red-50";
          else cellStyle = "bg-white border border-gray-100";

          // 날짜 숫자 색상
          let numColor = "";
          if (status === "sunday") numColor = "text-red-400";
          else if (status === "closed") numColor = holiday?.isHoliday ? "text-red-500" : "text-red-400";
          else if (status === "open-holiday") numColor = "text-red-500";
          else numColor = "text-charcoal";

          // 하단 레이블
          const closedLabel = status === "closed" ? (holiday?.name ?? "휴진") : null;

          return (
            <div
              key={i}
              className={`relative aspect-square rounded-xl text-sm font-medium select-none ${cellStyle} ${isToday ? "ring-2 ring-primary ring-offset-1 !border-transparent" : ""}`}
            >
              {/* 오늘 */}
              {isToday && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[17px] text-[8px] text-primary font-semibold leading-none">
                  오늘
                </span>
              )}

              {/* 날짜 숫자 — 항상 셀 정중앙 */}
              <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none ${numColor}`}>
                {date.getDate()}
              </span>

              {/* 휴진/공휴일명 — 날짜 바로 아래 */}
              {closedLabel && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[9px] text-[9px] text-red-400 font-normal leading-none whitespace-nowrap">
                  {closedLabel}
                </span>
              )}

              {/* 정상진료 공휴일 */}
              {status === "open-holiday" && holiday && (
                <>
                  <span className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[9px] text-[9px] text-red-400 leading-none whitespace-nowrap">
                    {holiday.name}
                  </span>
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] text-blue-500 leading-none whitespace-nowrap">
                    정상진료
                  </span>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* 범례 */}
      <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap gap-x-5 gap-y-2 text-xs text-charcoal-light">
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded-md bg-white border border-gray-200 shrink-0" />
          진료일
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3.5 h-3.5 rounded-md bg-red-50 shrink-0" />
          휴진
        </span>
      </div>

      {!dataAvailable && (
        <p className="mt-3 text-xs text-charcoal-light leading-relaxed">
          * 이 달의 격주 휴진 일정은 아직 등록되지 않았습니다.
          lib/schema.ts의 closedDates를 업데이트해 주세요.
        </p>
      )}
    </div>
  );
}
