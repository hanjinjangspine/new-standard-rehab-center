import Link from "next/link";
import { connectedCareLinks, hospitalInfo, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9E2E7] bg-[#10283D] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xl font-extrabold">{hospitalInfo.centerName}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[#DDEBE8]">{hospitalInfo.commonNotice}</p>
          <div className="mt-6 grid gap-2 text-sm text-[#DDEBE8]">
            <p>주소: {hospitalInfo.address}</p>
            <p>대표전화: {hospitalInfo.phone}</p>
            <p>{hospitalInfo.hours}</p>
            <p>{hospitalInfo.hoursConfirmation}</p>
          </div>
          <p className="mt-6 max-w-2xl rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs leading-6 text-[#C9DED9]">
            본 사이트는 새기준병원 회복재활센터의 진료 안내 페이지입니다. 실제 치료 방향은 진찰 소견과 검사 결과에 따라 달라질 수 있습니다.
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-white transition hover:border-[#3ABFB0] hover:bg-white/10">
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-sm font-extrabold text-[#AEE7DE]">관련 진료센터</p>
            <div className="mt-3 grid gap-3">
              {connectedCareLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#3ABFB0] hover:bg-white/10"
                >
                  <span className="block text-sm font-extrabold text-white">{item.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-[#C9DED9]">{item.description}</span>
                  <span className="mt-2 block text-xs font-extrabold text-[#AEE7DE]">{item.buttonText}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
