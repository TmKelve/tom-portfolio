import { setRequestLocale, getTranslations } from "next-intl/server";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn ? "Projects & Case Studies" : "Projetos & Cases",
    description: isEn
      ? "Real-world architecture cases: Azure, Power BI, enterprise integration and AI."
      : "Cases reais de arquitetura: Azure, Power BI, integração enterprise e IA.",
    alternates: { canonical: `https://tomkelve.com/${locale}/projects` },
  };
}

function ArrowRightIcon() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const safeLocale = (locale === "en" ? "en" : "pt-br") as "pt-br" | "en";
  const t = await getTranslations("ProjectsPage");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-6 text-white space-y-10">

      {/* HERO */}
      <div className="space-y-6">
        {/* Kicker badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse-dot" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase kicker-accent">
            {t("kicker")}
          </span>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h1 className="font-syne text-5xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
              {t("title")}
            </h1>
            <p className="max-w-2xl text-white/60 text-sm leading-relaxed">{t("subtitle")}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm text-white/55 backdrop-blur-sm shrink-0 max-w-xs">
            {t("hint")}
          </div>
        </div>

        {/* Domain chips */}
        <div className="flex flex-wrap gap-2">
          {["Azure", "Power Platform", "Dynamics 365", "Data/BI", "AI/Copilot"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs text-white/70 backdrop-blur-sm transition hover:border-white/20 hover:text-white"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      {/* EXPLORER */}
      <ProjectsExplorer projects={projects} locale={safeLocale} />

      {/* CTA FINAL */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 sm:p-10 backdrop-blur-sm">
        {/* Glow blobs */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18), transparent 65%)" }}
        />
        <div
          className="pointer-events-none absolute -left-8 -bottom-8 h-48 w-48 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12), transparent 65%)" }}
        />

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <h2 className="font-syne text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {t("ctaTitle")}
            </h2>
            <p className="text-white/55 text-sm leading-relaxed">{t("ctaSubtitle")}</p>
          </div>
          <a
            href={`/${safeLocale}/contact`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-400 shrink-0"
            style={{ boxShadow: "0 0 28px rgba(14,165,233,0.40)" }}
          >
            {t("ctaButton")}
            <ArrowRightIcon />
          </a>
        </div>
      </div>

    </section>
  );
}
