# 새기준병원 회복재활센터 독립 홈페이지 초안

## 권장 공식 명칭
새기준병원 회복재활센터

보조 설명 문구: 물리치료 · 도수치료 · 운동재활 · 수술 후 회복관리

## 권장 도메인
1. https://rehab.new-standard.co.kr
2. https://recovery.new-standard.co.kr
3. https://pt.new-standard.co.kr

## 제작 의도
관절센터 독립 홈페이지와 같은 구조로, 물리치료실을 수술 후 재활만이 아니라 생활 통증 진입 창구 + 진단 기반 회복관리 + 수술 전후 기능 회복 허브로 포지셔닝합니다.

## 주요 페이지
- `/` 메인
- `/acute-sprain` 급성 염좌·삐끗한 통증
- `/postpartum-parenting-pain` 산후·육아 통증
- `/office-worker-pain` 직장인 생활 통증
- `/senior-gait-balance` 고령자 보행·균형
- `/postoperative-recovery` 척추·관절 수술 후 회복관리
- `/manual-exercise-rehab` 도수치료·운동재활 안내
- `/treatment-before-check` 치료 전 확인해야 할 증상
- `/contact` 오시는 길·진료 상담
- `/ai-readable-rehab-profile` AI-readable 센터 프로필
- `/llms.txt` AI 크롤러용 요약

## 배포 전 환경변수
개발·검수 중에는 기본적으로 noindex가 적용됩니다.
검색엔진 공개 전 아래 값을 설정하세요.

```env
NEXT_PUBLIC_SITE_URL=https://rehab.new-standard.co.kr
NEXT_PUBLIC_INDEXABLE=true
```

## 실행
```bash
npm install
npm run dev
npm run build
```

## 색인 제출 전 체크
- `NEXT_PUBLIC_INDEXABLE=true` 적용 확인
- `/robots.txt`가 Allow 상태인지 확인
- `/sitemap.xml` 생성 확인
- Google Search Console, Bing Webmaster Tools, Naver Search Advisor 소유권 파일 연결
- 본원 PHP 홈페이지에서 회복재활센터로 내부 링크 추가
- 관절센터 및 척추센터에서 수술 후 회복관리 페이지로 링크 추가
