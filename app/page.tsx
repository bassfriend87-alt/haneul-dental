import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { dentistSchema, getSpecialHours } from "@/lib/schema";

export const metadata: Metadata = {
  title: "상암동 보철치과 크라운·임플란트·틀니 | 상암하늘치과의원",
  description:
    "보철과 전문의가 직접 진단부터 제작·관리까지. 크라운, 브릿지, 임플란트, 틀니. 화·목 야간진료. 상암동.",
  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr",
  },
  openGraph: {
    title: "상암하늘치과의원",
    description: "보철과 전문의가 직접 진단부터 제작·관리까지.",
    locale: "ko_KR",
    type: "website",
  },
};

const services = [
  {
    name: "보철치료",
    desc: "크라운·브릿지·틀니",
    href: "/treatment/prosthetics",
    tag: null,
  },
  {
    name: "임플란트",
    desc: "식립부터 보철까지 일관 치료",
    href: "/treatment/implant",
    tag: null,
  },
  {
    name: "심미치료",
    desc: "라미네이트 (준비중)",
    href: "/treatment/aesthetic",
    tag: null,
  },
  {
    name: "보존치료",
    desc: "충치·신경치료",
    href: "/treatment/restorative",
    tag: null,
  },
  {
    name: "치주치료",
    desc: "스케일링·잇몸치료",
    href: "/treatment/periodontal",
    tag: null,
  },
  {
    name: "턱관절치료",
    desc: "스플린트·교합 안정",
    href: "/treatment/tmj",
    tag: null,
  },
];

const values = [
  {
    label: "정직한 진단",
    body: "치아 상태를 있는 그대로 설명합니다. 필요 이상의 치료를 권하지 않습니다.",
  },
  {
    label: "충분한 설명",
    body: "환자가 자신의 치아를 이해하고, 스스로 선택할 수 있을 때까지 안내합니다.",
  },
  {
    label: "보철 전문성",
    body: "진단부터 보철 제작·장착·관리까지 보철과 전문의가 직접 담당합니다.",
  },
];

const hours = [
  { day: "평일", time: "08:30 – 17:30", note: null },
  { day: "토요일", time: "08:30 – 14:00", note: null },
  { day: "화·목 야간", time: "18:00 – 20:30", note: "사전 예약제" },
  { day: "일·공휴일", time: "휴진", note: null },
  { day: "격주 수·토", time: "휴진", note: null },
];

export default function HomePage() {
  const fullSchema = {
    ...dentistSchema,
    specialOpeningHoursSpecification: getSpecialHours(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
      />

      <main>

        {/* ── Hero ── */}
        <section className="bg-ink overflow-hidden">
          <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:min-h-[680px]">
            {/* 텍스트 */}
            <div className="px-5 pt-20 pb-12 md:py-28 flex flex-col justify-center">
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-8">
                Sangam Haneul Dental &middot; 보철과 전문의
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                잘 만든 보철은,<br />
                환자가 잊고 삽니다
              </h1>
              <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-sm">
                치아를 가장 잘 아는 환자를 만듭니다.<br />
                보철과 전문의가 진단부터 제작·관리까지 직접 담당합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:02-375-8278"
                  className="inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3.5 rounded-full hover:bg-primary-dark transition-colors"
                >
                  전화 예약 &middot; 02-375-8278
                </a>
                <Link
                  href="/treatment"
                  className="inline-flex items-center justify-center border border-white/30 text-white font-medium px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors"
                >
                  진료과목 보기
                </Link>
              </div>
            </div>
            {/* 이미지 */}
            <div className="relative aspect-[3/4] md:aspect-auto">
              <Image
                src="/images/doctor-profile-desk-gray.jpg"
                alt="김준연 대표원장"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="bg-white px-5 py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-14 text-center">
              진료 철학
            </p>
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((v) => (
                <div key={v.label}>
                  <div className="w-8 h-0.5 bg-primary mb-6" />
                  <h2 className="text-xl font-bold text-charcoal mb-3">
                    {v.label}
                  </h2>
                  <p className="text-charcoal-light leading-relaxed text-sm">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="bg-surface px-5 py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-4">
              진료과목
            </p>
            <h2 className="text-3xl font-bold text-charcoal mb-12">
              필요한 치료를{" "}
              <br className="md:hidden" />
              적합한 방법으로
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  className="group border border-gray-100 rounded-2xl p-6 hover:border-primary transition-colors"
                >
                  {s.tag && (
                    <span className="inline-block text-xs text-primary bg-orange-50 rounded-full px-2.5 py-0.5 mb-3">
                      {s.tag}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-charcoal group-hover:text-primary transition-colors mb-1">
                    {s.name}
                  </h3>
                  <p className="text-xs text-charcoal-light">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="bg-charcoal overflow-hidden">
          <div className="max-w-5xl mx-auto md:grid md:grid-cols-2">
            {/* 이미지 */}
            <div className="relative h-72 md:h-auto order-last md:order-first">
              <Image
                src="/images/doctor-consult-talking.jpg"
                alt="환자와 상담하는 김준연 원장"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* 텍스트 */}
            <div className="px-5 py-16 md:py-24 flex flex-col justify-center">
              <p className="text-xs text-gray-300 tracking-widest uppercase mb-8">
                원장 소개
              </p>
              <div className="mb-6">
                <p className="text-white text-2xl font-bold mb-1">김준연 대표원장</p>
                <p className="text-primary text-sm font-medium">
                  치과보철과 전문의 &middot; 통합치의학과 전문의
                </p>
              </div>
              <blockquote className="text-xl font-light text-white leading-relaxed mb-5">
                &ldquo;치아를 가장 잘 아는<br />
                환자를 만듭니다&rdquo;
              </blockquote>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                정직하게 진단하여 환자가 자신의 치아를 이해하게 하고,
                충분히 설명하여 스스로 선택하게 하며,
                보철의 전문성으로 그 선택에 책임지는 치과를 지향합니다.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-sm text-white border border-white/30 rounded-full px-5 py-2.5 hover:bg-white/10 transition-colors w-fit"
              >
                원장 소개 보기 →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Hours + Location ── */}
        <section className="bg-surface px-5 py-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
            <div>
              <p className="text-xs text-charcoal-light tracking-widest uppercase mb-7">
                진료시간
              </p>
              <div className="space-y-1">
                {hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-baseline justify-between py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-sm font-medium text-charcoal">
                      {h.day}
                    </span>
                    <div className="text-right">
                      <span className="text-sm text-charcoal">{h.time}</span>
                      {h.note && (
                        <span className="ml-2 text-xs text-charcoal-light">
                          {h.note}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-charcoal-light tracking-widest uppercase mb-7">
                오시는 길
              </p>
              <address className="not-italic space-y-2">
                <p className="font-medium text-charcoal">상암하늘치과의원</p>
                <p className="text-sm text-charcoal-light">
                  서울 마포구 상암산로1길 69, 302호
                </p>
                <a
                  href="tel:02-375-8278"
                  className="block text-sm text-primary font-medium hover:underline"
                >
                  02-375-8278
                </a>
              </address>
              <a
                href="https://map.naver.com/v5/search/상암하늘치과의원"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-7 text-sm text-charcoal border border-gray-200 rounded-full px-4 py-2.5 hover:border-charcoal transition-colors"
              >
                네이버 지도에서 찾기 →
              </a>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-primary px-5 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-3">진료 예약</h2>
            <p className="text-white/70 text-sm mb-10">
              전화 또는 네이버 예약으로 방문 일정을 잡으실 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:02-375-8278"
                className="inline-flex items-center justify-center bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors"
              >
                전화 예약 &middot; 02-375-8278
              </a>
              {/* TODO: 네이버 예약 URL 확정 후 href 교체 */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white/20 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/30 transition-colors"
              >
                네이버 예약
              </a>
              <button
                disabled
                className="inline-flex items-center justify-center bg-white/10 text-white/40 font-medium px-7 py-3.5 rounded-full cursor-not-allowed"
              >
                카카오톡 (준비중)
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
