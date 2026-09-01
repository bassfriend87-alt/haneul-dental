import Link from "next/link";
import { PhoneIcon, NaverIcon, KakaoIcon, CalendarIcon } from "./icons";

const NAVER_BOOKING_URL =
  "https://booking.naver.com/booking/13/bizes/1555012/items/7265789";

export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white rounded-t-2xl border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex h-16">

        {/* 전화 예약 */}
        <a
          href="tel:02-375-8278"
          className="flex-1 flex flex-col items-center justify-center gap-1"
          style={{ color: "#1E3A5F" }}
        >
          <PhoneIcon className="w-[22px] h-[22px]" />
          <span className="text-[10px] font-semibold tracking-tight">전화 예약</span>
        </a>

        <div className="w-px bg-gray-100 my-3" />

        {/* 네이버 예약 */}
        <a
          href={NAVER_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-1"
          style={{ color: "#03C75A" }}
        >
          <NaverIcon className="w-[22px] h-[22px]" />
          <span className="text-[10px] font-semibold tracking-tight">네이버 예약</span>
        </a>

        <div className="w-px bg-gray-100 my-3" />

        {/* 카카오톡 */}
        <button
          disabled
          className="flex-1 flex flex-col items-center justify-center gap-1 opacity-35 cursor-not-allowed"
          style={{ color: "#7A6000" }}
        >
          <KakaoIcon className="w-[22px] h-[22px]" />
          <span className="text-[10px] font-semibold tracking-tight">카카오톡</span>
        </button>

        <div className="w-px bg-gray-100 my-3" />

        {/* 진료일정 */}
        <Link
          href="/schedule"
          className="flex-1 flex flex-col items-center justify-center gap-1"
          style={{ color: "#F5890A" }}
        >
          <CalendarIcon className="w-[22px] h-[22px]" />
          <span className="text-[10px] font-semibold tracking-tight">진료일정</span>
        </Link>

      </div>
    </div>
  );
}
