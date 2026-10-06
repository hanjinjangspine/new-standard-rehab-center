// Reviewed against the actual pixels on 2026-10-06. Do not infer images from prose.
export const photoDescriptions: Record<string, string> = {
  "/images/rehab/hero-rehab-center.jpg": "새기준병원 공개 홍보사진: 치료대에서 다리 움직임을 확인하는 모습",
  "/images/rehab/manual-therapy-01.jpg": "새기준병원 공개 홍보사진: 누운 자세에서 어깨와 팔 움직임을 확인하는 모습",
  "/images/rehab/exercise-rehab-01.jpg": "새기준병원 공개 홍보사진: 탄력 밴드로 팔 운동을 시연하는 모습",
  "/images/rehab/equipment-01.jpg": "새기준병원 치료실의 체외충격파 장비",
  "/images/rehab/rehab-room-01.jpg": "새기준병원 도수치료실과 물리치료실 입구",
  "/images/rehab/rehab-room-02.jpg": "새기준병원 치료실 내부와 치료 장비",
  "/images/hospital/doctor-jang-desk-2026.jpg": "새기준병원 장한진 원장의 공개 프로필 사진",
  "/images/hospital/main-lobby-2026.jpg": "새기준병원 접수 공간과 대기 의자",
  "/images/hospital/rehab-tour-03.jpg": "새기준병원 접수 공간과 회복재활센터 입구",
};

export const programImageKeys: Record<string, string> = {
  "/acute-sprain": "acute",
  "/postpartum-parenting-pain": "parenting",
  "/office-worker-pain": "posture",
  "/senior-gait-balance": "senior",
  "/postoperative-recovery": "recovery",
  "/treatment-before-check": "consult",
};

export function programImage(path: string): string {
  return programImageKeys[path]
    ? `/images/content-images-v5/${programImageKeys[path]}.webp`
    : "/images/rehab/rehab-room-01.jpg";
}

export function relatedImage(href: string): string | undefined {
  if (href.startsWith("/")) return programImage(href);
  // Center and navigation links do not imply a particular diagnosis or body part.
  return undefined;
}
