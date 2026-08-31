import { Metadata } from "next";

export const metadata: Metadata = {
  title: "비급여 수가표",
  description:
    "크라운·임플란트·틀니 등 비급여 진료비 안내. 상암하늘치과의원.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/fees`,
  },
};

interface FeeItem {
  name: string;
  price: string;
  highlight?: boolean;
}

interface FeeCategory {
  label?: string;
  items: FeeItem[];
}

interface FeeSection {
  title: string;
  categories: FeeCategory[];
}

const sections: FeeSection[] = [
  {
    title: "예방 & 기본 치료",
    categories: [
      {
        items: [
          { name: "스케일링 — 치석 제거 (전악)", price: "60,000원" },
        ],
      },
      {
        label: "광중합 레진",
        items: [
          { name: "치경부 마모", price: "80,000원" },
          { name: "구치부 — 1면", price: "100,000원" },
          { name: "구치부 — 2면", price: "130,000원" },
          { name: "구치부 — 3면 이상", price: "150,000원" },
          { name: "전치부 — 1면", price: "150,000원" },
          { name: "전치부 — 2면", price: "180,000원" },
          { name: "전치부 — 3면 이상", price: "200,000원" },
          { name: "앞니 벌어짐 (Diastema) — 치아당", price: "150,000원" },
        ],
      },
    ],
  },
  {
    title: "인레이 & 크라운",
    categories: [
      {
        label: "인레이",
        items: [
          { name: "세라믹", price: "300,000원" },
          { name: "골드", price: "450,000원" },
        ],
      },
      {
        label: "포스트 / 코어",
        items: [
          { name: "주조 포스트", price: "150,000원" },
          { name: "기성 포스트", price: "100,000원" },
          { name: "레진 코어", price: "50,000원" },
        ],
      },
      {
        label: "크라운 / 브릿지 — 1치당",
        items: [
          { name: "지르코니아", price: "500,000원" },
          { name: "골드 (A type)", price: "850,000원" },
          { name: "골드 (PT)", price: "950,000원" },
          { name: "PFM", price: "450,000원" },
          { name: "임시 치아", price: "100,000원" },
        ],
      },
    ],
  },
  {
    title: "임플란트 & 골이식",
    categories: [
      {
        items: [
          {
            name: "임플란트 — 진단 + 수술 + 보철 일체",
            price: "1,200,000원",
            highlight: true,
          },
        ],
      },
      {
        label: "골이식",
        items: [
          { name: "단순", price: "300,000원" },
          { name: "복잡", price: "500,000원" },
        ],
      },
    ],
  },
  {
    title: "틀니 — 1악당",
    categories: [
      {
        items: [
          { name: "레진상 완전 틀니", price: "1,400,000원" },
          { name: "금속상 완전 틀니", price: "1,500,000원" },
          { name: "부분 틀니", price: "1,600,000원" },
          {
            name: "임플란트 틀니 (임플란트 비용 별도)",
            price: "2,500,000원",
            highlight: true,
          },
          { name: "임시 틀니", price: "300,000원" },
          { name: "Flipper", price: "150,000원" },
        ],
      },
    ],
  },
  {
    title: "소아 치료",
    categories: [
      {
        items: [
          { name: "불소 도포", price: "30,000원" },
          { name: "실란트", price: "30,000원" },
          { name: "유치 레진", price: "50,000원" },
          { name: "SS 크라운", price: "100,000원" },
          { name: "공간유지장치", price: "150,000원" },
        ],
      },
    ],
  },
  {
    title: "교정",
    categories: [
      {
        items: [
          { name: "유지 장치 재부착", price: "30,000원" },
        ],
      },
    ],
  },
  {
    title: "제증명 수수료",
    categories: [
      {
        items: [
          { name: "일반 진단서", price: "10,000원" },
          { name: "상해 진단서 (3주 미만)", price: "50,000원" },
          { name: "상해 진단서 (3주 이상)", price: "100,000원" },
          { name: "진료·수술 확인서 (보험회사 제출용)", price: "3,000원" },
          { name: "진료기록사본 (1~5매)", price: "1,000원" },
          { name: "진료기록사본 (6매 이상)", price: "2,000원" },
          { name: "향후치료비 추정서 (천만원 미만)", price: "50,000원" },
          { name: "향후치료비 추정서 (천만원 이상)", price: "100,000원" },
        ],
      },
    ],
  },
];

export default function FeesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-orange-50 px-5 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Fees
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
            비급여 수가표
          </h1>
          <p className="text-charcoal-light text-sm">
            아래 금액은 비급여 항목 기준이며, 환자 상태에 따라 달라질 수 있습니다.
          </p>
        </div>
      </section>

      {/* ── 수가 목록 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xs text-charcoal-light tracking-widest uppercase mb-5 pb-3 border-b border-gray-100">
                {section.title}
              </h2>
              {section.categories.map((cat, ci) => (
                <div key={ci} className="mb-4">
                  {cat.label && (
                    <p className="text-xs text-charcoal-light mb-2 mt-4">
                      {cat.label}
                    </p>
                  )}
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className={`flex items-baseline justify-between py-2.5 ${
                        item.highlight ? "font-medium" : ""
                      }`}
                    >
                      <span className="text-sm text-charcoal flex-1 pr-4">
                        {item.name}
                      </span>
                      <span className="text-sm text-charcoal whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">
            정확한 비용은 진단 후 안내드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:02-375-8278"
              className="inline-flex items-center justify-center bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors"
            >
              전화 예약 &middot; 02-375-8278
            </a>
            <a
              href="https://booking.naver.com/booking/13/bizes/1555012/items/7265789"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-bold px-7 py-3.5 rounded-full"
              style={{ backgroundColor: "#03C75A", color: "#ffffff" }}
            >
              네이버 예약
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
