"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/content/projects";

type Locale = "pt-br" | "en";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function t(locale: Locale, pt: string, en: string) {
  return locale === "en" ? en : pt;
}

export default function ProjectsExplorer({
  projects,
  locale,
}: {
  projects: Project[];
  locale: Locale;
}) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<"all" | "case" | "lab">("all");
  const [visibility, setVisibility] = useState<"public" | "all">("public");
  const [sort, setSort] = useState<"relevance" | "recent">("relevance");
  const [tag, setTag] = useState<string | null>(null);

  const [showAllTags, setShowAllTags] = useState(false);
  const [tagQuery, setTagQuery] = useState("");

  const counts = useMemo(() => {
    const total = projects.length;
    const totalPublic = projects.filter((p) => p.status === "public").length;
    const totalCase = projects.filter((p) => p.type === "case").length;
    const totalLab = projects.filter((p) => p.type === "lab").length;

    return { total, totalPublic, totalCase, totalLab };
  }, [projects]);

  const tagsWithCount = useMemo(() => {
    const freq = new Map<string, number>();
    for (const p of projects) {
      for (const tg of p.tags ?? []) freq.set(tg, (freq.get(tg) ?? 0) + 1);
    }
    return [...freq.entries()].sort((a, b) => b[1] - a[1]);
  }, [projects]);

  const filteredTags = useMemo(() => {
    const base = tagsWithCount.map(([tg]) => tg);
    const q = normalize(tagQuery.trim());
    const byQuery = q ? base.filter((x) => normalize(x).includes(q)) : base;
    return showAllTags ? byQuery : byQuery.slice(0, 14);
  }, [tagsWithCount, showAllTags, tagQuery]);

  const filtered = useMemo(() => {
    const q = normalize(query.trim());

    let list = projects.filter((p) => {
      if (visibility === "public" && p.status !== "public") return false;
      if (type !== "all" && p.type !== type) return false;
      if (tag && !(p.tags ?? []).includes(tag)) return false;

      if (!q) return true;

      const hay = [
        p.title[locale],
        p.summary[locale],
        (p.tags ?? []).join(" "),
        (p.stack ?? []).join(" "),
      ].join(" ");

      return normalize(hay).includes(q);
    });

    // Evita mutação por segurança
    list = [...list];

    if (sort === "relevance") {
      list.sort((a, b) => {
        if (a.status !== b.status) return a.status === "public" ? -1 : 1;
        if (a.type !== b.type) return a.type === "case" ? -1 : 1;
        return a.title[locale].localeCompare(b.title[locale]);
      });
    } else {
      list.sort((a, b) => {
        if (a.status !== b.status) return a.status === "public" ? -1 : 1;
        if (a.type !== b.type) return a.type === "case" ? -1 : 1;
        return b.title[locale].localeCompare(a.title[locale]);
      });
    }

    return list;
  }, [projects, locale, query, type, visibility, sort, tag]);

  const hasActiveFilters =
    query.trim().length > 0 ||
    type !== "all" ||
    visibility !== "public" ||
    sort !== "relevance" ||
    tag !== null;

  function resetAll() {
    setQuery("");
    setType("all");
    setVisibility("public");
    setSort("relevance");
    setTag(null);
    setTagQuery("");
    setShowAllTags(false);
  }

  const activePills: Array<{ key: string; label: string; onRemove: () => void }> =
    [];

  if (query.trim()) {
    activePills.push({
      key: "query",
      label: t(locale, `Busca: ${query.trim()}`, `Search: ${query.trim()}`),
      onRemove: () => setQuery(""),
    });
  }

  if (type !== "all") {
    activePills.push({
      key: "type",
      label: type === "case" ? "Cases" : "Labs",
      onRemove: () => setType("all"),
    });
  }

  if (visibility !== "public") {
    activePills.push({
      key: "visibility",
      label: t(locale, "Públicos + NDA", "Public + NDA"),
      onRemove: () => setVisibility("public"),
    });
  }

  if (sort !== "relevance") {
    activePills.push({
      key: "sort",
      label: t(locale, "Mais recentes", "Recent"),
      onRemove: () => setSort("relevance"),
    });
  }

  if (tag) {
    activePills.push({
      key: "tag",
      label: `${t(locale, "Tag", "Tag")}: ${tag}`,
      onRemove: () => setTag(null),
    });
  }

  return (
    <div>
      {/* FILTER BAR (mais “intuitivo”) */}
      <div className="mb-8 rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">
              {t(locale, "Filtros", "Filters")}
            </p>
            <p className="mt-1 text-sm text-white/70">
              {t(
                locale,
                `Mostrando ${filtered.length} de ${projects.length}`,
                `Showing ${filtered.length} of ${projects.length}`
              )}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatPill
              label={t(locale, "Total", "Total")}
              value={counts.total}
            />
            <StatPill
              label={t(locale, "Públicos", "Public")}
              value={counts.totalPublic}
            />
            <StatPill label="Cases" value={counts.totalCase} />
            <StatPill label="Labs" value={counts.totalLab} />

            {hasActiveFilters ? (
              <button
                onClick={resetAll}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80 hover:bg-white/10"
              >
                {t(locale, "Limpar tudo", "Clear all")}
              </button>
            ) : null}
          </div>
        </div>

        {/* Search + controls */}
        <div className="mt-5 grid gap-3 lg:grid-cols-[1fr_auto] lg:items-start">
          {/* Search */}
          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
              ⌕
            </span>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t(locale, "Buscar projetos...", "Search projects...")}
              className="w-full rounded-2xl border border-white/10 bg-black/40 py-3 pl-10 pr-10 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
            />

            {query ? (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70 hover:bg-white/10"
                aria-label={t(locale, "Limpar busca", "Clear search")}
              >
                ✕
              </button>
            ) : null}
          </div>

          {/* Segmented controls */}
          <div className="flex flex-wrap gap-2">
            <Segmented
              value={type}
              onChange={setType}
              options={[
                ["all", t(locale, "Todos", "All")],
                ["case", "Cases"],
                ["lab", "Labs"],
              ]}
            />

            <Segmented
              value={visibility}
              onChange={setVisibility}
              options={[
                ["public", t(locale, "Públicos", "Public")],
                ["all", t(locale, "Públicos + NDA", "Public + NDA")],
              ]}
            />

            <Segmented
              value={sort}
              onChange={setSort}
              options={[
                ["relevance", t(locale, "Relevância", "Relevance")],
                ["recent", t(locale, "Mais recentes", "Recent")],
              ]}
            />
          </div>
        </div>

        {/* Active filters pills */}
        {activePills.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {activePills.map((p) => (
              <button
                key={p.key}
                onClick={p.onRemove}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
                title={t(locale, "Clique para remover", "Click to remove")}
              >
                <span className="max-w-[42ch] truncate">{p.label}</span>
                <span className="text-white/50">✕</span>
              </button>
            ))}
          </div>
        ) : null}

        {/* Tags */}
        <div className="mt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setTag(null)}
                className={`rounded-full px-3 py-2 text-xs transition ${
                  tag === null
                    ? "border border-white/15 bg-white/15 text-white ring-1 ring-white/20"
                    : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                }`}
              >
                {t(locale, "Todas as tags", "All tags")}
              </button>

              <div className="relative w-full sm:w-72">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
                  #
                </span>
                <input
                  value={tagQuery}
                  onChange={(e) => setTagQuery(e.target.value)}
                  placeholder={t(locale, "Filtrar tags...", "Filter tags...")}
                  className="w-full rounded-full border border-white/10 bg-black/40 py-2 pl-9 pr-3 text-xs text-white placeholder:text-white/40 outline-none focus:border-white/20"
                />
              </div>
            </div>

            {tagsWithCount.length > 14 ? (
              <button
                onClick={() => setShowAllTags((v) => !v)}
                className="text-xs text-white/70 hover:text-white hover:underline"
              >
                {showAllTags
                  ? t(locale, "Mostrar menos", "Show less")
                  : t(locale, "Mostrar mais", "Show more")}
              </button>
            ) : null}
          </div>

          {/* Mobile scroll | Desktop wrap */}
          <div className="mt-3 flex flex-nowrap gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
            {filteredTags.map((tg) => {
              const count = tagsWithCount.find(([x]) => x === tg)?.[1] ?? 0;
              const active = tag === tg;

              return (
                <button
                  key={tg}
                  onClick={() => setTag((cur) => (cur === tg ? null : tg))}
                  className={`whitespace-nowrap rounded-full px-3 py-2 text-xs transition ${
                    active
                      ? "border border-white/15 bg-white/15 text-white ring-1 ring-white/20"
                      : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                  title={t(locale, `${count} projetos`, `${count} projects`)}
                >
                  {tg}
                  <span className={active ? "text-white/70" : "text-white/50"}>
                    {" "}
                    · {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p) => (
          <div key={p.slug} className="relative">
            {p.status === "private" ? (
              <div className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                NDA
              </div>
            ) : null}

            <ProjectCard project={p} locale={locale} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatPill({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80">
      <span className="text-white/60">{label}</span>
      <span className="rounded-full border border-white/10 bg-black/30 px-2 py-0.5 text-[11px] text-white/85">
        {value}
      </span>
    </span>
  );
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  options: Array<[T, string]>;
}) {
  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
      {options.map(([v, label]) => {
        const active = v === value;
        return (
          <button
            key={v}
            onClick={() => onChange(v)}
            className={`rounded-full px-4 py-2 text-xs transition ${
              active
                ? "border border-white/15 bg-white/15 text-white ring-1 ring-white/20"
                : "text-white/80 hover:bg-white/10 hover:text-white"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}