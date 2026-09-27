import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: "pt-br" | "en";
}) {
  const title = project.title[locale];
  const summary = project.summary[locale];

  const badge =
    project.type === "lab"
      ? "Lab"
      : locale === "pt-br"
        ? "Case"
        : "Case Study";

  const statusLabel =
    project.status === "private"
      ? "NDA"
      : locale === "pt-br"
        ? "Público"
        : "Public";

  const hasContent = Boolean(project.content);

  const labels = {
    tags: "Tags",
    stack: "Stack",
    viewDetails: locale === "pt-br" ? "Ver detalhes" : "View details",
    viewFull: locale === "pt-br" ? "Ver conteúdo completo" : "View full content",
    context: locale === "pt-br" ? "Contexto" : "Context",
    role: locale === "pt-br" ? "Papel" : "Role",
    architecture: locale === "pt-br" ? "Arquitetura" : "Architecture",
    decisions: locale === "pt-br" ? "Decisões-chave" : "Key decisions",
    reliability: locale === "pt-br" ? "Confiabilidade" : "Reliability",
    observability: locale === "pt-br" ? "Observabilidade" : "Observability",
    results: locale === "pt-br" ? "Resultados" : "Results",
    nextSteps: locale === "pt-br" ? "Próximos passos" : "Next steps",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs text-zinc-300">{badge}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
        </div>

        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
          {statusLabel}
        </span>
      </div>

      <p className="mt-3 text-sm text-zinc-200">{summary}</p>

      {/* TAGS */}
      {project.tags?.length ? (
        <div className="mt-4">
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
      ) : null}

      {/* STACK */}
      {project.stack?.length ? (
        <div className="mt-4">
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
      ) : null}

      {/* CONTENT COMPLETO NO CARD (recolhido) */}
      {hasContent ? (
        <details className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
          <summary className="cursor-pointer text-sm font-medium text-white/90">
            {labels.viewFull}
          </summary>

          <div className="mt-4 space-y-4 text-sm text-white/75">
            <Block
              title={labels.context}
              value={project.content!.context[locale]}
            />
            <Block title={labels.role} value={project.content!.role[locale]} />
            <Block
              title={labels.architecture}
              value={project.content!.architecture[locale]}
            />

            <ListBlock
              title={labels.decisions}
              items={project.content!.decisions[locale]}
            />

            <Block
              title={labels.reliability}
              value={project.content!.reliability[locale]}
            />
            <Block
              title={labels.observability}
              value={project.content!.observability[locale]}
            />

            <ListBlock
              title={labels.results}
              items={project.content!.results[locale]}
            />

            <ListBlock
              title={labels.nextSteps}
              items={project.content!.nextSteps[locale]}
            />
          </div>
        </details>
      ) : null}

      <div className="mt-5">
        <Link
          locale={locale}
          href={`/projects/${project.slug}`}
          className="text-sm font-medium text-white hover:underline"
        >
          {labels.viewDetails}
        </Link>
      </div>
    </div>
  );
}

function Block({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-white/50">{title}</p>
      <p className="mt-2 leading-relaxed">{value}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-widest text-white/50">{title}</p>
      <ul className="mt-2 list-disc space-y-2 pl-5">
        {items.map((x, i) => (
          <li key={i}>{x}</li>
        ))}
      </ul>
    </div>
  );
}