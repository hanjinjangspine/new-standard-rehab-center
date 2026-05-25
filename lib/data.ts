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
  hours: "평일 진료 / 토요일 오전 진료 / 일정은 방문 전 확인",
  hoursNote: "진료 일정은 의료진 사정 및 병원 상황에 따라 변동될 수 있습니다.",
  hoursConfirmation: "내원 전 대표전화 031-328-0333으로 확인해 주세요.",
  baseUrl: siteConfig.baseUrl,
  commonNotice:
    "새기준병원 회복재활센터는 생활 통증, 진단 기반 회복관리, 척추·관절 수술 후 기능 회복을 안내하는 병원 기반 회복재활 정보 페이지입니다.",
  officialRelationship:
    "진료 예약과 병원 기본 정보는 새기준병원 공식 홈페이지에서도 확인하실 수 있습니다."
};

export const defaultKeywords = [
  "용인 회복재활",
  "용인 물리치료",
  "용인 도수치료",
  "운동재활",
  "수술 후 회복관리",
  "새기준병원 회복재활센터"
];

export const aiSummary = {
  ko:
    "새기준병원 회복재활센터는 경기도 용인시 처인구에 위치한 새기준병원의 회복재활 안내 사이트입니다. 생활 통증, 급성 염좌, 산후·육아 통증, 직장인 통증, 고령 보행·균형 문제, 척추·관절 수술 후 기능 회복관리를 다룹니다. 치료 방향은 통증 부위, 진찰 소견, 영상검사 결과, 치료 반응을 함께 확인해 물리치료, 도수치료, 운동재활, 회복관리 방향을 상담하는 방식으로 안내합니다.",
  en:
    "New Standard Hospital Recovery Rehabilitation Center is a hospital-based rehabilitation information site in Yongin, South Korea. It covers everyday pain, acute sprain, postpartum and parenting-related pain, office-worker musculoskeletal pain, gait and balance issues in older adults, and functional recovery after spine and joint surgery. Clinical decisions require individualized evaluation."
};

export const navItems = [
  { label: "센터소개", href: "/" },
  { label: "급성염좌", href: "/acute-sprain" },
  { label: "산후·육아", href: "/postpartum-parenting-pain" },
  { label: "직장인통증", href: "/office-worker-pain" },
  { label: "보행·균형", href: "/senior-gait-balance" },
  { label: "수술후회복", href: "/postoperative-recovery" },
  { label: "도수·운동", href: "/manual-exercise-rehab" },
  { label: "오시는길", href: "/contact" }
];

export const programCards = [
  {
    title: "급성 염좌·갑작스러운 통증",
    href: "/acute-sprain",
    description: "발목 염좌, 허리 삐끗함, 목·어깨 급성 통증에서 손상 정도와 회복 방향을 확인합니다.",
    tags: ["발목", "허리", "목·어깨"],
    featured: true
  },
  {
    title: "산후·육아 통증",
    href: "/postpartum-parenting-pain",
    description: "육아 과정에서 반복되는 손목, 허리, 골반, 목·어깨 통증의 원인을 함께 확인합니다.",
    tags: ["손목", "골반", "허리"]
  },
  {
    title: "직장인 생활 통증",
    href: "/office-worker-pain",
    description: "거북목, 목·어깨 결림, 허리 통증처럼 반복되는 업무 자세 관련 통증을 평가합니다.",
    tags: ["거북목", "허리", "손목"]
  },
  {
    title: "고령 보행·균형",
    href: "/senior-gait-balance",
    description: "근력저하, 보행 불안, 균형 저하, 낙상 위험을 확인하고 회복관리 방향을 상담합니다.",
    tags: ["보행", "균형", "낙상"]
  },
  {
    title: "수술 후 회복관리",
    href: "/postoperative-recovery",
    description: "척추·관절 수술 후 보행, 운동범위, 근력, 일상 복귀 단계를 의료진과 함께 확인합니다.",
    tags: ["척추", "관절", "회복"]
  },
  {
    title: "도수·운동재활",
    href: "/manual-exercise-rehab",
    description: "환자 상태와 치료 반응에 따라 물리치료, 도수치료, 운동재활, 자가운동 교육을 상담합니다.",
    tags: ["도수치료", "운동재활", "자가운동"]
  }
];

export const treatmentFlow = [
  {
    step: "01",
    title: "증상과 생활 동작 확인",
    description: "언제 아픈지, 어떤 동작에서 악화되는지, 회복을 방해하는 생활 습관을 확인합니다."
  },
  {
    step: "02",
    title: "진찰·검사 필요성 판단",
    description: "근력, 관절 움직임, 신경 증상, 영상검사 필요성을 확인합니다."
  },
  {
    step: "03",
    title: "치료 방향 상담",
    description: "환자 상태에 따라 물리치료, 도수치료, 운동재활, 전문센터 연결 여부를 상담합니다."
  },
  {
    step: "04",
    title: "반응 확인과 회복관리",
    description: "통증 변화, 보행, 운동범위, 근력, 일상 복귀 정도를 확인하며 회복 방향을 조정합니다."
  }
];

export const targetGroups = [
  "발목을 접질렀거나 허리를 삐끗한 경우",
  "출산 후 또는 육아 중 손목·허리·골반 통증이 지속되는 경우",
  "장시간 앉아서 일한 뒤 목·어깨·허리 통증이 반복되는 경우",
  "보행이 불안하거나 균형 저하, 낙상 위험이 걱정되는 경우",
  "척추·관절 수술 후 기능 회복 방향을 상담하고 싶은 경우"
];

export const safetyCopy = [
  "치료 방향과 회복 속도는 환자 상태, 진단, 손상 정도, 생활 환경에 따라 달라질 수 있습니다.",
  "도수치료와 운동재활은 증상, 진찰 소견, 치료 반응에 따라 선택적으로 상담할 수 있습니다.",
  "급성 통증은 골절, 관절 손상, 신경 증상 동반 여부 확인이 필요할 수 있습니다.",
  "수술 후 회복관리는 수술 범위, 의료진 지시사항, 보행과 근력 상태를 함께 확인해야 합니다."
];

export type ProgramSlug =
  | "acute-sprain"
  | "postpartum-parenting-pain"
  | "office-worker-pain"
  | "senior-gait-balance"
  | "postoperative-recovery"
  | "manual-exercise-rehab"
  | "treatment-before-check";

type ProgramPageData = {
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
};

export const programPages: Record<ProgramSlug, ProgramPageData> = {
  "acute-sprain": {
    title: "급성 염좌·갑작스러운 통증 | 새기준병원 회복재활센터",
    eyebrow: "Acute Sprain & Sudden Pain",
    path: "/acute-sprain",
    description: "발목 염좌, 허리 삐끗함, 목·어깨 급성 통증에서 손상 정도와 회복관리 방향을 상담합니다.",
    keywords: ["발목 염좌", "급성 통증", "물리치료"],
    heroLead: "갑작스러운 통증은 단순 근육통처럼 보여도 관절, 인대, 신경 증상을 함께 확인해야 할 수 있습니다.",
    symptoms: ["발목을 삔 뒤 통증과 부종이 지속됨", "허리를 삐끗한 뒤 움직임이 불편함", "목이나 어깨가 갑자기 뻣뻣함", "무릎·손목·발목 통증이 반복됨"],
    checks: ["통증 위치와 압통", "부종과 열감", "관절 불안정성", "영상검사 필요성"],
    care: ["초기 통증과 부종 관리", "관절 운동범위 회복", "재손상 방지 운동", "필요 시 전문센터 진료 연결"],
    related: [
      { label: "도수·운동재활", href: "/manual-exercise-rehab" },
      { label: "관절센터", href: "https://joint.new-standard.co.kr" }
    ]
  },
  "postpartum-parenting-pain": {
    title: "산후·육아 통증 | 새기준병원 회복재활센터",
    eyebrow: "Postpartum & Parenting Pain",
    path: "/postpartum-parenting-pain",
    description: "산후와 육아 과정에서 반복되는 손목, 허리, 골반, 목·어깨 통증의 회복관리 방향을 상담합니다.",
    keywords: ["산후 허리 통증", "육아 손목 통증", "골반 통증"],
    heroLead: "아기를 안고, 수유하고, 반복적으로 들어 올리는 동작은 손목·허리·골반·목어깨에 부담을 줄 수 있습니다.",
    symptoms: ["아기를 안을 때 손목이나 팔꿈치가 아픔", "수유 자세 뒤 목·어깨가 뻐근함", "산후 허리·골반 통증이 지속됨", "육아 동작 후 통증이 악화됨"],
    checks: ["통증을 유발하는 육아 동작", "손목·허리 관절 부담", "골반과 코어 안정성", "수면 부족과 회복 지연 요인"],
    care: ["손목·허리 부담을 줄이는 동작 교육", "통증 부위 물리치료와 운동재활", "골반·코어 안정화 운동", "필요 시 진료와 검사 연결"],
    related: [
      { label: "직장인 생활 통증", href: "/office-worker-pain" },
      { label: "치료 전 확인", href: "/treatment-before-check" }
    ]
  },
  "office-worker-pain": {
    title: "직장인 목·어깨·허리 통증 | 새기준병원 회복재활센터",
    eyebrow: "Office Worker Pain",
    path: "/office-worker-pain",
    description: "거북목, 목·어깨 결림, 허리 통증, 손목 통증 등 직장인 생활 통증의 원인과 회복 방향을 상담합니다.",
    keywords: ["직장인 통증", "거북목", "허리 통증"],
    heroLead: "오래 앉는 자세, 모니터 높이, 스마트폰 사용, 반복적인 손목 사용은 통증을 반복시키는 배경이 될 수 있습니다.",
    symptoms: ["목과 어깨가 무겁고 결림", "오래 앉으면 허리가 뻐근함", "손목·팔꿈치 주변 통증이 반복됨", "자세를 고쳐도 금방 통증이 다시 생김"],
    checks: ["목·어깨·허리 가동성", "근력과 자세 유지 능력", "신경 증상 동반 여부", "업무 환경과 반복 동작"],
    care: ["통증 부위 물리치료", "자세·근력 기반 운동재활", "자가운동과 생활 동작 교육", "필요 시 척추센터·관절센터 연결"],
    related: [
      { label: "척추센터", href: "https://new-standard.co.kr/sub/r30/spine-center.php" },
      { label: "도수·운동재활", href: "/manual-exercise-rehab" }
    ]
  },
  "senior-gait-balance": {
    title: "고령 보행·균형 회복 | 새기준병원 회복재활센터",
    eyebrow: "Senior Gait & Balance",
    path: "/senior-gait-balance",
    description: "고령 환자의 보행 불안, 근력저하, 균형 저하, 낙상 위험을 확인하고 회복관리 방향을 상담합니다.",
    keywords: ["보행 재활", "균형 운동", "낙상 예방"],
    heroLead: "고령 환자의 보행 문제는 무릎, 허리, 근력, 균형, 신경 증상이 복합적으로 작용할 수 있습니다.",
    symptoms: ["걷는 거리가 줄고 자주 쉬게 됨", "계단이나 경사에서 불안함", "무릎·허리 통증 때문에 보행이 어려움", "넘어질까 불안해 외출이 줄어듦"],
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
    description: "척추·관절 수술 후 보행, 관절 운동범위, 근력, 일상 복귀 단계를 의료진과 함께 확인합니다.",
    keywords: ["수술 후 회복", "척추 수술 후 재활", "관절 수술 후 재활"],
    heroLead: "수술 후 회복은 수술 부위만 보는 것이 아니라 보행, 근력, 통증 반응, 일상 동작 복귀를 단계적으로 확인해야 합니다.",
    symptoms: ["수술 후 걷는 속도와 안정성이 떨어짐", "관절 운동범위가 제한됨", "부종과 통증 변화가 걱정됨", "일상 복귀 시점과 운동 범위가 궁금함"],
    checks: ["수술 종류와 시기", "의료진 지시사항", "보행·운동범위·근력", "통증·부종·피부 변화"],
    care: ["수술 단계에 맞는 회복 운동", "보행과 일상 동작 훈련", "척추센터·관절센터와 연계한 회복관리", "자가운동과 주의사항 교육"],
    related: [
      { label: "척추센터", href: "https://new-standard.co.kr/sub/r30/spine-center.php" },
      { label: "관절센터", href: "https://joint.new-standard.co.kr" }
    ]
  },
  "manual-exercise-rehab": {
    title: "도수치료·운동재활 안내 | 새기준병원 회복재활센터",
    eyebrow: "Manual Therapy & Exercise Rehabilitation",
    path: "/manual-exercise-rehab",
    description: "도수치료, 물리치료, 운동재활은 환자 증상과 치료 반응에 따라 선택적으로 상담할 수 있습니다.",
    keywords: ["도수치료", "운동재활", "물리치료"],
    heroLead: "도수치료와 운동재활은 진단, 증상 변화, 운동 기능을 함께 확인한 뒤 필요한 단계로 상담하는 것이 중요합니다.",
    symptoms: ["통증이 반복되고 자세·움직임에 따라 악화됨", "운동을 시작하고 싶지만 어떤 동작이 안전한지 모름", "치료 전후에 재발이 걱정됨", "수술 전후 기능 회복 계획이 필요함"],
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
    description: "회복재활 전 통증 위치, 근력저하, 부종, 보행 변화, 기존 검사자료를 확인하면 상담에 도움이 됩니다.",
    keywords: ["치료 전 확인", "재활 상담", "통증 평가"],
    heroLead: "같은 통증이라도 단순 근육통, 관절 손상, 신경 증상에 따라 치료 방향이 달라질 수 있습니다.",
    symptoms: ["저림이나 근력저하가 동반됨", "부종·열감이 지속됨", "야간통이나 체중부하 통증이 심함", "반복 치료에도 통증이 계속됨"],
    checks: ["통증 시작 시점과 악화 동작", "기존 X-ray·MRI 자료", "신경 증상과 근력 변화", "이전 치료 반응"],
    care: ["진료와 검사 필요성 판단", "물리치료·운동재활 방향 상담", "척추센터·관절센터 연결", "생활 동작과 자가운동 안내"],
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
      "아닙니다. 생활 통증, 급성 염좌, 산후·육아 통증, 직장인 통증, 고령 보행·균형 문제도 진료와 상담을 통해 회복관리 방향을 확인할 수 있습니다."
  },
  {
    question: "도수치료를 바로 받을 수 있나요?",
    answer:
      "도수치료는 환자 상태, 증상, 진찰 소견, 치료 반응에 따라 선택적으로 상담할 수 있습니다. 필요한 경우 진료와 검사 확인이 먼저 필요할 수 있습니다."
  },
  {
    question: "수술 후 재활은 언제 시작하나요?",
    answer:
      "수술 부위와 수술 방법, 주치의 지시사항에 따라 다릅니다. 수술 후 회복관리는 진료와 검사 결과, 보행 상태를 종합해 상담합니다."
  },
  {
    question: "통증이 반복되면 어떤 자료를 가져가면 좋나요?",
    answer:
      "기존 X-ray, MRI, 초음파 등 영상자료와 이전 치료 기록이 있으면 원인 평가와 치료 방향 상담에 도움이 됩니다."
  }
];

export const officialLinks = [
  { label: "새기준병원 본원", href: "https://new-standard.co.kr" },
  { label: "척추센터", href: "https://new-standard.co.kr/sub/r30/spine-center.php" },
  { label: "관절센터", href: "https://joint.new-standard.co.kr" },
  { label: "오시는 길·진료시간", href: "https://new-standard.co.kr/sub/r10/s1040.php" },
  { label: "온라인 상담", href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel" }
];

export const connectedCareLinks = [
  {
    title: "새기준병원 본원",
    description: "전문의 진료, 영상검사, 척추·관절 진료가 함께 이루어지는 본원 홈페이지입니다.",
    href: "https://new-standard.co.kr",
    buttonText: "본원 홈페이지"
  },
  {
    title: "관절센터",
    description: "무릎·어깨·족부·발목 등 관절 통증과 회복관리를 안내하는 새기준병원 관절센터입니다.",
    href: "https://joint.new-standard.co.kr",
    buttonText: "관절센터 보기"
  },
  {
    title: "관절 회복관리",
    description: "관절 치료 후 회복관리, 운동 범위, 보행 회복과 관련된 정보를 확인할 수 있습니다.",
    href: "https://joint.new-standard.co.kr/recovery",
    buttonText: "회복관리 보기"
  },
  {
    title: "오시는 길",
    description: "새기준병원 위치, 대표전화, 진료시간을 확인할 수 있습니다.",
    href: "https://new-standard.co.kr/sub/r10/s1040.php",
    buttonText: "오시는 길"
  }
];

export const rehabPhotos = {
  hero: "/images/rehab/hero-rehab-center.jpg",
  center: "/images/rehab/rehab-room-01.jpg",
  rooms: [
    { src: "/images/rehab/rehab-room-02.jpg", alt: "새기준병원 회복재활센터 치료실", label: "치료실" },
    { src: "/images/rehab/manual-therapy-01.jpg", alt: "도수치료 공간", label: "도수치료" },
    { src: "/images/rehab/exercise-rehab-01.jpg", alt: "운동재활 공간", label: "운동재활" },
    { src: "/images/rehab/equipment-01.jpg", alt: "회복재활 장비", label: "재활 장비" }
  ],
  gallery: [
    { src: "/images/rehab/gallery-01.jpg", alt: "회복재활센터 갤러리" },
    { src: "/images/rehab/rehab-room-01.jpg", alt: "회복재활센터 내부" },
    { src: "/images/rehab/exercise-rehab-01.jpg", alt: "운동재활 안내" }
  ]
};
