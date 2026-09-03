"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { closedDates } from "@/lib/schema";

type Status = {
  color: "green" | "yellow" | "red";
  label: string;
  short: string;
};

type EveningResult = "has_booking" | "no_booking" | "error" | null;

const toMin = (h: number, m: number) => h * 60 + m;

function getStatus(now: Date, eveningResult: EveningResult, eveningEndMin: number = 20 * 60 + 30): Status {
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dow = now.getDay();
  const totalMin = now.getHours() * 60 + now.getMinutes();

  const isClosed =
    dow === 0 ||
    (closedDates[year]?.[month]?.includes(day) ?? false);

  if (isClosed) return { color: "red", label: "오늘 휴진", short: "오늘 휴진" };

  if (dow === 6) {
    if (totalMin < toMin(8, 30))
      return { color: "yellow", label: "진료전 · 08:30부터", short: "진료전" };
    if (totalMin < toMin(14, 0))
      return { color: "green", label: "진료중 · 14:00까지", short: "진료중" };
    return { color: "red", label: "진료종료", short: "진료종료" };
  }

  const isTueThu = dow === 2 || dow === 4;

  if (totalMin < toMin(8, 30))
    return { color: "yellow", label: "진료전 · 08:30부터", short: "진료전" };
  if (totalMin < toMin(12, 30))
    return { color: "green", label: "진료중 · 12:30까지", short: "진료중" };
  if (totalMin < toMin(13, 30))
    return { color: "yellow", label: "점심시간 · 13:30까지", short: "점심시간" };
  if (totalMin < toMin(17, 30))
    return { color: "green", label: "진료중 · 17:30까지", short: "진료중" };

  // 17:30 이후 화·목: 야간 예약 결과에 따라 분기
  if (isTueThu) {
    if (eveningResult === "error")
      return { color: "yellow", label: "야간진료 문의하기", short: "야간진료문의" };
    if (eveningResult === "no_booking")
      return { color: "red", label: "진료종료", short: "진료종료" };
    // has_booking 또는 null(확인 중): 시간 기반 표시
    if (totalMin < toMin(18, 0))
      return { color: "yellow", label: "야간진료 준비중 · 18:00부터", short: "야간준비중" };
    if (totalMin < eveningEndMin) {
      const endH = Math.floor(eveningEndMin / 60);
      const endM = eveningEndMin % 60;
      const endLabel = `${endH}:${String(endM).padStart(2, "0")}`;
      return { color: "green", label: `야간진료중 · ${endLabel}까지`, short: "야간진료중" };
    }
    return { color: "red", label: "진료종료", short: "진료종료" };
  }

  return { color: "red", label: "진료종료", short: "진료종료" };
}

const dotStyle: Record<Status["color"], string> = {
  green: "bg-green-500",
  yellow: "bg-yellow-400",
  red: "bg-red-400",
};

const pillStyle: Record<Status["color"], string> = {
  green: "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100",
  yellow: "bg-yellow-50 text-yellow-700 border border-yellow-200 hover:bg-yellow-100",
  red: "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100",
};

export function ClinicStatus() {
  const [status, setStatus] = useState<Status | null>(null);
  const eveningResultRef = useRef<EveningResult>(null);
  const eveningEndMinRef = useRef<number>(20 * 60 + 30);
  const eveningCheckedRef = useRef<string | null>(null);

  useEffect(() => {
    const update = async () => {
      const now = new Date();
      const dow = now.getDay();
      const totalMin = now.getHours() * 60 + now.getMinutes();
      const isTueThu = dow === 2 || dow === 4;

      // 화·목 17:00 이후, 오늘 처음 한 번만 API 조회
      if (isTueThu && totalMin >= 17 * 60) {
        const kst = new Date(now.getTime() + 9 * 3600 * 1000);
        const todayStr = kst.toISOString().slice(0, 10);

        if (eveningCheckedRef.current !== todayStr) {
          eveningCheckedRef.current = todayStr;
          try {
            const res = await fetch("/api/evening-status");
            if (!res.ok) {
              eveningResultRef.current = "error";
            } else {
              const { hasBooking, lastSlotTime } = await res.json();
              eveningResultRef.current = hasBooking ? "has_booking" : "no_booking";
              if (hasBooking && lastSlotTime) {
                const [h, m] = lastSlotTime.split(":").map(Number);
                eveningEndMinRef.current = h * 60 + m + 30;
              }
            }
          } catch {
            eveningResultRef.current = "error";
          }
        }
      }

      setStatus(getStatus(new Date(), eveningResultRef.current, eveningEndMinRef.current));
    };

    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <Link
      href="/schedule"
      className={`flex items-center gap-1.5 ml-3 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${pillStyle[status.color]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotStyle[status.color]}`} />
      <span className="sm:hidden">{status.short}</span>
      <span className="hidden sm:inline">{status.label}</span>
    </Link>
  );
}
