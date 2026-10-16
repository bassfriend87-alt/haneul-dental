// 진료 페이지 검토일 — 페이지별 상수로 관리한다.
// 실제로 콘텐츠를 검토한 날짜만 수동으로 갱신할 것 — new Date() 등
// 빌드 시각을 쓰면 검토하지 않은 날짜가 찍히므로 절대 사용하지 않는다.

export const pageReviewDates = {
  "/treatment/implant": "2026-10-16",
  "/treatment/prosthetics": "2026-10-16",
  "/treatment/restorative": "2026-10-16",
  "/treatment/periodontal": "2026-10-16",
  "/treatment/tmj": "2026-10-16",
  "/treatment/aesthetic": "2026-10-16",
} as const;

export type ReviewedPagePath = keyof typeof pageReviewDates;

// "2026-10-16" → "2026년 10월 16일"
export function formatReviewDateKo(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return `${year}년 ${month}월 ${day}일`;
}
