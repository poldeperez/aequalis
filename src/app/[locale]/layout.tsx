import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';
import {Locale, isLocale} from '@/i18n/config';
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../globals.css";


export const metadata: Metadata = {
  title: "Aequalis Advocades",
  description: "Law firm specialized in immigration law in Spain.",
  icons: { icon: "/favicon.ico" },
};

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
