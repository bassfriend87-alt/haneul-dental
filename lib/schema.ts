// 상암하늘치과 Schema 코드
// 매월 closedDates만 업데이트하면 Schema + /schedule 달력 동시 반영

// ─────────────────────────────────────────
// 1. 매월 업데이트: 휴진일 데이터
// ─────────────────────────────────────────

export const closedDates: Record<string, Record<string, string[]>> = {
  "2026": {
    "05": ["05", "13", "14", "27", "28"],
    //     공휴일  수·토격주  수·토격주
    "06": ["06", "10", "11", "24", "25"],
    //     공휴일  수·토격주  수·토격주
    "09": ["02", "12", "16", "24", "25", "26"],
    //     수격주  토격주   수격주  추석연휴(목·금·토)
    // 매월 추가
  }
}

// ─────────────────────────────────────────
// 2. 휴진일 → specialOpeningHoursSpecification 변환
// ─────────────────────────────────────────

export function getSpecialHours() {
  return Object.entries(closedDates).flatMap(([year, months]) =>
    Object.entries(months).flatMap(([month, days]) =>
      days.map(day => ({
        "@type": "OpeningHoursSpecification",
        "opens": "00:00",
        "closes": "00:00",
        "validFrom": `${year}-${month}-${day}`,
        "validThrough": `${year}-${month}-${day}`
      }))
    )
  )
}

// ─────────────────────────────────────────
// 3. Dentist Schema (전 페이지 공통)
// ─────────────────────────────────────────

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.haneuldental.co.kr'

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "상암하늘치과의원",
  "url": baseUrl,
  "telephone": "02-375-8278",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "상암산로1길 69, 302호",
    "addressLocality": "상암동",
    "addressRegion": "마포구",
    "addressCountry": "KR",
    "postalCode": "03905"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.5801378,
    "longitude": 126.8835080
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "17:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "08:30",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Tuesday", "Thursday"],
      "opens": "18:00",
      "closes": "20:30",
      "description": "야간진료 (사전 예약제)"
    }
  ],
  "medicalSpecialty": [
    "Prosthodontics",
    "Pediatric"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "진료과목",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "보철치료" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "임플란트" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "심미치료" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "보존치료" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "치주치료" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalTherapy", "name": "턱관절치료" } }
    ]
  }
}

// ─────────────────────────────────────────
// 4. FAQPage Schema 생성 함수
// ─────────────────────────────────────────

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}
