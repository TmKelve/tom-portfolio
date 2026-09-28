'use client';

import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export default function NeonLogo() {
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <Link
      href="/"
      aria-label={locale === 'en' ? 'Tom Kelve home' : 'Página inicial de Tom Kelve'}
      className="brand-logo"
      onClick={(event) => {
        if (isHome && typeof window !== 'undefined') {
          event.preventDefault();
          window.scrollTo({top: 0, behavior: 'smooth'});
          history.replaceState(null, '', window.location.pathname);
        }
      }}
    >
      <svg
        className="brand-logo-mark"
        viewBox="0 0 64 64"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tk-accent" x1="34" y1="8" x2="56" y2="23" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#7C3CFF" />
            <stop offset=".52" stopColor="#167CFF" />
            <stop offset="1" stopColor="#21E6E6" />
          </linearGradient>
        </defs>

        <path
          d="M5 9.5h27v10H24.5v33.5L14.5 47V19.5H5z"
          fill="currentColor"
        />
        <path
          d="M35 36.5 44.5 27 59 46H48.5L35 36.5Z"
          fill="currentColor"
        />
        <path
          d="M34 9.5h23L45.5 23 34 9.5Z"
          fill="url(#tk-accent)"
        />
      </svg>

      <span className="brand-logo-wordmark" aria-hidden="true">
        <span className="brand-logo-tom">TOM</span>
        <span className="brand-logo-kelve">KELVE</span>
      </span>
    </Link>
  );
}
