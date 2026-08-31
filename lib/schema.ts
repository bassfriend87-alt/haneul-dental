// 상암하늘치과 Schema 코드
// 매월 closedDates만 업데이트하면 Schema + /schedule 달력 동시 반영

// ─────────────────────────────────────────
// 1. 매월 업데이트: 휴진일 데이터
// ─────────────────────────────────────────

// 특이 날짜 정보
// isHoliday: 법정공휴일 여부 (날짜 텍스트 빨강 + 이름 표시)
// isOpen: 공휴일이지만 정상진료 (파랑 "정상진료" 표시)
type HolidayEntry = { name: string; isHoliday?: boolean; isOpen?: boolean };
export const holidays: Record<string, Record<string, Record<string, HolidayEntry>>> = {
  "2026": {
    "09": {
      "24": { name: "추석연휴", isHoliday: true },
      "25": { name: "추석연휴", isHoliday: true },
      "26": { name: "추석연휴", isHoliday: true },
    },
    "10": {
      "03": { name: "개천절", isHoliday: true, isOpen: true },
      "05": { name: "개천절(대체)", isHoliday: true, isOpen: true },
      "09": { name: "한글날", isHoliday: true },
      "26": { name: "휴가" },
      "27": { name: "휴가" },
    },
  }
}

export const closedDates: Record<string, Record<string, string[]>> = {
  "2026": {
    "05": ["05", "13", "14", "27", "28"],
    //     공휴일  수·토격주  수·토격주
    "06": ["06", "10", "11", "24", "25"],
    //     공휴일  수·토격주  수·토격주
    "09": ["02", "12", "16", "24", "25", "26", "30"],
    //     수격주  토격주   수격주  추석연휴(목·금·토)  수격주
    "10": ["09", "10", "14", "24", "26", "27", "28"],
    //     한글날  토격주  수격주  휴가(토~수, 일은 자동)
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
