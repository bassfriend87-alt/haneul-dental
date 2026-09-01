"use client";
import { useEffect } from "react";

export function TapFix() {
  useEffect(() => {
    let active: HTMLElement | null = null;

    function press(e: TouchEvent) {
      const el = (e.target as Element).closest("a, button") as HTMLElement | null;
      if (!el) return;
      active = el;
      el.style.opacity = "0.55";
      el.style.transition = "opacity 0s";
    }

    function release() {
      if (!active) return;
      active.style.opacity = "";
      active.style.transition = "opacity 0.2s";
      active = null;
    }

    document.addEventListener("touchstart", press, { passive: true });
    document.addEventListener("touchend", release, { passive: true });
    document.addEventListener("touchcancel", release, { passive: true });

    return () => {
      document.removeEventListener("touchstart", press);
      document.removeEventListener("touchend", release);
      document.removeEventListener("touchcancel", release);
    };
  }, []);

  return null;
}
