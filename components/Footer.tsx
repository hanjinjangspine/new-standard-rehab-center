import Link from "next/link";
import { hospitalInfo, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-brand-900 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xl font-extrabold">{hospitalInfo.centerName}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-brand-50">{hospitalInfo.commonNotice}</p>
          <div className="mt-6 grid gap-2 text-sm text-brand-50">
            <p>주소: {hospitalInfo.address}</p>
            <p>대표전화: {hospitalInfo.phone}</p>
            <p>{hospitalInfo.hours}</p>
            <p>{hospitalInfo.hoursConfirmation}</p>
          </div>
          <p className="mt-6 text-xs leading-6 text-brand-100">
            본 페이지는 질환과 치료 방향에 대한 일반 안내입니다. 실제 치료 여부와 방법은 의료진 진찰 및 검사 결과에 따라 달라질 수 있습니다.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap rounded-xl border border-white/10 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
