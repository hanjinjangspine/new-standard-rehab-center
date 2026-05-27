export const PRIMARY_SITE_URL = "https://rehab.new-standard.co.kr";

export const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || PRIMARY_SITE_URL;

export const BASE_URL_CANDIDATES = [
  "https://rehab.new-standard.co.kr"
];

export const siteConfig = {
  hospitalName: "새기준병원",
  centerName: "새기준병원 회복재활센터",
  formerName: "재활치료센터",
  englishName: "New Standard Hospital Recovery & Rehabilitation Center",
  address: "경기도 용인시 처인구 중부대로 1539",
  phone: "031-328-0333",
  phoneHref: "tel:031-328-0333",
  officialWebsiteUrl: "https://new-standard.co.kr",
  spineCenterUrl: "https://new-standard.co.kr/sub/r30/spine-center.php",
  jointCenterUrl: "https://joint.new-standard.co.kr",
  jointRecoveryUrl: "https://joint.new-standard.co.kr/recovery",
  naverReservationUrl:
    "https://m.booking.naver.com/booking/13/bizes/1578687?theme=place&service-target=map-pc&lang=ko&area=pll",
  youtubeUrl: "https://www.youtube.com/@NewStandardHtv",
  naverMapUrl:
    "https://map.naver.com/p/search/%EC%83%88%EA%B8%B0%EC%A4%80%EB%B3%91%EC%9B%90%20%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%B2%98%EC%9D%B8%EA%B5%AC%20%EC%A4%91%EB%B6%80%EB%8C%80%EB%A1%9C%201539",
  googleMapUrl:
    "https://www.google.com/maps/search/?api=1&query=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%9A%A9%EC%9D%B8%EC%8B%9C%20%EC%B2%98%EC%9D%B8%EA%B5%AC%20%EC%A4%91%EB%B6%80%EB%8C%80%EB%A1%9C%201539%20%EC%83%88%EA%B8%B0%EC%A4%80%EB%B3%91%EC%9B%90",
  logoPath: "/brand/newstandard-logo-horizontal.png",
  logoAlt: "새기준병원 공식 로고",
  noIndex: !isIndexable,
  baseUrl: BASE_URL
};
