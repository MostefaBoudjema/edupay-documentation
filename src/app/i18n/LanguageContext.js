'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import fr from './locales/fr';
import en from './locales/en';
import ar from './locales/ar';

const locales = { fr, en, ar };
const STORAGE_KEY = 'edupay-docs-lang';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState('fr');
  const [t, setT] = useState(fr);

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && locales[saved]) {
      setLocaleState(saved);
      setT(locales[saved]);
      document.documentElement.lang = saved;
      document.documentElement.dir = locales[saved].dir;
    }
  }, []);

  const setLocale = useCallback((newLocale) => {
    if (locales[newLocale]) {
      setLocaleState(newLocale);
      setT(locales[newLocale]);
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = locales[newLocale].dir;
    }
  }, []);

  // Translate a question by id
  const tQuestion = useCallback(
    (questionId) => {
      // Check section-level questions first (dashboard)
      for (const sectionKey of Object.keys(t.sections)) {
        const sectionQuestions = t.sections[sectionKey]?.questions;
        if (sectionQuestions && sectionQuestions[questionId]) {
          return sectionQuestions[questionId];
        }
      }
      // Then check q map
      return t.q?.[questionId] || null;
    },
    [t]
  );

  // Translate a sidebar section title
  const tSection = useCallback(
    (sectionId) => {
      return t.sections?.[sectionId]?.title || sectionId;
    },
    [t]
  );

  // Translate a sidebar item label
  const tItem = useCallback(
    (itemId) => {
      return t.items?.[itemId]?.label || itemId;
    },
    [t]
  );

  const availableLocales = Object.keys(locales).map((key) => ({
    code: key,
    name: locales[key].langName,
    flag: locales[key].langFlag,
    dir: locales[key].dir,
  }));

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        tQuestion,
        tSection,
        tItem,
        availableLocales,
        dir: t.dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
