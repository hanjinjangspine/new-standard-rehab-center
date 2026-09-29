"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { hospitalInfo } from "@/lib/data";
const menus = [
  { label: "센터 소개", href: "/" },
  { label: "증상별 안내", href: "/#programs" },
  { label: "수술 후 회복", href: "/postoperative-recovery" },
  { label: "치료·방문 안내", href: "/manual-exercise-rehab" },
  { label: "오시는 길", href: "/contact" },
];
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const isActive = (href: string) =>
    href === "/#programs"
      ? [
          "/acute-sprain",
          "/postpartum-parenting-pain",
          "/office-worker-pain",
          "/senior-gait-balance",
        ].includes(pathname)
      : href === "/manual-exercise-rehab"
        ? ["/manual-exercise-rehab", "/treatment-before-check"].includes(
            pathname,
          )
        : pathname === href;
  const close = () => {
    setOpen(false);
    button.current?.focus();
  };
  return (
    <header
      className="sticky top-0 z-50 border-b border-line bg-white"
      onKeyDown={(e) => {
        if (e.key === "Escape") close();
      }}
    >
      <nav
        aria-label="새기준병원 센터 이동"
        className="border-b border-line bg-calm"
      >
        <div className="mx-auto flex max-w-[1200px] px-5 text-sm font-bold">
          <a
            href="https://new-standard.co.kr/"
            className="flex min-h-11 items-center px-3 hover:bg-brand-50"
          >
            본원
          </a>
          <a
            href="https://joint.new-standard.co.kr/"
            className="flex min-h-11 items-center px-3 hover:bg-brand-50"
          >
            관절센터
          </a>
          <Link
            href="/"
            aria-current="true"
            className="flex min-h-11 items-center border-b-2 border-brand-700 px-3 text-brand-700"
          >
            회복재활센터<span className="sr-only"> (현재 센터)</span>
          </Link>
        </div>
      </nav>
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-3">
        <Link href="/" aria-label="새기준병원 회복재활센터 홈">
          <Image
            src={hospitalInfo.logoPath}
            alt={hospitalInfo.logoAlt}
            width={168}
            height={42}
            priority
            className="h-9 w-auto"
          />
        </Link>
        <nav
          aria-label="주요 메뉴"
          className="hidden items-center gap-1 xl:flex"
        >
          {menus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className="flex min-h-11 items-center rounded-xl px-3 text-sm font-bold hover:bg-brand-50 aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={hospitalInfo.consultationPhoneHref}
            className="flex min-h-11 items-center gap-2 rounded-xl bg-brand-700 px-3 text-sm font-bold text-white"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden sm:inline">{hospitalInfo.phone}</span>
            <span className="sm:hidden">전화</span>
          </a>
          <button
            ref={button}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setOpen(!open)}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-line xl:hidden"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        aria-label="모바일 주요 메뉴"
        hidden={!open}
        className="max-h-[65vh] overflow-auto border-t border-line bg-white px-5 py-3 xl:hidden"
      >
        {menus.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={isActive(item.href) ? "page" : undefined}
            className="flex min-h-12 items-center border-b border-line py-3 font-bold text-ink"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/treatment-before-check"
          onClick={() => setOpen(false)}
          className="flex min-h-12 items-center py-3 font-bold text-brand-700"
        >
          치료 전 확인할 증상
        </Link>
      </nav>
    </header>
  );
}
