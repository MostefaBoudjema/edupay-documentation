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
        videoUrl: '/videos/dashboard-overview.mp4',
        tags: ['Dashboard', 'Navigation', 'Vue d\'ensemble'],
      },
      {
        id: 'dashboard-stats',
        question: 'Comment lire les statistiques du tableau de bord ?',
        description: 'Comprenez les différentes statistiques affichées : nombre d\'élèves, enseignants, paiements et dépenses.',
        duration: '4:20',
        videoUrl: '/videos/dashboard-stats.mp4',
        tags: ['Statistiques', 'KPIs', 'Données'],
      },
      {
        id: 'dashboard-widgets',
        question: 'Comment personnaliser les widgets du tableau de bord ?',
        description: 'Apprenez à configurer et réorganiser les widgets pour adapter le tableau de bord à vos besoins.',
        duration: '2:30',
        videoUrl: '/videos/dashboard-widgets.mp4',
        tags: ['Widgets', 'Personnalisation'],
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
        badge: 231,
        questions: [
          {
            id: 'eleves-add',
            question: 'Comment ajouter un nouvel élève ?',
            description: 'Guide étape par étape pour inscrire un nouvel élève dans le système EduPay.',
            duration: '5:12',
            videoUrl: '/videos/eleves-add.mp4',
            tags: ['Élèves', 'Inscription', 'Ajout'],
          },
          {
            id: 'eleves-search',
            question: 'Comment rechercher et filtrer les élèves ?',
            description: 'Utilisez les filtres avancés pour trouver rapidement un élève par nom, niveau ou statut.',
            duration: '3:08',
            videoUrl: '/videos/eleves-search.mp4',
            tags: ['Recherche', 'Filtres', 'Élèves'],
          },
          {
            id: 'eleves-edit',
            question: 'Comment modifier les informations d\'un élève ?',
            description: 'Mettez à jour les données personnelles, scolaires et financières d\'un élève existant.',
            duration: '4:15',
            videoUrl: '/videos/eleves-edit.mp4',
            tags: ['Modification', 'Profil', 'Élèves'],
          },
          {
            id: 'eleves-levels',
            question: 'Comment gérer les niveaux (primaire, collège, lycée) ?',
            description: 'Comprenez la classification des élèves par cycle et niveau scolaire.',
            duration: '3:40',
            videoUrl: '/videos/eleves-levels.mp4',
            tags: ['Niveaux', 'Cycles', 'Classification'],
          },
        ],
      },
      {
        id: 'enseignants',
        label: 'Enseignants',
        icon: '👨‍🏫',
        badge: 6,
        questions: [
          {
            id: 'enseignants-add',
            question: 'Comment ajouter un enseignant ?',
            description: 'Inscrivez un nouvel enseignant et configurez ses matières et classes.',
            duration: '4:00',
            videoUrl: '/videos/enseignants-add.mp4',
            tags: ['Enseignants', 'Ajout', 'Configuration'],
          },
          {
            id: 'enseignants-manage',
            question: 'Comment gérer les affectations des enseignants ?',
            description: 'Attribuez des classes et matières aux enseignants et gérez leurs emplois du temps.',
            duration: '5:30',
            videoUrl: '/videos/enseignants-manage.mp4',
            tags: ['Affectations', 'Classes', 'Matières'],
          },
        ],
      },
      {
        id: 'parents',
        label: 'Parents',
        icon: '👥',
        badge: 236,
        questions: [
          {
            id: 'parents-add',
            question: 'Comment ajouter un parent ?',
            description: 'Enregistrez un nouveau parent et liez-le à ses enfants dans le système.',
            duration: '3:25',
            videoUrl: '/videos/parents-add.mp4',
            tags: ['Parents', 'Inscription', 'Liaison'],
          },
          {
            id: 'parents-link',
            question: 'Comment lier un parent à plusieurs enfants ?',
            description: 'Gérez les relations familiales et associez un parent à plusieurs élèves.',
            duration: '2:50',
            videoUrl: '/videos/parents-link.mp4',
            tags: ['Parents', 'Enfants', 'Relations'],
          },
        ],
      },
      {
        id: 'freres',
        label: 'Frères',
        icon: '👦',
        badge: 0,
        questions: [
          {
            id: 'freres-manage',
            question: 'Comment gérer les fratries ?',
            description: 'Identifiez et gérez les frères et sœurs inscrits dans l\'établissement.',
            duration: '2:45',
            videoUrl: '/videos/freres-manage.mp4',
            tags: ['Fratries', 'Gestion', 'Relations'],
          },
        ],
      },
      {
        id: 'inscriptions',
        label: 'Inscriptions',
        icon: '📋',
        badge: 237,
        questions: [
          {
            id: 'inscriptions-new',
            question: 'Comment inscrire un élève pour la nouvelle année ?',
            description: 'Processus complet d\'inscription d\'un élève pour une nouvelle année scolaire.',
            duration: '6:10',
            videoUrl: '/videos/inscriptions-new.mp4',
            tags: ['Inscription', 'Année scolaire', 'Processus'],
          },
          {
            id: 'inscriptions-renew',
            question: 'Comment renouveler une inscription ?',
            description: 'Simplifiez la réinscription des élèves existants d\'une année à l\'autre.',
            duration: '3:30',
            videoUrl: '/videos/inscriptions-renew.mp4',
            tags: ['Réinscription', 'Renouvellement'],
          },
          {
            id: 'inscriptions-status',
            question: 'Comment suivre le statut des inscriptions ?',
            description: 'Visualisez les inscriptions en attente, validées ou rejetées.',
            duration: '2:55',
            videoUrl: '/videos/inscriptions-status.mp4',
            tags: ['Statut', 'Suivi', 'Validation'],
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
        badge: 3,
        questions: [
          {
            id: 'paiements-record',
            question: 'Comment enregistrer un paiement ?',
            description: 'Enregistrez un paiement de scolarité pour un élève avec suivi du montant et de la méthode.',
            duration: '4:45',
            videoUrl: '/videos/paiements-record.mp4',
            tags: ['Paiements', 'Enregistrement', 'Scolarité'],
          },
          {
            id: 'paiements-history',
            question: 'Comment consulter l\'historique des paiements ?',
            description: 'Accédez à l\'historique complet des paiements avec filtres par date, élève ou statut.',
            duration: '3:15',
            videoUrl: '/videos/paiements-history.mp4',
            tags: ['Historique', 'Paiements', 'Consultation'],
          },
          {
            id: 'paiements-receipt',
            question: 'Comment générer un reçu de paiement ?',
            description: 'Créez et imprimez des reçus de paiement pour les parents.',
            duration: '2:40',
            videoUrl: '/videos/paiements-receipt.mp4',
            tags: ['Reçus', 'Impression', 'Documents'],
          },
        ],
      },
      {
        id: 'eleves-impayes',
        label: 'Élèves Impayés',
        icon: '⚠️',
        questions: [
          {
            id: 'impayes-list',
            question: 'Comment identifier les élèves avec des impayés ?',
            description: 'Visualisez la liste des élèves ayant des paiements en retard ou incomplets.',
            duration: '3:50',
            videoUrl: '/videos/impayes-list.mp4',
            tags: ['Impayés', 'Retards', 'Suivi'],
          },
          {
            id: 'impayes-notify',
            question: 'Comment envoyer des rappels de paiement ?',
            description: 'Envoyez des notifications aux parents pour les paiements en retard.',
            duration: '2:30',
            videoUrl: '/videos/impayes-notify.mp4',
            tags: ['Rappels', 'Notifications', 'Parents'],
          },
        ],
      },
      {
        id: 'depenses',
        label: 'Dépenses',
        icon: '📝',
        badge: 2,
        questions: [
          {
            id: 'depenses-add',
            question: 'Comment enregistrer une dépense ?',
            description: 'Ajoutez une nouvelle dépense avec catégorie, montant et justificatif.',
            duration: '3:20',
            videoUrl: '/videos/depenses-add.mp4',
            tags: ['Dépenses', 'Enregistrement', 'Comptabilité'],
          },
          {
            id: 'depenses-categories',
            question: 'Comment gérer les catégories de dépenses ?',
            description: 'Créez et organisez les catégories de dépenses pour un meilleur suivi.',
            duration: '2:55',
            videoUrl: '/videos/depenses-categories.mp4',
            tags: ['Catégories', 'Organisation', 'Dépenses'],
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
            question: 'Comment lire les graphiques d\'analyse ?',
            description: 'Interprétez les graphiques de paiements mensuels, annuels et par niveau.',
            duration: '4:30',
            videoUrl: '/videos/analyse-charts.mp4',
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
            duration: '4:10',
            videoUrl: '/videos/restauration-config.mp4',
            tags: ['Restauration', 'Cantine', 'Configuration'],
          },
        ],
      },
      {
        id: 'rapports-financiers',
        label: 'Rapports Financiers',
        icon: '📑',
        questions: [
          {
            id: 'rapports-generate',
            question: 'Comment générer un rapport financier ?',
            description: 'Créez des rapports financiers détaillés pour une période donnée.',
            duration: '5:00',
            videoUrl: '/videos/rapports-generate.mp4',
            tags: ['Rapports', 'Finance', 'Export'],
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
            duration: '3:45',
            videoUrl: '/videos/mensualites-report.mp4',
            tags: ['Mensualités', 'Rapport', 'Analyse'],
          },
        ],
      },
      {
        id: 'recettes-depenses',
        label: 'Recettes & Dépenses',
        icon: '💹',
        questions: [
          {
            id: 'recettes-balance',
            question: 'Comment visualiser la balance recettes/dépenses ?',
            description: 'Comparez les recettes et dépenses pour évaluer la santé financière de l\'établissement.',
            duration: '4:20',
            videoUrl: '/videos/recettes-balance.mp4',
            tags: ['Balance', 'Recettes', 'Dépenses'],
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
        label: 'Années Scolaires',
        icon: '📆',
        badge: 2,
        questions: [
          {
            id: 'annees-create',
            question: 'Comment créer une nouvelle année scolaire ?',
            description: 'Configurez une nouvelle année scolaire avec ses dates et paramètres.',
            duration: '4:00',
            videoUrl: '/videos/annees-create.mp4',
            tags: ['Année scolaire', 'Création', 'Configuration'],
          },
          {
            id: 'annees-switch',
            question: 'Comment basculer entre les années scolaires ?',
            description: 'Naviguez entre les différentes années scolaires pour consulter les données historiques.',
            duration: '2:15',
            videoUrl: '/videos/annees-switch.mp4',
            tags: ['Navigation', 'Historique', 'Années'],
          },
        ],
      },
      {
        id: 'tranches',
        label: 'Tranches',
        icon: '📊',
        badge: 88,
        questions: [
          {
            id: 'tranches-config',
            question: 'Comment configurer les tranches de paiement ?',
            description: 'Définissez les échéanciers de paiement avec montants et dates limites.',
            duration: '5:20',
            videoUrl: '/videos/tranches-config.mp4',
            tags: ['Tranches', 'Échéancier', 'Configuration'],
          },
        ],
      },
      {
        id: 'plans-scolarite',
        label: 'Plans De Scolarité',
        icon: '🎯',
        badge: 4,
        questions: [
          {
            id: 'plans-create',
            question: 'Comment créer un plan de scolarité ?',
            description: 'Définissez des plans de scolarité avec tarifs différenciés par niveau et options.',
            duration: '5:45',
            videoUrl: '/videos/plans-create.mp4',
            tags: ['Plans', 'Scolarité', 'Tarifs'],
          },
        ],
      },
      {
        id: 'remises',
        label: 'Remises',
        icon: '🏷️',
        badge: 3,
        questions: [
          {
            id: 'remises-create',
            question: 'Comment créer et appliquer des remises ?',
            description: 'Configurez des remises (fratrie, boursier, etc.) et appliquez-les aux élèves.',
            duration: '4:10',
            videoUrl: '/videos/remises-create.mp4',
            tags: ['Remises', 'Réductions', 'Application'],
          },
        ],
      },
      {
        id: 'categories-depenses',
        label: 'Catégories de dépenses',
        icon: '📁',
        badge: 6,
        questions: [
          {
            id: 'categories-manage',
            question: 'Comment gérer les catégories de dépenses ?',
            description: 'Créez, modifiez et organisez vos catégories de dépenses.',
            duration: '2:50',
            videoUrl: '/videos/categories-manage.mp4',
            tags: ['Catégories', 'Dépenses', 'Organisation'],
          },
        ],
      },
      {
        id: 'parametres-general',
        label: 'Paramètres',
        icon: '⚙️',
        badge: 24,
        questions: [
          {
            id: 'settings-school',
            question: 'Comment configurer les paramètres de l\'école ?',
            description: 'Personnalisez le nom, logo, adresse et informations de votre établissement.',
            duration: '3:30',
            videoUrl: '/videos/settings-school.mp4',
            tags: ['Paramètres', 'École', 'Configuration'],
          },
          {
            id: 'settings-notifications',
            question: 'Comment configurer les notifications ?',
            description: 'Gérez les notifications SMS, email et WhatsApp pour les parents et le personnel.',
            duration: '4:15',
            videoUrl: '/videos/settings-notifications.mp4',
            tags: ['Notifications', 'SMS', 'Email'],
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
        id: 'permissions',
        label: 'Permissions',
        icon: '🔑',
        badge: 88,
        questions: [
          {
            id: 'permissions-manage',
            question: 'Comment gérer les permissions ?',
            description: 'Configurez les permissions d\'accès pour chaque module de l\'application.',
            duration: '5:30',
            videoUrl: '/videos/permissions-manage.mp4',
            tags: ['Permissions', 'Accès', 'Sécurité'],
          },
        ],
      },
      {
        id: 'roles',
        label: 'Rôles',
        icon: '🛡️',
        badge: 2,
        questions: [
          {
            id: 'roles-create',
            question: 'Comment créer et configurer des rôles ?',
            description: 'Définissez des rôles utilisateurs avec des ensembles de permissions spécifiques.',
            duration: '4:45',
            videoUrl: '/videos/roles-create.mp4',
            tags: ['Rôles', 'Permissions', 'Utilisateurs'],
          },
        ],
      },
      {
        id: 'utilisateurs',
        label: 'Utilisateurs',
        icon: '👤',
        badge: 4,
        questions: [
          {
            id: 'users-manage',
            question: 'Comment gérer les utilisateurs ?',
            description: 'Ajoutez, modifiez et désactivez les comptes utilisateurs du système.',
            duration: '4:00',
            videoUrl: '/videos/users-manage.mp4',
            tags: ['Utilisateurs', 'Comptes', 'Gestion'],
          },
          {
            id: 'users-password',
            question: 'Comment réinitialiser un mot de passe ?',
            description: 'Réinitialisez le mot de passe d\'un utilisateur qui a perdu ses accès.',
            duration: '2:10',
            videoUrl: '/videos/users-password.mp4',
            tags: ['Mot de passe', 'Réinitialisation', 'Sécurité'],
          },
        ],
      },
      {
        id: 'journaux-activite',
        label: 'Journaux d\'activité',
        icon: '📜',
        badge: 170,
        questions: [
          {
            id: 'logs-view',
            question: 'Comment consulter les journaux d\'activité ?',
            description: 'Surveillez toutes les actions effectuées dans le système pour assurer la traçabilité.',
            duration: '3:35',
            videoUrl: '/videos/logs-view.mp4',
            tags: ['Journaux', 'Activité', 'Audit'],
          },
          {
            id: 'logs-filter',
            question: 'Comment filtrer les journaux par utilisateur ou action ?',
            description: 'Utilisez les filtres pour trouver des actions spécifiques dans l\'historique.',
            duration: '2:45',
            videoUrl: '/videos/logs-filter.mp4',
            tags: ['Filtres', 'Recherche', 'Historique'],
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
