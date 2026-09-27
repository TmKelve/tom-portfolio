'use client';
import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="locale-switcher" role="group" aria-label={locale === 'en' ? 'Language' : 'Idioma'}>
      {(['pt-br','en'] as const).map(next => <button key={next} type="button" lang={next} aria-label={next === 'en' ? 'English' : 'Português'} aria-pressed={locale === next} onClick={() => router.replace(pathname, {locale:next})}>{next === 'en' ? 'EN' : 'PT'}</button>)}
    </div>
  );
}
