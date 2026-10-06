import type { ReactNode } from "react";
import Image from "next/image";
import { explanatoryImageAlt } from "@/lib/visual-image-labels";
import { photoDescriptions } from "@/lib/semantic-images";

export default function SubtleImageCard({
  image,
  children,
  className = "",
  imagePosition = "object-center",
  tone = "light",
  intensity = "subtle",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2rem)",
}: {
  image?: string;
  children: ReactNode;
  className?: string;
  imagePosition?: string;
  tone?: "light" | "dark";
  intensity?: "subtle" | "present";
  sizes?: string;
}) {
  void intensity;
  return (
    <div
      className={`semantic-card min-w-0 ${tone === "dark" ? "bg-brand-900" : "bg-white"} ${className}`}
    >
      {image && (
        <figure className="mb-5 overflow-hidden rounded-xl" data-semantic-image={image}>
          <div className="relative aspect-[16/9] bg-brand-50">
            <Image src={image} alt={explanatoryImageAlt(image, photoDescriptions[image] ?? "새기준병원 공개 시설 사진")} fill sizes={sizes} className={`object-cover ${imagePosition}`} />
          </div>
          <figcaption className={`px-1 pt-2 text-xs leading-5 ${tone === "dark" ? "text-brand-100" : "text-muted"}`}>
            {image.includes("/content-images-v5/") && !/(exterior|hospital|facility)\.webp$/.test(image) ? "AI 설명용 연출 이미지" : "새기준병원 공개 사진"}
          </figcaption>
        </figure>
      )}
      {children}
    </div>
  );
}
