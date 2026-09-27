"use client";

import * as React from "react";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/content/career";

type HighlightsMap = Record<Locale, string[]>;
type HighlightsVariant = { short: HighlightsMap; full: HighlightsMap };
type Highlights = HighlightsMap | HighlightsVariant;

type CareerCarouselItem = {
  id: string;
  range: Record<Locale, string>;
  title: Record<Locale, string>;
  company: string;
  location?: string;
  mode?: Record<Locale, string>;
  tags?: string[];
  highlights: Highlights;
};

type Props = {
  items: CareerCarouselItem[];
  locale: Locale;
  seeAllHref: string;
  ctaLabel: string;
  prevLabel: string;
  nextLabel: string;
  theme?: "light" | "dark";
  variant?: "short" | "full"; // ✅ novo
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function resolveHighlights(h: Highlights, variant: "short" | "full"): HighlightsMap {
  // novo formato: { short, full }
  if (h && typeof h === "object" && "short" in h && "full" in h) {
    const hv = h as HighlightsVariant;
    return hv[variant] ?? hv.short;
  }
  // formato antigo: Record<locale, string[]>
  return h as HighlightsMap;
}

export default function CareerCarousel({
  items,
  locale,
  seeAllHref,
  ctaLabel,
  prevLabel,
  nextLabel,
  theme = "light",
  variant = "short",
}: Props) {
  const isDark = theme === "dark";

  const ui = {
    controlsBtn: isDark
      ? "border border-white/15 bg-white/5 text-white shadow-sm transition hover:bg-white/10"
      : "border border-zinc-200 bg-white text-zinc-800 shadow-sm transition hover:bg-zinc-50",
    cta: isDark
      ? "rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
      : "rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800",
    card: isDark
      ? "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm md:p-8"
      : "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8",
    dot: isDark
      ? "h-4 w-4 shrink-0 rounded-full border-2 border-white bg-transparent"
      : "h-4 w-4 shrink-0 rounded-full border-2 border-zinc-900 bg-white",
    line: isDark ? "h-px flex-1 bg-white/15" : "h-px flex-1 bg-zinc-200",
    range: isDark
      ? "whitespace-nowrap text-sm font-semibold text-white/80"
      : "whitespace-nowrap text-sm font-semibold text-zinc-700",
    title: isDark
      ? "text-xl font-semibold tracking-tight text-white md:text-2xl"
      : "text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl",
    meta: isDark ? "mt-2 text-sm text-white/70" : "mt-2 text-sm text-zinc-600",
    company: isDark ? "font-semibold text-white" : "font-semibold text-zinc-800",
    tag: isDark
      ? "rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80"
      : "rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700",
    bullet: isDark
      ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white"
      : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900",
    listText: isDark ? "text-white/85" : "text-zinc-700",
    indicatorActive: isDark ? "w-8 bg-white" : "w-8 bg-zinc-900",
    indicator: isDark ? "w-2.5 bg-white/30 hover:bg-white/40" : "w-2.5 bg-zinc-200 hover:bg-zinc-300",
    hint: isDark ? "mt-3 text-xs text-white/60" : "mt-3 text-xs text-zinc-500",
  };

  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(0);

  const onPrev = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: -el.clientWidth, behavior: "smooth" });
  }, []);

  const onNext = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
  }, []);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handler = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(clamp(idx, 0, Math.max(0, items.length - 1)));
    };

    handler();
    el.addEventListener("scroll", handler, { passive: true });
    return () => el.removeEventListener("scroll", handler);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            className={`inline-flex items-center justify-center rounded-full p-2 ${ui.controlsBtn}`}
            aria-label={prevLabel}
          >
            <ArrowIcon dir="left" />
          </button>
          <button
            type="button"
            onClick={onNext}
            className={`inline-flex items-center justify-center rounded-full p-2 ${ui.controlsBtn}`}
            aria-label={nextLabel}
          >
            <ArrowIcon dir="right" />
          </button>
        </div>

        <Link href={seeAllHref} className={`inline-flex items-center ${ui.cta}`}>
          {ctaLabel}
        </Link>
      </div>

      <div ref={scrollerRef} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth">
        {items.map((it, idx) => {
          const highlights = resolveHighlights(it.highlights, variant)[locale] ?? [];

          return (
            <div key={it.id} className="w-full shrink-0 snap-center px-1 md:px-2">
              <div className={ui.card}>
                {/* timeline horizontal */}
                <div className="flex items-center gap-4">
                  <div className={ui.dot} />
                  <div className={ui.line} />
                  <div className={ui.range}>{it.range[locale]}</div>
                </div>

                <div className="mt-6">
                  <h3 className={ui.title}>{it.title[locale]}</h3>

                  <p className={ui.meta}>
                    <span className={ui.company}>{it.company}</span>
                    {it.location ? <span> • {it.location}</span> : null}
                    {it.mode?.[locale] ? <span> • {it.mode[locale]}</span> : null}
                  </p>

                  {it.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {it.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className={ui.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <ul className={`mt-5 space-y-2 ${ui.listText}`}>
                    {highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className={ui.bullet} />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center gap-2">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          const el = scrollerRef.current;
                          if (!el) return;
                          el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                        }}
                        aria-label={`Slide ${i + 1}`}
                        className={[
                          "h-2.5 rounded-full transition",
                          i === active ? ui.indicatorActive : ui.indicator,
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className={ui.hint}>Dica: você também pode arrastar horizontalmente.</p>
    </div>
  );
}