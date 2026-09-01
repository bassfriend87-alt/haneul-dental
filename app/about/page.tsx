import { Metadata } from "next";
import Image from "next/image";
import { IconStethoscope, IconMessageCircle, IconCrown } from "@tabler/icons-react";
import { dentistSchema } from "@/lib/schema";
import doctorStandWhite from "@/public/images/doctor-profile-stand-white.jpg";
import doctorConsultTalking from "@/public/images/doctor-consult-talking.jpg";

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

const differentiators = [
  {
    icon: <IconStethoscope size={32} stroke={1.5} className="text-primary" />,
    label: "정직한 진단",
    body: "치아 상태를 있는 그대로 설명합니다. 필요 이상의 치료를 권하지 않습니다.",
  },
  {
    icon: <IconMessageCircle size={32} stroke={1.5} className="text-primary" />,
    label: "충분한 설명",
    body: "환자가 자신의 치아를 이해하고, 스스로 선택할 수 있을 때까지 안내합니다.",
  },
  {
    icon: <IconCrown size={32} stroke={1.5} className="text-primary" />,
    label: "평생 책임 관리",
    body: "진단부터 보철 제작·장착·관리까지 한 사람이 처음부터 끝까지 담당합니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
      />

      {/* ── Hero ── */}
      <section className="bg-orange-50 overflow-hidden">
        <div className="max-w-5xl mx-auto md:grid md:grid-cols-2 md:min-h-[560px]">
          {/* 이미지 — 좌 (모바일: 위) */}
          <div className="relative h-72 md:h-auto">
            <Image
              src={doctorStandWhite}
              alt="김준연 대표원장"
              fill
              className="object-cover object-top"
              priority
              placeholder="blur"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
          {/* 텍스트 — 우 (모바일: 아래) */}
          <div className="px-5 pt-12 pb-14 md:py-28 md:pl-14 flex flex-col justify-center">
            {/* 전문의 배지 — 이름보다 위 */}
            <div className="flex flex-wrap gap-2 mb-8">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="inline-block text-sm text-primary border border-primary/40 rounded-full px-4 py-1.5"
                >
                  {c}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-2">
              김준연
            </h1>
            <p className="text-charcoal-light mb-10">
              대표원장 &middot; 상암하늘치과의원
            </p>
            {/* pull-quote */}
            <blockquote className="border-l-2 border-primary pl-5">
              <p className="text-xl md:text-2xl font-light text-charcoal leading-relaxed">
                환자분이 이해하실 때까지,<br />
                설명을 아끼지 않습니다
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── 차별점 3카드 ── */}
      <section className="bg-surface px-5 py-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-12 text-center">
            왜 한 사람이 끝까지 책임지는가
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {differentiators.map((d) => (
              <div key={d.label}>
                <div className="mb-6">{d.icon}</div>
                <h2 className="text-xl font-bold text-charcoal mb-3">{d.label}</h2>
                <p className="text-charcoal-light leading-relaxed text-sm">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="relative bg-ink px-5 py-12 md:py-28 overflow-hidden">
        {/* 배경 사진 — 은은하게 */}
        <Image
          src={doctorConsultTalking}
          alt=""
          fill
          className="object-cover opacity-20"
          placeholder="blur"
          sizes="100vw"
        />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-10 text-center">
            진료 철학
          </p>
          <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-14 text-center">
            잘 만든 보철은,<br />
            환자가 잊고 삽니다
          </blockquote>
          <div className="space-y-5 text-gray-400 leading-relaxed text-sm max-w-xl mx-auto">
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

      {/* ── 학력 및 경력 — 세로 타임라인 ── */}
      <section className="bg-surface px-5 py-10 md:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-12">
            학력 및 경력
          </p>
          <div className="relative">
            {/* 세로선 */}
            <div className="absolute left-[4px] top-2 bottom-2 w-px bg-gray-200" />
            <ul className="space-y-8">
              {background.map((item) => (
                <li key={item} className="flex items-start gap-5">
                  <span className="relative z-10 mt-1.5 w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-sm text-charcoal leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 학회 활동 — 칩 ── */}
      <section className="bg-white px-5 py-10 md:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-10">
            학회 활동
          </p>
          <div className="flex flex-wrap gap-3">
            {memberships.map((item) => (
              <span
                key={item}
                className="inline-block text-sm text-charcoal bg-surface border border-gray-200 rounded-full px-5 py-2.5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-primary px-5 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">진료 예약</h2>
          <p className="text-white/70 text-sm mb-8">
            궁금한 점은 전화로 문의하시거나 방문 예약을 잡아주세요.
          </p>
          <a
            href="tel:02-375-8278"
            className="inline-flex items-center justify-center btn-deep-navy text-white font-bold px-7 py-3.5 rounded-full transition-colors"
          >
            전화 예약 &middot; 02-375-8278
          </a>
        </div>
      </section>
    </>
  );
}
