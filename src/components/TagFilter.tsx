'use client';

export default function TagFilter({
  tags,
  active,
  onChange,
  locale
}: {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
  locale: 'pt-br' | 'en';
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange('')}
        className={`rounded-full px-4 py-2 text-xs border ${
          active === ''
            ? 'border-white/20 bg-white/15 text-white'
            : 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'
        }`}
      >
        {locale === 'pt-br' ? 'Todos' : 'All'}
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(tag)}
          className={`rounded-full px-4 py-2 text-xs border ${
            active === tag
              ? 'border-white/20 bg-white/15 text-white'
              : 'border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}