import { useEffect, useState } from "react";

export type Language = "es" | "en" | "fr";

export const languages: Array<{ code: Language; label: string; shortLabel: string }> = [
  { code: "es", label: "Espanol", shortLabel: "ES" },
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "fr", label: "Francais", shortLabel: "FR" },
];

const storageKey = "mobility-os-language";
const languageEvent = "mobility-language-change";

function isLanguage(value: unknown): value is Language {
  return value === "es" || value === "en" || value === "fr";
}

export function initialLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const stored = window.localStorage.getItem(storageKey);
  return isLanguage(stored) ? stored : "es";
}

export function setAppLanguage(language: Language) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(storageKey, language);
  document.documentElement.lang = language;
  window.dispatchEvent(new CustomEvent<Language>(languageEvent, { detail: language }));
}

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("es");

  useEffect(() => {
    const nextLanguage = initialLanguage();
    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;

    const handleLanguageChange = (event: Event) => {
      const next = (event as CustomEvent<Language>).detail;

      if (isLanguage(next)) {
        setLanguageState(next);
        document.documentElement.lang = next;
      }
    };

    window.addEventListener(languageEvent, handleLanguageChange);

    return () => {
      window.removeEventListener(languageEvent, handleLanguageChange);
    };
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    setAppLanguage(next);
  };

  return { language, setLanguage };
}

export function pick<T>(copy: Record<Language, T>, language: Language): T {
  return copy[language] ?? copy.es;
}
