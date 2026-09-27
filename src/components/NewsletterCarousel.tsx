'use client';

import * as React from 'react';
import Image from 'next/image';
import {Link} from '@/i18n/navigation';

type Locale = 'pt-br' | 'en';

type NewsletterItem = {
  slug?: string;
  href?: string;
  title: string | Record<Locale, string>;
  dateLabel?: string;
  date?: string;
};

function getText(v: NewsletterItem['title'], locale: Locale) {
  if (typeof v === 'string') return v;
  return v[locale] ?? v['pt-br'] ?? Object.values(v)[0] ?? '';
}

function ArrowIcon({dir}: {dir: 'left' | 'right'}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {dir === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

export default function NewsletterCarousel({
  items,
  imageSrc,
  locale,
  title,
  description
}: {
  items: NewsletterItem[];
  imageSrc: string;
  locale: Locale;
  title: string;
  description: string;
}) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [active, setActive] = React.useState(0);

  const isFirst = active === 0;
  const isLast = active >= Math.max(0, items.length - 1);

  const scrollToIndex = React.useCallback((idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const target = el.querySelector<HTMLElement>(`[data-slide="${idx}"]`);
    if (!target) return;

    el.scrollTo({left: target.offsetLeft, behavior: 'smooth'});
  }, []);

  const onPrev = () => {
    if (isFirst) return;
    scrollToIndex(active - 1);
  };

  const onNext = () => {
    if (isLast) return;
    scrollToIndex(active + 1);
  };

  React.useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const getStep = () => {
      const a = el.querySelector<HTMLElement>('[data-slide="0"]');
      const b = el.querySelector<HTMLElement>('[data-slide="1"]');
      if (a && b) return Math.max(1, b.offsetLeft - a.offsetLeft);
      if (a) return Math.max(1, a.offsetWidth);
      return Math.max(1, el.clientWidth);
    };

    const handler = () => {
      const step = getStep();
      const idx = Math.round(el.scrollLeft / step);
      const clamped = Math.max(0, Math.min(items.length - 1, idx));
      setActive(clamped);
    };

    handler();
    el.addEventListener('scroll', handler, {passive: true});
    return () => el.removeEventListener('scroll', handler);
  }, [items.length]);

  return (
    <section className="relative">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <p className="mt-2 max-w-3xl text-white">{description}</p>
      </div>

      {/* ✅ Wrapper realmente centralizado no viewport */}
      <div className="relative left-1/2 -translate-x-1/2 w-[92vw] max-w-[1480px]">
        {/* Painel “glass” */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {/* Controls */}
          <div className="absolute inset-y-0 left-3 z-30 flex items-center">
            <button
              type="button"
              onClick={onPrev}
              disabled={isFirst}
              aria-disabled={isFirst}
              aria-label="Anterior"
              className={[
                'rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/15',
                isFirst ? 'opacity-0 pointer-events-none' : 'opacity-100'
              ].join(' ')}
            >
              <ArrowIcon dir="left" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-3 z-30 flex items-center">
            <button
              type="button"
              onClick={onNext}
              disabled={isLast}
              aria-disabled={isLast}
              aria-label="Próximo"
              className={[
                'rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/15',
                isLast ? 'opacity-0 pointer-events-none' : 'opacity-100'
              ].join(' ')}
            >
              <ArrowIcon dir="right" />
            </button>
          </div>

          {/* Track */}
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-12"
          >
            {items.map((it, idx) => {
              const href = it.href ?? (it.slug ? `/newsletter/${it.slug}` : '#');
              const dateLabel = it.dateLabel ?? it.date ?? '';

              return (
                <article
                  key={it.slug ?? it.href ?? idx}
                  data-slide={idx}
                  className="shrink-0 snap-start"
                  style={{width: 360}}
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                    <div className="relative h-44 w-full">
                      <Image
                        src={imageSrc}
                        alt={getText(it.title, locale)}
                        fill
                        className="object-cover"
                        sizes="360px"
                        priority={idx < 2}
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>

                    <div className="p-4">
                      <h4 className="text-base font-semibold text-white line-clamp-2">
                        {getText(it.title, locale)}
                      </h4>

                      <div className="mt-3 flex items-center justify-between text-sm text-white">
                        <span>{dateLabel}</span>
                        <Link href={href} className="font-semibold text-white hover:underline">
                          Abrir
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Dots */}
          <div className="mt-5 flex items-center gap-2 px-12">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Ir para ${i + 1}`}
                className={[
                  'h-2.5 rounded-full transition',
                  i === active ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/40'
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}