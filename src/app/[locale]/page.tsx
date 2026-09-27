import Image from 'next/image';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import {setRequestLocale} from 'next-intl/server';

import {Link} from '@/i18n/navigation';
import ParallaxVideoHero from '@/components/ParallaxVideoHero';
import {projects, type Project} from '@/content/projects';
import {newsletters, newsletterCoverImage} from '@/content/newsletters';

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
      ? 'Azure & Power Platform Solution Architect focused on enterprise integration, AI, automation, data and scalable cloud architecture.'
      : 'Arquiteto de Soluções Azure & Power Platform com foco em integração enterprise, IA, automação, dados e arquitetura cloud escalável.',
    alternates: {
      canonical: 'https://tomkelve.com/' + locale,
      languages: {'pt-BR': '/pt-br', en: '/en'},
    },
  };
}

const featuredSlugs = [
  'd365-fo-order-to-cash-integration',
  'd365-masterdata-product-price-inventory-platform',
  'powerbi-semantic-core-governance-metrics-factory',
];

export default async function HomePage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const safeLocale = (locale === 'en' ? 'en' : 'pt-br') as 'pt-br' | 'en';
  const en = safeLocale === 'en';

  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project))
    .slice(0, 3);

  const recentContent = [...newsletters].reverse().slice(0, 3);

  const pillars = en
    ? [
        {
          number: '01',
          title: 'Apps & Automation',
          description: 'Business applications, workflows and governed automation that remove friction from critical operations.',
          tags: ['Power Apps', 'Dataverse', 'Power Automate'],
        },
        {
          number: '02',
          title: 'AI & Agents',
          description: 'Enterprise copilots and agents connected to real processes, data and tools with guardrails and observability.',
          tags: ['Copilot Studio', 'Azure OpenAI', 'AI Foundry'],
        },
        {
          number: '03',
          title: 'Data & Analytics',
          description: 'Semantic models and data products that turn fragmented information into trusted operational decisions.',
          tags: ['Power BI', 'Fabric', 'Semantic Models'],
        },
        {
          number: '04',
          title: 'Cloud & Integration',
          description: 'API-first and event-driven architectures built for resilience, traceability and production scale.',
          tags: ['Azure', 'Service Bus', 'APISIX / APIM'],
        },
      ]
    : [
        {
          number: '01',
          title: 'Apps & Automação',
          description: 'Aplicações corporativas, fluxos e automações governadas que retiram atrito de operações críticas.',
          tags: ['Power Apps', 'Dataverse', 'Power Automate'],
        },
        {
          number: '02',
          title: 'IA & Agentes',
          description: 'Copilots e agentes enterprise conectados a processos, dados e ferramentas reais, com guardrails e observabilidade.',
          tags: ['Copilot Studio', 'Azure OpenAI', 'AI Foundry'],
        },
        {
          number: '03',
          title: 'Dados & Analytics',
          description: 'Modelos semânticos e produtos de dados que transformam informação fragmentada em decisão confiável.',
          tags: ['Power BI', 'Fabric', 'Modelos Semânticos'],
        },
        {
          number: '04',
          title: 'Cloud & Integração',
          description: 'Arquiteturas API-first e event-driven desenhadas para resiliência, rastreabilidade e escala em produção.',
          tags: ['Azure', 'Service Bus', 'APISIX / APIM'],
        },
      ];

  const method = en
    ? [
        ['01', 'Blueprint', 'Context, constraints and architecture from L0 to L4.'],
        ['02', 'Implementation', 'Hands-on delivery with clear contracts and engineering standards.'],
        ['03', 'Operations', 'Observability, reliability, SLOs and controlled failure paths.'],
        ['04', 'Evolution', 'Measure, simplify, optimize and scale what proved valuable.'],
      ]
    : [
        ['01', 'Blueprint', 'Contexto, restrições e arquitetura do L0 ao L4.'],
        ['02', 'Implementação', 'Entrega hands-on com contratos claros e padrões de engenharia.'],
        ['03', 'Operação', 'Observabilidade, confiabilidade, SLOs e falhas controladas.'],
        ['04', 'Evolução', 'Medir, simplificar, otimizar e escalar o que gerou valor.'],
      ];

  return (
    <div className="space-y-0">
      <FullBleed className="-mt-24">
        <ParallaxVideoHero videoSrc="/media/digital-world.mp4" photoSrc="/images/me.png" />
      </FullBleed>

      <FullBleed>
        <main className="relative overflow-hidden bg-[#020713] text-white">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'linear-gradient(rgba(56,189,248,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.045) 1px, transparent 1px)',
              backgroundSize: '54px 54px',
            }}
          />
          <div
            className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl"
            style={{background: 'radial-gradient(circle, rgba(14,165,233,.13), transparent 68%)'}}
          />

          <section id="expertise" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32 scroll-mt-28">
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.35fr] lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:self-start">
                <Eyebrow>{en ? 'What I build' : 'O que eu construo'}</Eyebrow>
                <h2 className="mt-4 max-w-xl font-syne text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                  {en ? 'Architecture is only useful when it moves the business.' : 'Arquitetura só é útil quando move o negócio.'}
                </h2>
                <p className="mt-6 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
                  {en
                    ? 'I connect product, cloud, data and AI so the solution can leave the diagram and survive production.'
                    : 'Conecto produto, cloud, dados e IA para que a solução saia do diagrama e sobreviva à produção.'}
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-sky-200"
                >
                  {en ? 'More about my work' : 'Mais sobre minha atuação'} <Arrow />
                </Link>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {pillars.map((pillar) => (
                  <article key={pillar.number} className="group grid gap-5 py-8 sm:grid-cols-[4rem_1fr] sm:py-10">
                    <span className="font-mono text-xs tracking-[0.25em] text-sky-400/70">{pillar.number}</span>
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-syne text-2xl font-semibold tracking-tight text-white sm:text-3xl">{pillar.title}</h3>
                        <span className="mt-1 text-sky-400 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-100">
                          <Arrow />
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl leading-7 text-slate-400">{pillar.description}</p>
                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        {pillar.tags.map((tag) => (
                          <span key={tag} className="font-mono text-[11px] uppercase tracking-[0.13em] text-slate-500">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative border-y border-white/8 bg-white/[0.018]">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <Eyebrow>{en ? 'Selected work' : 'Projetos selecionados'}</Eyebrow>
                  <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                    {en ? 'Cases where architecture had to work in the real world.' : 'Cases em que a arquitetura precisou funcionar no mundo real.'}
                  </h2>
                </div>
                <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
                  {en ? 'View all projects' : 'Ver todos os projetos'} <Arrow />
                </Link>
              </div>

              <div className="mt-14 space-y-5">
                {featured.map((project, index) => (
                  <FeaturedCase key={project.slug} project={project} locale={safeLocale} index={index} />
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <Eyebrow>{en ? 'How I work' : 'Como eu trabalho'}</Eyebrow>
                <h2 className="mt-4 font-syne text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  {en ? 'From ambiguity to an operating system.' : 'Da ambiguidade a um sistema operável.'}
                </h2>
                <p className="mt-6 max-w-xl leading-7 text-slate-400">
                  {en
                    ? 'The goal is not to produce more diagrams. It is to reduce uncertainty before code and reduce surprises after go-live.'
                    : 'O objetivo não é produzir mais diagramas. É reduzir incerteza antes do código e reduzir surpresas depois do go-live.'}
                </p>
              </div>

              <div className="relative">
                <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-sky-400/60 via-sky-400/20 to-transparent sm:left-0 sm:right-0 sm:top-[19px] sm:h-px sm:w-auto" />
                <div className="grid gap-8 sm:grid-cols-4 sm:gap-5">
                  {method.map(([number, title, description]) => (
                    <div key={number} className="relative grid grid-cols-[2.5rem_1fr] gap-4 sm:block">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/40 bg-[#020713] font-mono text-[11px] text-sky-300 shadow-[0_0_30px_rgba(14,165,233,.12)]">
                        {number}
                      </div>
                      <div className="sm:mt-7">
                        <h3 className="font-syne text-lg font-semibold text-white">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative border-y border-white/8 bg-[#050a17]">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-28">
              <div className="max-w-3xl">
                <Eyebrow>{en ? 'Authority & community' : 'Autoridade & comunidade'}</Eyebrow>
                <h2 className="mt-4 font-syne text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  {en ? 'Knowledge should circulate, not sit in a folder.' : 'Conhecimento bom precisa circular, não ficar numa pasta.'}
                </h2>
              </div>

              <div className="mt-14 grid divide-y divide-white/10 border-y border-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
                <AuthorityMetric value="2" label={en ? 'Microsoft events' : 'eventos Microsoft'} detail={en ? 'Talks on AI, agents and enterprise architecture.' : 'Palestras sobre IA, agentes e arquitetura enterprise.'} />
                <AuthorityMetric value="714" label={en ? 'newsletter subscribers' : 'assinantes na newsletter'} detail="Power Platform HUB" />
                <AuthorityMetric value="17" label={en ? 'published articles' : 'artigos publicados'} detail={en ? 'Technical content and practical architecture.' : 'Conteúdo técnico e arquitetura aplicada.'} />
                <AuthorityMetric value="8" label={en ? 'Microsoft certifications' : 'certificações Microsoft'} detail={en ? 'Power Platform, Azure and Data.' : 'Power Platform, Azure e Dados.'} />
              </div>
            </div>
          </section>

          <section id="content" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:py-32 scroll-mt-28">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <Eyebrow>{en ? 'Recent content' : 'Conteúdo recente'}</Eyebrow>
                <h2 className="mt-4 max-w-3xl font-syne text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
                  {en ? 'Ideas from the field, not from a slide template.' : 'Ideias vindas do campo, não de um template de slide.'}
                </h2>
              </div>
              <a
                href="https://www.linkedin.com/newsletters/power-platform-hub-7014748618817454080/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200"
              >
                {en ? 'Open Power Platform HUB' : 'Abrir Power Platform HUB'} <Arrow />
              </a>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {recentContent.map((item, index) => (
                <a
                  key={item.slug}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-white/[0.045]"
                >
                  <div className="relative h-48 overflow-hidden border-b border-white/10">
                    <Image
                      src={newsletterCoverImage}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050a17] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                      <span>Power Platform HUB</span>
                      <span>{item.dateLabel}</span>
                    </div>
                    <h3 className="mt-4 font-syne text-xl font-semibold leading-snug text-white">
                      {item.title[safeLocale]}
                    </h3>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                      {en ? 'Read article' : 'Ler artigo'} <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="relative mx-auto max-w-7xl px-6 pb-28 sm:px-10 lg:pb-36">
            <div className="relative overflow-hidden rounded-[2rem] border border-sky-400/20 bg-gradient-to-br from-sky-500/[0.12] via-white/[0.035] to-violet-500/[0.08] p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <Eyebrow>{en ? 'Next challenge' : 'Próximo desafio'}</Eyebrow>
                  <h2 className="mt-4 max-w-4xl font-syne text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    {en ? 'Turn complexity into architecture that can actually operate.' : 'Transformar complexidade em arquitetura que realmente opera.'}
                  </h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    {en
                      ? 'If the problem crosses systems, data, automation and AI, that is exactly where I like to work.'
                      : 'Se o problema atravessa sistemas, dados, automação e IA, é exatamente aí que gosto de trabalhar.'}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-slate-950 transition hover:bg-sky-100"
                >
                  {en ? 'Start a conversation' : 'Vamos conversar'} <Arrow />
                </Link>
              </div>
            </div>
          </section>
        </main>
      </FullBleed>
    </div>
  );
}

function Eyebrow({children}: {children: ReactNode}) {
  return (
    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-400">
      {children}
    </p>
  );
}

function FeaturedCase({
  project,
  locale,
  index,
}: {
  project: Project;
  locale: 'pt-br' | 'en';
  index: number;
}) {
  const en = locale === 'en';
  const stack = project.stack.slice(0, 5);

  return (
    <article className="group relative overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#07101e]/80 transition duration-300 hover:border-sky-400/30">
      <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
        <div className="p-7 sm:p-9 lg:p-11">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.22em] text-sky-400/70">0{index + 1}</span>
            <span className="h-px w-10 bg-sky-400/25" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              {project.type === 'case' ? (en ? 'Case study' : 'Case') : 'Lab'}
            </span>
          </div>
          <h3 className="mt-7 max-w-3xl font-syne text-2xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-3xl">
            {project.title[locale]}
          </h3>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">{project.summary[locale]}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">{tag}</span>
            ))}
          </div>
          <Link href={'/projects/' + project.slug} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">
            {en ? 'Explore the case' : 'Explorar o case'} <Arrow />
          </Link>
        </div>

        <div className="relative min-h-[18rem] border-t border-white/10 bg-black/20 p-7 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                'linear-gradient(rgba(56,189,248,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.08) 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400/70">
                {en ? 'Architecture surface' : 'Superfície arquitetural'}
              </p>
              <div className="mt-6 space-y-3">
                {stack.map((item, itemIndex) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-sky-400/20 bg-sky-400/[0.06] font-mono text-[10px] text-sky-300">
                      {String(itemIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-600">
              <span>{en ? 'Context' : 'Contexto'}</span>
              <span>→</span>
              <span>{en ? 'Architecture' : 'Arquitetura'}</span>
              <span>→</span>
              <span>{en ? 'Operation' : 'Operação'}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function AuthorityMetric({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="px-0 py-7 md:px-7 md:py-9 first:md:pl-0 last:md:pr-0">
      <strong className="block font-syne text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">{value}</strong>
      <span className="mt-2 block text-sm font-semibold text-sky-300">{label}</span>
      <span className="mt-3 block text-sm leading-6 text-slate-500">{detail}</span>
    </div>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function FullBleed({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={'relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ' + className}>
      {children}
    </div>
  );
}
