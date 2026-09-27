import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ParallaxSectionVideo from "@/components/ParallaxSectionVideo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn ? "About" : "Sobre";
  const description = isEn
    ? "Tom Kelve — Azure & Power Platform Architect. Over 5 years delivering enterprise solutions from blueprint to production."
    : "Tom Kelve — Arquiteto Azure & Power Platform. Mais de 5 anos entregando soluções enterprise do blueprint ao go-live.";
  return {
    title,
    description,
    alternates: { canonical: `https://tomkelve.com/${locale}/about` },
    openGraph: {
      title: `${title} | Tom Kelve`,
      description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(title)}&subtitle=tomkelve.com`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

/* ── SVG Icons ── */
function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

/* ── Data ── */
const pillars = {
  "pt-br": [
    {
      Icon: CloudIcon,
      colorBg: "bg-sky-500/15",
      colorRing: "ring-sky-400/40",
      title: "Azure Platform",
      desc: "AKS, Service Bus, Functions, Event Grid, Logic Apps, APIM/APISIX, IaC, CI/CD e observabilidade — arquiteturas API-first e event-driven prontas para produção.",
    },
    {
      Icon: BoltIcon,
      colorBg: "bg-violet-500/15",
      colorRing: "ring-violet-400/40",
      title: "Power Platform",
      desc: "Power Apps (Canvas + Model-driven), Power Automate, Power Pages, Copilot Studio e Dataverse — da automação simples ao app corporativo com governança CoE.",
    },
    {
      Icon: ChartIcon,
      colorBg: "bg-emerald-500/15",
      colorRing: "ring-emerald-400/40",
      title: "Data, BI & AI",
      desc: "Power BI, camadas semânticas, DAX e Fabric para analytics; Azure OpenAI, AI Builder e AI Foundry para IA aplicada com rastreabilidade e segurança.",
    },
  ],
  en: [
    {
      Icon: CloudIcon,
      colorBg: "bg-sky-500/15",
      colorRing: "ring-sky-400/40",
      title: "Azure Platform",
      desc: "AKS, Service Bus, Functions, Event Grid, Logic Apps, APIM/APISIX, IaC, CI/CD, and observability — API-first and event-driven architectures built for production.",
    },
    {
      Icon: BoltIcon,
      colorBg: "bg-violet-500/15",
      colorRing: "ring-violet-400/40",
      title: "Power Platform",
      desc: "Power Apps (Canvas + Model-driven), Power Automate, Power Pages, Copilot Studio, and Dataverse — from simple automation to enterprise apps with CoE governance.",
    },
    {
      Icon: ChartIcon,
      colorBg: "bg-emerald-500/15",
      colorRing: "ring-emerald-400/40",
      title: "Data, BI & AI",
      desc: "Power BI, semantic layers, DAX, and Fabric for analytics; Azure OpenAI, AI Builder, and AI Foundry for applied AI with traceability and security.",
    },
  ],
};

const principles = {
  "pt-br": [
    {
      number: "01",
      title: "Blueprint antes do código",
      desc: "Toda solução começa com um C4/L0–L4 claro. Só coloco a mão no teclado quando entendo o problema de verdade.",
    },
    {
      number: "02",
      title: "Hands-on até o go-live",
      desc: "Não paro na arquitetura. Implemento, integro, monitoro e itero — do discovery ao primeiro deploy em produção.",
    },
    {
      number: "03",
      title: "Governança como requisito",
      desc: "Segurança, DLP, ambientes e ALM não são extras. Fazem parte do desenho desde o início, não remendo no fim.",
    },
    {
      number: "04",
      title: "Falha é esperada, caos não",
      desc: "Idempotência, retry/backoff, DLQ e reprocessamento controlado. Sistema robusto é aquele que falha bem.",
    },
  ],
  en: [
    {
      number: "01",
      title: "Blueprint before code",
      desc: "Every solution starts with a clear C4/L0–L4. I only start coding when I truly understand the problem.",
    },
    {
      number: "02",
      title: "Hands-on until go-live",
      desc: "I don't stop at architecture. I implement, integrate, monitor, and iterate — from discovery to the first production deploy.",
    },
    {
      number: "03",
      title: "Governance as a requirement",
      desc: "Security, DLP, environments, and ALM are not extras. They're part of the design from the start, not a patch at the end.",
    },
    {
      number: "04",
      title: "Failure is expected, chaos is not",
      desc: "Idempotency, retry/backoff, DLQ, and controlled reprocessing. A robust system is one that fails gracefully.",
    },
  ],
};

const stack = [
  "Azure Kubernetes Service",
  "Azure Service Bus",
  "Azure Functions",
  "Event Grid",
  "Logic Apps",
  "API Management",
  "Power Apps",
  "Power Automate",
  "Power Pages",
  "Copilot Studio",
  "Dataverse",
  "Power BI",
  "Microsoft Fabric",
  "Azure OpenAI",
  "AI Builder",
  "IaC / Bicep",
  "CI/CD Pipelines",
  "C4 Architecture",
];

/* ── Page ── */
export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const l = (locale === "en" ? "en" : "pt-br") as "pt-br" | "en";
  const isEn = l === "en";

  const metrics = isEn
    ? [
        { value: "5+", label: "Years of\nexperience" },
        { value: "40+", label: "Enterprise\ndeliveries" },
        { value: "10+", label: "Microsoft\ncertifications" },
      ]
    : [
        { value: "5+", label: "Anos de\nexperiência" },
        { value: "40+", label: "Entregas\nenterprise" },
        { value: "10+", label: "Certificações\nMicrosoft" },
      ];

  return (
    <FullBleed>
      <ParallaxSectionVideo
        videoSrc="/media/digital-world.mp4"
        className="relative isolate text-white force-white-text"
        overlayClassName="bg-black/50"
      >
        {/* Gradient overlay — stronger at bottom for section transitions */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/15 via-black/30 to-black/85" />

        <section className="relative z-20">
          <div className="mx-auto max-w-6xl px-6 py-24 space-y-20">

            {/* ── Hero ── */}
            <div className="space-y-10 animate-fade-in-up">
              <div className="space-y-6 max-w-3xl">

                {/* Status badge */}
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent">
                    {isEn ? "About me" : "Sobre mim"}
                  </span>
                </div>

                {/* Name */}
                <h1 className="font-syne text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.92]">
                  Tom Kelve
                </h1>

                {/* Role */}
                <p className="text-lg sm:text-xl font-medium text-white/65 tracking-wide">
                  Azure &amp; Power Platform Solution Architect
                </p>

                {/* Primary description */}
                <p className="text-base sm:text-[17px] text-white/82 leading-relaxed max-w-2xl">
                  {isEn
                    ? "Hands-on architect with 5+ years delivering enterprise initiatives — from discovery and C4 blueprint to production go-live, with governance, security, and end-to-end observability."
                    : "Arquiteto hands-on com mais de 5 anos entregando iniciativas enterprise — do discovery e blueprint C4 até o go-live em produção, com governança, segurança e observabilidade ponta a ponta."}
                </p>

                {/* Secondary description */}
                <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-xl">
                  {isEn
                    ? "I operate end-to-end — connecting channels, data, and services through APIs and event-driven architecture, always focused on predictability, resilience, and continuous improvement."
                    : "Atuo ponta a ponta — conectando canais, dados e serviços via APIs e arquitetura event-driven, sempre com foco em previsibilidade, resiliência e melhoria contínua."}
                </p>
              </div>

              {/* Metrics bar */}
              <div className="flex flex-wrap w-fit divide-x divide-white/10 overflow-hidden rounded-2xl border border-white/12 bg-white/6 backdrop-blur-sm">
                {metrics.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center px-8 py-5 gap-1.5 min-w-[120px]"
                  >
                    <span className="font-syne text-3xl font-extrabold leading-none tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-white/50 text-center leading-snug whitespace-pre-line">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-white/35 transition hover:text-white/65"
              >
                ← {isEn ? "Back to Home" : "Voltar para Home"}
              </Link>
            </div>

            {/* ── Divider ── */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* ── DNA técnico ── */}
            <div className="space-y-10">
              <SectionHeader
                kicker={isEn ? "Technical DNA" : "DNA técnico"}
                title={isEn ? "Three pillars, one architecture" : "Três pilares, uma arquitetura"}
              />

              <div className="grid gap-5 sm:grid-cols-3">
                {pillars[l].map((p) => (
                  <div
                    key={p.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition duration-200 hover:bg-white/[0.08] hover:border-white/18 space-y-5"
                  >
                    <div className={`h-12 w-12 rounded-xl ${p.colorBg} ring-1 ${p.colorRing} flex items-center justify-center`}>
                      <p.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-syne text-lg font-bold tracking-tight">{p.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Princípios ── */}
            <div className="space-y-10">
              <SectionHeader
                kicker={isEn ? "How I think" : "Como eu penso"}
                title={isEn ? "Principles that guide my work" : "Princípios que guiam meu trabalho"}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                {principles[l].map((p) => (
                  <div
                    key={p.number}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm transition duration-200 hover:bg-white/[0.08] hover:border-white/18"
                  >
                    {/* Large decorative number */}
                    <span
                      className="font-syne pointer-events-none absolute right-4 top-2 text-8xl font-black leading-none select-none number-bg-accent"
                      aria-hidden="true"
                    >
                      {p.number}
                    </span>
                    <div className="relative space-y-2.5 max-w-[82%]">
                      <span className="font-syne text-xs font-black tracking-widest number-accent">
                        {p.number}
                      </span>
                      <h3 className="font-syne text-base font-bold tracking-tight leading-snug">
                        {p.title}
                      </h3>
                      <p className="text-sm text-white/68 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Stack ── */}
            <div className="space-y-8">
              <SectionHeader
                kicker="Stack"
                title={isEn ? "Technologies & Platforms" : "Tecnologias & Plataformas"}
              />

              <div className="flex flex-wrap gap-2.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-white/80 backdrop-blur-sm transition hover:border-white/22 hover:bg-white/[0.09] hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ── CTA ── */}
            <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/[0.05] p-8 sm:p-10 backdrop-blur-sm">
              {/* Glow blobs */}
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(14,165,233,0.18), transparent 65%)" }}
              />
              <div
                className="pointer-events-none absolute -left-10 -bottom-10 h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(16,185,129,0.12), transparent 65%)" }}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
                <div className="space-y-3 max-w-lg">
                  <h2 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight">
                    {isEn
                      ? "Want to talk about a project?"
                      : "Quer conversar sobre um projeto?"}
                  </h2>
                  <p className="text-white/62 text-sm leading-relaxed">
                    {isEn
                      ? "I can detail trade-offs and technical decisions in a private conversation. NDA available when needed."
                      : "Posso detalhar trade-offs e decisões técnicas em conversa privada. NDA disponível quando necessário."}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/14 hover:border-white/25"
                  >
                    {isEn ? "See projects" : "Ver projetos"}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-400"
                    style={{ boxShadow: "0 0 28px rgba(14,165,233,0.40), 0 2px 8px rgba(0,0,0,0.3)" }}
                  >
                    {isEn ? "Contact" : "Contato"}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </ParallaxSectionVideo>
    </FullBleed>
  );
}

/* ── Sub-components ── */
function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-bold tracking-[0.22em] uppercase kicker-accent">{kicker}</p>
      <h2 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function FullBleed({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen ${className}`}>
      {children}
    </div>
  );
}
