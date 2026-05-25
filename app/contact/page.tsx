import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo } from "@/lib/data";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "오시는 길·진료 상담 | 새기준병원 회복재활센터",
  description: "새기준병원 회복재활센터 주소, 대표전화, 네이버 예약, 진료시간 확인 안내입니다. 경기도 용인시 처인구 중부대로 1539.",
  path: "/contact",
  keywords: ["새기준병원 오시는 길", "용인 물리치료 예약", "처인구 재활치료"]
});

export default function ContactPage() {
  return (
    <main>
      <SEOJsonLd data={webPageJsonLd({ title: "오시는 길·진료 상담", description: metadata.description as string, path: "/contact" })} />
      <PageHero eyebrow="Contact" title="오시는 길·진료 상담" description="진료 일정은 병원 상황에 따라 변경될 수 있습니다. 내원 전 대표전화로 확인해 주세요." />
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <ContactCard icon={<Phone size={26} />} title="대표전화" text={hospitalInfo.phone} href={hospitalInfo.consultationPhoneHref} linkText="전화 걸기" />
          <ContactCard icon={<CalendarCheck size={26} />} title="네이버 예약" text="예약 페이지에서 가능한 일정을 확인하세요." href={hospitalInfo.naverReservationHref} linkText="예약하기" />
          <ContactCard icon={<MapPin size={26} />} title="주소" text={hospitalInfo.address} href={hospitalInfo.naverMapUrl} linkText="지도 보기" />
        </div>
      </section>
      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-line bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-black text-ink">진료 전 준비하면 좋은 자료</h2>
          <div className="mt-6 grid gap-4 text-base leading-7 text-muted">
            <p>기존 X-ray, MRI, 초음파 등 영상자료가 있다면 진료 상담에 도움이 됩니다.</p>
            <p>언제부터 아팠는지, 어떤 동작에서 악화되는지, 이전 치료 반응은 어땠는지 정리해 오시면 회복관리 방향을 상담하는 데 도움이 됩니다.</p>
            <p>수술 후 회복관리 상담의 경우 수술명, 수술일, 주치의 지시사항, 보조기 착용 여부를 함께 확인합니다.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ icon, title, text, href, linkText }: { icon: ReactNode; title: string; text: string; href: string; linkText: string }) {
  return (
    <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">{icon}</div>
      <h2 className="mt-5 text-2xl font-black text-ink">{title}</h2>
      <p className="mt-3 min-h-14 text-base leading-7 text-muted">{text}</p>
      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-5 inline-flex rounded-full bg-brand-700 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-brand-800">
        {linkText}
      </Link>
    </div>
  );
}
