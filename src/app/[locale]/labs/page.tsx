import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import ParallaxSectionVideo from "@/components/ParallaxSectionVideo";
import { labs, type Lab } from "@/content/labs";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  const title = isEn ? "Labs" : "Labs";
  const description = isEn
    ? "Engineering workshop: POCs, prototypes, templates, and technical experiments on Azure, Power Platform, and AI."
    : "Oficina de engenharia: POCs, protótipos, templates e experimentos técnicos em Azure, Power Platform e AI.";
  return {
    title,
    description,
    alternates: { canonical: `https://tomkelve.com/${locale}/labs` },
    openGraph: {
      title: `${title} | Tom Kelve`,
      description,
      images: [
        {
          url: `/og?title=Labs+%26+Experimentos&subtitle=tomkelve.com&tag=Engineering+Workshop`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const statusLabel = {
  "pt-br": { public: "Público", private: "Privado / NDA", wip: "Em andamento" },
  en: { public: "Public", private: "Private / NDA", wip: "In progress" },
} as const;

const statusColor: Record<string, string> = {
  public: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  private: "border-white/15 bg-white/8 text-white/45",
  wip: "border-amber-400/30 bg-amber-400/10 text-amber-300",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold tracking-[0.18em] uppercase text-sky-400/80 mb-1.5">
      {children}
    </p>
  );
}

function LabCard({ lab, locale }: { lab: Lab; locale: "pt-br" | "en" }) {
  const isEn = locale === "en";
  const l = locale;

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-sm p-6 flex flex-col gap-5 transition duration-200 hover:bg-white/[0.08] hover:border-white/15">

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="font-syne text-lg font-bold leading-snug text-white/95">{lab.title[l]}</h2>
        <span
          className={`shrink-0 rounded-full border px-3 py-0.5 text-xs font-semibold ${statusColor[lab.status]}`}
        >
          {statusLabel[l][lab.status]}
        </span>
      </div>

      {/* Objetivo */}
      <p className="text-sm text-white/70 leading-relaxed border-l-2 border-sky-400/40 pl-3 italic">
        {lab.objective[l]}
      </p>

      {/* Problema → Abordagem → Decisão */}
      <div className="space-y-3.5">
        <div>
          <SectionLabel>{isEn ? "Problem" : "Problema"}</SectionLabel>
          <p className="text-sm text-white/65 leading-relaxed">{lab.problem[l]}</p>
        </div>
        <div>
          <SectionLabel>{isEn ? "Approach" : "Abordagem"}</SectionLabel>
          <p className="text-sm text-white/65 leading-relaxed">{lab.approach[l]}</p>
        </div>
        <div>
          <SectionLabel>{isEn ? "Key decision" : "Decisão técnica chave"}</SectionLabel>
          <p className="text-sm text-white/65 leading-relaxed">{lab.keyDecision[l]}</p>
        </div>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-2 pt-1">
        {lab.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-white/70"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Link */}
      {lab.link ? (
        <a
          href={lab.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 transition hover:bg-sky-400/20 hover:border-sky-400/50"
        >
          {isEn ? "View repository →" : "Ver repositório →"}
        </a>
      ) : (
        <p className="text-xs text-white/30 italic">
          {isEn
            ? "Code not public — available for discussion in private conversation."
            : "Código não público — disponível para discussão em conversa privada."}
        </p>
      )}
    </article>
  );
}

function ArrowRightIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default async function LabsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const l = (locale === "en" ? "en" : "pt-br") as "pt-br" | "en";
  const isEn = l === "en";

  return (
    <FullBleed>
      <ParallaxSectionVideo
        videoSrc="/media/Projetos.mp4"
        className="relative isolate text-white force-white-text"
        overlayClassName="bg-black/45"
      >
        <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

        <section className="relative z-20">
          <div className="mx-auto max-w-6xl px-6 py-24 space-y-14">

            {/* Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent">
                    {isEn ? "Engineering workshop" : "Oficina de engenharia"}
                  </span>
                </div>
                <h1 className="font-syne text-5xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
                  Labs
                </h1>
                <p className="text-white/55 text-sm leading-relaxed max-w-xl">
                  {isEn
                    ? "POCs, prototypes, templates and technical experiments — real engineering decisions to test ideas and create reusable accelerators."
                    : "POCs, protótipos, templates e experimentos técnicos — decisões de engenharia reais para testar ideias e criar aceleradores reutilizáveis."}
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex w-fit items-center gap-1.5 text-sm text-white/40 transition hover:text-white/70 shrink-0"
              >
                ← {isEn ? "Back to Home" : "Voltar para Home"}
              </Link>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            {/* Stats strip */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: `${labs.length}`, label: isEn ? "experiments" : "experimentos" },
                { value: `${labs.filter(x => x.status === "public").length}`, label: isEn ? "public" : "públicos" },
                { value: `${labs.filter(x => x.status === "wip").length}`, label: isEn ? "in progress" : "em andamento" },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-syne text-3xl font-extrabold text-white">{s.value}</span>
                  <span className="text-xs text-white/45 uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Grid */}
            <div className="grid gap-5 lg:grid-cols-2">
              {labs.map((lab) => (
                <LabCard key={lab.slug} lab={lab} locale={l} />
              ))}
            </div>

            {/* CTA */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-sm">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15), transparent 65%)" }}
              />
              <div
                className="pointer-events-none absolute -left-8 -bottom-8 h-48 w-48 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12), transparent 65%)" }}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="space-y-2 max-w-lg">
                  <h2 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {isEn ? "Interested in any of these experiments?" : "Interessado em algum experimento?"}
                  </h2>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {isEn
                      ? "I can detail the architecture, trade-offs and decisions in a private conversation."
                      : "Posso detalhar a arquitetura, trade-offs e decisões em conversa privada."}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-400 shrink-0"
                  style={{ boxShadow: "0 0 28px rgba(14,165,233,0.40)" }}
                >
                  {isEn ? "Let's talk" : "Vamos conversar"}
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </ParallaxSectionVideo>
    </FullBleed>
  );
}

function FullBleed({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen -mt-24">
      {children}
    </div>
  );
}
