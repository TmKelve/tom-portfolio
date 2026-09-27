"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SiteBackground() {
  const pathname = usePathname() || "";
  const enabled = pathname.includes("/projects"); // inclui /projects e /projects/[slug]

  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [enabled]);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div ref={layerRef} className="absolute inset-0 will-change-transform">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          {/* troque o nome se o arquivo real for outro */}
          <source src="/media/digital-world.mp4" type="video/mp4" />
        </video>

        {/* overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/70" />
      </div>
    </div>
  );
}