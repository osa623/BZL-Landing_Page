import { createContext, useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const LanguageContext = createContext();
const LANGUAGE_STORAGE_KEY = 'language';

function normalizeLanguage(lang) {
  if (lang == null) return 'en';
  const value = String(lang)
    .trim()
    .toLowerCase()
    .replace(/^['\"]+|['\"]+$/g, '')
    .replace(/_/g, '-');

  if (value === 'si' || value === 'si-lk' || value === 'sinhala' || value.startsWith('si-')) {
    return 'si';
  }

  return 'en';
}

function getInitialLanguage() {
  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (fromQuery !== null) {
    return normalizeLanguage(fromQuery);
  }

  try {
    const fromStorage = normalizeLanguage(localStorage.getItem(LANGUAGE_STORAGE_KEY));
    if (fromStorage === 'si' || fromStorage === 'en') return fromStorage;
  } catch {
    // Ignore storage access issues and continue to other fallbacks.
  }

  const fromHtml = normalizeLanguage(document.documentElement.lang);
  if (fromHtml === 'si') return 'si';

  const fromNavigator = normalizeLanguage(navigator.language);
  if (fromNavigator === 'si') return 'si';

  return 'en';
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryLanguage = searchParams.get('lang');
  const language = normalizeLanguage(queryLanguage ?? getInitialLanguage());

  useEffect(() => {
    if (queryLanguage !== null) return;

    const next = new URLSearchParams(searchParams);
    next.set('lang', language);
    setSearchParams(next, { replace: true });
  }, [queryLanguage, language, searchParams, setSearchParams]);

  useEffect(() => {
    const next = normalizeLanguage(language);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    } catch {
      // Ignore storage access issues.
    }
    document.documentElement.lang = next;
  }, [language]);

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'si' : 'en';
    const next = new URLSearchParams(searchParams);
    next.set('lang', nextLanguage);
    setSearchParams(next, { replace: true });
  };

  const setLanguageTo = (lang) => {
    const normalized = normalizeLanguage(lang);
    const next = new URLSearchParams(searchParams);
    next.set('lang', normalized);
    setSearchParams(next, { replace: true });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: setLanguageTo }}>
      {children}
    </LanguageContext.Provider>
  );
}
