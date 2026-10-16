'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { sidebarSections, getTotalQuestions, getTotalModules } from '../data/questions';
import { useLanguage } from '../i18n/LanguageContext';
import logo from '../logo.png';
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';


export default function Sidebar({ activeItem, onItemClick, onQuestionClick }) {
  const [collapsedSections, setCollapsedSections] = useState({});
  const [expandedItems, setExpandedItems] = useState({});
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { t, tSection, tItem, tQuestion } = useLanguage();

  const toggleSection = (sectionId) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleItemQuestions = (itemId, e) => {
    e.stopPropagation();
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
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

  // Truncate question text to show only the start
  const truncateQuestion = (text, maxLength = 42) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength).trimEnd() + '…' : text;
  };

  // Handle sub-item (question) click: set parent as active item + open video
  const handleSubItemClick = (q, parentId) => {
    setActiveQuestionId(q.id);
    onItemClick(parentId);
    onQuestionClick?.(q);
  };

  return (
    <aside className="sidebar" id="sidebar">
      {/* Logo / Header */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <Image src={logo} alt="EduPay" width={36} height={36} style={{ flexShrink: 0, borderRadius: 8 }} />
          <div className="logo-text">
            <span className="logo-title">{t.appName}</span>
            <span className="logo-subtitle">{t.appSubtitle}</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="sidebar-search">
        <div className="search-wrapper">
          <MagnifyingGlassIcon className="search-icon" style={{ width: 16, height: 16, flexShrink: 0 }} />
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
              <>
                <div
                  className={`nav-item ${activeItem === section.id ? 'active' : ''}`}
                  onClick={() => onItemClick(section.id)}
                  id={`nav-${section.id}`}
                  style={{ padding: '11px 20px', marginBottom: '4px' }}
                >
                  {section.icon && <section.icon className="nav-item-icon" style={{ width: 18, height: 18, flexShrink: 0 }} />}
                  <span className="nav-item-text" style={{ fontWeight: 500 }}>
                    {tSection(section.id)}
                  </span>
                  {section.questions?.length > 0 && (
                    <span
                      className="nav-subitems-toggle"
                      onClick={(e) => toggleItemQuestions(section.id, e)}
                      title="Voir les questions"
                    >
                      {expandedItems[section.id]
                        ? <ChevronUpIcon style={{ width: 14, height: 14 }} />
                        : <ChevronDownIcon style={{ width: 14, height: 14 }} />}
                    </span>
                  )}
                </div>

                {/* Sub-questions for top-level section */}
                {section.questions?.length > 0 && expandedItems[section.id] && (
                  <div className="nav-subitems">
                    {section.questions.map((q, idx) => {
                      const translated = tQuestion(q.id);
                      const questionText = translated?.question || q.question;
                      return (
                        <div
                          key={q.id}
                          className={`nav-subitem ${activeQuestionId === q.id ? 'active' : ''}`}
                          onClick={() => handleSubItemClick(q, section.id)}
                          id={`nav-q-${q.id}`}
                          title={questionText}
                        >
                          <span className="nav-subitem-index">{idx + 1}</span>
                          <span className="nav-subitem-text">{truncateQuestion(questionText)}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="nav-section-header" onClick={() => toggleSection(section.id)}>
                  <span className="nav-section-title">{tSection(section.id)}</span>
                  <span className={`nav-section-chevron ${collapsedSections[section.id] ? 'collapsed' : ''}`}>
                    {collapsedSections[section.id]
                      ? <ChevronDownIcon style={{ width: 14, height: 14 }} />
                      : <ChevronUpIcon style={{ width: 14, height: 14 }} />}
                  </span>
                </div>

                <div className={`nav-section-items ${collapsedSections[section.id] ? 'collapsed' : ''}`}>
                  {section.items?.map((item) => (
                    <div key={item.id}>
                      {/* Item row */}
                      <div
                        className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                        onClick={() => onItemClick(item.id)}
                        id={`nav-${item.id}`}
                      >
                        {item.icon && <item.icon className="nav-item-icon" style={{ width: 18, height: 18, flexShrink: 0 }} />}
                        <span className="nav-item-text">{tItem(item.id)}</span>
                        {item.badge !== undefined && <span className="nav-item-badge">{item.badge}</span>}
                        {item.questions?.length > 0 && (
                          <span
                            className="nav-subitems-toggle"
                            onClick={(e) => toggleItemQuestions(item.id, e)}
                            title="Voir les questions"
                          >
                            {expandedItems[item.id]
                              ? <ChevronUpIcon style={{ width: 14, height: 14 }} />
                              : <ChevronDownIcon style={{ width: 14, height: 14 }} />}
                          </span>
                        )}
                      </div>

                      {/* Sub-questions list */}
                      {item.questions?.length > 0 && expandedItems[item.id] && (
                        <div className="nav-subitems">
                          {item.questions.map((q, idx) => {
                            const translated = tQuestion(q.id);
                            const questionText = translated?.question || q.question;
                            return (
                              <div
                                key={q.id}
                                className={`nav-subitem ${activeQuestionId === q.id ? 'active' : ''}`}
                                onClick={() => handleSubItemClick(q, item.id)}
                                id={`nav-q-${q.id}`}
                                title={questionText}
                              >
                                <span className="nav-subitem-index">{idx + 1}</span>
                                <span className="nav-subitem-text">{truncateQuestion(questionText)}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}
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
