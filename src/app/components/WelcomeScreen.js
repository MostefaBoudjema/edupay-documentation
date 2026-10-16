'use client';

import { getTotalQuestions, getTotalVideos, getTotalModules } from '../data/questions';
import { useLanguage } from '../i18n/LanguageContext';

export default function WelcomeScreen() {
  const { t } = useLanguage();
  return (
    <div className="welcome-container" id="welcome-screen">
      <h1 className="welcome-title">{t.welcomeTitle}</h1>
      <p className="welcome-subtitle">
        {t.welcomeSubtitle}
      </p>
      <div className="welcome-stats">
        <div className="welcome-stat">
          <div className="welcome-stat-value">{getTotalModules()}</div>
          <div className="welcome-stat-label">{t.statModules}</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value">{getTotalQuestions()}</div>
          <div className="welcome-stat-label">{t.statQuestions}</div>
        </div>
        <div className="welcome-stat">
          <div className="welcome-stat-value">{getTotalVideos()}</div>
          <div className="welcome-stat-label">{t.statVideos}</div>
        </div>
      </div>
    </div>
  );
}
