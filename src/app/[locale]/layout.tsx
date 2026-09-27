import "../globals.css";

import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteBackground from "@/components/SiteBackground";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://tomkelve.com"),
  title: {
    default: "Tom Kelve | Azure & Power Platform Architect",
    template: "%s | Tom Kelve",
  },
  description:
    "Arquiteto de Soluções Azure & Power Platform — integração enterprise, AI/Automation, governança e escalabilidade.",
  authors: [{ name: "Tom Kelve", url: "https://tomkelve.com" }],
  creator: "Tom Kelve",
  openGraph: {
    type: "website",
    siteName: "Tom Kelve",
    title: "Tom Kelve | Azure & Power Platform Architect",
    description:
      "Arquiteto de Soluções Azure & Power Platform — integração enterprise, AI/Automation, governança e escalabilidade.",
    images: [
      {
        url: `/og?title=Azure+%26+Power+Platform+Architect&subtitle=tomkelve.com`,
        width: 1200,
        height: 630,
        alt: "Tom Kelve — Azure & Power Platform Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom Kelve | Azure & Power Platform Architect",
    description:
      "Arquiteto de Soluções Azure & Power Platform — integração enterprise, AI/Automation, governança e escalabilidade.",
    images: [`/og?title=Azure+%26+Power+Platform+Architect&subtitle=tomkelve.com`],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={syne.variable}>
      <body className={`min-h-screen bg-zinc-950 text-zinc-50 ${syne.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {/* ✅ Background fixo atrás do site */}
          <SiteBackground />

          <Header />

          <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-24">
            {children}
          </main>

          <Footer />

          {/* ✅ Botão flutuante (fora do main para não ser “cortado”) */}
          <FloatingWhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}