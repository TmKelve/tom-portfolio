import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { projects, type Locale } from "@/content/projects";
import ProjectContentView from "@/components/ProjectContentView";
import type { Metadata } from "next";

// ✅ Necessário para static export (e não atrapalha em dev)
export const dynamicParams = false;

export function generateStaticParams() {
  const locales: Locale[] = ["pt-br", "en"];
  return locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug: rawSlug } = await params;
  const locale: Locale = rawLocale === "en" ? "en" : "pt-br";
  const slug = decodeURIComponent(rawSlug ?? "");
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  const title = project.title[locale];
  const ogUrl = `/og?title=${encodeURIComponent(title)}&subtitle=tomkelve.com&tag=Case+Study`;

  return {
    title,
    description: project.summary[locale],
    alternates: {
      canonical: `https://tomkelve.com/${locale}/projects/${slug}`,
    },
    openGraph: {
      title,
      description: project.summary[locale],
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogUrl],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  // ✅ Em Next mais novo, params vem como Promise (igual na Home)
  const { locale: rawLocale, slug: rawSlug } = await params;

  const locale: Locale = rawLocale === "en" ? "en" : "pt-br";
  setRequestLocale(locale);

  const slug = decodeURIComponent(rawSlug ?? "");
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    if (process.env.NODE_ENV !== "production") {
      return (
        <section className="mx-auto w-full max-w-6xl px-6 py-12 text-white">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h1 className="text-2xl font-semibold">Projeto não encontrado</h1>
            <p className="mt-2 text-white/70">
              slug recebido: <span className="text-white">{String(rawSlug)}</span>
            </p>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-white/50">
                Slugs disponíveis
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
                {projects.map((p) => (
                  <li key={p.slug}>
                    <Link
                      locale={locale}
                      href={`/projects/${p.slug}`}
                      className="hover:underline"
                    >
                      {p.slug}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                locale={locale}
                href="/projects"
                className="text-sm text-white/80 hover:text-white hover:underline"
              >
                ← {locale === "pt-br" ? "Voltar para Projetos" : "Back to Projects"}
              </Link>
            </div>
          </div>
        </section>
      );
    }

    notFound();
  }

  const title = project.title[locale];
  const summary = project.summary[locale];

  const labels = {
    back: locale === "pt-br" ? "Voltar para Projetos" : "Back to Projects",
    type: project.type === "lab" ? "Lab" : locale === "pt-br" ? "Case" : "Case Study",
    status:
      project.status === "private"
        ? "NDA"
        : locale === "pt-br"
          ? "Público"
          : "Public",
    tags: "Tags",
    stack: "Stack",
    comingSoon: locale === "pt-br" ? "Detalhamento em breve." : "Details coming soon.",
    sections: {
      context: locale === "pt-br" ? "Contexto" : "Context",
      role: locale === "pt-br" ? "Papel" : "Role",
      architecture: locale === "pt-br" ? "Arquitetura" : "Architecture",
      decisions: locale === "pt-br" ? "Decisões-chave" : "Key decisions",
      reliability: locale === "pt-br" ? "Confiabilidade" : "Reliability",
      observability: locale === "pt-br" ? "Observabilidade" : "Observability",
      results: locale === "pt-br" ? "Resultados" : "Results",
      nextSteps: locale === "pt-br" ? "Próximos passos" : "Next steps",
    },
  };

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <Link
          locale={locale}
          href="/projects"
          className="text-sm text-white/70 hover:text-white"
        >
          ← {labels.back}
        </Link>

        <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-white/60">{labels.type}</p>

            <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              {title}
            </h1>

            <p className="mt-3 max-w-3xl text-white/70">{summary}</p>
          </div>

          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            {labels.status}
          </span>
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-white/50">
            {labels.tags}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs uppercase tracking-widest text-white/50">
            {labels.stack}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        {project.content ? (
          <ProjectContentView
            content={project.content}
            locale={locale}
            labels={labels.sections}
          />
        ) : (
          <p className="text-white/60">{labels.comingSoon}</p>
        )}
      </div>
    </section>
  );
}