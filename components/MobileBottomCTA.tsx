import Link from "next/link";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

export default function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-line bg-white/96 shadow-2xl backdrop-blur md:hidden">
      <Link href={hospitalInfo.consultationPhoneHref} className="flex flex-col items-center justify-center gap-1 py-2 text-xs font-extrabold text-brand-700">
        <Phone aria-hidden="true" size={18} />전화
      </Link>
      <Link href={hospitalInfo.naverReservationHref} className="flex flex-col items-center justify-center gap-1 border-x border-line py-2 text-xs font-extrabold text-brand-700">
        <CalendarCheck aria-hidden="true" size={18} />예약
      </Link>
      <Link href="/contact" className="flex flex-col items-center justify-center gap-1 py-2 text-xs font-extrabold text-brand-700">
        <MapPin aria-hidden="true" size={18} />오시는 길
      </Link>
    </div>
  );
}
