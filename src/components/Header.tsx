'use client';
import {useEffect, useRef, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {List, X} from '@phosphor-icons/react';
import {Link, usePathname} from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';
import NeonLogo from './NeonLogo';
import './hero.css';

export default function Header() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const en = locale === 'en';
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenPath(null);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpenPath(null);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', outside);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);

  const pageLinks = [
    {key: 'about', href: '/about'},
    {key: 'projects', href: '/projects'},
    {key: 'labs', href: '/labs'},
    {key: 'contact', href: '/contact'},
  ] as const;

  const homeAnchors = [
    {key: 'expertise', hash: 'expertise'},
    {key: 'content', hash: 'content'},
  ] as const;

  return (
    <header ref={header} className="site-header">
      <div className="site-header-inner">
        <NeonLogo />
        <nav
          id="main-navigation"
          className={'site-nav' + (open ? ' is-open' : '')}
          aria-label={en ? 'Main navigation' : 'Navegação principal'}
        >
          <Link
            href="/about"
            onClick={() => setOpenPath(null)}
            className="site-nav-link"
            aria-current={pathname === '/about' || pathname.startsWith('/about/') ? 'page' : undefined}
          >
            {t('about')}
          </Link>

          {homeAnchors.slice(0, 1).map(({key, hash}) => (
            <a
              key={key}
              href={'/' + locale + '#' + hash}
              onClick={() => setOpenPath(null)}
              className="site-nav-link"
            >
              {t(key)}
            </a>
          ))}

          <Link
            href="/projects"
            onClick={() => setOpenPath(null)}
            className="site-nav-link"
            aria-current={pathname === '/projects' || pathname.startsWith('/projects/') ? 'page' : undefined}
          >
            {t('projects')}
          </Link>

          {homeAnchors.slice(1).map(({key, hash}) => (
            <a
              key={key}
              href={'/' + locale + '#' + hash}
              onClick={() => setOpenPath(null)}
              className="site-nav-link"
            >
              {t(key)}
            </a>
          ))}

          {pageLinks.slice(2).map(({key, href}) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpenPath(null)}
              className="site-nav-link"
              aria-current={pathname === href || pathname.startsWith(href + '/') ? 'page' : undefined}
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <LocaleSwitcher />
          <button
            ref={toggle}
            type="button"
            className="mobile-menu-toggle"
            aria-label={open ? (en ? 'Close menu' : 'Fechar menu') : (en ? 'Open menu' : 'Abrir menu')}
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpenPath(open ? null : pathname)}
          >
            {open ? <X size={22} /> : <List size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
