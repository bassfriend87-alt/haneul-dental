import Link from "next/link";

const NAVER_BOOKING_URL =
  "https://booking.naver.com/booking/13/bizes/1555012/items/7265789";

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 3C6.48 3 2 6.69 2 11.22c0 2.97 1.82 5.57 4.59 7.07L5.5 21.5l4.46-2.36c.66.09 1.35.14 2.04.14 5.52 0 10-3.69 10-8.22C22 6.69 17.52 3 12 3z" />
    </svg>
  );
}

export function DesktopFloatingButtons() {
  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {/* 진료일정 */}
      <Link
        href="/schedule"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#F5890A" }}
        title="진료일정"
      >
        <CalendarIcon />
        <span className="pointer-events-none absolute right-14 bg-ink text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          진료일정
        </span>
      </Link>

      {/* 전화 예약 */}
      <a
        href="tel:02-375-8278"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#2563EB" }}
        title="전화 예약"
      >
        <PhoneIcon />
        <span className="pointer-events-none absolute right-14 bg-ink text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          전화 예약
        </span>
      </a>

      {/* 네이버 예약 */}
      <a
        href={NAVER_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: "#03C75A" }}
        title="네이버 예약"
      >
        <span className="text-white font-black text-xl leading-none">N</span>
        <span className="pointer-events-none absolute right-14 bg-ink text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          네이버 예약
        </span>
      </a>

      {/* 카카오톡 (준비중) */}
      <button
        disabled
        className="group relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-not-allowed opacity-80"
        style={{ backgroundColor: "#FEE500", color: "#191919" }}
        title="카카오톡 (준비중)"
      >
        <KakaoIcon />
        <span className="pointer-events-none absolute right-14 bg-ink text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          카카오톡 (준비중)
        </span>
      </button>
    </div>
  );
}
