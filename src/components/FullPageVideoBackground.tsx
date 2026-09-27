"use client";

export default function FullPageVideoBackground({
  src = "/media/digital-diferenciais.mp4",
  overlayClassName = "bg-black/55",
}: {
  src?: string;
  overlayClassName?: string;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-70 saturate-125 contrast-125"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </div>

      {/* overlay para legibilidade */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* glow/vinheta */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_30%,rgba(56,189,248,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
    </div>
  );
}