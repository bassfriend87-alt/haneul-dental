import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "진료과목",
  description:
    "상암하늘치과의원 진료과목 안내. 보철치료·임플란트·보존치료·치주치료·턱관절치료. 보철과 전문의 직접 진료.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/treatment`,
  },
};

const treatments = [
  {
    name: "보철치료",
    desc: "크라운·브릿지·틀니",
    sub: "보철과 전문의가 진단부터 제작·관리까지 직접 담당합니다.",
    href: "/treatment/prosthetics",
  },
  {
    name: "임플란트",
    desc: "식립부터 보철까지 일관 치료",
    sub: "보철과 전문의가 식립부터 크라운까지 직접 담당합니다.",
    href: "/treatment/implant",
  },
  {
    name: "심미치료",
    desc: "라미네이트",
    sub: "현재 준비중입니다.",
    href: "/treatment/aesthetic",
  },
  {
    name: "보존치료",
    desc: "충치·신경치료",
    sub: "자연치아를 최대한 보존하는 방향으로 치료합니다.",
    href: "/treatment/restorative",
  },
  {
    name: "치주치료",
    desc: "스케일링·잇몸치료",
    sub: "정기적인 스케일링과 치주치료로 잇몸 건강을 관리합니다.",
    href: "/treatment/periodontal",
  },
  {
    name: "턱관절치료",
    desc: "스플린트·교합 안정",
    sub: "턱 통증·소리·개구 제한 등 턱관절 증상을 치료합니다.",
    href: "/treatment/tmj",
  },
];

export default function TreatmentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-orange-50 px-5 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Treatment
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
            진료과목
          </h1>
        </div>
      </section>

      {/* ── 진료과목 목록 ── */}
      <section className="bg-white px-5 py-8 md:py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5">
          {treatments.map((t) => (
            <Link
              key={t.name}
              href={t.href}
              className="group border border-gray-100 rounded-2xl p-7 hover:border-primary transition-colors"
            >
              <h2 className="text-lg font-bold text-charcoal group-hover:text-primary transition-colors mb-1">
                {t.name}
              </h2>
              <p className="text-sm text-primary mb-3">{t.desc}</p>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {t.sub}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">
            어떤 치료가 필요한지 모르겠다면, 먼저 상담을 받아보세요.
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
