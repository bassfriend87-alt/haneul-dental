"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MetaPixelLeadCustom() {
  const pathname = usePathname();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let attempts = 0;
    const fire = () => {
      if (window.fbq) {
        let alreadyFired = false;
        try {
          alreadyFired = !!sessionStorage.getItem("lead_custom_fired");
        } catch {}
        if (!alreadyFired) {
          window.fbq("track", "Lead_custom");
          try {
            sessionStorage.setItem("lead_custom_fired", "1");
          } catch {}
        }
      } else if (attempts < 30) {
        attempts++;
        timer = setTimeout(fire, 300);
      }
    };
    fire();
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
