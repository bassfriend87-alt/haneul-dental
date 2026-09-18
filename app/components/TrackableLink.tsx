"use client";

import Link from "next/link";

export function TrackableLink({
  href,
  gaEvent,
  gaParams,
  className,
  children,
}: {
  href: string;
  gaEvent: string;
  gaParams: Record<string, string>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => window.gtag?.("event", gaEvent, gaParams)}
    >
      {children}
    </Link>
  );
}
