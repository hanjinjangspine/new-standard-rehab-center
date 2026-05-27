import Link from "next/link";
import { ArrowRight, Building2, ExternalLink, MapPin } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

export default function CTASection({ title, description }: { title: string; description: string }) {
  const buttons = [
    {
      label: "진료 상담",
      href: hospitalInfo.naverReservationHref,
      external: true,
      icon: ArrowRight,
      variant: "primary"
    },
    {
      label: "오시는 길",
      href: "/contact",
      external: false,
      icon: MapPin,
      variant: "secondary"
    },
    {
      label: "관절센터",
      href: "https://joint.new-standard.co.kr",
      external: true,
      icon: ExternalLink,
      variant: "secondary"
    },
    {
      label: "본원 홈페이지",
      href: "https://new-standard.co.kr",
      external: true,
      icon: Building2,
      variant: "secondary"
    }
  ];

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[#D9E2E7] bg-[#F8FAFB] p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_minmax(280px,420px)] lg:items-center">
          <div>
            <p className="text-sm font-extrabold tracking-[0.12em] text-[#2B7366]">NEW STANDARD RECOVERY</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#10283D] sm:text-4xl">{title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#5B6770] sm:text-lg">{description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {buttons.map((button) => {
              const Icon = button.icon;
              const className =
                button.variant === "primary"
                  ? "inline-flex items-center justify-center gap-2 rounded-xl bg-[#2B7366] px-5 py-3.5 text-base font-extrabold text-white shadow-sm transition hover:bg-[#245F55]"
                  : "inline-flex items-center justify-center gap-2 rounded-xl border border-[#D9E2E7] bg-white px-5 py-3.5 text-base font-extrabold text-[#10283D] transition hover:border-[#3ABFB0] hover:bg-[#F1FBF9]";

              return (
                <Link
                  key={button.href}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  <Icon aria-hidden="true" size={18} />
                  {button.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
