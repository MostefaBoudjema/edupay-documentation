import './globals.css';
import { LanguageProvider } from './i18n/LanguageContext';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata = {
  title: 'EduPay Documentation22 - Guide Interactif',
  description:
    'Documentation interactive de l\'application EduPay avec des tutoriels vidéo pour la gestion scolaire, les finances, le CRM, les paramètres et la sécurité.',
  keywords: ['EduPay', 'documentation', 'gestion scolaire', 'paiements', 'tutoriel', 'vidéo'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
