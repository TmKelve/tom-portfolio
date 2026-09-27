import { Link } from '@/i18n/navigation';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-14 border-t border-white/[0.06]">
      {/* Subtle top highlight */}
      <div className="pointer-events-none h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Left: brand + copyright */}
          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-300">Tom Kelve</p>
            <p className="text-xs text-zinc-600">
              © {year} · Azure &amp; Power Platform Architect
            </p>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-5 text-sm text-zinc-500">
            <Link href="/about" className="transition hover:text-zinc-200">
              Sobre
            </Link>
            <Link href="/projects" className="transition hover:text-zinc-200">
              Projetos
            </Link>
            <Link href="/contact" className="transition hover:text-zinc-200">
              Contato
            </Link>
            <div className="h-3.5 w-px bg-white/10" aria-hidden="true" />
            <a
              href="https://www.linkedin.com/in/tom-kelve/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tomkelve"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-zinc-200"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
