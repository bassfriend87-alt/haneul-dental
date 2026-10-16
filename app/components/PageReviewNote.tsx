import Link from "next/link";
import { formatReviewDateKo } from "@/lib/page-review";

export function PageReviewNote({ date }: { date: string }) {
  return (
    <p className="text-xs text-charcoal-light leading-relaxed mb-3">
      치과보철과·통합치의학과 전문의{" "}
      <Link href="/about" className="underline underline-offset-2 hover:text-primary">
        김준연 원장
      </Link>
      {" "}검토{" · "}
      {formatReviewDateKo(date)}
    </p>
  );
}
