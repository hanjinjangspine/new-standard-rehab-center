"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { hospitalInfo, navItems } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/94 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="새기준병원 회복재활센터 홈">
          <Image src={hospitalInfo.logoPath} alt={hospitalInfo.logoAlt} width={168} height={42} priority className="h-10 w-auto" />
          <span className="hidden rounded-full bg-brand-50 px-3 py-1 text-xs font-extrabold text-brand-700 sm:inline-flex">
            회복재활센터
          </span>
        </Link>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="주요 메뉴">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-bold transition ${
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
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-brand-800"
        >
          <Phone aria-hidden="true" size={16} />
          {hospitalInfo.phone}
        </Link>
      </div>
    </header>
  );
}
