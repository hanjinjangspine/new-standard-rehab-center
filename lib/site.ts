export const PRIMARY_SITE_URL = "https://rehab.new-standard.co.kr";

export const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || PRIMARY_SITE_URL;

export const BASE_URL_CANDIDATES = [
  "https://rehab.new-standard.co.kr",
  "https://recovery.new-standard.co.kr",
  "https://pt.new-standard.co.kr"
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
  spineCenterUrl: "https://new-standard.co.kr/sub/r20/s2010.php",
  jointCenterUrl: "https://joint.new-standard.co.kr",
  naverReservationUrl:
    "https://m.booking.naver.com/booking/13/bizes/1578687?theme=place&service-target=map-pc&lang=ko&area=pll",
  youtubeUrl: "https://www.youtube.com/@NewStandardHtv",
  naverMapUrl:
    "https://map.naver.com/p/search/새기준병원%20경기도%20용인시%20처인구%20중부대로%201539",
  googleMapUrl:
    "https://www.google.com/maps/search/?api=1&query=경기도%20용인시%20처인구%20중부대로%201539%20새기준병원",
  logoPath: "/brand/newstandard-logo-horizontal.png",
  logoAlt: "새기준병원 공식 로고",
  noIndex: !isIndexable,
  baseUrl: BASE_URL
};
