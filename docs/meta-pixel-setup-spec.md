# Meta 픽셀 설치 작업 요청서

## 목적
광고 대행사(제이티애드넷) 요청에 따라 Meta 픽셀을 설치한다.
광고 퍼널: Meta 광고 클릭 → 진료과목 페이지 랜딩 → 전화/네이버예약 버튼 클릭 → 신환 유입 집계

## 전제
- 픽셀 ID: `25689882210623811` (기존 홈페이지에서 사용하던 것과 동일 — 데이터 연속성 유지)
- 이벤트명은 **대소문자 포함 한 글자도 변경 금지** (철자가 다르면 별도 데이터로 분리 집계됨)
- 현재 사이트의 예약 관련 버튼은 **전화, 네이버예약 2종**

---

## 1. 패키지 및 스크립트 삽입

### 1-1. 픽셀 초기화 스크립트
`app/layout.tsx`에 `next/script`의 `<Script>` 컴포넌트로 삽입한다.

- **`strategy="afterInteractive"` 필수.** 대행사 요청서에는 `</head>` 바로 위에 동기로 넣으라고 되어 있으나, 그대로 하면 페이스북 서버 응답을 기다리는 동안 첫 화면 렌더링이 멈춰 LCP·INP가 나빠진다. Next.js에서는 `afterInteractive`로 비동기 로딩하는 것이 동일 기능을 하면서 성능 영향이 없다.
- 스크립트 본문은 대행사가 제공한 코드를 그대로 사용 (fbq 초기화 + `fbq('init', '25689882210623811')`)
- `fbq('track', 'PageView')`는 초기화 직후 1회 실행

### 1-2. noscript 픽셀
대행사 요청서의 `<noscript><img ...></noscript>` 태그도 함께 포함한다.

---

## 2. 라우트 변경 시 PageView 재발동 (Next.js 특성 대응)

Next.js App Router는 클라이언트 사이드 라우팅이라 페이지 이동 시 실제 새로고침이 일어나지 않는다. 초기화 스크립트가 한 번만 로드되므로, **경로가 바뀔 때마다 PageView가 자동으로 재발동되지 않는다.**

→ `usePathname()`으로 경로 변경을 감지해 `fbq('track', 'PageView')`를 다시 호출하는 클라이언트 컴포넌트를 만들어 layout에 배치한다.

---

## 3. 세부페이지 Lead_custom 이벤트

대행사 답변: "모든 페이지가 공통 레이아웃인 경우 URL 혹은 파라미터를 사용해서 세부페이지 구분하여 별도 설치"

### 적용 대상 (세부페이지 = 광고 랜딩 타겟)
`/treatment/` 하위 진료과목 페이지 전체 및 `/about`:
- `/treatment/prosthetics`
- `/treatment/implant`
- `/treatment/restorative`
- `/treatment/periodontal`
- `/treatment/tmj`
- `/treatment/aesthetic`
- `/about`

### 동작
- 위 경로에 해당하면 `PageView` + `Lead_custom` **2개** 발동
- 그 외 페이지(메인, `/fees`, `/contact`, `/schedule`, `/clinic-tour`)는 `PageView` **1개**만
- `/treatment/*` 경로 판정은 하드코딩된 목록이 아니라 `/treatment/` 접두사 매칭으로 구현 (진료과목 페이지 추가 시 자동 반영)
- **세션당 1회 발동**: 첫 발동 시 `sessionStorage`에 플래그(`lead_custom_fired`)를 저장하고, 이후 적용 대상 페이지로 이동해도 플래그가 있으면 재발동하지 않는다. `sessionStorage` 접근이 불가한 환경(프라이빗 브라우저 제한 등)에서는 매번 발동한다.

### 구현 메모
- Next.js nested layout(`app/treatment/layout.tsx`, `app/about/layout.tsx`)에서 `MetaPixelLeadCustom` 컴포넌트를 마운트해 처리
- `MetaPixelLeadCustom`은 `afterInteractive` 스크립트 로드 타이밍 문제를 폴링(300ms 간격, **최대 30회 = 약 10초**)으로 해결: fbq 미준비 시 재시도, 30회 초과 시 중단

```
fbq('track', 'Lead_custom');
```

---

## 4. 버튼 클릭 이벤트

현재 사이트의 예약 관련 버튼은 **전화, 네이버예약 2종**이며, 각각 히어로·예약섹션·푸터·플로팅바 등 여러 접점에 배치되어 있다. **모든 접점의 해당 버튼에 빠짐없이 적용**한다.

각 버튼에는 공통 이벤트 1개 + 채널 구분 이벤트 1개를 **세트로** 넣는다. 하나만 넣으면 설치 누락이다.

| 버튼 | 발동 이벤트 |
|---|---|
| 전화 걸기 | `fbq('track','Schedule_custom');` + `fbq('track','Schedule_tel');` |
| 네이버 예약 | `fbq('track','Schedule_custom');` + `fbq('track','Schedule_naver');` |

### 구현 방식
- 대행사 요청서는 인라인 `onclick` 속성 기준이지만, React에서는 `onClick` 핸들러로 구현한다.
- 전화/네이버예약 버튼이 공용 컴포넌트라면 `channel` prop(`'tel'` | `'naver'`)을 받아 이벤트를 분기하는 방식으로 구현해 중복 코드를 피한다.
- `window.fbq?.(...)` 형태로 호출해 스크립트 미로드 상황에서도 에러가 나지 않게 한다.
- 기존 onClick 로직(전화 걸기, 외부 링크 이동 등)이 있다면 **기존 동작을 유지한 채** 이벤트 호출만 추가한다.

### GA4 이벤트와의 관계
이미 GA4용 `cta_click` 이벤트가 있거나 추가할 예정이라면, 같은 클릭 핸들러 안에서 GA4와 Meta 이벤트를 나란히 호출한다. 두 이벤트는 서로 독립적이며 이벤트명을 공유하지 않는다.

---

## 5. 검증

크롬 확장프로그램 **Meta Pixel Helper** 설치 후 아래를 확인한다:
- 메인 페이지 접속 → `PageView` 1개
- `/treatment/*` 또는 `/about` 페이지 접속 → `PageView` + `Lead_custom` 2개 (세션 내 첫 방문 시)
- 같은 세션에서 두 번째 접속 → `Lead_custom` 재발동 없음
- 전화 버튼 클릭 → `Schedule_custom` + `Schedule_tel` 2개
- 네이버예약 버튼 클릭 → `Schedule_custom` + `Schedule_naver` 2개
- 페이지 간 이동(클라이언트 라우팅) 시 `PageView`가 다시 발동되는지

→ 버튼 클릭 시 이벤트가 1개만 잡히면 누락이므로 4번 항목 재확인.
→ 검증 시 광고 차단 확장 프로그램은 꺼둘 것.

---

## 범위 제외 (별도 처리)
- 개인정보처리방침에 Meta 픽셀 관련 고지 문구 추가 — 콘텐츠 작업이므로 별도 진행 (GA4 고지와 함께)
- 자체 문의 폼 제출 완료 이벤트 — 현재 폼 없음, 추후 도입 시 검토
