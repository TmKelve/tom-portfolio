import {getTranslations} from 'next-intl/server';

export default async function FloatingWhatsAppButton() {
  const t = await getTranslations('Contact');

  const phoneDigits = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    t('whatsapp.prefill')
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp.title')}
      title={t('whatsapp.title')}
      className="fixed z-[9999] print:hidden group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white/15"
      style={{
        right: 'calc(1.5rem + env(safe-area-inset-right, 0px))',
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <span className="text-xl">💬</span>
      <span className="text-sm font-semibold">{t('whatsapp.cta')}</span>
    </a>
  );
}