export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 flex h-14">
      <a
        href="tel:02-375-8278"
        className="flex-1 flex items-center justify-center text-xs font-bold bg-blue-600 text-white"
      >
        전화 예약
      </a>
      {/* TODO: 네이버 예약 URL 확정 후 href 교체 */}
      <a
        href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789"
        className="flex-1 flex items-center justify-center text-xs font-bold text-white"
        style={{ backgroundColor: '#03C75A' }}
      >
        네이버 예약
      </a>
      <button
        disabled
        className="flex-1 flex items-center justify-center text-xs font-bold cursor-not-allowed"
        style={{ backgroundColor: '#FEE500', color: '#191919' }}
      >
        카카오톡
      </button>
    </div>
  );
}
