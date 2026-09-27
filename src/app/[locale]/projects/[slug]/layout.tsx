import type { ReactNode } from "react";
import FullPageVideoBackground from "@/components/FullPageVideoBackground";

export default function ProjectDetailLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <FullPageVideoBackground src="/media/digital-diferenciais.mp4" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}