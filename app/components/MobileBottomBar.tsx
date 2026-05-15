export function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 flex h-14">
      <a
        href="tel:02-375-8278"
        className="flex-1 flex items-center justify-center text-xs font-medium text-charcoal hover:bg-gray-50 transition-colors"
      >
        전화 예약
      </a>
      {/* TODO: 네이버 예약 URL 확정 후 href 교체 */}
      <a
        href="/contact"
        className="flex-1 flex items-center justify-center text-xs font-bold bg-primary text-white"
      >
        네이버 예약
      </a>
      <button
        disabled
        className="flex-1 flex items-center justify-center text-xs font-medium text-gray-300 cursor-not-allowed"
      >
        카카오톡
      </button>
    </div>
  );
}
