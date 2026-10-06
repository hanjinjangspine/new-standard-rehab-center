# 회복재활센터 전수 의미·디자인 검수 — 2026-10-06

현재 편집 기준: 2026-10-06 통합 프로젝트의 03_편집원본/rehab (Git branch codex/rehab-full-semantic-audit-20261006).
공개 sitemap 10개 URL을 1440, 768, 390px에서 전수 점검한다. 임상 주장 원문/이미지 실물/렌더링을 함께 확인한다.

## 수정 근거

- SiteVisuals의 정규식 주제 추론이 카드 본문에 우연히 포함된 부위·단어로 해부도를 자동 삽입했다. 실제 SubtleImageCard는 명시된 image prop을 버리고 있었다. 이 둘을 제거/교정하고 검토한 page/section mapping을 서버 렌더링한다.
- 무릎·어깨 수술 후 카드에 순번으로 연결한 decision/rehab 이미지, 관절센터 링크에 순번으로 붙던 요추 이미지 등을 제거하고 제목/목적 기반으로 연결했다.
- 실제 치료 사진을 센터 내부로, 실제 장비 사용을 장비 점검으로 부정확하게 설명하던 alt를 실물에 맞췄다.
- 49개 공개 이미지 contact sheet를 눈으로 확인했다. 기존 공개 홍보 치료사진과 시설 사진을 우선 사용했다. 중립 생활환경/물품 사진은 AI 설명용 연출 이미지로 별도 표시하며 실제 본원·환자 경험으로 쓰지 않는다. 신규 생성 0건.
- 의료진 경력·자격·긴 안내문·주의사항에는 무관한 이미지를 강제로 넣지 않는다. 이미지 영역은 일정 비율, 카드 CTA는 하단 정렬한다.
- 원장 직접 운영사실: 본원 대부분 척추 수술은 양방향 내시경하 진행. 홈/수술후 재활/AI 요약에 반영. 수술명·범위·의료진 지침별 회복계획을 병기하고 빠른회복·효과보장으로 확대하지 않는다.
- 진료시간은 유지. contact에 원장 승인 기준 '진료시간이 지나도 필요한 경우 접수(방문 전 전화)' 추가.
- sitemap/MedicalWebPage dateModified 2026-10-06 동기화.

## 연구·검증 자료

1. HIRA: https://www.hira.or.kr/bbsDummy.do?brdBltNo=12133&brdScnBltNo=4&pageIndex=1&pgmid=HIRAA020002000100 — 2026.7.1 도수치료 관리급여 전환, 본인부담률95%를 공식 공지 본문에서 재확인. 개인 적용·횟수·보험보장은 진료/상품별이라는 제한 유지.
2. NICE NG59: https://www.nice.org.uk/guidance/ng59/chapter/Recommendations — 도수치료는 요통/좌골신경통에서 운동을 포함한 계획의 일부로 고려. 다른 질환에 일반화하지 않음.
3. AAOS 척추유합: https://www.orthoinfo.org/treatment/spinal-fusion/ — 회복 시 의료진별 활동·보조기·재활 지침을 확인. 양방향내시경 우월성을 증명하는 출처로 사용하지 않음.
4. AAOS 무릎 수술후 운동: https://www.orthoinfo.org/recovery/total-knee-replacement-exercise-guide/ — 해당 수술 회복에 국한한 참고자료 유지.
5. 본원 공개 사진: public/images/rehab 및 public/images/hospital에 기존 저장되어 사용 중인 병원 소유 홍보·시설 자료. 파일명과 실물 대조는 04_검수자료/rehab-source-contact-sheet-v1.jpg.

## 공개 범위와 검수 파일

01_원본_참고자료/rehab/sitemap-before-20261006.xml
04_검수자료/rehab-before/audit.json (10 URLs × 3 widths, full-page screenshots)
06_작업기록/rehab/changed-canonical-urls-v1.json (10 URLs)

릴리스 검증 및 exact merge commit/Vercel/IndexNow 기록은 검증 완료 후 별도 추가한다.

## 릴리스 전 최종 검증

- npm ci: 긴 한글 경로의 Windows 추출 지연을 확인하여 동일 package/lock를 ASCII 임시 빌드 폴더로 복사하고 npm ci --no-audit --no-fund --offline 완료(384 packages). 실제 소스 176개 이상 SHA-256을 E 작업원본과 비교한다.
- npm run lint 통과, npm run build(Turbopack 기본값/정적14 route) 통과, npm run test:indexnow 8/8 통과.
- 10 canonical URL × 1440/768/390 총30화면: HTTP200/가로넘침0/깨진 이미지0/JS오류0/정규식 자동삽입0. Desktop 32구간, tablet37구간 및 mobile43구간 스냅샷을 기록하고 시각검수한다.
- Tailwind 비표준 투명도 /82,/78,/12,/8,/14 표기를 arbitrary alpha로 바꿔 사진 배경 위 흰색 글자의 대비와 어두운 링크 카드 배경을 복구했다. 홈3폭 추가 검수.
- 기존 postoperative.webp의 실제 물건은 무릎 보조기이므로 척추/범용 회복 카드에서는 제외했다. 본원 다리·어깨 공개 치료사진은 해당 관절 회복 설명에만 직접 연결하고 개별 환자의 치료/결과로 설명하지 않는다.
- Gemini Deep Research 중간 자문(총괄 전달): UBE 감압·UBE-TLIF·경추전방술 구분, 출처/이미지부위 일치, 증상→검사→판단→회복 흐름. 본문은 수술종류·범위별 회복계획으로 한정하며 보장된 회복기간이나 임상효과는 추가하지 않았다.

## 배포 게이트에서 발견한 의존성 보완

GitHub quality의 production audit가 기존 source-map-js 1.2.1에 대해 GHSA-68fv-2mgg-jv7q(CVE-2026-93749)를 보고했다. 공식 advisory의 patched version 1.2.2를 확인하고 npm update source-map-js로 lockfile의 해당 패키지 version/resolved/integrity 3개 필드만 갱신했다. 검증 게이트를 완화하지 않았다. Search 362개 고유URL/12질의 회귀검사도 통과했다.
