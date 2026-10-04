'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale, availableLocales } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = availableLocales.find((l) => l.code === locale);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="lang-switcher" ref={dropdownRef} id="language-switcher">
      <button
        className="lang-switcher-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
        id="lang-switcher-toggle"
      >
        <span className="lang-flag">{currentLang?.flag}</span>
        <span className="lang-code">{locale.toUpperCase()}</span>
        <span className="lang-chevron" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          ▾
        </span>
      </button>

      {isOpen && (
        <div className="lang-dropdown" id="lang-dropdown">
          {availableLocales.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${lang.code === locale ? 'active' : ''}`}
              onClick={() => {
                setLocale(lang.code);
                setIsOpen(false);
              }}
              id={`lang-option-${lang.code}`}
            >
              <span className="lang-flag">{lang.flag}</span>
              <span className="lang-name">{lang.name}</span>
              {lang.code === locale && <span className="lang-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
