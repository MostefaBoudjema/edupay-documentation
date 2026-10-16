const fr = {
  // General
  dir: 'ltr',
  locale: 'fr',
  langName: 'Français',
  langFlag: '🇫🇷',

  // App
  appName: 'EduPay',
  appSubtitle: 'Documentation',
  searchPlaceholder: 'Rechercher une question...',
  searchHeaderPlaceholder: 'Rechercher...',

  // Welcome
  welcomeTitle: 'Bienvenue sur EduPay Docs',
  welcomeSubtitle:
    "Explorez notre documentation interactive avec des vidéos tutorielles pour chaque module de l'application EduPay. Sélectionnez un module dans la barre latérale pour commencer.",
  statModules: 'Modules',
  statQuestions: 'Questions',
  statVideos: 'Vidéos',

  // Navigation
  breadcrumbHome: 'EduPay Docs',

  // Content
  selectQuestion: 'Sélectionnez une question pour voir la vidéo de démonstration correspondante.',
  noQuestions: 'Aucune question trouvée pour ce module.',
  backToQuestions: '← Retour aux questions',
  clickToPlay: 'Cliquez pour lire la vidéo de démonstration',
  descriptionLabel: '📝 Description',
  modules: 'modules',
  questions: 'questions',

  // Sidebar sections
  sections: {
    dashboard: {
      title: 'Tableau de Bord',
      questions: {
        'dashboard-overview': {
          question: 'Comment naviguer dans le tableau de bord ?',
          description:
            "Découvrez comment utiliser le tableau de bord principal pour avoir une vue d'ensemble de votre école.",
        },
        'dashboard-stats': {
          question: 'Comment lire les statistiques du tableau de bord ?',
          description:
            "Comprenez les différentes statistiques affichées : nombre d'élèves, enseignants, paiements et dépenses.",
        },
        'dashboard-widgets': {
          question: 'Comment personnaliser les widgets du tableau de bord ?',
          description:
            'Apprenez à configurer et réorganiser les widgets pour adapter le tableau de bord à vos besoins.',
        },
      },
    },
    'gestion-scolaire': { title: 'Gestion Scolaire' },
    finances: { title: 'Finances' },
    crm: { title: 'CRM' },
    parametres: { title: 'Paramètres' },
    securite: { title: 'Sécurité' },
  },

  // Sidebar items
  items: {
    eleves: { label: 'Élèves' },
    enseignants: { label: 'Enseignants' },
    parents: { label: 'Parents' },
    freres: { label: 'Frères' },
    inscriptions: { label: 'Inscriptions' },
    paiements: { label: 'Paiements' },
    'eleves-impayes': { label: 'Élèves Impayés' },
    depenses: { label: 'Dépenses' },
    'analyse-paiements': { label: 'Analyse des paiements' },
    'frais-restauration': { label: 'Frais de restauration' },
    'rapports-financiers': { label: 'Rapports Financiers' },
    'rapport-mensualites': { label: 'Rapport des mensualités' },
    'recettes-depenses': { label: 'Recettes & Dépenses' },
    'annees-scolaires': { label: 'Années Scolaires' },
    tranches: { label: 'Tranches' },
    'plans-scolarite': { label: 'Plans De Scolarité' },
    remises: { label: 'Remises' },
    'categories-depenses': { label: 'Catégories de dépenses' },
    'parametres-general': { label: 'Paramètres' },
    permissions: { label: 'Permissions' },
    roles: { label: 'Rôles' },
    utilisateurs: { label: 'Utilisateurs' },
    'journaux-activite': { label: "Journaux d'activité" },
  },

  // Questions
  q: {
    // Élèves
    'eleves-list': {
      question: 'Comment consulter la liste des élèves ?',
      description: 'Explorez la liste complète des élèves inscrits, avec leurs informations de base et leur statut.',
    },
    'eleves-add': {
      question: 'Comment ajouter un nouvel élève ?',
      description: "Guide étape par étape pour inscrire un nouvel élève dans le système EduPay.",
    },
    'eleves-search': {
      question: 'Comment rechercher et filtrer les élèves ?',
      description: 'Utilisez les filtres avancés pour trouver rapidement un élève par nom, niveau ou statut.',
    },
    'eleves-edit': {
      question: "Comment modifier les informations d'un élève ?",
      description: "Mettez à jour les données personnelles, scolaires et financières d'un élève existant.",
    },
    'eleves-levels': {
      question: 'Comment gérer les niveaux (primaire, collège, lycée) ?',
      description: 'Comprenez la classification des élèves par cycle et niveau scolaire.',
    },
    // Enseignants
    'enseignants-add': {
      question: 'Comment ajouter un enseignant ?',
      description: 'Inscrivez un nouvel enseignant et configurez ses matières et classes.',
    },
    'enseignants-manage': {
      question: 'Comment gérer les affectations des enseignants ?',
      description: 'Attribuez des classes et matières aux enseignants et gérez leurs emplois du temps.',
    },
    // Parents
    'parents-add': {
      question: 'Comment ajouter un parent ?',
      description: 'Enregistrez un nouveau parent et liez-le à ses enfants dans le système.',
    },
    'parents-link': {
      question: 'Comment lier un parent à plusieurs enfants ?',
      description: 'Gérez les relations familiales et associez un parent à plusieurs élèves.',
    },
    // Frères
    'freres-manage': {
      question: 'Comment gérer les fratries ?',
      description: "Identifiez et gérez les frères et sœurs inscrits dans l'établissement.",
    },
    // Inscriptions
    'inscriptions-new': {
      question: "Comment inscrire un élève pour la nouvelle année ?",
      description: "Processus complet d'inscription d'un élève pour une nouvelle année scolaire.",
    },
    'inscriptions-renew': {
      question: 'Comment renouveler une inscription ?',
      description: "Simplifiez la réinscription des élèves existants d'une année à l'autre.",
    },
    'inscriptions-status': {
      question: 'Comment suivre le statut des inscriptions ?',
      description: 'Visualisez les inscriptions en attente, validées ou rejetées.',
    },
    // Paiements
    'paiements-record': {
      question: 'Comment enregistrer un paiement ?',
      description: "Enregistrez un paiement de scolarité pour un élève avec suivi du montant et de la méthode.",
    },
    'paiements-history': {
      question: "Comment consulter l'historique des paiements ?",
      description: "Accédez à l'historique complet des paiements avec filtres par date, élève ou statut.",
    },
    'paiements-receipt': {
      question: 'Comment générer un reçu de paiement ?',
      description: 'Créez et imprimez des reçus de paiement pour les parents.',
    },
    'paiements-invoice': {
      question: 'Comment générer une facture ?',
      description: 'Créez des factures détaillées pour les paiements de scolarité et autres frais.',
    },
    // Impayés
    'impayes-list': {
      question: 'Comment identifier les élèves avec des impayés ?',
      description: 'Visualisez la liste des élèves ayant des paiements en retard ou incomplets.',
    },
    'impayes-notify': {
      question: 'Comment envoyer des rappels de paiement ?',
      description: 'Envoyez des notifications aux parents pour les paiements en retard.',
    },
    // Dépenses
    'depenses-add': {
      question: 'Comment enregistrer une dépense ?',
      description: 'Ajoutez une nouvelle dépense avec catégorie, montant et justificatif.',
    },
    'depenses-categories': {
      question: 'Comment gérer les catégories de dépenses ?',
      description: 'Créez et organisez les catégories de dépenses pour un meilleur suivi.',
    },
    // CRM
    'analyse-charts': {
      question: "Comment lire les graphiques d'analyse ?",
      description: "Interprétez les graphiques de paiements mensuels, annuels et par niveau.",
    },
    'restauration-config': {
      question: 'Comment configurer les frais de restauration ?',
      description: 'Paramétrez les tarifs de cantine et gérez les inscriptions au service de restauration.',
    },
    'rapports-generate': {
      question: 'Comment générer un rapport financier ?',
      description: 'Créez des rapports financiers détaillés pour une période donnée.',
    },
    'mensualites-report': {
      question: 'Comment consulter le rapport des mensualités ?',
      description: 'Analysez les mensualités par mois, par niveau et par statut de paiement.',
    },
    'recettes-balance': {
      question: 'Comment visualiser la balance recettes/dépenses ?',
      description: "Comparez les recettes et dépenses pour évaluer la santé financière de l'établissement.",
    },
    // Paramètres
    'annees-tranches': {
      question: 'Comment configurer les années scolaires et les tranches de paiement ?',
      description: "Créez une nouvelle année scolaire et définissez les échéanciers de paiement avec montants et dates limites.",
    },
    'annees-create': {
      question: 'Comment créer une nouvelle année scolaire ?',
      description: 'Configurez une nouvelle année scolaire avec ses dates et paramètres.',
    },
    'annees-switch': {
      question: 'Comment basculer entre les années scolaires ?',
      description: 'Naviguez entre les différentes années scolaires pour consulter les données historiques.',
    },
    'tranches-config': {
      question: 'Comment configurer les tranches de paiement ?',
      description: 'Définissez les échéanciers de paiement avec montants et dates limites.',
    },
    'plans-create': {
      question: 'Comment créer un plan de scolarité ?',
      description: 'Définissez des plans de scolarité avec tarifs différenciés par niveau et options.',
    },
    'remises-create': {
      question: 'Comment créer et appliquer des remises ?',
      description: 'Configurez des remises (fratrie, boursier, etc.) et appliquez-les aux élèves.',
    },
    'categories-manage': {
      question: 'Comment gérer les catégories de dépenses ?',
      description: 'Créez, modifiez et organisez vos catégories de dépenses.',
    },
    'settings-school': {
      question: "Comment configurer les paramètres de l'école ?",
      description: "Personnalisez le nom, logo, adresse et informations de votre établissement.",
    },
    'settings-notifications': {
      question: 'Comment configurer les notifications ?',
      description: 'Gérez les notifications SMS, email et WhatsApp pour les parents et le personnel.',
    },
    // Sécurité
    'roles-permissions-manage': {
      question: 'Comment gérer les rôles et permissions ?',
      description: "Définissez des rôles utilisateurs et configurez les permissions d'accès pour chaque module de l'application.",
    },
    'permissions-manage': {
      question: 'Comment gérer les permissions ?',
      description: "Configurez les permissions d'accès pour chaque module de l'application.",
    },
    'roles-create': {
      question: 'Comment créer et configurer des rôles ?',
      description: 'Définissez des rôles utilisateurs avec des ensembles de permissions spécifiques.',
    },
    'users-manage': {
      question: 'Comment gérer les utilisateurs ?',
      description: 'Ajoutez, modifiez et désactivez les comptes utilisateurs du système.',
    },
    'users-password': {
      question: 'Comment réinitialiser un mot de passe ?',
      description: "Réinitialisez le mot de passe d'un utilisateur qui a perdu ses accès.",
    },
    'logs-view': {
      question: "Comment consulter les journaux d'activité ?",
      description: 'Surveillez toutes les actions effectuées dans le système pour assurer la traçabilité.',
    },
    'logs-filter': {
      question: 'Comment filtrer les journaux par utilisateur ou action ?',
      description: "Utilisez les filtres pour trouver des actions spécifiques dans l'historique.",
    },
  },
};

export default fr;
