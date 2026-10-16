'use client';

import { useLanguage } from '../i18n/LanguageContext';
import { useVideoDuration } from '../hooks/useVideoDuration';

/**
 * Renders a single question card with the video duration loaded
 * dynamically from the video file's metadata.
 */
function QuestionCard({ question, index, onQuestionClick }) {
  const { tQuestion } = useLanguage();
  const duration = useVideoDuration(question.videoUrl);
  const transQ = tQuestion(question.id) || question;

  return (
    <div
      key={question.id}
      className="question-card"
      onClick={() => onQuestionClick(question)}
      id={`question-card-${question.id}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="question-play">▶</div>
      <div className="question-info">
        <h3>{transQ.question}</h3>
        <p>{transQ.description}</p>
        <div className="question-duration">{duration}</div>
      </div>
    </div>
  );
}

export default function QuestionList({ questions, title, subtitle, onQuestionClick }) {
  const { t } = useLanguage();

  if (!questions || questions.length === 0) {
    return (
      <div className="empty-state" id="empty-state">
        <div className="empty-state-icon">🔍</div>
        <p className="empty-state-text">{t.noQuestions}</p>
      </div>
    );
  }

  return (
    <div id="question-list">
      <h1 className="content-title">{title}</h1>
      {subtitle && <p className="content-subtitle">{subtitle}</p>}
      <div className="questions-grid">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            index={index}
            onQuestionClick={onQuestionClick}
          />
        ))}
      </div>
    </div>
  );
}
