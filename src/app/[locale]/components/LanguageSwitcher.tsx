"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales } from "@/i18n/config";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 text-xs">
      {locales.map((l) => {
        const isActive = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => router.replace(pathname || "/", { locale: l })}
            disabled={isActive}
            className={`rounded-full px-3 py-1 border transition-colors ${
              isActive
                ? "bg-secondary text-primary border-border cursor-default"
                : "bg-primary text-white border-secondary hover:bg-secondary/10 cursor-pointer"
            }`}
            aria-current={isActive ? "true" : undefined}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
