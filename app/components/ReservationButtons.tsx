"use client";

import { PhoneIcon, NaverIcon } from "./icons";

const NAVER_BOOKING_URL =
  "https://booking.naver.com/booking/13/bizes/1555012/items/7265789";

export function ReservationButtons({ location }: { location: string }) {
  return (
    <>
      <a
        href="tel:02-375-8278"
        className="inline-flex items-center justify-center gap-2 btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors"
        onClick={() => window.gtag?.("event", "phone_click", { location })}
      >
        <PhoneIcon className="w-4 h-4 shrink-0" />전화 예약 &middot; 02-375-8278
      </a>
      <a
        href={NAVER_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full"
        style={{ backgroundColor: "#03C75A", color: "#ffffff" }}
        onClick={() => window.gtag?.("event", "cta_click", { location })}
      >
        <NaverIcon className="w-4 h-4 shrink-0" />네이버 예약
      </a>
    </>
  );
}
