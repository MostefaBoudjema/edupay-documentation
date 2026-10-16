'use client';

import { useLanguage } from '../i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ sectionTitle, itemLabel }) {
  const { t } = useLanguage();

  return (
    <header className="header" id="main-header">
      <div className="header-left">
        <button
          className="mobile-menu-btn"
          onClick={() => {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            sidebar?.classList.toggle('open');
            overlay?.classList.toggle('active');
          }}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          ☰
        </button>
        <nav className="breadcrumb" id="breadcrumb">
          <span>{t.breadcrumbHome}</span>
          {sectionTitle && (
            <>
              <span className="breadcrumb-separator">›</span>
              <span>{sectionTitle}</span>
            </>
          )}
          {itemLabel && (
            <>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-active">{itemLabel}</span>
            </>
          )}
        </nav>
      </div>
      <div className="header-right">
        <div className="header-search">
          <input type="text" placeholder={t.searchHeaderPlaceholder} id="header-search-input" />
        </div>
        <LanguageSwitcher />
        <div className="header-avatar" title="Administrateur" id="user-avatar">
          AD
        </div>
      </div>
    </header>
  );
}
