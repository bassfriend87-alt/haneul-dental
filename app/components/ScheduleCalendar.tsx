"use client";

import { useState } from "react";
import { closedDates, holidays } from "@/lib/schema";

const WEEK_DAYS = ["일", "월", "화", "수", "목", "금", "토"];

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

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-8">

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
        <h2 className="text-lg font-bold text-charcoal">
          {year}년 {month + 1}월
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
          if (status === "sunday") cellStyle = "bg-gray-50";
          else if (status === "closed") cellStyle = "bg-red-50";
          else cellStyle = "bg-white border border-gray-100";

          // 날짜 숫자 색상
          let numColor = "";
          if (status === "sunday") numColor = "text-gray-300";
          else if (status === "closed") numColor = holiday?.isHoliday ? "text-red-500" : "text-red-400";
          else if (status === "open-holiday") numColor = "text-red-500";
          else numColor = "text-charcoal";

          // 하단 레이블
          const closedLabel = status === "closed" ? (holiday?.name ?? "휴진") : null;

          return (
            <div
              key={i}
              className={`relative aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-medium select-none ${cellStyle} ${isToday ? "ring-2 ring-primary ring-offset-1 !border-transparent" : ""}`}
            >
              {/* 오늘 */}
              {isToday && (
                <span className="absolute top-1 text-[8px] text-primary font-semibold leading-none">
                  오늘
                </span>
              )}

              {/* 날짜 숫자 */}
              <span className={`${numColor} leading-none`}>{date.getDate()}</span>

              {/* 휴진/공휴일명 */}
              {closedLabel && (
                <span className="text-[9px] text-red-400 font-normal mt-0.5 leading-none">
                  {closedLabel}
                </span>
              )}

              {/* 정상진료 공휴일: 공휴일명은 날짜 아래, 정상진료는 셀 하단 고정 */}
              {status === "open-holiday" && holiday && (
                <>
                  <span className="text-[9px] text-red-400 leading-tight mt-0.5">{holiday.name}</span>
                  <span className="absolute bottom-1 text-[8px] text-blue-500 leading-none">정상진료</span>
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
        <span className="flex items-center gap-1.5">
          <span className="text-blue-500 font-medium">정상진료</span>
          공휴일 진료
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
