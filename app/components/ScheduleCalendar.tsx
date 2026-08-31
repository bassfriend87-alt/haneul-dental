"use client";

import { useState } from "react";
import { closedDates, holidayLabels } from "@/lib/schema";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

function isClosedDate(year: number, month: number, day: number) {
  return (
    closedDates[String(year)]?.[String(month + 1).padStart(2, "0")]?.includes(
      String(day).padStart(2, "0")
    ) ?? false
  );
}

function getHolidayLabel(year: number, month: number, day: number): string | null {
  return (
    holidayLabels[String(year)]?.[String(month + 1).padStart(2, "0")]?.[
      String(day).padStart(2, "0")
    ] ?? null
  );
}

function hasMonthData(year: number, month: number) {
  return !!(closedDates[String(year)]?.[String(month + 1).padStart(2, "0")]);
}

type DayStatus = "outside" | "sunday" | "closed" | "open";

function getDayStatus(date: Date, viewYear: number, viewMonth: number): DayStatus {
  if (date.getFullYear() !== viewYear || date.getMonth() !== viewMonth) return "outside";
  const dow = date.getDay();
  if (dow === 0) return "sunday";
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
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const prev = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const next = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const days = buildDays(year, month);
  const dataAvailable = hasMonthData(year, month);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-8">

      {/* 월 네비게이션 */}
      <div className="flex items-center justify-between mb-7">
        <button
          onClick={prev}
          aria-label="이전 달"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-lg text-charcoal-light hover:border-primary hover:text-primary transition-colors"
        >
          ‹
        </button>
        <h2 className="text-lg font-bold text-charcoal">
          {year}년 {month + 1}월
        </h2>
        <button
          onClick={next}
          aria-label="다음 달"
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-lg text-charcoal-light hover:border-primary hover:text-primary transition-colors"
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

          if (status === "outside") return <div key={i} />;

          const cellBase =
            "relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-medium select-none";

          const holidayLabel = status === "closed"
            ? getHolidayLabel(date.getFullYear(), date.getMonth(), date.getDate())
            : null;

          let cellStyle = "";
          let numColor = "";

          switch (status) {
            case "sunday":
              cellStyle = "bg-gray-50";
              numColor = "text-gray-300";
              break;
            case "closed":
              cellStyle = "bg-red-50";
              numColor = "text-red-400";
              break;
            default:
              cellStyle = "bg-white border border-gray-100";
              numColor = "text-charcoal";
          }

          return (
            <div
              key={i}
              className={`${cellBase} ${cellStyle} ${isToday ? "ring-2 ring-primary ring-offset-1 !border-transparent" : ""}`}
            >
              <span className={`${numColor} leading-none`}>{date.getDate()}</span>
              {status === "closed" && (
                <span className="text-[9px] text-red-400 font-normal mt-0.5 leading-none">
                  {holidayLabel ?? "휴진"}
                </span>
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
