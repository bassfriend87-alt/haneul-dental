import { Metadata } from "next";
import Image from "next/image";
import { dentistSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "원장 소개 — 치과보철과·통합치의학과 전문의 김준연",
  description:
    "치과보철과·통합치의학과 이중 전문의. 경북대 치의학전문대학원 석사. 보철 치료에 집중하는 상암동 단독 개원 치과.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/about`,
  },
};

const credentials = ["치과보철과 전문의", "통합치의학과 전문의"];

const background = [
  "경북대학교 치의학전문대학원 석사",
  "경북대학교 치과병원 인턴, 레지던트",
  "서울대학교 치의학교육연수원 고급치의학 과정 수료",
];

const memberships = [
  "대한치과보철학회 인정의",
  "대한턱관절교합학회 정회원",
  "대한구강악안면임플란트학회 정회원",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-ink overflow-hidden">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:min-h-[560px]">
          {/* 텍스트 */}
          <div className="px-5 pt-20 pb-12 md:py-28 flex flex-col justify-center">
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-10">
              원장 소개
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              김준연
            </h1>
            <p className="text-charcoal-light mb-8">대표원장</p>
            <div className="flex flex-wrap gap-2">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="inline-block text-sm text-primary border border-primary/40 rounded-full px-4 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
          {/* 이미지 */}
          <div className="relative h-72 md:h-auto">
            <Image
              src="/images/doctor-profile-stand-white.jpg"
              alt="김준연 대표원장"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="bg-white px-5 py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-10">
            진료 철학
          </p>
          <blockquote className="text-2xl md:text-3xl font-light text-charcoal leading-relaxed mb-10 border-l-2 border-primary pl-6">
            잘 만든 보철은,<br />
            환자가 잊고 삽니다
          </blockquote>
          <div className="space-y-5 text-charcoal-light leading-relaxed text-sm max-w-xl">
            <p>
              보철 치료의 목표는 환자가 치료받았다는 사실을 잊을 수 있게 하는
              것입니다. 씹는 데 불편하지 않고, 말할 때 신경 쓰이지 않고, 거울을
              볼 때 자연스러운 것. 그것이 잘 만들어진 보철의 기준입니다.
            </p>
            <p>
              그러기 위해선 시작이 정직해야 합니다. 치아 상태를 있는 그대로
              설명하고, 치료가 꼭 필요한 경우와 좀 더 지켜봐도 되는 경우를
              구분해 드립니다. 환자가 이해한 뒤 스스로 선택하는 것, 그게 저의
              역할입니다.
            </p>
            <p>
              단독 개원을 선택한 이유도 같습니다. 한 명의 환자를 처음부터
              끝까지, 진단에서 보철 제작·장착·관리까지 일관되게 책임지기 위해서입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="bg-surface px-5 py-20">
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-14">
          <div>
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
              학력 및 경력
            </p>
            <ul className="space-y-5">
              {background.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-charcoal leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-8">
              학회 활동
            </p>
            <ul className="space-y-5">
              {memberships.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-charcoal leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">
            궁금한 점은 전화로 문의하시거나 방문 예약을 잡아주세요.
          </p>
          <a
            href="tel:02-375-8278"
            className="inline-flex items-center justify-center bg-white text-primary font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors"
          >
            전화 예약 &middot; 02-375-8278
          </a>
        </div>
      </section>
    </>
  );
}
