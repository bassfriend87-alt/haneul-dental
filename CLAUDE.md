@AGENTS.md

# 상암하늘치과의원 홈페이지

## 프로젝트 개요
- 상암하늘치과의원(김준연 대표원장) 공식 홈페이지
- 보철과 전문의 + 통합치의학과 전문의, 단독 개원
- 톤: 차분하고 전문적인 분위기. 대형 병원이 아닌 장인 느낌

## 기술 스택
- Next.js 16 + Tailwind CSS v4 + TypeScript (App Router)
- Vercel 자동 배포 (master push → 배포)
- GitHub: bassfriend87-alt/haneul-dental

## 명령어
- `npm run build` — 프로덕션 빌드
- `npm run dev` — 로컬 개발 서버
- PowerShell에서 실행 시 PATH 설정 필요:
  ```powershell
  $env:PATH = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
  ```

## 브랜드
- Primary: #F5890A (오렌지)
- Secondary: #585858 (차콜)
- Dark: #1a1a1a (ink — Hero, 다크 섹션)
- Surface: #f7f7f5 (크림 배경)
- 슬로건: "잘 만든 보철은, 환자가 잊고 삽니다"
- 미션: "치아를 가장 잘 아는 환자를 만듭니다"

## 디자인 레퍼런스
- bdbddc.com (비디치과) — SEO 섹션 구조 참고
- simdodental.com (서울심도치과) — 보철 전문의 단독 개원 톤 참고

## 파일 구조
```
app/
  layout.tsx          ← 공통 레이아웃 (Noto Sans KR, Header/Footer/MobileBar/DesktopFAB)
  page.tsx            ← 메인 홈페이지
  about/page.tsx      ← 원장 소개
  contact/page.tsx    ← 예약·오시는 길
  fees/page.tsx       ← 비급여 수가표
  treatment/
    page.tsx          ← 진료과목 허브
    prosthetics/      ← 보철 (FAQ 14개, 크라운/브릿지/틀니 섹션)
    implant/          ← 임플란트 (FAQ 15개)
    aesthetic/        ← 심미치료 (noindex, 준비중)
    restorative/      ← 보존치료 (FAQ 10개)
    periodontal/      ← 치주치료 (FAQ 10개)
    tmj/              ← 턱관절치료 (FAQ 10개)
  components/
    Header.tsx        ← 로고 이미지 + 데스크톱 nav
    Footer.tsx        ← 화이트 로고 + 클리닉 정보
    MobileBottomBar.tsx   ← 모바일 하단 고정 3버튼
    DesktopFloatingButtons.tsx ← PC 우측 고정 FAB (전화/네이버/카카오)
    FAQSection.tsx    ← details/summary 아코디언 (서버 컴포넌트)
  opengraph-image.tsx ← OG 이미지 (세로형 컬러 로고, 흰 배경)
lib/
  schema.ts           ← Dentist Schema, FAQPage Schema, closedDates (휴진일)
data/
  faqs.ts             ← 6개 진료과목 FAQ 71개
public/
  images/             ← 원장 사진, 클리닉 사진, 로고
  robots.txt
```

## SEO
- 각 페이지에 Dentist Schema + FAQPage Schema JSON-LD 삽입
- /treatment/aesthetic 은 noindex
- sitemap.ts 에서 자동 생성
- robots.txt 에서 /treatment/aesthetic, /admin, /api 차단
- 환경변수 NEXT_PUBLIC_BASE_URL 로 canonical/sitemap URL 관리

## 주요 URL
- 네이버 예약: https://booking.naver.com/booking/13/bizes/1555012/items/7265789
- 전화: 02-375-8278
- 카카오톡: 미연결 (버튼 disabled 상태)
- 네이버 지도: https://map.naver.com/v5/search/상암하늘치과의원

## 클리닉 정보
- 주소: 서울 마포구 상암산로1길 69, 302호 (우편번호 03905)
- 좌표: 37.5801378, 126.8835080
- 진료시간: 평일 08:30~17:30, 토 08:30~14:00, 화·목 야간 18:00~20:30(예약제)
- 격주 수·토 휴진, 일·공휴일 휴진
- 임플란트 제품: 오스템, 덴티스, IBS

## 남은 작업
- 도메인 연결 (haneuldental.co.kr → Vercel)
- Google Search Console / 네이버 서치어드바이저 등록
- 카카오톡 채널 연결
- /schedule 진료일정 페이지 (추후)
- 진료과목 페이지 클리닉 사진 추가
- /contact 대중교통·주차 안내 추가

## 사진 현황
- 사용 중: doctor-profile-desk-gray.jpg(Hero), doctor-consult-talking.jpg(About), doctor-profile-stand-white.jpg(/about)
- 미사용: 접수실, 진료실, 대기실, X-ray실, 입구 등 30여 장 (photo/ 폴더)
