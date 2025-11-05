import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';
import {Locale, isLocale} from '@/i18n/config';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../globals.css";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolved = 'then' in params ? await params : params;
  const locale = resolved.locale as Locale;
  
  if (!isLocale(locale)) {
    return {
      title: "Aequalis Advocades",
      description: "Law firm specialized in immigration law in Spain.",
    };
  }

  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  const meta = messages.meta;

  return {
    title: {
      default: meta.entry,
      template: `%s | ${meta.title}`,
    },
    description: meta.description,
    keywords: [
      "abogados extranjería",
      "immigration lawyers",
      "advocats estrangeria",
      "visados España",
      "residencia España",
      "nacionalidad española",
      "homologación títulos",
      "visa Spain",
      "residence permit",
      "Spanish nationality"
    ],
    authors: [{ name: "Aequalis Advocades" }],
    creator: "Aequalis Advocades",
    publisher: "Aequalis Advocades",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: "website",
      locale: locale,
      alternateLocale: ["es", "ca", "en"].filter(l => l !== locale),
      url: `https://www.aequalisadvocades.com/${locale}`,
      title: meta.entry,
      description: meta.description,
      siteName: meta.title,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.entry,
      description: meta.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://www.aequalisadvocades.com/${locale}`,
      languages: {
        'es': '/es',
        'ca': '/ca',
        'en': '/en',
      },
    },
    verification: {
      // Add your verification codes here when you get them
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const resolved = 'then' in params ? await params : params;
  const locale = resolved.locale as Locale;
  if (!isLocale(locale)) notFound();

   // Preload messages on the server for hydration
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
