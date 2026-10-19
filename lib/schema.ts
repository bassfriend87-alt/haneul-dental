// 상암하늘치과 Schema 코드
// 휴진일은 아래 기본 규칙으로 자동 계산되고, Schema + /schedule 달력 + 헤더 진료상태에 동시 반영된다.
// 매월 할 일: 공휴일·휴가 등 특이 날짜만 holidays에 추가 (규칙과 다른 날만 손대면 됨)

// ─────────────────────────────────────────
// 1. 휴진일 데이터
//
// [기본 휴진 규칙] — 특별한 언급이 없으면 자동 적용
//   1) 일요일, 공휴일(대체공휴일 포함) 휴진
//   2) 매월 2번째·4번째 토요일 휴진
//   3) 그 주(월~토) 토요일이 2·4번째 토요일이 아니면 그 주 수요일 휴진
//      (토요일이 공휴일이어도 2·4번째 토요일이 아니면 수요일은 휴진. 공휴일은 별개로 휴진)
//
// [예외 처리]
//   - 공휴일·휴가 등 추가 휴진: holidays에 날짜 추가 (isOpen 없으면 휴진)
//   - 공휴일인데 진료: holidays에 isOpen: true
//   - 규칙상 휴진인 날(격주 수·토)에 진료: extraOpenDates에 추가
// ─────────────────────────────────────────

// 특이 날짜 정보
// isHoliday: 법정공휴일 여부 (날짜 텍스트 빨강 + 이름 표시)
// isOpen: 공휴일이지만 정상진료 (파랑 "정상진료" 표시)
// isOpen이 없는 항목은 모두 휴진으로 처리된다 (공휴일·휴가 등).
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
    "12": {
      "25": { name: "성탄절", isHoliday: true },
    },
  }
}

// 규칙상 휴진이지만 예외적으로 진료하는 날 (격주 수·토 등). 예: "2026": { "11": ["04"] }
const extraOpenDates: Record<string, Record<string, string[]>> = {}

// 규칙 도입 이전 달의 확정 휴진일 (그대로 유지, 수정하지 않음)
const manualClosedDates: Record<string, Record<string, string[]>> = {
  "2026": {
    "05": ["05", "13", "14", "27", "28"],
    //     공휴일  수·토격주  수·토격주
    "06": ["06", "10", "11", "24", "25"],
    //     공휴일  수·토격주  수·토격주
    "09": ["02", "12", "16", "24", "25", "26", "30"],
    //     수격주  토격주   수격주  추석연휴(목·금·토)  수격주
    "10": ["09", "10", "14", "24", "26", "27", "28"],
    //     한글날  토격주  수격주  휴가(토~수, 일은 자동)
  }
}

// 규칙 자동 계산 범위 (YYYY-MM). 공휴일 데이터(holidays)가 입력된 달까지만 계산한다.
// 다음 해 공휴일을 holidays에 넣은 뒤 RULES_END를 늘리면 그 달까지 자동 반영된다.
const RULES_START = "2026-11"
const RULES_END = "2026-12"

const pad2 = (n: number) => String(n).padStart(2, "0")

function getHolidayEntry(y: number, m: number, d: number): HolidayEntry | undefined {
  return holidays[String(y)]?.[pad2(m)]?.[pad2(d)]
}

// 일요일을 제외한 휴진 판정 (공휴일·격주 토요일·격주 수요일). m: 1~12
// 날짜 연산은 Date.UTC로만 해서 실행 환경 타임존 영향을 받지 않는다.
function isRuleClosed(y: number, m: number, d: number): boolean {
  if (extraOpenDates[String(y)]?.[pad2(m)]?.includes(pad2(d))) return false
  const holiday = getHolidayEntry(y, m, d)
  if (holiday) return !holiday.isOpen

  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay()
  if (dow === 6) {
    const nth = Math.ceil(d / 7)
    return nth === 2 || nth === 4
  }
  if (dow === 3) {
    // 같은 주(월~토) 토요일 = 수요일 + 3일 (다음 달로 넘어갈 수 있음)
    // 그 토요일이 2·4번째 토요일이 아니면 수요일 휴진. 토요일 공휴일 여부는 보지 않는다.
    const sat = new Date(Date.UTC(y, m - 1, d + 3))
    const satNth = Math.ceil(sat.getUTCDate() / 7)
    return satNth !== 2 && satNth !== 4
  }
  return false
}

function buildClosedDates(): Record<string, Record<string, string[]>> {
  const result: Record<string, Record<string, string[]>> = {}
  for (const [year, months] of Object.entries(manualClosedDates)) {
    result[year] = { ...months }
  }

  let [y, m] = RULES_START.split("-").map(Number)
  const [endY, endM] = RULES_END.split("-").map(Number)
  while (y < endY || (y === endY && m <= endM)) {
    const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate()
    const days: string[] = []
    for (let d = 1; d <= lastDay; d++) {
      const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay()
      if (dow !== 0 && isRuleClosed(y, m, d)) days.push(pad2(d)) // 일요일은 각 화면에서 자동 처리
    }
    result[String(y)] ??= {}
    result[String(y)][pad2(m)] ??= days
    if (m === 12) { y++; m = 1 } else m++
  }
  return result
}

export const closedDates: Record<string, Record<string, string[]>> = buildClosedDates()

// ─────────────────────────────────────────
// 2. 휴진일 → specialOpeningHoursSpecification 변환
// Schema에는 "오늘(Asia/Seoul) ~ 60일 후"만 출력한다. 지난 휴진일을 계속 내보내면
// Schema가 과거 데이터로 부풀고, 검색엔진이 오래된 구조화 데이터로 오인할 수 있다.
// (/schedule 달력 화면은 closedDates 원본을 그대로 쓰므로 지난 휴진일도 계속 표시된다.)
// ─────────────────────────────────────────

// Asia/Seoul 기준 "오늘"을 YYYY-MM-DD로. new Date().getDate() 같은 로컬(서버=UTC) getter는
// 쓰지 않고 Intl.DateTimeFormat에 timeZone을 명시해 instant → 한국 날짜를 직접 뽑는다.
function getSeoulTodayKey(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

// "YYYY-MM-DD" + days → "YYYY-MM-DD". UTC 기준 Date로 순수 날짜 연산만 하므로
// (instant/타임존 변환이 끼지 않음) 월/연 경계도 안전하게 넘어간다.
function addDaysToKey(key: string, days: number): string {
  const [y, m, d] = key.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(dt.getUTCDate()).padStart(2, "0");
  return `${yy}-${mm}-${dd}`;
}

export function getSpecialHours() {
  const todayKey = getSeoulTodayKey();
  const maxKey = addDaysToKey(todayKey, 60);

  return Object.entries(closedDates).flatMap(([year, months]) =>
    Object.entries(months).flatMap(([month, days]) =>
      days
        .map(day => `${year}-${month}-${day}`)
        .filter(dateKey => dateKey >= todayKey && dateKey <= maxKey)
        .map(dateKey => ({
          "@type": "OpeningHoursSpecification",
          "opens": "00:00",
          "closes": "00:00",
          "validFrom": dateKey,
          "validThrough": dateKey
        }))
    )
  )
}

// ─────────────────────────────────────────
// 3. Dentist Schema (전 페이지 공통)
// ─────────────────────────────────────────

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.haneuldental.co.kr'

// 사이트 전체에서 같은 엔티티를 가리킬 때 쓰는 @id (교차 페이지 참조용)
const dentistId = `${baseUrl}/#dentist`
const doctorId = `${baseUrl}/about#kim-junyeon`

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": dentistId,
  "employee": { "@id": doctorId },
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
  "medicalSpecialty": "https://schema.org/Dentistry",
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

// ─────────────────────────────────────────
// 5. Person Schema — 대표원장 (/about 페이지에서 출력)
// 아래 텍스트는 모두 app/about/page.tsx에 이미 있는 내용만 사용한다.
// ─────────────────────────────────────────

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": doctorId,
  "name": "김준연",
  "jobTitle": "대표원장",
  "image": `${baseUrl}/images/doctor-profile-stand-white.jpg`,
  "url": `${baseUrl}/about`,
  "knowsAbout": ["치과보철", "임플란트", "턱관절 치료"],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "치과보철과 전문의"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "통합치의학과 전문의"
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "치의학 석사",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "경북대학교 치의학전문대학원" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "training",
      "name": "인턴·레지던트 수련",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "경북대학교 치과병원" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certificate",
      "name": "고급치의학 과정 수료",
      "recognizedBy": { "@type": "EducationalOrganization", "name": "서울대학교 치의학교육연수원" }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "대한치과보철학회 인정의",
      "recognizedBy": { "@type": "Organization", "name": "대한치과보철학회" }
    }
  ],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "경북대학교 치의학전문대학원" },
    { "@type": "EducationalOrganization", "name": "경북대학교 치과병원" },
    { "@type": "EducationalOrganization", "name": "서울대학교 치의학교육연수원" }
  ],
  "memberOf": [
    { "@type": "Organization", "name": "대한치과보철학회" },
    {
      "@type": "ProgramMembership",
      "programName": "정회원",
      "hostingOrganization": { "@type": "Organization", "name": "대한턱관절교합학회" }
    },
    {
      "@type": "ProgramMembership",
      "programName": "정회원",
      "hostingOrganization": { "@type": "Organization", "name": "대한구강악안면임플란트학회" }
    }
  ],
  "worksFor": { "@id": dentistId }
}

// ─────────────────────────────────────────
// 6. MedicalWebPage Schema 생성 함수 (진료 페이지용)
// about/description은 호출하는 쪽에서 해당 페이지의 실제 콘텐츠(meta description)만 전달한다.
// ─────────────────────────────────────────

export function getMedicalWebPageSchema(opts: {
  path: string
  lastReviewed: string
  procedureName: string
  procedureDescription: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "url": `${baseUrl}${opts.path}`,
    "lastReviewed": opts.lastReviewed,
    "reviewedBy": { "@id": doctorId },
    "about": {
      "@type": "MedicalProcedure",
      "name": opts.procedureName,
      "description": opts.procedureDescription
    }
  }
}
