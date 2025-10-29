export const locales = ["ca", "es", "en"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "es";

export function isLocale(input: string): input is Locale {
  return (locales as readonly string[]).includes(input);
}
