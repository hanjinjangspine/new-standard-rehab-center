"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { hospitalInfo, navItems } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="새기준병원 회복재활센터">
          <Image src={hospitalInfo.logoPath} alt={hospitalInfo.logoAlt} width={168} height={42} priority className="h-9 w-auto sm:h-10" />
          <span className="hidden whitespace-nowrap rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-700 sm:inline-flex">
            회복재활센터
          </span>
        </Link>
        <nav className="hidden min-w-0 items-center gap-0.5 xl:flex" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-bold tracking-[-0.01em] transition 2xl:px-3 2xl:text-sm ${
                  active ? "bg-brand-700 text-white" : "text-ink hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href={hospitalInfo.consultationPhoneHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-700 px-3 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-brand-800 sm:px-4"
        >
          <Phone aria-hidden="true" size={16} />
          <span className="hidden sm:inline">{hospitalInfo.phone}</span>
          <span className="sm:hidden">전화</span>
        </Link>
      </div>
    </header>
  );
}
