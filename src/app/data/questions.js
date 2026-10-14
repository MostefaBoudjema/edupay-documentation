// Centralized data for all sidebar sections, their questions, and video info
// Each section corresponds to a sidebar module from the EduPay app

export const sidebarSections = [
  {
    id: 'dashboard',
    title: 'Tableau de Bord',
    icon: '📊',
    isTopLevel: true,
    questions: [
      {
        id: 'dashboard-overview',
        question: 'Comment naviguer dans le tableau de bord ?',
        description: 'Découvrez comment utiliser le tableau de bord principal pour avoir une vue d\'ensemble de votre école.',
        duration: '3:45',
        videoUrl: '/videos/student_list.mp4',
        tags: ['Dashboard', 'Navigation', 'Vue d\'ensemble'],
      },
    ],
  },
  {
    id: 'gestion-scolaire',
    title: 'Gestion Scolaire',
    icon: '🏫',
    items: [
      {
        id: 'eleves',
        label: 'Élèves',
        icon: '🎓',
        badge: 3, // questions.length
        questions: [
          {
            id: 'eleves-list',
            question: 'Comment consulter la liste des élèves ?',
            description: 'Explorez la liste complète des élèves inscrits, avec leurs informations de base et leur statut.',
            duration: '2:10',
            videoUrl: '/videos/student_list.mp4',
            tags: ['Élèves', 'Liste', 'Consultation'],
          },
          {
            id: 'eleves-add',
            question: 'Comment ajouter un nouvel élève ?',
            description: 'Guide étape par étape pour inscrire un nouvel élève dans le système EduPay.',
            duration: '4:30',
            videoUrl: '/videos/create_student.mp4',
            tags: ['Élèves', 'Inscription', 'Ajout'],
          },
          {
            id: 'eleves-search',
            question: 'Comment rechercher et filtrer les élèves ?',
            description: 'Utilisez les filtres avancés pour trouver rapidement un élève par nom, niveau ou statut.',
            duration: '2:30',
            videoUrl: '/videos/search.mp4',
            tags: ['Recherche', 'Filtres', 'Élèves'],
          },
        ],
      },
      {
        id: 'inscriptions',
        label: 'Inscriptions',
        icon: '📋',
        badge: 1, // questions.length
        questions: [
          {
            id: 'inscriptions-new',
            question: 'Comment inscrire un élève pour la nouvelle année ?',
            description: 'Processus complet d\'inscription d\'un élève pour une nouvelle année scolaire.',
            duration: '3:30',
            videoUrl: '/videos/enrollement.mp4',
            tags: ['Inscription', 'Année scolaire', 'Processus'],
          },
        ],
      },
    ],
  },
  {
    id: 'finances',
    title: 'Finances',
    icon: '💰',
    items: [
      {
        id: 'paiements',
        label: 'Paiements',
        icon: '💳',
        badge: 3, // questions.length
        questions: [
          {
            id: 'paiements-record',
            question: 'Comment enregistrer un paiement ?',
            description: 'Enregistrez un paiement de scolarité pour un élève avec suivi du montant et de la méthode.',
            duration: '3:30',
            videoUrl: '/videos/payment.mp4',
            tags: ['Paiements', 'Enregistrement', 'Scolarité'],
          },
          {
            id: 'paiements-receipt',
            question: 'Comment générer un reçu de paiement ?',
            description: 'Créez et imprimez des reçus de paiement pour les parents.',
            duration: '4:20',
            videoUrl: '/videos/receipt.mp4',
            tags: ['Reçus', 'Impression', 'Documents'],
          },
          {
            id: 'paiements-invoice',
            question: 'Comment générer une facture ?',
            description: 'Créez des factures détaillées pour les paiements de scolarité et autres frais.',
            duration: '7:50',
            videoUrl: '/videos/invoice.mp4',
            tags: ['Facture', 'Documents', 'Paiements'],
          },
        ],
      },
      {
        id: 'depenses',
        label: 'Dépenses',
        icon: '📝',
        badge: 1, // questions.length
        questions: [
          {
            id: 'depenses-add',
            question: 'Comment enregistrer une dépense ?',
            description: 'Ajoutez une nouvelle dépense avec catégorie, montant et justificatif.',
            duration: '3:00',
            videoUrl: '/videos/expenses.mp4',
            tags: ['Dépenses', 'Enregistrement', 'Comptabilité'],
          },
        ],
      },
    ],
  },
  {
    id: 'crm',
    title: 'CRM',
    icon: '📈',
    items: [
      {
        id: 'analyse-paiements',
        label: 'Analyse des paiements',
        icon: '📊',
        questions: [
          {
            id: 'analyse-charts',
            question: 'Comment lire les graphiques d\'analyse des paiements ?',
            description: 'Interprétez les graphiques de paiements mensuels, annuels et par niveau.',
            duration: '7:40',
            videoUrl: '/videos/payment_analyses.mp4',
            tags: ['Graphiques', 'Analyse', 'Statistiques'],
          },
        ],
      },
      {
        id: 'frais-restauration',
        label: 'Frais de restauration',
        icon: '🍽️',
        questions: [
          {
            id: 'restauration-config',
            question: 'Comment configurer les frais de restauration ?',
            description: 'Paramétrez les tarifs de cantine et gérez les inscriptions au service de restauration.',
            duration: '5:30',
            videoUrl: '/videos/restauration.mp4',
            tags: ['Restauration', 'Cantine', 'Configuration'],
          },
        ],
      },
      {
        id: 'rapport-mensualites',
        label: 'Rapport des mensualités',
        icon: '📅',
        questions: [
          {
            id: 'mensualites-report',
            question: 'Comment consulter le rapport des mensualités ?',
            description: 'Analysez les mensualités par mois, par niveau et par statut de paiement.',
            duration: '14:30',
            videoUrl: '/videos/monthly_reports.mp4',
            tags: ['Mensualités', 'Rapport', 'Analyse'],
          },
        ],
      },
    ],
  },
  {
    id: 'parametres',
    title: 'Paramètres',
    icon: '⚙️',
    items: [
      {
        id: 'annees-scolaires',
        label: 'Années Scolaires & Tranches',
        icon: '📆',
        badge: 1, // questions.length
        questions: [
          {
            id: 'annees-tranches',
            question: 'Comment configurer les années scolaires et les tranches de paiement ?',
            description: 'Créez une nouvelle année scolaire et définissez les échéanciers de paiement avec montants et dates limites.',
            duration: '5:20',
            videoUrl: '/videos/academic_year_installment.mp4',
            tags: ['Année scolaire', 'Tranches', 'Configuration'],
          },
        ],
      },
      {
        id: 'remises',
        label: 'Remises',
        icon: '🏷️',
        badge: 1, // questions.length
        questions: [
          {
            id: 'remises-create',
            question: 'Comment créer et appliquer des remises ?',
            description: 'Configurez des remises (fratrie, boursier, etc.) et appliquez-les aux élèves.',
            duration: '3:05',
            videoUrl: '/videos/discount.mp4',
            tags: ['Remises', 'Réductions', 'Application'],
          },
        ],
      },
      {
        id: 'parametres-general',
        label: 'Paramètres',
        icon: '⚙️',
        questions: [
          {
            id: 'settings-school',
            question: 'Comment configurer les paramètres de l\'école ?',
            description: 'Personnalisez le nom, logo, adresse et informations de votre établissement.',
            duration: '4:50',
            videoUrl: '/videos/settings.mp4',
            tags: ['Paramètres', 'École', 'Configuration'],
          },
        ],
      },
    ],
  },
  {
    id: 'securite',
    title: 'Sécurité',
    icon: '🔒',
    items: [
      {
        id: 'roles-permissions',
        label: 'Rôles & Permissions',
        icon: '🔑',
        questions: [
          {
            id: 'roles-permissions-manage',
            question: 'Comment gérer les rôles et permissions ?',
            description: 'Définissez des rôles utilisateurs et configurez les permissions d\'accès pour chaque module de l\'application.',
            duration: '5:40',
            videoUrl: '/videos/roles_permissions.mp4',
            tags: ['Rôles', 'Permissions', 'Sécurité', 'Accès'],
          },
        ],
      },
      {
        id: 'journaux-activite',
        label: 'Journaux d\'activité',
        icon: '📜',
        badge: 1, // questions.length
        questions: [
          {
            id: 'logs-view',
            question: 'Comment consulter les journaux d\'activité ?',
            description: 'Surveillez toutes les actions effectuées dans le système pour assurer la traçabilité.',
            duration: '4:40',
            videoUrl: '/videos/activity_logs.mp4',
            tags: ['Journaux', 'Activité', 'Audit'],
          },
        ],
      },
    ],
  },
];

// Helper function to get all questions flat
export function getAllQuestions() {
  const questions = [];
  sidebarSections.forEach((section) => {
    if (section.questions) {
      questions.push(...section.questions.map((q) => ({ ...q, sectionId: section.id, sectionTitle: section.title })));
    }
    if (section.items) {
      section.items.forEach((item) => {
        if (item.questions) {
          questions.push(
            ...item.questions.map((q) => ({
              ...q,
              sectionId: section.id,
              sectionTitle: section.title,
              itemId: item.id,
              itemLabel: item.label,
            }))
          );
        }
      });
    }
  });
  return questions;
}

// Helper to find a question by ID
export function findQuestionById(id) {
  const all = getAllQuestions();
  return all.find((q) => q.id === id) || null;
}

// Helper to count total questions
export function getTotalQuestions() {
  return getAllQuestions().length;
}

// Helper to count total videos
export function getTotalVideos() {
  return getAllQuestions().filter((q) => q.videoUrl).length;
}

// Helper to count total modules
export function getTotalModules() {
  let count = 0;
  sidebarSections.forEach((section) => {
    if (section.isTopLevel) count++;
    if (section.items) count += section.items.length;
  });
  return count;
}
