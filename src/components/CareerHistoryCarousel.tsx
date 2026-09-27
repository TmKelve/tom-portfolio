'use client';

import * as React from 'react';
import {Link} from '@/i18n/navigation';
import type {CareerItem, Locale} from '@/content/career';

type Props = {
  items: CareerItem[];
  locale: Locale;
  prevLabel: string;
  nextLabel: string;
  backHref?: string;
  backLabel?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ArrowIcon({dir}: {dir: 'left' | 'right'}) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export default function CareerHistoryCarousel({
  items,
  locale,
  prevLabel,
  nextLabel,
  backHref,
  backLabel
}: Props) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(0);

  const onPrev = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({left: -el.clientWidth, behavior: 'smooth'});
  }, []);

  const onNext = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({left: el.clientWidth, behavior: 'smooth'});
  }, []);

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const handler = () => {
      const idx = Math.round(el.scrollLeft / el.clientWidth);
      setActive(clamp(idx, 0, Math.max(0, items.length - 1)));
    };

    handler();
    el.addEventListener('scroll', handler, {passive: true});
    return () => el.removeEventListener('scroll', handler);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div className="relative">
      {/* Top controls */}
      <div className="mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            aria-label={prevLabel}
          >
            <ArrowIcon dir="left" />
          </button>

          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-900 shadow-sm transition hover:bg-zinc-50"
            aria-label={nextLabel}
          >
            <ArrowIcon dir="right" />
          </button>
        </div>

        {backHref ? (
          <Link
            href={backHref}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50"
          >
            {backLabel ?? 'Voltar'}
          </Link>
        ) : null}
      </div>

      {/* Track */}
      <div
        ref={scrollerRef}
        className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
      >
        {items.map((it, idx) => (
          <div key={it.id} data-slide={idx} className="w-full shrink-0 snap-center px-1 md:px-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-8 md:grid-cols-[230px_1fr]">
                {/* ✅ Timeline vertical (período + bolinha + linha) */}
                <div className="relative">
                  <div className="text-sm font-semibold text-zinc-700">{it.range[locale]}</div>

                  <div className="relative mt-5 pl-8">
                    <div className="absolute left-[15px] top-0 bottom-0 w-px bg-zinc-200" />
                    <div className="absolute left-[9px] top-0 h-4 w-4 rounded-full border-2 border-zinc-900 bg-white" />

                    {it.tags?.length ? (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {it.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="h-4" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900 md:text-2xl">
                    {it.title[locale]}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-600">
                    <span className="font-semibold text-zinc-800">{it.company}</span>
                    {it.location ? <span> • {it.location}</span> : null}
                    {it.mode?.[locale] ? <span> • {it.mode[locale]}</span> : null}
                  </p>

                  <ul className="mt-5 space-y-2 text-zinc-700">
                    {it.highlights.full[locale].map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-900" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Indicators */}
                  <div className="mt-6 flex items-center gap-2">
                    {items.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          const el = scrollerRef.current;
                          if (!el) return;
                          el.scrollTo({left: i * el.clientWidth, behavior: 'smooth'});
                        }}
                        aria-label={`Slide ${i + 1}`}
                        className={[
                          'h-2.5 rounded-full transition',
                          i === active ? 'w-8 bg-zinc-900' : 'w-2.5 bg-zinc-200 hover:bg-zinc-300'
                        ].join(' ')}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-xs text-zinc-500">Dica: você também pode arrastar horizontalmente.</p>
    </div>
  );
}