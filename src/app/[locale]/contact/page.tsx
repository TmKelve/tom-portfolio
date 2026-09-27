import React from 'react';
import {setRequestLocale} from 'next-intl/server';
import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Contact' : 'Contato',
    description: isEn
      ? 'Get in touch via WhatsApp, email or LinkedIn.'
      : 'Entre em contato via WhatsApp, e-mail ou LinkedIn.',
    alternates: {canonical: `https://tomkelve.com/${locale}/contact`},
  };
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.12 1.508 5.855L.057 23.882a.5.5 0 0 0 .611.611l6.115-1.452A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.927 0-3.727-.5-5.29-1.374l-.38-.215-3.927.933.947-3.866-.233-.388A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function IconEmail() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
  );
}

type CardConfig = {
  Icon: () => React.ReactElement;
  colorBg: string;
  colorRing: string;
  colorText: string;
  colorCta: string;
  colorCtaHover: string;
  title: string;
  description: string;
  href: string;
  cta: string;
};

function ContactCard({ card }: { card: CardConfig }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm transition duration-200 hover:bg-white/[0.08] hover:border-white/15"
    >
      {/* Icon + arrow */}
      <div className="flex items-start justify-between">
        <div className={`h-12 w-12 rounded-xl ${card.colorBg} ring-1 ${card.colorRing} flex items-center justify-center ${card.colorText}`}>
          <card.Icon />
        </div>
        <span className="text-white/30 transition group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200">
          <ArrowUpRight />
        </span>
      </div>

      {/* Text */}
      <div className="flex-1 space-y-1.5">
        <h2 className="font-syne text-lg font-bold text-white/95">{card.title}</h2>
        <p className="text-sm text-white/55 leading-relaxed">{card.description}</p>
      </div>

      {/* CTA pill */}
      <div className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold transition ${card.colorCta} group-hover:${card.colorCtaHover}`}>
        {card.cta}
      </div>
    </a>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Contact');

  const phoneDigits = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const email = process.env.NEXT_PUBLIC_EMAIL ?? '';
  const linkedinUrl = 'https://www.linkedin.com/in/tom-kelve/';

  const whatsappUrl = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    t('whatsapp.prefill')
  )}`;

  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    t('email.subject')
  )}&body=${encodeURIComponent(t('email.body'))}`;

  const cards: CardConfig[] = [
    {
      Icon: IconWhatsApp,
      colorBg: 'bg-emerald-500/15',
      colorRing: 'ring-emerald-400/25',
      colorText: 'text-emerald-400',
      colorCta: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
      colorCtaHover: 'bg-emerald-400/20',
      title: t('whatsapp.title'),
      description: t('whatsapp.desc'),
      href: whatsappUrl,
      cta: t('whatsapp.cta'),
    },
    {
      Icon: IconEmail,
      colorBg: 'bg-sky-500/15',
      colorRing: 'ring-sky-400/25',
      colorText: 'text-sky-400',
      colorCta: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
      colorCtaHover: 'bg-sky-400/20',
      title: t('email.title'),
      description: t('email.desc'),
      href: emailUrl,
      cta: t('email.cta'),
    },
    {
      Icon: IconLinkedIn,
      colorBg: 'bg-blue-500/15',
      colorRing: 'ring-blue-400/25',
      colorText: 'text-blue-400',
      colorCta: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
      colorCtaHover: 'bg-blue-400/20',
      title: t('linkedin.title'),
      description: t('linkedin.desc'),
      href: linkedinUrl,
      cta: t('linkedin.cta'),
    },
  ];

  return (
    <section className="mx-auto w-full max-w-4xl px-4 pb-10 pt-6 text-white space-y-10">

      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ background: 'radial-gradient(55% 35% at 50% 0%, rgba(14,165,233,0.08), transparent 70%)' }}
      />

      {/* HERO */}
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse-dot" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-sky-400">
            {locale === 'en' ? 'Get in touch' : 'Entre em contato'}
          </span>
        </div>

        <div className="space-y-3">
          <h1 className="font-syne text-5xl sm:text-6xl font-extrabold tracking-tight leading-none text-white">
            {t('title')}
          </h1>
          <p className="max-w-xl text-white/55 text-sm leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <ContactCard key={card.title} card={card} />
        ))}
      </div>

      {/* Note */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm space-y-3">
        <p className="text-sm text-white/60 leading-relaxed">{t('note')}</p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs pt-1 border-t border-white/8">
          <span className="text-white/45">
            <span className="font-semibold text-white/70">WhatsApp</span>{' '}
            +55 11 914920770
          </span>
          <span className="text-white/45">
            <span className="font-semibold text-white/70">Email</span>{' '}
            {email}
          </span>
        </div>
      </div>

    </section>
  );
}
