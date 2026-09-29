import type { ReactNode } from "react";

export default function SubtleImageCard({
  image,
  children,
  className = "",
  imagePosition = "object-center",
  tone = "light",
  intensity = "subtle",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, calc(100vw - 2rem)",
}: {
  image: string;
  children: ReactNode;
  className?: string;
  imagePosition?: string;
  tone?: "light" | "dark";
  intensity?: "subtle" | "present";
  sizes?: string;
}) {
  void image;
  void imagePosition;
  void intensity;
  void sizes;
  return (
    <div
      className={`${tone === "dark" ? "bg-brand-900" : "bg-white"} ${className}`}
    >
      {children}
    </div>
  );
}
