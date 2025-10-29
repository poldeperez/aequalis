import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");

  return (
  <header className="fixed inset-x-0 top-0 z-50 bg-primary backdrop-blur supports-backdrop-filter:bg-primary/80 border-b border-secondary/10 shadow-sm">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-2xl tracking-tight text-secondary">
            Aequalis
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium hover:opacity-80">{t("home")}</Link>
            <Link href="/services" className="font-medium hover:opacity-80">{t("services")}</Link>
            <Link href="/about" className="font-medium hover:opacity-80">{t("about")}</Link>
            <Link href="/contact" className="font-medium hover:opacity-80">{t("contact")}</Link>
          </div>
        </div>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
