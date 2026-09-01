import Link from "next/link";
import { connectedCareLinks, hospitalInfo, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="site-footer" className="border-t border-[#D9E2E7] bg-[#10283D] px-4 py-8 text-white sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div>
            <p className="text-lg font-extrabold sm:text-xl">{hospitalInfo.centerName}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#DDEBE8]">{hospitalInfo.commonNotice}</p>

            <address className="mt-5 grid gap-x-6 gap-y-1.5 text-sm not-italic text-[#DDEBE8] sm:grid-cols-2">
              <p className="sm:col-span-2">주소: {hospitalInfo.address}</p>
              <p>
                대표전화:{" "}
                <a className="font-bold text-white underline-offset-4 hover:underline" href={hospitalInfo.consultationPhoneHref}>
                  {hospitalInfo.phone}
                </a>
              </p>
              <p>{hospitalInfo.hoursConfirmation}</p>
              <p className="sm:col-span-2">{hospitalInfo.hours}</p>
            </address>
          </div>

          <div>
            <p className="text-sm font-extrabold text-[#AEE7DE]">빠른 메뉴</p>
            <nav aria-label="하단 메뉴" className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-11 items-center justify-center whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-sm font-bold text-white transition hover:border-[#3ABFB0] hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-5">
              <p className="text-sm font-extrabold text-[#AEE7DE]">관련 진료센터</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {connectedCareLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[76px] items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:border-[#3ABFB0] hover:bg-white/10 sm:px-4"
                  >
                    <span>
                      <span className="block text-sm font-extrabold text-white">{item.title}</span>
                      <span className="mt-1 block text-xs font-bold text-[#AEE7DE]">{item.buttonText}</span>
                    </span>
                    <span aria-hidden="true" className="text-lg text-[#AEE7DE] transition group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-xs leading-5 text-[#C9DED9]">
          본 사이트는 새기준병원 회복재활센터의 진료 안내 페이지입니다. 실제 치료 방향은 진찰 소견과 검사 결과에 따라 달라질 수 있습니다.
        </div>
      </div>
    </footer>
  );
}
