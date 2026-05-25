"use client";

import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { useState } from "react";

export default function RehabPhoto({
  src,
  alt,
  className = "",
  label,
  priority = false
}: {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(true);

  if (!loaded) {
    return (
      <div className={`flex min-h-[220px] flex-col items-center justify-center rounded-[28px] border border-dashed border-brand-200 bg-brand-50 p-6 text-center text-brand-800 ${className}`}>
        <ImageIcon aria-hidden="true" size={32} />
        <p className="mt-3 text-sm font-extrabold">{label || alt}</p>
        <p className="mt-2 text-xs leading-5 text-brand-700">사진 파일을 {src} 경로에 추가하면 자동으로 표시됩니다.</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-[28px] bg-brand-50 shadow-card ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
        onError={() => setLoaded(false)}
      />
      {label ? (
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-extrabold text-brand-800 shadow-sm backdrop-blur">
          {label}
        </div>
      ) : null}
    </div>
  );
}
