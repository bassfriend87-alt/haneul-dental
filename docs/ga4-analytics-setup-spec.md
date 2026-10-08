# GA4 + Vercel Analytics 도입 작업 요청서

## 목적
- 방문자 트래픽(Vercel Analytics)과 예약 전환 행동(GA4)을 함께 추적
- SEO 체크리스트 작업(title/description 튜닝, 진료과목 페이지 구조)의 효과를 검색어 단위로 검증
- 히어로·예약섹션·푸터·플로팅바 4개 CTA 접점의 클릭 전환율 측정

## 사전 준비 (Claude Code 작업 전, 원장이 직접 완료)
- [ ] GA4 속성 생성 (analytics.google.com → 속성 만들기 → "상암하늘치과" → 데이터 스트림: 웹, URL `https://www.haneuldental.co.kr`)
- [ ] 측정 ID 확보 (`G-XXXXXXXXXX` 형식)
- [ ] Vercel 프로젝트 환경 변수에 `NEXT_PUBLIC_GA_ID` 추가 (Production/Preview 모두)
- [ ] Google Search Console과 GA4 속성 연결 (GA4 관리 → Search Console 연결)

> 위 항목은 웹 UI 작업이라 Claude Code가 대신할 수 없습니다. 완료 후 측정 ID를 Claude Code 세션에 전달해주세요.

---

## Claude Code 작업 범위

### 1. 패키지 설치
```
npm i @next/third-parties @vercel/analytics
```

### 2. Root layout에 스크립트 추가
`app/layout.tsx`의 `<body>` 내부에 아래 두 컴포넌트를 추가.

- GA4: `@next/third-parties/google`의 `<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />`
  - 자동으로 defer 방식 비동기 로딩됨 (체크리스트 26번 — JS 비동기 로딩 원칙 준수)
- Vercel Analytics: `@vercel/analytics/next`의 `<Analytics />`

두 컴포넌트 모두 다른 페이지 콘텐츠와 형제 요소로 나란히 렌더링되면 되며, 레이아웃에 영향을 주지 않아야 함.

### 3. CTA 클릭 이벤트 트래킹
아래 4개 접점에 커스텀 이벤트를 심어주세요. 이벤트명과 파라미터는 아래 표를 그대로 따릅니다 (추후 GA4 탐색 분석에서 일관되게 필터링하기 위함).

| 접점 | 이벤트명 | 파라미터 |
|---|---|---|
| 히어로 예약 버튼 | `cta_click` | `location: "hero"` |
| 예약 섹션 버튼 | `cta_click` | `location: "reservation_section"` |
| 푸터 예약 버튼 | `cta_click` | `location: "footer"` |
| 플로팅 바 예약 버튼 | `cta_click` | `location: "floating_bar"` |

전화 걸기 버튼(있다면)도 동일 패턴으로:
| 전화 버튼 | `phone_click` | `location: "<위치>"` |

- `gtag` 함수는 `window.gtag`로 전역 접근 가능 (GoogleAnalytics 컴포넌트가 자동 주입)
- 클릭 핸들러에서 `window.gtag?.('event', 'cta_click', { location: '...' })` 형태로 호출
- 기존 버튼 컴포넌트가 공용 컴포넌트라면, `location` prop을 받아 이벤트에 전달하는 방식으로 구현 (버튼마다 중복 코드 방지)

### 4. 검증
- 배포 후 GA4 실시간(Realtime) 리포트에서 페이지뷰 및 `cta_click` 이벤트가 잡히는지 확인
- 브라우저 확장 프로그램(광고 차단기) 끄고 테스트 — 안 그러면 이벤트가 차단될 수 있음
- Vercel Analytics 대시보드에서도 병행 확인

---

## 범위에서 제외 (별도 처리)
- 개인정보처리방침에 GA4 쿠키/추적 사용 고지 문구 추가 — 콘텐츠 작업이므로 별도 요청
- Google Ads 등 광고 플랫폼 연동 — 현재 미검토
