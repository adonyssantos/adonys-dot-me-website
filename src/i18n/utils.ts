import { ui } from "./ui";

export const LANGUAGES = {
  en: "English",
  es: "Español",
} as const;

export const LANGUAGES_KEYS = Object.keys(LANGUAGES) as LanguageKey[];

export const DEFAULT_LANG = "en";

export type LanguageKey = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as LanguageKey;
  return DEFAULT_LANG;
}

export function useTranslations(lang?: LanguageKey) {
  return function t(
    key: keyof (typeof ui)[typeof DEFAULT_LANG],
    ...args: any[]
  ) {
    let translation: string = (ui[lang ?? DEFAULT_LANG] as typeof ui[typeof DEFAULT_LANG])[key] || ui[DEFAULT_LANG][key];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, args[i]);
      }
    }
    return translation;
  };
}

export function pathNameIsInLanguage(pathname: string, lang: LanguageKey) {
  return pathname.startsWith(`/${lang}`) || (lang === DEFAULT_LANG && !pathNameStartsWithLanguage(pathname));
}

function pathNameStartsWithLanguage(pathname: string) {
  let startsWithLanguage = false;
  const languages = Object.keys(LANGUAGES);

  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    if (pathname.startsWith(`/${lang}`)) {
      startsWithLanguage = true;
      break;
    }
  }

  return startsWithLanguage;
}

export function getLocalizedPathname(pathname: string, lang: LanguageKey) {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(LANGUAGES).join('|');
    const regex = new RegExp(`^\/(${availableLanguages})`);
    return pathname.replace(regex, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}
