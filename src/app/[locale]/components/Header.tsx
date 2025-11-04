import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Image from 'next/image';
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";

export default function Header() {
  const t = useTranslations("nav");

  return (
  <header className="fixed inset-x-0 top-0 z-50 bg-primary backdrop-blur supports-backdrop-filter:bg-primary/80 border-b border-secondary/10 shadow-sm">
      <nav className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-display text-2xl tracking-tight text-secondary">
            <Image src="/logo-clar.png" alt="Aequalis Advocades Logo" width={40} height={40} />
            <span className="">Aequalis Advocades</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium hover:opacity-80 text-secondary">{t("home")}</Link>
            <Link href="/services" className="font-medium hover:opacity-80 text-secondary">{t("services")}</Link>
            <Link href="/about" className="font-medium hover:opacity-80 text-secondary">{t("about")}</Link>
            <Link href="/contact" className="font-medium hover:opacity-80 text-secondary">{t("contact")}</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
