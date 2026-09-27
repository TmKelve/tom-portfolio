'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { Meow_Script } from 'next/font/google';

const meow = Meow_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function NeonLogo() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <Link
      href="/"
      aria-label="Voltar para a Home"
      className="group inline-flex items-start"
      onClick={(e) => {
        // ✅ Se já estiver na Home, volta pro topo e remove #hash
        if (isHome && typeof window !== 'undefined') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.replaceState(null, '', window.location.pathname);
        }
      }}
    >
      <span className={`${meow.className} select-none leading-none`}>
        <span className="neon block text-[28px] sm:text-[30px] tracking-wide">
          Tom
        </span>
        <span className="neon block -mt-[6px] sm:-mt-[8px] ml-[1.05em] text-[28px] sm:text-[30px]">
          Kelve
        </span>
      </span>
    </Link>
  );
}
