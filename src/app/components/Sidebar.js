'use client';

import { useState, useMemo } from 'react';
import { sidebarSections, getTotalQuestions, getTotalModules } from '../data/questions';
import { useLanguage } from '../i18n/LanguageContext';

export default function Sidebar({ activeItem, onItemClick }) {
  const [collapsedSections, setCollapsedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const { t, tSection, tItem, tQuestion } = useLanguage();

  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Filter items based on search
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sidebarSections;

    const query = searchQuery.toLowerCase();
    return sidebarSections
      .map((section) => {
        const sectionTitle = tSection(section.id);

        // Check top-level questions
        const matchedTopQuestions = section.questions?.filter((q) => {
          const translated = tQuestion(q.id);
          return (
            translated?.question?.toLowerCase().includes(query) ||
            q.tags?.some((tag) => tag.toLowerCase().includes(query))
          );
        });

        // Check items and their questions
        const matchedItems = section.items
          ?.map((item) => {
            const itemLabel = tItem(item.id);
            const matchedQuestions = item.questions?.filter((q) => {
              const translated = tQuestion(q.id);
              return (
                translated?.question?.toLowerCase().includes(query) ||
                q.tags?.some((tag) => tag.toLowerCase().includes(query)) ||
                itemLabel.toLowerCase().includes(query)
              );
            });
            if (matchedQuestions?.length > 0 || itemLabel.toLowerCase().includes(query)) {
              return { ...item, questions: matchedQuestions || item.questions };
            }
            return null;
          })
          .filter(Boolean);

        if ((matchedTopQuestions && matchedTopQuestions.length > 0) || (matchedItems && matchedItems.length > 0)) {
          return {
            ...section,
            questions: matchedTopQuestions || section.questions,
            items: matchedItems || section.items,
          };
        }

        if (sectionTitle.toLowerCase().includes(query)) {
          return section;
        }

        return null;
      })
      .filter(Boolean);
  }, [searchQuery, tSection, tItem, tQuestion]);

  return (
    <aside className="sidebar" id="sidebar">
      {/* Logo / Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">E</div>
          <div className="logo-text">
            <span className="logo-title">{t.appName}</span>
            <span className="logo-subtitle">{t.appSubtitle}</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            id="sidebar-search"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {filteredSections.map((section) => (
          <div className="nav-section" key={section.id}>
            {section.isTopLevel ? (
              <div
                className={`nav-item ${activeItem === section.id ? 'active' : ''}`}
                onClick={() => onItemClick(section.id)}
                id={`nav-${section.id}`}
                style={{ padding: '11px 20px', marginBottom: '4px' }}
              >
                <span className="nav-item-icon">{section.icon}</span>
                <span className="nav-item-text" style={{ fontWeight: 500 }}>
                  {tSection(section.id)}
                </span>
              </div>
            ) : (
              <>
                <div className="nav-section-header" onClick={() => toggleSection(section.id)}>
                  <span className="nav-section-title">{tSection(section.id)}</span>
                  <span className={`nav-section-chevron ${collapsedSections[section.id] ? 'collapsed' : ''}`}>▾</span>
                </div>

                <div className={`nav-section-items ${collapsedSections[section.id] ? 'collapsed' : ''}`}>
                  {section.items?.map((item) => (
                    <div
                      key={item.id}
                      className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                      onClick={() => onItemClick(item.id)}
                      id={`nav-${item.id}`}
                    >
                      <span className="nav-item-icon">{item.icon}</span>
                      <span className="nav-item-text">{tItem(item.id)}</span>
                      {item.badge !== undefined && <span className="nav-item-badge">{item.badge}</span>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>

      {/* Footer Stats */}
      <div
        style={{
          padding: '16px 20px',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: 'var(--text-muted)',
          flexShrink: 0,
        }}
      >
        <span>{getTotalModules()} {t.modules}</span>
        <span>{getTotalQuestions()} {t.questions}</span>
      </div>
    </aside>
  );
}
