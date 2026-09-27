import Image from 'next/image';
import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isEn = locale === 'en';
  return {
    title: isEn
      ? 'Azure & Power Platform Architect'
      : 'Arquiteto Azure & Power Platform',
    description: isEn
      ? 'Azure & Power Platform Solution Architect — enterprise integration, AI/Automation, governance and scalability.'
      : 'Arquiteto de Soluções Azure & Power Platform — integração enterprise, AI/Automation, governança e escalabilidade.',
    alternates: {
      canonical: `https://tomkelve.com/${locale}`,
      languages: {'pt-BR': '/pt-br', 'en': '/en'},
    },
  };
}

import {Link} from '@/i18n/navigation';
import ParallaxSectionVideo from '@/components/ParallaxSectionVideo';
import {projects} from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';
import ParallaxVideoHero from '@/components/ParallaxVideoHero';
import CertificationCard, {Certification} from '@/components/CertificationCard';
import CompanyLogoMarquee from '@/components/CompanyLogoMarquee';
import NewsletterCarousel from '@/components/NewsletterCarousel';
import {newsletters, newsletterCoverImage} from '@/content/newsletters';
import CareerCarousel from '@/components/CareerCarousel';
import {career} from '@/content/career';

/* ── SVG Icons for DarkCards ── */
function IconBlueprintExec() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
    </svg>
  );
}
function IconEnterprise() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}
function IconResilience() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}
function IconGovernance() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}
function IconData() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}
function IconAI() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ── Dark card icon map ── */
const darkCardIcons = [IconBlueprintExec, IconEnterprise, IconResilience, IconGovernance, IconData, IconAI];
const darkCardColors = [
  { bg: 'bg-sky-500/15',     ring: 'ring-sky-400/35'     },
  { bg: 'bg-violet-500/15',  ring: 'ring-violet-400/35'  },
  { bg: 'bg-emerald-500/15', ring: 'ring-emerald-400/35' },
  { bg: 'bg-amber-500/15',   ring: 'ring-amber-400/35'   },
  { bg: 'bg-rose-500/15',    ring: 'ring-rose-400/35'    },
  { bg: 'bg-cyan-500/15',    ring: 'ring-cyan-400/35'    },
];

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const safeLocale = (locale === 'en' ? 'en' : 'pt-br') as 'pt-br' | 'en';
  const t = await getTranslations('Home');

  const featured = projects
    .filter((p) => (p.status ?? 'public') === 'public')
    .slice(0, 3);

  const certs: Certification[] = [
    {title: 'Microsoft Certified: Power Platform Fundamentals (PL-900)', issued: t('certSep2022'), code: 'I410-9001'},
    {title: 'Microsoft Certified: Azure Developer Associate (AZ-204)', issued: t('certOct2022')},
    {title: 'Microsoft Certified: Power Platform App Maker Associate (PL-100)', issued: t('certOct2022')},
    {title: 'Microsoft Certified: Power Platform Functional Consultant Associate (PL-200)', issued: t('certFeb2023')},
    {title: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)', issued: t('certFeb2023'), code: 'I608-0687'},
    {title: 'Microsoft Certified: Power Platform Developer Associate (PL-400)', issued: t('certFeb2023')},
    {title: 'Microsoft Certified: Power Platform Solution Architect Expert (PL-600)', issued: t('certFeb2023')},
    {title: 'Microsoft Certified: Azure Data Engineer Associate (DP-203)', issued: t('certFeb2023'), skills: 'Azure'}
  ];

  const newsletterItems = [...newsletters].reverse();

  type CareerCarouselItem = Omit<(typeof career)[number], 'highlights'> & {
    highlights: Record<'pt-br' | 'en', string[]>;
  };
  const careerHomeItems: CareerCarouselItem[] = career
    .slice(0, 3)
    .map((it) => ({ ...it, highlights: it.highlights.short }));

  return (
    <div className="space-y-0">

      {/* HERO */}
      <FullBleed className="-mt-24">
        <ParallaxVideoHero videoSrc="/media/digital-world.mp4" photoSrc="/images/me.png" />
      </FullBleed>

      {/* SEÇÃO BRANCA — QUEM EU SOU */}
      <FullBleed>
        <section id="about" data-section="sec-2" className="relative bg-white text-zinc-950 scroll-mt-24">
          <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-white" />

          <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10 py-16">

            {/* Photo + Bio */}
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-center">
              <aside className="lg:col-span-5 lg:-ml-10 xl:-ml-16">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/me-about.jpg"
                    alt="Tom Kelve"
                    width={1100}
                    height={1300}
                    sizes="(min-width: 1280px) 580px, (min-width: 1024px) 520px, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </aside>

              <div className="lg:col-span-7 lg:pt-6 space-y-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-3">
                    {safeLocale === 'pt-br' ? 'Quem eu sou' : 'Who I am'}
                  </p>
                  <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                    {t('aboutTitle')}
                  </h2>
                </div>
                <div className="space-y-3 max-w-2xl">
                  <p className="text-lg font-medium text-zinc-900 leading-relaxed">{t('aboutIntro1')}</p>
                  <p className="text-zinc-600 leading-relaxed">{t('aboutIntro2')}</p>
                  <p className="text-sm text-zinc-500">{t('aboutStack')}</p>
                </div>
              </div>
            </div>

            {/* Especialidades */}
            <div className="mt-16">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-3">
                {safeLocale === 'pt-br' ? 'Especialidades' : 'Expertise'}
              </p>
              <h3 className="font-syne text-2xl sm:text-3xl font-bold text-zinc-950 mb-8">
                {t('aboutSpecTitle')}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:grid-flow-col">
                <LightCard title={t('aboutS1Title')} desc={t('aboutS1Desc')} />
                <LightCard title={t('aboutS2Title')} desc={t('aboutS2Desc')} />
                <LightCard title={t('aboutS3Title')} desc={t('aboutS3Desc')} />
                <LightCard title={t('aboutS4Title')} desc={t('aboutS4Desc')} />
                <LightCard title={t('aboutS5Title')} desc={t('aboutS5Desc')} />
                <LightCard title={t('aboutS6Title')} desc={t('aboutS6Desc')} />
              </div>
            </div>

            {/* Como eu trabalho */}
            <div className="mt-12 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-7">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">
                {safeLocale === 'pt-br' ? 'Método' : 'Method'}
              </p>
              <h3 className="font-syne text-xl font-bold text-zinc-950 mb-6">{t('aboutWorkTitle')}</h3>

              <div className="grid gap-4 sm:grid-cols-4">
                <Step num="01" title="Blueprint" desc="C4 / L0–L4" />
                <Step num="02" title="Implementação" desc="Entrega em produção" />
                <Step num="03" title="Operação" desc="Observabilidade e SLOs" />
                <Step num="04" title="Evolução" desc="Otimização contínua" />
              </div>

              <p className="mt-5 text-sm text-zinc-500 border-t border-zinc-200 pt-4">{t('aboutWorkFlow')}</p>
            </div>
          </div>

          <CompanyLogoMarquee title={t('logoStripTitle')} subtitle={t('logoStripSubtitle')} speedSeconds={26} />
        </section>
      </FullBleed>

      {/* SEÇÃO ESCURA — DIFERENCIAIS + CARREIRA + NEWSLETTER */}
      <FullBleed>
        <ParallaxSectionVideo
          videoSrc="/media/digital-diferenciais.mp4"
          className="relative isolate text-white force-white-text"
          overlayClassName="bg-black/50"
        >
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/15 via-black/25 to-black/60" />

          <div className="relative z-20 mx-auto max-w-6xl px-6 py-20 space-y-20">

            {/* Diferenciais */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent mb-3">
                {safeLocale === 'pt-br' ? 'Diferenciais' : 'Differentials'}
              </p>
              <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight mb-10">
                {t('diffTitle')}
              </h2>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  t('diff1Title'), t('diff2Title'), t('diff3Title'),
                  t('diff4Title'), t('diff5Title'), t('diff6Title'),
                ].map((title, i) => (
                  <DarkCard
                    key={i}
                    Icon={darkCardIcons[i]}
                    colorBg={darkCardColors[i].bg}
                    colorRing={darkCardColors[i].ring}
                    title={title}
                    desc={[
                      t('diff1Desc'), t('diff2Desc'), t('diff3Desc'),
                      t('diff4Desc'), t('diff5Desc'), t('diff6Desc'),
                    ][i]}
                  />
                ))}
              </div>
            </div>

            {/* Carreira */}
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent mb-3">
                {safeLocale === 'pt-br' ? 'Linha do tempo' : 'Timeline'}
              </p>
              <h3 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                {safeLocale === 'pt-br' ? 'Histórico de carreira' : 'Career history'}
              </h3>
              <p className="text-white/65 text-sm max-w-2xl mb-8">
                {safeLocale === 'pt-br'
                  ? 'As 3 experiências mais recentes. Role para o lado para ver a próxima.'
                  : 'The 3 most recent roles. Swipe to view the next one.'}
              </p>
              <CareerCarousel
                theme="dark"
                locale={safeLocale}
                items={careerHomeItems}
                seeAllHref="/career"
                ctaLabel={safeLocale === 'pt-br' ? 'Ver completo' : 'See full history'}
                prevLabel={safeLocale === 'pt-br' ? 'Anterior' : 'Previous'}
                nextLabel={safeLocale === 'pt-br' ? 'Próximo' : 'Next'}
              />
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

            {/* Newsletter */}
            <NewsletterCarousel
              items={newsletterItems}
              imageSrc={newsletterCoverImage}
              locale={safeLocale}
              title="Newsletter"
              description={
                safeLocale === 'pt-br'
                  ? 'Publicações e insights técnicos (arquitetura, integração, Power Platform, dados e IA).'
                  : 'Technical insights (architecture, integration, Power Platform, data and AI).'
              }
            />
          </div>
        </ParallaxSectionVideo>
      </FullBleed>

      {/* SEÇÃO BRANCA — CERTIFICAÇÕES */}
      <FullBleed>
        <section className="bg-white text-zinc-950">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-sky-600 mb-2">Microsoft</p>
                <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950">
                  {t('certsTitle')}
                </h2>
                <p className="mt-2 text-sm text-zinc-500">{t('certsNote')}</p>
              </div>
              <Link
                href="/certifications"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition shrink-0"
              >
                {safeLocale === 'pt-br' ? 'Ver todas' : 'See all'}
                <IconArrowRight />
              </Link>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start">
              {certs.map((c) => (
                <CertificationCard key={c.title} cert={c} />
              ))}
            </div>
          </div>
        </section>
      </FullBleed>

      {/* SEÇÃO ESCURA — PROJETOS EM DESTAQUE */}
      <FullBleed>
        <ParallaxSectionVideo
          videoSrc="/media/Digital-Destaques.MP4"
          className="relative isolate text-white force-white-text"
          overlayClassName="bg-black/50"
        >
          <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/35 to-black/75" />

          <div className="relative z-20 mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent mb-3">
                  {safeLocale === 'pt-br' ? 'Portfólio' : 'Portfolio'}
                </p>
                <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight">
                  {t('featuredTitle')}
                </h2>
                <p className="mt-3 max-w-2xl text-white/65 text-sm">{t('featuredDesc')}</p>
              </div>
              <Link
                href="/projects"
                className="hidden sm:inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition"
              >
                {safeLocale === 'pt-br' ? 'Ver todos' : 'See all'}
                <IconArrowRight />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {featured.map((p) => (
                <ProjectCard key={p.slug} project={p} locale={safeLocale} />
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <Link href="/projects" className="text-sm text-white/70 hover:text-white transition">
                {safeLocale === 'pt-br' ? 'Ver todos →' : 'See all →'}
              </Link>
            </div>
          </div>
        </ParallaxSectionVideo>
      </FullBleed>

      {/* CTA FINAL */}
      <FullBleed>
        <section className="bg-zinc-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 sm:p-14 backdrop-blur-sm text-white">
              {/* Glow blobs */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.18), transparent 65%)' }}
              />
              <div
                className="pointer-events-none absolute -left-8 -bottom-8 h-56 w-56 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 65%)' }}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                <div className="space-y-3 max-w-xl">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent">
                    {safeLocale === 'pt-br' ? 'Pronto para começar?' : "Ready to start?"}
                  </p>
                  <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight">
                    {t('ctaBlockTitle')}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed">{t('ctaBlockDesc')}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-sky-400"
                    style={{ boxShadow: '0 0 28px rgba(14,165,233,0.40)' }}
                  >
                    {t('ctaBlockButton')}
                    <IconArrowRight />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/14"
                  >
                    {t('ctaProjects')}
                    <IconArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FullBleed>

    </div>
  );
}

/* ── Layout helpers ── */
function FullBleed({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${className}`}>
      {children}
    </div>
  );
}

/* ── DarkCard ── */
function DarkCard({
  Icon,
  colorBg,
  colorRing,
  title,
  desc,
}: {
  Icon: () => React.ReactElement;
  colorBg: string;
  colorRing: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition duration-200 hover:bg-white/[0.08] hover:border-white/18 space-y-4">
      <div className={`h-11 w-11 rounded-xl ${colorBg} ring-1 ${colorRing} flex items-center justify-center`}>
        <Icon />
      </div>
      <h3 className="font-syne font-bold tracking-tight">{title}</h3>
      <p className="text-sm text-white/68 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── LightCard ── */
function LightCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-6 hover:border-zinc-200 hover:shadow-sm transition">
      <div className="h-1 w-8 rounded-full bg-sky-500 mb-4" />
      <h4 className="font-syne font-bold text-zinc-950 mb-2">{title}</h4>
      <p className="text-sm text-zinc-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ── Step ── */
function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-5 space-y-2">
      <span className="font-syne text-xs font-black tracking-widest text-sky-500">{num}</span>
      <p className="font-syne font-bold text-zinc-950 text-sm">{title}</p>
      <p className="text-xs text-zinc-500">{desc}</p>
    </div>
  );
}
