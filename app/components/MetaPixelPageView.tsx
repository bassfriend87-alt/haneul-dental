"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      // 최초 로드: PageView + Lead_custom은 init 스크립트에서 처리
      return;
    }
    // 클라이언트 라우팅 시 PageView 재발동 (Lead_custom은 TreatmentLayout에서 처리)
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
