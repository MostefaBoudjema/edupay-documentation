'use client';

import { useState, useMemo, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionList from './components/QuestionList';
import VideoPlayer from './components/VideoPlayer';
import { sidebarSections } from './data/questions';
import { useLanguage } from './i18n/LanguageContext';

export default function Home() {
  const [activeItem, setActiveItem] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const { t, tSection, tItem } = useLanguage();

  // Find the current section and item data based on activeItem
  const { currentSection, currentItem, currentQuestions } = useMemo(() => {
    if (!activeItem) return { currentSection: null, currentItem: null, currentQuestions: [] };

    for (const section of sidebarSections) {
      // Check if it's a top-level section (like Dashboard)
      if (section.id === activeItem && section.isTopLevel) {
        return {
          currentSection: section,
          currentItem: null,
          currentQuestions: section.questions || [],
        };
      }

      // Check items within the section
      if (section.items) {
        const item = section.items.find((i) => i.id === activeItem);
        if (item) {
          return {
            currentSection: section,
            currentItem: item,
            currentQuestions: item.questions || [],
          };
        }
      }
    }

    return { currentSection: null, currentItem: null, currentQuestions: [] };
  }, [activeItem]);

  const handleItemClick = useCallback((itemId) => {
    setActiveItem(itemId);
    setSelectedQuestion(null);

    // Close mobile sidebar
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('mobile-overlay');
    sidebar?.classList.remove('open');
    overlay?.classList.remove('active');
  }, []);

  const handleQuestionClick = useCallback((question) => {
    setSelectedQuestion(question);
  }, []);

  const handleBackToQuestions = useCallback(() => {
    setSelectedQuestion(null);
  }, []);

  // Determine breadcrumb data
  const sectionTitle = currentSection ? tSection(currentSection.id) : null;
  const itemLabel = currentItem ? tItem(currentItem.id) : (currentSection?.isTopLevel ? tSection(currentSection.id) : null);

  const listTitle = currentItem ? tItem(currentItem.id) : (currentSection ? tSection(currentSection.id) : '');

  return (
    <div className="app-layout" id="app-layout">
      {/* Mobile overlay */}
      <div
        className="mobile-overlay"
        id="mobile-overlay"
        onClick={() => {
          document.getElementById('sidebar')?.classList.remove('open');
          document.getElementById('mobile-overlay')?.classList.remove('active');
        }}
      />

      {/* Sidebar */}
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} onQuestionClick={handleQuestionClick} />

      {/* Main Content */}
      <main className="main-content" id="main-content">
        <Header sectionTitle={sectionTitle} itemLabel={itemLabel} />

        <div className="content-area" id="content-area">
          {!activeItem ? (
            <WelcomeScreen />
          ) : selectedQuestion ? (
            <VideoPlayer question={selectedQuestion} onBack={handleBackToQuestions} />
          ) : (
            <QuestionList
              questions={currentQuestions}
              title={listTitle}
              subtitle={t.selectQuestion}
              onQuestionClick={handleQuestionClick}
            />
          )}
        </div>
      </main>
    </div>
  );
}
