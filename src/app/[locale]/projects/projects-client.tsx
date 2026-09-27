'use client';

import {useMemo, useState} from 'react';
import type {Project} from '@/content/projects';
import ProjectCard from '@/components/ProjectCard';
import TagFilter from '@/components/TagFilter';

export default function ProjectsClient({
  locale,
  projects
}: {
  locale: 'pt-br' | 'en';
  projects: Project[];
}) {
  const [activeTag, setActiveTag] = useState('');

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = useMemo(() => {
    if (!activeTag) return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [projects, activeTag]);

  return (
    <div className="space-y-6">
      <TagFilter
        tags={allTags}
        active={activeTag}
        onChange={setActiveTag}
        locale={locale}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} locale={locale} />
        ))}
      </div>
    </div>
  );
}