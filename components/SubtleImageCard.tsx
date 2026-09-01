import Image from "next/image";
import type { ReactNode } from "react";

export default function SubtleImageCard({
  image,
  children,
  className = "",
  imagePosition = "object-center",
  tone = "light",
  intensity = "subtle",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2rem)"
}: {
  image: string;
  children: ReactNode;
  className?: string;
  imagePosition?: string;
  tone?: "light" | "dark";
  intensity?: "subtle" | "present";
  sizes?: string;
}) {
  const imageTone =
    tone === "dark"
      ? "opacity-[0.3] saturate-[0.8]"
      : intensity === "present"
        ? "opacity-[0.42] saturate-[0.74] contrast-[0.92]"
        : "opacity-[0.12] saturate-[0.65]";
  const overlayTone =
    tone === "dark"
      ? "bg-gradient-to-br from-[#071D2C]/92 via-[#071D2C]/82 to-[#143B38]/70"
      : intensity === "present"
        ? "bg-gradient-to-br from-white/82 via-white/76 to-[#EFF8F5]/68"
      : "bg-gradient-to-br from-white/97 via-white/93 to-[#EFF8F5]/88";

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image}
        alt=""
        aria-hidden="true"
        data-decorative-background="true"
        fill
        className={`object-cover ${imagePosition} ${imageTone}`}
        sizes={sizes}
      />
      <div aria-hidden="true" className={`absolute inset-0 ${overlayTone}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
