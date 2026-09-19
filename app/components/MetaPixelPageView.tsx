"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MetaPixelPageView() {
  const pathname = usePathname();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      // 최초 로드 시 PageView는 init 스크립트에서 이미 발동
      // treatment 페이지라면 Lead_custom만 추가
      if (pathname.startsWith("/treatment/")) {
        window.fbq?.("track", "Lead_custom");
      }
      return;
    }
    // 클라이언트 라우팅 시 PageView 재발동
    window.fbq?.("track", "PageView");
    if (pathname.startsWith("/treatment/")) {
      window.fbq?.("track", "Lead_custom");
    }
  }, [pathname]);

  return null;
}
