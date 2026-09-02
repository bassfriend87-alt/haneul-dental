import { Metadata } from "next";
import Image from "next/image";

import imgEntranceDoor from "@/public/photo/clinic-entrance-door.jpg";
import imgEntranceSignage from "@/public/photo/clinic-entrance-signage.jpg";
import imgReceptionFront from "@/public/photo/clinic-reception-front.jpg";
import imgReceptionChairWide from "@/public/photo/clinic-reception-chair-wide.jpg";
import imgReceptionConsultView from "@/public/photo/clinic-reception-consult-view.jpg";
import imgReceptionTreatmentView from "@/public/photo/clinic-reception-treatment-view.jpg";
import imgWaitingWide from "@/public/photo/clinic-waiting-wide.jpg";
import imgWallMotto from "@/public/photo/clinic-wall-motto.jpg";
import imgWallDoctorPanel from "@/public/photo/clinic-wall-doctor-panel.jpg";
import imgConsultationRoom from "@/public/photo/clinic-consultation-room.jpg";
import imgConsultationBlind from "@/public/photo/clinic-consultation-blind.jpg";
import imgTreatmentRoomWide from "@/public/photo/clinic-treatment-room-wide.jpg";
import imgTreatmentChairFront from "@/public/photo/clinic-treatment-chair-front.jpg";
import imgTreatmentChairOrange from "@/public/photo/clinic-treatment-chair-orange.jpg";
import imgTreatmentGlassMotto from "@/public/photo/clinic-treatment-glass-motto.jpg";
import imgXrayRoom from "@/public/photo/clinic-xray-room.jpg";
import imgSterilizationSink from "@/public/photo/clinic-sterilization-sink.jpg";
import imgDoctorConsultSmile from "@/public/photo/doctor-consult-smile.jpg";
import imgDoctorConsultMonitor from "@/public/photo/doctor-consult-monitor.jpg";
import imgDoctorTreatmentPatientSide from "@/public/photo/doctor-treatment-patient-side.jpg";
import imgDoctorTreatmentHands from "@/public/photo/doctor-treatment-hands.jpg";

export const metadata: Metadata = {
  title: "치과 둘러보기 | 상암하늘치과의원",
  description:
    "상암하늘치과의원 내부 공간을 사진으로 살펴보세요. 입구, 접수, 대기실, 상담실, 진료실을 미리 확인할 수 있습니다.",
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.haneuldental.co.kr"}/clinic-tour`,
  },
};

const navItems = [
  { id: "entrance", label: "입구" },
  { id: "reception", label: "접수" },
  { id: "waiting", label: "대기실" },
  { id: "consultation", label: "상담실" },
  { id: "treatment", label: "진료실" },
  { id: "sterilization", label: "소독·X-ray실" },
  { id: "doctor", label: "진료 모습" },
];

export default function ClinicTourPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-orange-50 px-5 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-light tracking-widest uppercase mb-6">
            Clinic Tour
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
            치과 둘러보기
          </h1>
          <p className="text-sm text-charcoal-light mt-4 leading-relaxed">
            방문 전에 치과 내부를 미리 살펴보세요.
          </p>
        </div>
      </section>

      {/* Section nav */}
      <nav className="bg-white border-b border-gray-100 sticky top-16 z-40 overflow-x-auto">
        <div className="max-w-5xl mx-auto px-5 py-3 flex gap-2 whitespace-nowrap">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="inline-block text-xs text-charcoal-light border border-gray-200 rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Gallery */}
      <div className="bg-white">

        {/* 입구 */}
        <section id="entrance" className="px-5 py-12 md:py-16 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Entrance</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">입구</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgEntranceDoor}
                  alt="상암하늘치과의원 입구 문"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgEntranceSignage}
                  alt="상암하늘치과의원 간판"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 접수 */}
        <section id="reception" className="px-5 py-12 md:py-16 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Reception</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">접수</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgReceptionFront}
                  alt="접수 데스크"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgReceptionChairWide}
                  alt="접수 공간 전경"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgReceptionConsultView}
                  alt="접수 공간 (상담 방향)"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgReceptionTreatmentView}
                  alt="접수 공간 (진료 방향)"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 대기실 */}
        <section id="waiting" className="px-5 py-12 md:py-16 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Waiting Room</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">대기실</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[16/9] sm:col-span-2 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgWaitingWide}
                  alt="대기실 전경"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 1024px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgWallMotto}
                  alt="원장 문구"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgWallDoctorPanel}
                  alt="원장 소개 패널"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 상담실 */}
        <section id="consultation" className="px-5 py-12 md:py-16 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Consultation Room</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">상담실</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgConsultationRoom}
                  alt="상담실 전경"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgConsultationBlind}
                  alt="상담실"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 진료실 */}
        <section id="treatment" className="px-5 py-12 md:py-16 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Treatment Room</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">진료실</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[16/9] sm:col-span-2 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgTreatmentRoomWide}
                  alt="진료실 전경"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 1024px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgTreatmentChairFront}
                  alt="진료 체어 (정면)"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgTreatmentChairOrange}
                  alt="진료 체어"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[16/9] sm:col-span-2 rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgTreatmentGlassMotto}
                  alt="진료실 유리 문구"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 1024px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 소독·X-ray실 */}
        <section id="sterilization" className="px-5 py-12 md:py-16 border-b border-gray-50">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Sterilization &amp; X-ray</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">소독·X-ray실</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgXrayRoom}
                  alt="X-ray 촬영실"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgSterilizationSink}
                  alt="소독·멸균 공간"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 진료 모습 */}
        <section id="doctor" className="px-5 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-charcoal-light tracking-widest uppercase mb-1">Doctor at Work</p>
            <h2 className="text-xl font-bold text-charcoal mb-8">진료 모습</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgDoctorConsultSmile}
                  alt="상담 중인 원장"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgDoctorConsultMonitor}
                  alt="모니터로 상담 중"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgDoctorTreatmentPatientSide}
                  alt="환자 옆에서 진료 중인 원장"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={imgDoctorTreatmentHands}
                  alt="진료 중인 원장의 손"
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 640px) 100vw, 512px"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
