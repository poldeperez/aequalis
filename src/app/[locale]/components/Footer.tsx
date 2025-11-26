import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';

export default async function Footer() {
  const t = await getTranslations();

  return (
    <footer className="bg-primary border-t border-primary/20">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-secondary">
              Aequalis Advocades
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a 
                href="mailto:gemma@aequalisadvocades.com" 
                className="text-secondary/70 hover:text-secondary transition-colors flex items-start gap-2"
              >
                <svg className="w-6 h-6 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>gemma@aequalisadvocades.com</span>
              </a>
              <a 
                href="tel:+34695595530" 
                className="text-secondary/70 hover:text-secondary transition-colors flex items-start gap-2"
              >
                <svg className="w-6 h-6 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+34 695 595 530</span>
              </a>
              <div className="text-secondary/70 flex items-center gap-2">
                <svg className="w-6 h-6 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Carrer Burriac, 47, Local<br />
                  08303 Mataró, Barcelona
                </span>
              </div>
              <a 
                href="https://instagram.com/aequalisadvocades" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/70 hover:text-secondary transition-colors flex items-center gap-2"
              >
                <svg className="w-6 h-6 text-secondary mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25}></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}></line>
                </svg>
                <span>@aequalisadvocades</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:justify-self-end space-y-4">
            <nav className="flex flex-col gap-3 text-sm">
              <Link 
                href="/" 
                className="text-secondary/70 font-bold hover:text-secondary transition-colors"
              >
                {t("nav.home")}
              </Link>
              <Link 
                href="/services" 
                className="text-secondary/70  font-bold hover:text-secondary transition-colors"
              >
                {t("nav.services")}
              </Link>
              <Link 
                href="/about" 
                className="text-secondary/70 font-bold hover:text-secondary transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link 
                href="/contact" 
                className="text-secondary/70 font-bold hover:text-secondary transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary/60">
          <p>
            © {new Date().getFullYear()} Aequalis Advocades. {t("privacy.rights")} Created by <a href="https://dznode.com" target="_blank" className="font-bold text-white/80 hover:text-white transition-colors"> Dz node</a>.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/legal" 
              className="hover:text-secondary transition-colors"
            >
              {t("legal.title")}
            </Link>
            <Link 
              href="/privacy" 
              className="hover:text-secondary transition-colors"
            >
              {t("privacy.title")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
