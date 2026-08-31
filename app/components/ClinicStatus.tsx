"use client";

import { useEffect, useState } from "react";
import { closedDates } from "@/lib/schema";

type Status = {
  color: "green" | "yellow" | "red";
  label: string;
  short: string;
};

const toMin = (h: number, m: number) => h * 60 + m;

function getStatus(now: Date): Status {
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dow = now.getDay(); // 0=일, 1=월 ... 6=토
  const totalMin = now.getHours() * 60 + now.getMinutes();

  const isClosed =
    dow === 0 ||
    (closedDates[year]?.[month]?.includes(day) ?? false);

  if (isClosed) return { color: "red", label: "오늘 휴진", short: "오늘 휴진" };

  // 토요일: 08:30~14:00, 점심 없음
  if (dow === 6) {
    if (totalMin >= toMin(8, 30) && totalMin < toMin(14, 0))
      return { color: "green", label: "진료중 · 14:00까지", short: "진료중" };
    return { color: "red", label: "진료종료", short: "진료종료" };
  }

  // 평일
  const isTueThu = dow === 2 || dow === 4;

  if (totalMin >= toMin(8, 30) && totalMin < toMin(12, 30))
    return { color: "green", label: "진료중 · 12:30까지", short: "진료중" };
  if (totalMin >= toMin(12, 30) && totalMin < toMin(13, 30))
    return { color: "yellow", label: "점심시간 · 13:30부터", short: "점심시간" };
  if (totalMin >= toMin(13, 30) && totalMin < toMin(17, 30))
    return { color: "green", label: "진료중 · 17:30까지", short: "진료중" };
  if (isTueThu && totalMin >= toMin(17, 30) && totalMin < toMin(18, 0))
    return { color: "yellow", label: "야간진료 준비중 · 18:00부터", short: "준비중" };
  if (isTueThu && totalMin >= toMin(18, 0) && totalMin < toMin(20, 30))
    return { color: "green", label: "야간진료중 · 20:30까지", short: "야간진료중" };

  return { color: "red", label: "진료종료", short: "진료종료" };
}

const dotStyle: Record<Status["color"], string> = {
  green: "bg-green-500",
  yellow: "bg-yellow-400",
  red: "bg-red-400",
};

export function ClinicStatus() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(getStatus(new Date()));
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (!status) return null;

  return (
    <span className="flex items-center gap-1.5 ml-3 text-xs text-charcoal-light whitespace-nowrap">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dotStyle[status.color]}`} />
      <span className="sm:hidden">{status.short}</span>
      <span className="hidden sm:inline">{status.label}</span>
    </span>
  );
}
