import Link from "next/link";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

export default function MobileBottomCTA() {
  return (
    <nav aria-label="모바일 빠른 메뉴" className="fixed inset-x-0 bottom-0 z-50 grid min-h-14 grid-cols-3 border-t border-line bg-white/96 pb-[env(safe-area-inset-bottom)] shadow-2xl backdrop-blur md:hidden">
      <Link href={hospitalInfo.consultationPhoneHref} className="flex min-h-14 flex-col items-center justify-center gap-1 py-2 text-xs font-extrabold text-brand-700">
        <Phone aria-hidden="true" size={18} />진료 상담
      </Link>
      <Link href="/manual-exercise-rehab" className="flex min-h-14 flex-col items-center justify-center gap-1 border-x border-line py-2 text-xs font-extrabold text-brand-700">
        <CalendarCheck aria-hidden="true" size={18} />치료실 안내
      </Link>
      <Link href="/contact" className="flex min-h-14 flex-col items-center justify-center gap-1 py-2 text-xs font-extrabold text-brand-700">
        <MapPin aria-hidden="true" size={18} />오시는 길
      </Link>
    </nav>
  );
}
