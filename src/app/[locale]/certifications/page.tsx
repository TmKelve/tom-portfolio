import {setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

import ParallaxSectionVideo from '@/components/ParallaxSectionVideo';
import CertificationCard, {Certification} from '@/components/CertificationCard';
import {allCertifications, certCategories} from '@/content/certifications';
import type {Metadata} from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Certifications' : 'Certificações',
    description: isEn
      ? '25+ certifications: Microsoft Power Platform, Azure, IBM Data Science, FIAP and more.'
      : '25+ certificações: Microsoft Power Platform, Azure, IBM Data Science, FIAP e mais.',
    alternates: {canonical: `https://tomkelve.com/${locale}/certifications`},
  };
}

export default async function CertificationsPage({
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
        className="relative isolate min-h-screen w-screen text-white force-white-text"
        overlayClassName="bg-black/50"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

        <div className="relative z-20 mx-auto max-w-6xl px-6 py-24 space-y-16">

          {/* Header */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent">
                  {safeLocale === 'pt-br' ? 'Formação & Certificações' : 'Education & Certifications'}
                </span>
              </div>
              <h1 className="font-syne text-5xl sm:text-6xl font-extrabold tracking-tight leading-none">
                {safeLocale === 'pt-br' ? 'Certificações' : 'Certifications'}
              </h1>
              <p className="text-white/55 text-sm">
                {safeLocale === 'pt-br'
                  ? `Lista completa agrupada por tipo · ${allCertifications.length} certificações`
                  : `Full list grouped by type · ${allCertifications.length} certifications`}
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

          {/* Categories */}
          <div className="space-y-14">
            {certCategories.map((cat) => {
              const items = allCertifications.filter((c) => c.category === cat.id);
              if (items.length === 0) return null;

              return (
                <section key={cat.id}>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-1 rounded-full bg-sky-400" />
                      <h2 className="font-syne text-xl font-bold tracking-tight">
                        {cat.title[safeLocale]}
                      </h2>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-0.5 text-xs text-white/50 font-mono">
                      {items.length}
                    </span>
                  </div>

                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
                    {items.map((c) => {
                      const cert: Certification = {
                        title: c.title,
                        issued: c.issued[safeLocale],
                        issuer: c.issuer,
                        code: c.code,
                        skills: c.skills
                      };
                      return <CertificationCard key={c.id} cert={cert} variant="glass" />;
                    })}
                  </div>
                </section>
              );
            })}
          </div>

        </div>
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
