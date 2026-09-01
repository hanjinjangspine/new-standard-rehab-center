# 증상별 페이지 카드 배경 이미지 적용

- 대상 URL: `/acute-sprain`, `/postpartum-parenting-pain`, `/office-worker-pain`, `/senior-gait-balance`, `/postoperative-recovery`, `/manual-exercise-rehab`, `/treatment-before-check`
- 생성 방식: Codex 기본 이미지 생성 도구(GPT 이미지)
- 생성 원칙: 인물, 신체 부위, 실제 치료 장면, 병원 로고, 브랜드, 문구를 넣지 않은 중립적인 재활 공간·도구 이미지
- 적용 범위: 상단 3개 정보 카드, 수술 후·도수운동 상세 카드, 관련 진료 링크, 치료 전 안내, 카드 배경 섹션
- 가독성: 장식 이미지는 빈 대체 텍스트로 처리하고 흰색 반투명 오버레이를 사용해 본문 대비를 유지했습니다.

## 생성 자산

- `symptom-observation.webp`: 냉찜질 도구·지지대·폼롤러를 활용한 증상 관찰 배경
- `functional-assessment.webp`: 빈 기록판·각도계·측정도구를 활용한 기능 평가 배경
- `recovery-exercise.webp`: 밴드·밸런스 패드·매트를 활용한 회복 운동 배경
- `postoperative-consultation.webp`: 의자·지팡이·빈 노트를 활용한 수술 후 상담 배경
- `medical-records.webp`: 무표기 서류철·봉투·노트를 활용한 준비 자료 배경
- `spine-recovery.webp`: 요추 지지대와 평행봉을 활용한 척추 회복 배경
- `knee-recovery.webp`: 무릎 보조기·스텝·밴드를 활용한 무릎 회복 배경
- `shoulder-recovery.webp`: 팔걸이·풀리 손잡이·밴드를 활용한 어깨 회복 배경

최종 생성 프롬프트는 공통적으로 밝고 차분한 병원 재활 정보 카드용 3:2 사진, 우측 피사체 배치, 저대비 자연광, 따뜻한 흰색·세이지·뮤트 틸 색상, 사람·로고·문구·워터마크 제외 조건을 사용하고 각 카드의 주제별 도구만 변경했습니다.
