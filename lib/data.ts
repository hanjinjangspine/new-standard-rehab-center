import { BASE_URL, siteConfig } from "@/lib/site";

export const SITE_URL = BASE_URL;

export const hospitalInfo = {
  hospitalName: siteConfig.hospitalName,
  centerName: siteConfig.centerName,
  formerName: siteConfig.formerName,
  englishName: siteConfig.englishName,
  address: siteConfig.address,
  location: "경기도 용인시 처인구",
  phone: siteConfig.phone,
  consultationPhoneHref: siteConfig.phoneHref,
  officialWebsiteUrl: siteConfig.officialWebsiteUrl,
  officialWebsiteHref: siteConfig.officialWebsiteUrl,
  spineCenterUrl: siteConfig.spineCenterUrl,
  jointCenterUrl: siteConfig.jointCenterUrl,
  naverReservationUrl: siteConfig.naverReservationUrl,
  naverReservationHref: siteConfig.naverReservationUrl,
  youtubeUrl: siteConfig.youtubeUrl,
  youtubeHref: siteConfig.youtubeUrl,
  naverMapUrl: siteConfig.naverMapUrl,
  googleMapUrl: siteConfig.googleMapUrl,
  logoPath: siteConfig.logoPath,
  logoAlt: siteConfig.logoAlt,
  hours: "월-금 진료 / 토요일 순환진료 / 일요일 09:00–13:00 진료",
  hoursNote: "진료 일정은 의료진 사정 및 병원 상황에 따라 변경될 수 있습니다.",
  hoursConfirmation: "내원 전 대표전화 031-328-0333으로 확인해 주세요.",
  baseUrl: siteConfig.baseUrl,
  commonNotice:
    "새기준병원 회복재활센터는 생활 통증, 급성 염좌, 산후·육아 통증, 직장인 통증, 고령자 보행·균형, 척추·관절 수술 후 회복관리를 안내하는 병원형 재활치료 안내 페이지입니다.",
  officialRelationship:
    "진료 예약 및 병원 기본 정보는 새기준병원 공식 홈페이지에서도 확인하실 수 있습니다."
};

export const aiSummary = {
  ko:
    "새기준병원 회복재활센터는 경기도 용인시 처인구에 위치한 병원형 회복재활 안내 사이트입니다. 급성 염좌와 삐끗한 통증, 산후·육아 과정의 손목·허리·골반·목어깨 통증, 직장인 생활 통증, 고령자 보행·균형 문제, 척추·관절 수술 후 기능 회복관리를 다룹니다. 치료 방향은 통증 부위, 진찰 소견, 영상검사 결과, 치료 반응을 함께 확인한 뒤 물리치료, 도수치료, 운동재활, 자가운동 교육, 전문센터 진료 연결 여부를 상담하는 방식으로 안내합니다.",
  en:
    "New Standard Hospital Recovery & Rehabilitation Center is a hospital-based rehabilitation information site in Yongin, South Korea. It covers acute sprain and sudden pain, postpartum and parenting-related wrist, back, pelvic, neck and shoulder pain, office-worker musculoskeletal pain, gait and balance issues in older adults, and functional recovery after spine and joint surgery. The center emphasizes evaluation-based care planning with medical consultation, imaging review when needed, physical therapy, manual therapy, exercise rehabilitation, home exercise education, and linkage to spine or joint specialty care."
};

export const defaultKeywords = [
  "용인 물리치료",
  "처인구 물리치료",
  "용인 재활치료",
  "용인 운동재활",
  "용인 도수치료",
  "용인 발목 염좌",
  "허리 삐끗 물리치료",
  "목 삐끗 치료",
  "산후 허리 통증",
  "아기 안고 손목 통증",
  "육아 어깨 통증",
  "직장인 목 어깨 통증",
  "거북목 물리치료",
  "보행 재활",
  "균형 운동",
  "낙상 예방",
  "척추수술 후 재활",
  "무릎수술 후 재활",
  "새기준병원 회복재활센터"
];

export const navItems = [
  { label: "센터소개", href: "/" },
  { label: "급성 염좌", href: "/acute-sprain" },
  { label: "산후·육아 통증", href: "/postpartum-parenting-pain" },
  { label: "직장인 통증", href: "/office-worker-pain" },
  { label: "고령자 보행", href: "/senior-gait-balance" },
  { label: "수술 후 회복", href: "/postoperative-recovery" },
  { label: "도수·운동재활", href: "/manual-exercise-rehab" },
  { label: "오시는 길", href: "/contact" }
];

export const programCards = [
  {
    title: "급성 염좌·삐끗한 통증",
    href: "/acute-sprain",
    description: "발목 염좌, 허리 삐끗함, 목·어깨 급성 통증, 무릎 접질림의 초기 확인과 회복관리",
    tags: ["발목", "허리", "목·어깨"],
    featured: true
  },
  {
    title: "산후·육아 통증",
    href: "/postpartum-parenting-pain",
    description: "아기 안기, 수유 자세, 반복 육아 동작 후 생기는 손목·허리·골반·목어깨 통증 평가",
    tags: ["손목", "골반", "허리"]
  },
  {
    title: "직장인 생활 통증",
    href: "/office-worker-pain",
    description: "거북목, 목·어깨 결림, 장시간 앉은 자세와 손목 사용으로 생기는 통증 관리",
    tags: ["거북목", "허리", "손목"]
  },
  {
    title: "고령자 보행·균형",
    href: "/senior-gait-balance",
    description: "근력저하, 보행 불안, 낙상 위험, 무릎·척추 질환으로 인한 이동 기능 저하 관리",
    tags: ["보행", "균형", "낙상"]
  },
  {
    title: "수술 후 회복관리",
    href: "/postoperative-recovery",
    description: "척추·관절 수술 후 보행, 운동범위, 근력, 일상 복귀 단계를 의료진과 함께 확인",
    tags: ["척추", "관절", "회복"]
  },
  {
    title: "도수·운동재활",
    href: "/manual-exercise-rehab",
    description: "환자 상태와 치료 반응에 따라 물리치료, 도수치료, 운동재활, 자가운동 교육을 상담",
    tags: ["도수치료", "운동재활", "자가운동"]
  }
];

export const treatmentFlow = [
  {
    step: "01",
    title: "증상과 생활 동작 확인",
    description: "언제 다쳤는지, 어떤 동작에서 아픈지, 반복되는 생활 자세와 회복을 방해하는 요인을 확인합니다."
  },
  {
    step: "02",
    title: "진찰·검사 필요성 판단",
    description: "인대 손상, 신경 증상, 관절 손상, 골절 가능성 등 전문 진료 또는 영상검사가 필요한 상황을 구분합니다."
  },
  {
    step: "03",
    title: "치료 단계 상담",
    description: "환자 상태에 따라 물리치료, 도수치료, 운동재활, 자가운동 교육, 전문센터 진료 연결을 상담합니다."
  },
  {
    step: "04",
    title: "반응 확인과 회복관리",
    description: "통증 변화, 보행, 운동범위, 근력, 일상 복귀 정도를 확인하며 회복 방향을 조정합니다."
  }
];

export const targetGroups = [
  "급성 염좌·삐끗한 통증 환자",
  "산후·육아 과정에서 손목·허리·골반 통증이 지속되는 환자",
  "장시간 앉아서 일하는 직장인 목·어깨·허리 통증 환자",
  "보행 불안, 균형 저하, 낙상 위험이 있는 고령 환자",
  "척추·관절 수술 후 기능 회복이 필요한 환자"
];

export const safetyCopy = [
  "치료 효과와 회복 속도는 환자 상태, 진단, 손상 정도, 생활 환경에 따라 달라질 수 있습니다.",
  "도수치료는 환자의 증상, 진찰 소견, 치료 반응에 따라 선택적으로 시행될 수 있습니다.",
  "염좌나 급성 통증은 인대 손상, 관절 손상, 골절 동반 여부 확인이 필요할 수 있습니다.",
  "산후·육아 통증은 근골격계 원인과 생활 동작을 함께 확인하는 것이 도움이 됩니다."
];

export type ProgramSlug =
  | "acute-sprain"
  | "postpartum-parenting-pain"
  | "office-worker-pain"
  | "senior-gait-balance"
  | "postoperative-recovery"
  | "manual-exercise-rehab"
  | "treatment-before-check";

export const programPages: Record<ProgramSlug, {
  title: string;
  eyebrow: string;
  path: string;
  description: string;
  keywords: string[];
  heroLead: string;
  symptoms: string[];
  checks: string[];
  care: string[];
  related: { label: string; href: string }[];
}> = {
  "acute-sprain": {
    title: "급성 염좌·삐끗한 통증 | 새기준병원 회복재활센터",
    eyebrow: "Acute Sprain & Sudden Pain",
    path: "/acute-sprain",
    description:
      "발목 염좌, 허리 삐끗함, 목 삐끗, 무릎 접질림 등 급성 통증은 손상 정도와 동반 문제를 확인한 뒤 회복관리 방향을 상담합니다.",
    keywords: ["용인 발목 염좌", "허리 삐끗 물리치료", "목 삐끗 치료", "무릎 접질림"],
    heroLead:
      "갑자기 삐끗한 통증은 단순 근육통처럼 보여도 인대, 관절, 신경 증상이 함께 있는지 확인하는 것이 중요합니다.",
    symptoms: ["발목을 접질린 뒤 붓기와 통증이 지속됨", "허리를 삐끗한 뒤 숙이거나 일어서기 어려움", "목이 갑자기 돌아가지 않거나 어깨까지 당김", "무릎·손목을 접질린 뒤 움직일 때 통증이 심함"],
    checks: ["부종·멍·압통 위치", "관절 불안정성 여부", "신경 증상 동반 여부", "X-ray·MRI 등 영상검사 필요성"],
    care: ["초기 통증과 부종 관리", "관절 가동범위 회복", "재손상 방지를 위한 근력·균형 운동", "필요 시 관절센터 또는 척추센터 진료 연결"],
    related: [
      { label: "도수·운동재활", href: "/manual-exercise-rehab" },
      { label: "관절센터", href: "https://joint.new-standard.co.kr" }
    ]
  },
  "postpartum-parenting-pain": {
    title: "산후·육아 통증 | 새기준병원 회복재활센터",
    eyebrow: "Postpartum & Parenting Pain",
    path: "/postpartum-parenting-pain",
    description:
      "출산 후 또는 육아 과정에서 반복되는 손목, 허리, 골반, 목어깨 통증의 근골격계 원인과 생활 동작을 함께 확인합니다.",
    keywords: ["산후 허리 통증", "아기 안고 손목 통증", "육아 어깨 통증", "출산 후 골반 통증"],
    heroLead:
      "아기를 안고, 수유하고, 반복적으로 들어 올리는 동작은 손목·허리·골반·목어깨에 지속적인 부담을 줄 수 있습니다.",
    symptoms: ["아기를 안을 때 손목이나 엄지 쪽이 아픔", "수유 자세 후 등·목·어깨가 뻐근함", "출산 후 허리·골반 통증이 지속됨", "육아 중 반복적으로 허리를 숙일 때 통증이 악화됨"],
    checks: ["통증이 생기는 육아 동작", "손목 힘줄·관절 부담", "골반·요추 주변 근육 긴장", "수면 부족과 회복 지연 요인"],
    care: ["손목·허리 부담을 줄이는 동작 교육", "통증 부위 물리치료와 운동재활 상담", "골반·코어 안정화 운동 안내", "필요 시 전문 진료 및 검사 연결"],
    related: [
      { label: "직장인 생활 통증", href: "/office-worker-pain" },
      { label: "치료 전 확인", href: "/treatment-before-check" }
    ]
  },
  "office-worker-pain": {
    title: "직장인 목·어깨·허리 통증 | 새기준병원 회복재활센터",
    eyebrow: "Office Worker Pain",
    path: "/office-worker-pain",
    description:
      "거북목, 목어깨 결림, 허리 통증, 손목 통증 등 직장인 생활 통증은 자세, 근력, 생활습관을 함께 확인합니다.",
    keywords: ["용인 목 어깨 통증", "거북목 물리치료", "직장인 허리 통증", "손목 통증"],
    heroLead:
      "오래 앉는 자세, 모니터 높이, 스마트폰 사용, 반복적인 손목 사용은 통증이 반복되는 배경이 될 수 있습니다.",
    symptoms: ["목과 어깨가 늘 무겁고 결림", "오래 앉으면 허리가 뻐근하거나 다리까지 불편함", "손목·팔꿈치 주변 통증이 반복됨", "자세를 고쳐도 금방 다시 통증이 생김"],
    checks: ["목·어깨·요추 가동성", "근력과 자세 유지 능력", "신경 증상 동반 여부", "업무 환경과 반복 동작"],
    care: ["통증 부위 물리치료", "자세·근력 기반 운동재활", "자가운동과 생활 동작 교육", "필요 시 척추센터·관절센터 진료 연결"],
    related: [
      { label: "척추센터", href: "https://new-standard.co.kr/sub/r20/s2010.php" },
      { label: "도수·운동재활", href: "/manual-exercise-rehab" }
    ]
  },
  "senior-gait-balance": {
    title: "고령자 보행·균형 회복 | 새기준병원 회복재활센터",
    eyebrow: "Senior Gait & Balance",
    path: "/senior-gait-balance",
    description:
      "근력저하, 보행 불안, 낙상 위험, 무릎 관절염, 척추관협착증으로 인한 이동 기능 저하를 확인하고 회복관리 방향을 상담합니다.",
    keywords: ["보행 재활", "균형 운동", "낙상 예방", "무릎 관절염 재활", "척추관협착증 보행"],
    heroLead:
      "고령자의 보행 문제는 무릎, 허리, 근력, 균형, 신경 증상이 복합적으로 작용할 수 있습니다.",
    symptoms: ["걷는 거리가 줄고 자주 쉬어야 함", "계단이나 경사에서 불안함", "무릎·허리 통증 때문에 보행이 느려짐", "넘어질까 불안해 외출이 줄어듦"],
    checks: ["하지 근력과 균형", "보행 패턴", "통증 부위와 신경 증상", "낙상 위험과 생활 환경"],
    care: ["균형·근력 운동", "보행 안정성 회복관리", "무릎·척추 질환 진료 연결", "보호자에게 필요한 운동·생활 관리 안내"],
    related: [
      { label: "수술 후 회복관리", href: "/postoperative-recovery" },
      { label: "관절센터", href: "https://joint.new-standard.co.kr" }
    ]
  },
  "postoperative-recovery": {
    title: "척추·관절 수술 후 회복관리 | 새기준병원 회복재활센터",
    eyebrow: "Postoperative Recovery",
    path: "/postoperative-recovery",
    description:
      "척추·관절 수술 후 보행, 운동범위, 근력, 부종과 통증 변화, 일상 복귀 단계를 의료진과 함께 확인합니다.",
    keywords: ["척추수술 후 재활", "무릎수술 후 재활", "어깨수술 후 재활", "발목수술 후 회복"],
    heroLead:
      "수술 후 회복은 수술 부위만 보는 것이 아니라 보행, 근력, 통증 반응, 일상 동작 복귀를 단계적으로 확인해야 합니다.",
    symptoms: ["수술 후 걷는 속도나 안정성이 떨어짐", "관절 운동범위가 제한됨", "부종과 통증 변화가 걱정됨", "일상 복귀 시점과 운동 범위가 궁금함"],
    checks: ["수술 종류와 시기", "의료진 지시 사항", "보행·운동범위·근력", "통증·부종·저림 변화"],
    care: ["수술 단계에 맞는 회복 운동", "보행과 일상 동작 훈련", "척추센터·관절센터와 연계한 추적 관리", "자가운동과 주의사항 교육"],
    related: [
      { label: "척추센터", href: "https://new-standard.co.kr/sub/r20/s2010.php" },
      { label: "관절센터", href: "https://joint.new-standard.co.kr" }
    ]
  },
  "manual-exercise-rehab": {
    title: "도수치료·운동재활 안내 | 새기준병원 회복재활센터",
    eyebrow: "Manual Therapy & Exercise Rehabilitation",
    path: "/manual-exercise-rehab",
    description:
      "도수치료, 물리치료, 운동재활은 환자의 증상, 진찰 소견, 치료 반응에 따라 선택적으로 상담될 수 있습니다.",
    keywords: ["용인 도수치료", "용인 운동재활", "처인구 물리치료", "병원 재활치료"],
    heroLead:
      "도수치료는 단일 상품처럼 접근하기보다 진단, 증상 변화, 운동 기능을 함께 확인해 필요한 치료 단계로 상담하는 것이 중요합니다.",
    symptoms: ["통증이 반복되고 자세나 움직임에 따라 악화됨", "운동을 시작하고 싶지만 어떤 동작이 안전한지 모름", "치료 후에도 재발이 잦음", "수술 전후로 기능 회복 계획이 필요함"],
    checks: ["통증 원인과 금기 동작", "관절 가동범위", "근력·균형·보행", "치료 반응과 자가운동 수행 가능성"],
    care: ["물리치료", "도수치료 상담", "운동재활과 자가운동 교육", "전문 진료와 검사 필요성 판단"],
    related: [
      { label: "치료 전 확인", href: "/treatment-before-check" },
      { label: "오시는 길", href: "/contact" }
    ]
  },
  "treatment-before-check": {
    title: "치료 전 확인해야 할 증상 | 새기준병원 회복재활센터",
    eyebrow: "Before Treatment Check",
    path: "/treatment-before-check",
    description:
      "재활치료 전 통증 위치, 저림, 근력저하, 부종, 보행 변화, 영상검사 자료를 확인하면 치료 방향 상담에 도움이 됩니다.",
    keywords: ["물리치료 전 확인", "도수치료 전 진료", "통증 검사", "재활치료 상담"],
    heroLead:
      "같은 통증이라도 단순 근육통, 인대 손상, 신경 증상, 관절 문제는 치료 방향이 달라질 수 있습니다.",
    symptoms: ["저림이나 근력저하가 동반됨", "붓기·멍·열감이 지속됨", "야간통이나 체중부하 통증이 심함", "반복 치료에도 통증이 계속됨"],
    checks: ["통증 시작 시점과 악화 동작", "기존 X-ray·MRI 등 영상자료", "신경 증상과 근력 변화", "이전 치료 반응"],
    care: ["의사 진료와 검사 필요성 판단", "물리치료·운동재활 방향 상담", "척추센터·관절센터 연계", "생활 동작과 자가운동 안내"],
    related: [
      { label: "급성 염좌", href: "/acute-sprain" },
      { label: "도수·운동재활", href: "/manual-exercise-rehab" }
    ]
  }
};

export const faqItems = [
  {
    question: "회복재활센터는 수술 환자만 이용하나요?",
    answer:
      "아닙니다. 척추·관절 수술 후 회복관리뿐 아니라 급성 염좌, 산후·육아 통증, 직장인 생활 통증, 고령자 보행·균형 문제도 함께 안내합니다."
  },
  {
    question: "도수치료를 바로 받을 수 있나요?",
    answer:
      "도수치료는 환자의 증상, 진찰 소견, 검사 결과, 치료 반응에 따라 선택적으로 상담될 수 있습니다. 필요한 경우 의사 진료나 영상검사 확인이 먼저 필요할 수 있습니다."
  },
  {
    question: "발목을 삐었을 때 물리치료만 받으면 되나요?",
    answer:
      "발목 염좌는 인대 손상 정도, 골절 동반 여부, 관절 불안정성 여부에 따라 치료 방향이 달라질 수 있습니다. 부종, 멍, 체중부하 통증이 심하면 진료를 통해 확인하는 것이 도움이 됩니다."
  },
  {
    question: "산후·육아 통증도 진료 상담이 가능한가요?",
    answer:
      "출산 후 또는 육아 과정에서 지속되는 손목, 허리, 골반, 목어깨 통증은 근골격계 원인과 반복 동작을 함께 확인해 치료 방향을 상담할 수 있습니다."
  }
];

export const officialLinks = [
  { label: "새기준병원 본원", href: "https://new-standard.co.kr" },
  { label: "척추센터", href: "https://new-standard.co.kr/sub/r20/s2010.php" },
  { label: "관절센터", href: "https://joint.new-standard.co.kr" },
  { label: "오시는 길·진료시간", href: "https://new-standard.co.kr/sub/r10/s1040.php" },
  { label: "온라인 상담", href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel" }
];
