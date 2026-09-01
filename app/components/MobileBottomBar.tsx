import Link from "next/link";

const NAVER_BOOKING_URL =
  "https://booking.naver.com/booking/13/bizes/1555012/items/7265789";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function NaverIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
      <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
      <path d="M12 3C6.48 3 2 6.69 2 11.22c0 2.97 1.82 5.57 4.59 7.07L5.5 21.5l4.46-2.36c.66.09 1.35.14 2.04.14 5.52 0 10-3.69 10-8.22C22 6.69 17.52 3 12 3z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px]">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
    </svg>
  );
}

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
          <PhoneIcon />
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
          <NaverIcon />
          <span className="text-[10px] font-semibold tracking-tight">네이버 예약</span>
        </a>

        <div className="w-px bg-gray-100 my-3" />

        {/* 카카오톡 */}
        <button
          disabled
          className="flex-1 flex flex-col items-center justify-center gap-1 opacity-35 cursor-not-allowed"
          style={{ color: "#7A6000" }}
        >
          <KakaoIcon />
          <span className="text-[10px] font-semibold tracking-tight">카카오톡</span>
        </button>

        <div className="w-px bg-gray-100 my-3" />

        {/* 진료일정 */}
        <Link
          href="/schedule"
          className="flex-1 flex flex-col items-center justify-center gap-1"
          style={{ color: "#F5890A" }}
        >
          <CalendarIcon />
          <span className="text-[10px] font-semibold tracking-tight">진료일정</span>
        </Link>

      </div>
    </div>
  );
}
