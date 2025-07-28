// File: components/ui/avatar.tsx
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Avatar({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("w-12 h-12 rounded-full overflow-hidden", className)}>
      {children}
    </div>
  );
}

export function AvatarImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <Image
      src={src}
      alt={alt || "Avatar"}
      width={48}
      height={48}
      className="w-full h-full object-cover"
    />
  );
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white font-bold">
      {children}
    </div>
  );
}
