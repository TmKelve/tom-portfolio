import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import ParallaxSectionVideo from '@/components/ParallaxSectionVideo';
import {career} from '@/content/career';
import type {Metadata} from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Career' : 'Carreira',
    description: isEn
      ? 'Career history: Azure & Power Platform Architect, Tech Lead, enterprise integration and AI/Automation.'
      : 'Histórico de carreira: Arquiteto Azure & Power Platform, Tech Lead, integração enterprise e AI/Automation.',
    alternates: {canonical: `https://tomkelve.com/${locale}/career`},
  };
}

export default async function CareerPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const safeLocale = (locale === 'en' ? 'en' : 'pt-br') as 'pt-br' | 'en';

  return (
    <FullBleed>
      <ParallaxSectionVideo
        videoSrc="/media/digital-world.mp4"
        className="relative isolate text-white force-white-text"
        overlayClassName="bg-black/50"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

        <section className="relative z-20">
          <div className="mx-auto max-w-4xl px-6 py-24 space-y-16">

            {/* Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse-dot" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent">
                    {safeLocale === 'pt-br' ? 'Linha do tempo' : 'Timeline'}
                  </span>
                </div>
                <h1 className="font-syne text-5xl sm:text-6xl font-extrabold tracking-tight leading-none">
                  {safeLocale === 'pt-br' ? 'Histórico de\ncarreira' : 'Career\nhistory'}
                </h1>
                <p className="text-white/55 text-sm">
                  {safeLocale === 'pt-br'
                    ? 'Linha do tempo completa — mais recente → mais antiga.'
                    : 'Full timeline — most recent → oldest.'}
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-white/40 transition hover:text-white/70 shrink-0"
              >
                ← {safeLocale === 'pt-br' ? 'Voltar para Home' : 'Back to Home'}
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Timeline */}
            <ol className="relative space-y-8">
              {/* Trilho vertical */}
              <div className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />

              {career.map((it) => {
                const full = it.highlights.full?.[safeLocale] ?? it.highlights.full?.['pt-br'] ?? [];
                return (
                  <li key={it.id} className="relative">
                    {/* Dot + período */}
                    <div className="mb-4 flex items-center gap-4">
                      <span className="relative z-10 h-3.5 w-3.5 rounded-full bg-sky-400 ring-4 ring-sky-400/20 shrink-0" />
                      <span className="font-mono text-xs font-bold tracking-widest text-white/50 uppercase">
                        {it.range[safeLocale]}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="ml-8 rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition hover:bg-white/[0.07] hover:border-white/15 space-y-5">

                      {/* Title */}
                      <div className="space-y-2">
                        <h3 className="font-syne text-xl font-bold tracking-tight leading-snug">
                          {it.title[safeLocale]}
                        </h3>
                        <p className="text-sm text-white/60">
                          <span className="font-semibold text-white/85">{it.company}</span>
                          {it.location ? <span> · {it.location}</span> : null}
                          {it.mode?.[safeLocale] ? <span> · {it.mode[safeLocale]}</span> : null}
                          {it.employmentType?.[safeLocale] ? <span> · {it.employmentType[safeLocale]}</span> : null}
                          {it.tenure?.[safeLocale] ? <span> · {it.tenure[safeLocale]}</span> : null}
                        </p>
                      </div>

                      {/* Tags */}
                      {it.tags?.length ? (
                        <div className="flex flex-wrap gap-2">
                          {it.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/70"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {/* Highlights */}
                      {full.length > 0 && (
                        <ul className="space-y-2.5">
                          {full.map((h, i) => (
                            <li key={i} className="flex gap-3 text-sm text-white/72 leading-relaxed">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/70" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Stack / Skills */}
                      {(it.stackLine?.[safeLocale] || it.skillsLine?.[safeLocale]) && (
                        <div className="border-t border-white/8 pt-4 space-y-1">
                          {it.stackLine?.[safeLocale] && (
                            <p className="text-xs text-white/45 leading-relaxed">
                              {it.stackLine[safeLocale]}
                            </p>
                          )}
                          {it.skillsLine?.[safeLocale] && (
                            <p className="text-xs text-white/45 leading-relaxed">
                              {it.skillsLine[safeLocale]}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

          </div>
        </section>
      </ParallaxSectionVideo>
    </FullBleed>
  );
}

function FullBleed({children}: {children: React.ReactNode}) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-24">
      {children}
    </div>
  );
}
