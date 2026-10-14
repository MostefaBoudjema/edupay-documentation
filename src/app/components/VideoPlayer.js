'use client';

import { useLanguage } from '../i18n/LanguageContext';

export default function VideoPlayer({ question, onBack }) {
  const { t, tQuestion } = useLanguage();
  if (!question) return null;

  const transQ = tQuestion(question.id) || question;

  return (
    <div className="video-container" id="video-player">
      <button className="video-back-btn" onClick={onBack} id="video-back-btn">
        {t.backToQuestions}
      </button>

      <h2 className="video-question-title">{transQ.question}</h2>

      <div className="video-wrapper" id="video-wrapper">
        {question.videoUrl ? (
          <video
            key={question.videoUrl}
            className="video-player"
            id="video-player-element"
            controls
            autoPlay
            muted
            playsInline
            style={{ width: '100%', borderRadius: '12px', background: '#000', display: 'block' }}
          >
            <source src={question.videoUrl} type="video/mp4" />
            {t.videoNotSupported || 'Votre navigateur ne supporte pas la lecture vidéo.'}
          </video>
        ) : (
          <div className="video-placeholder">
            <div className="video-placeholder-icon" id="video-play-button">▶</div>
            <p className="video-placeholder-text">{t.clickToPlay}</p>
          </div>
        )}
      </div>

      <div className="video-meta" id="video-meta">
        <h3 className="video-meta-title">{t.descriptionLabel}</h3>
        <p className="video-meta-description">{transQ.description}</p>
        <div className="video-meta-tags">
          {question.tags?.map((tag) => (
            <span key={tag} className="video-meta-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
