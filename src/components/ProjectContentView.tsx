// src/components/ProjectContentView.tsx
"use client";

import type { Locale, ProjectContent } from "@/content/projects";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

function pick(locale: Locale, v: { "pt-br": string; en: string }) {
  return locale === "en" ? v.en : v["pt-br"];
}

function pickList(locale: Locale, v: { "pt-br": string[]; en: string[] }) {
  return locale === "en" ? v.en : v["pt-br"];
}

/** Background com vídeo + parallax suave */
function ParallaxVideoBackdrop({
  src = "/media/digirtal-diferenciais.mp4",
  overlayClassName = "bg-black/55",
}: {
  src?: string;
  overlayClassName?: string;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    if (!root || !media) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    if (reduceMotion) return;

    let raf = 0;

    const update = () => {
      raf = window.requestAnimationFrame(() => {
        const rect = root.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        // progresso baseado no centro do bloco na viewport
        const center = rect.top + rect.height / 2;
        const p = (center - vh / 2) / (vh / 2); // ~ -2..2
        const clamped = Math.max(-1, Math.min(1, p));
        const y = clamped * 28; // intensidade do parallax (px)

        media.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
      });
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 -z-10 overflow-hidden">
      <div
        ref={mediaRef}
        className="absolute inset-0 will-change-transform transition-transform duration-200"
      >
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

      {/* Overlay principal (controle de legibilidade) */}
      <div className={`absolute inset-0 ${overlayClassName}`} />

      {/* Glow radial + vinheta */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_30%,rgba(56,189,248,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:bg-white/[0.085]">
      {/* brilho sutil no hover */}
      <div className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition group-hover:opacity-100 bg-[radial-gradient(closest-side,rgba(255,255,255,0.10),transparent)]" />
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-3 text-white/75 leading-relaxed">{children}</div>
    </div>
  );
}

type ArchStep = {
  level: string; // "L0"
  label?: string; // "(Fontes)" -> "Fontes"
  body: string;
};

function parseArchitectureSteps(text: string): ArchStep[] | null {
  /**
   * Aceita:
   * - L0: ...
   * - L0 (Fontes): ...
   * - L0 - ...
   * - L0 – ...
   * - L0 | ...
   *
   * Sempre que aparecer um novo Lx, começa um novo bloco.
   */
  const re = /(^|\n)\s*(L[0-9]+)\s*(?:\(([^)]*)\))?\s*[:\-–|]\s*/g;
  const matches = [...text.matchAll(re)];
  if (!matches.length) return null;

  const steps: ArchStep[] = [];

  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const level = m[2];
    const label = (m[3] ?? "").trim() || undefined;

    const start = (m.index ?? 0) + m[0].length;
    const end = i + 1 < matches.length ? (matches[i + 1].index ?? text.length) : text.length;

    const body = text.slice(start, end).trim();
    if (body) steps.push({ level, label, body });
  }

  return steps.length ? steps : null;
}

function ArchitectureTimeline({ text }: { text: string }) {
  const steps = parseArchitectureSteps(text);

  // Fallback: se não tiver padrão L0/L1/... renderiza como texto normal
  if (!steps) return <p className="whitespace-pre-line">{text}</p>;

  return (
    <div className="relative mt-1">
      {/* Linha vertical */}
      <div className="absolute left-[9px] top-2 bottom-2 w-px bg-white/10" />

      <div className="space-y-6">
        {steps.map((s, idx) => (
          <div key={`${s.level}-${idx}`} className="relative pl-8">
            {/* Círculo */}
            <div className="absolute left-0 top-[10px] h-[18px] w-[18px] rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur" />

            <div className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/90">
                  {s.level}
                </span>

                {s.label ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/80">
                    {s.label}
                  </span>
                ) : null}

                <span className="text-xs text-white/40">
                  {idx === 0 ? "Início" : idx === steps.length - 1 ? "Final" : "Etapa"}
                </span>
              </div>

              <p className="mt-3 text-sm text-white/75 leading-relaxed whitespace-pre-line">
                {s.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectContentView({
  content,
  locale,
  labels,
}: {
  content: ProjectContent;
  locale: Locale;
  labels: {
    context: string;
    role: string;
    architecture: string;
    decisions: string;
    reliability: string;
    observability: string;
    results: string;
    nextSteps: string;
  };
}) {
  const decisions = pickList(locale, content.decisions);
  const results = pickList(locale, content.results);
  const nextSteps = pickList(locale, content.nextSteps);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20 p-2 sm:p-3">
      <ParallaxVideoBackdrop src="/media/digirtal-diferenciais.mp4" overlayClassName="bg-black/55" />

      {/* frame interno para dar “acabamento” */}
      <div className="relative rounded-[24px] border border-white/10 bg-black/10 p-3 sm:p-4">
        <div className="grid gap-4">
          <Section title={labels.context}>{pick(locale, content.context)}</Section>

          <Section title={labels.role}>{pick(locale, content.role)}</Section>

          {/* ✅ Arquitetura em timeline (L0, L1, L2...) */}
          <Section title={labels.architecture}>
            <ArchitectureTimeline text={pick(locale, content.architecture)} />
          </Section>

          <Section title={labels.decisions}>
            <ul className="list-disc pl-5 space-y-2">
              {decisions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title={labels.reliability}>{pick(locale, content.reliability)}</Section>

          <Section title={labels.observability}>{pick(locale, content.observability)}</Section>

          <Section title={labels.results}>
            <ul className="list-disc pl-5 space-y-2">
              {results.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title={labels.nextSteps}>
            <ul className="list-disc pl-5 space-y-2">
              {nextSteps.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </div>
  );
}