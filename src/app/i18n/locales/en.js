const en = {
  // General
  dir: 'ltr',
  locale: 'en',
  langName: 'English',
  langFlag: '🇬🇧',

  // App
  appName: 'EduPay',
  appSubtitle: 'Documentation',
  searchPlaceholder: 'Search for a question...',
  searchHeaderPlaceholder: 'Search...',

  // Welcome
  welcomeTitle: 'Welcome to EduPay Docs',
  welcomeSubtitle:
    'Explore our interactive documentation with video tutorials for every module of the EduPay application. Select a module from the sidebar to get started.',
  statModules: 'Modules',
  statQuestions: 'Questions',
  statVideos: 'Videos',

  // Navigation
  breadcrumbHome: 'EduPay Docs',

  // Content
  selectQuestion: 'Select a question to watch the corresponding demo video.',
  noQuestions: 'No questions found for this module.',
  backToQuestions: '← Back to questions',
  clickToPlay: 'Click to play the demo video',
  descriptionLabel: '📝 Description',
  modules: 'modules',
  questions: 'questions',

  // Sidebar sections
  sections: {
    dashboard: {
      title: 'Dashboard',
      questions: {
        'dashboard-overview': {
          question: 'How to navigate the dashboard?',
          description: 'Learn how to use the main dashboard to get an overview of your school.',
        },
        'dashboard-stats': {
          question: 'How to read dashboard statistics?',
          description:
            'Understand the different statistics displayed: number of students, teachers, payments and expenses.',
        },
        'dashboard-widgets': {
          question: 'How to customize dashboard widgets?',
          description: 'Learn to configure and rearrange widgets to adapt the dashboard to your needs.',
        },
      },
    },
    'gestion-scolaire': { title: 'School Management' },
    finances: { title: 'Finance' },
    crm: { title: 'CRM' },
    parametres: { title: 'Settings' },
    securite: { title: 'Security' },
  },

  // Sidebar items
  items: {
    eleves: { label: 'Students' },
    enseignants: { label: 'Teachers' },
    parents: { label: 'Parents' },
    freres: { label: 'Siblings' },
    inscriptions: { label: 'Enrollments' },
    paiements: { label: 'Payments' },
    'eleves-impayes': { label: 'Unpaid Students' },
    depenses: { label: 'Expenses' },
    'analyse-paiements': { label: 'Payment Analysis' },
    'frais-restauration': { label: 'Cafeteria Fees' },
    'rapports-financiers': { label: 'Financial Reports' },
    'rapport-mensualites': { label: 'Monthly Report' },
    'recettes-depenses': { label: 'Revenue & Expenses' },
    'annees-scolaires': { label: 'School Years' },
    tranches: { label: 'Installments' },
    'plans-scolarite': { label: 'Tuition Plans' },
    remises: { label: 'Discounts' },
    'categories-depenses': { label: 'Expense Categories' },
    'parametres-general': { label: 'Settings' },
    permissions: { label: 'Permissions' },
    roles: { label: 'Roles' },
    utilisateurs: { label: 'Users' },
    'journaux-activite': { label: 'Activity Logs' },
  },

  // Questions
  q: {
    // Élèves
    'eleves-list': {
      question: 'How to view the student list?',
      description: 'Browse the full list of enrolled students with their basic information and status.',
    },
    'eleves-add': {
      question: 'How to add a new student?',
      description: 'Step-by-step guide to enroll a new student in the EduPay system.',
    },
    'eleves-search': {
      question: 'How to search and filter students?',
      description: 'Use advanced filters to quickly find a student by name, level or status.',
    },
    'eleves-edit': {
      question: "How to edit a student's information?",
      description: "Update the personal, academic and financial data of an existing student.",
    },
    'eleves-levels': {
      question: 'How to manage levels (primary, middle, high)?',
      description: 'Understand student classification by cycle and grade level.',
    },
    // Enseignants
    'enseignants-add': {
      question: 'How to add a teacher?',
      description: 'Register a new teacher and configure their subjects and classes.',
    },
    'enseignants-manage': {
      question: 'How to manage teacher assignments?',
      description: 'Assign classes and subjects to teachers and manage their schedules.',
    },
    // Parents
    'parents-add': {
      question: 'How to add a parent?',
      description: 'Register a new parent and link them to their children in the system.',
    },
    'parents-link': {
      question: 'How to link a parent to multiple children?',
      description: 'Manage family relationships and associate a parent with multiple students.',
    },
    // Frères
    'freres-manage': {
      question: 'How to manage siblings?',
      description: 'Identify and manage siblings enrolled in the institution.',
    },
    // Inscriptions
    'inscriptions-new': {
      question: 'How to enroll a student for the new year?',
      description: 'Complete process for enrolling a student for a new school year.',
    },
    'inscriptions-renew': {
      question: 'How to renew an enrollment?',
      description: 'Simplify re-enrollment of existing students from one year to the next.',
    },
    'inscriptions-status': {
      question: 'How to track enrollment status?',
      description: 'View pending, approved or rejected enrollments.',
    },
    // Paiements
    'paiements-record': {
      question: 'How to record a payment?',
      description: 'Record a tuition payment for a student with amount and method tracking.',
    },
    'paiements-history': {
      question: 'How to view payment history?',
      description: 'Access the full payment history with filters by date, student or status.',
    },
    'paiements-receipt': {
      question: 'How to generate a payment receipt?',
      description: 'Create and print payment receipts for parents.',
    },
    'paiements-invoice': {
      question: 'How to generate an invoice?',
      description: 'Create detailed invoices for tuition payments and other fees.',
    },
    // Impayés
    'impayes-list': {
      question: 'How to identify students with unpaid fees?',
      description: 'View the list of students with late or incomplete payments.',
    },
    'impayes-notify': {
      question: 'How to send payment reminders?',
      description: 'Send notifications to parents for late payments.',
    },
    // Dépenses
    'depenses-add': {
      question: 'How to record an expense?',
      description: 'Add a new expense with category, amount and supporting document.',
    },
    'depenses-categories': {
      question: 'How to manage expense categories?',
      description: 'Create and organize expense categories for better tracking.',
    },
    // CRM
    'analyse-charts': {
      question: 'How to read analysis charts?',
      description: 'Interpret monthly, yearly and level-based payment charts.',
    },
    'restauration-config': {
      question: 'How to configure cafeteria fees?',
      description: 'Set cafeteria rates and manage meal service enrollments.',
    },
    'rapports-generate': {
      question: 'How to generate a financial report?',
      description: 'Create detailed financial reports for a given period.',
    },
    'mensualites-report': {
      question: 'How to view the monthly installments report?',
      description: 'Analyze installments by month, level and payment status.',
    },
    'recettes-balance': {
      question: 'How to view the revenue/expenses balance?',
      description: "Compare revenues and expenses to assess the institution's financial health.",
    },
    // Paramètres
    'annees-tranches': {
      question: 'How to configure school years and payment installments?',
      description: 'Create a new school year and define payment schedules with amounts and due dates.',
    },
    'annees-create': {
      question: 'How to create a new school year?',
      description: 'Set up a new school year with its dates and parameters.',
    },
    'annees-switch': {
      question: 'How to switch between school years?',
      description: 'Navigate between different school years to view historical data.',
    },
    'tranches-config': {
      question: 'How to configure payment installments?',
      description: 'Define payment schedules with amounts and due dates.',
    },
    'plans-create': {
      question: 'How to create a tuition plan?',
      description: 'Define tuition plans with differentiated rates by level and options.',
    },
    'remises-create': {
      question: 'How to create and apply discounts?',
      description: 'Configure discounts (sibling, scholarship, etc.) and apply them to students.',
    },
    'categories-manage': {
      question: 'How to manage expense categories?',
      description: 'Create, edit and organize your expense categories.',
    },
    'settings-school': {
      question: 'How to configure school settings?',
      description: "Customize the name, logo, address and information of your institution.",
    },
    'settings-notifications': {
      question: 'How to configure notifications?',
      description: 'Manage SMS, email and WhatsApp notifications for parents and staff.',
    },
    // Sécurité
    'roles-permissions-manage': {
      question: 'How to manage roles and permissions?',
      description: 'Define user roles and configure access permissions for each module of the application.',
    },
    'permissions-manage': {
      question: 'How to manage permissions?',
      description: 'Configure access permissions for each module of the application.',
    },
    'roles-create': {
      question: 'How to create and configure roles?',
      description: 'Define user roles with specific sets of permissions.',
    },
    'users-manage': {
      question: 'How to manage users?',
      description: 'Add, edit and deactivate user accounts in the system.',
    },
    'users-password': {
      question: 'How to reset a password?',
      description: 'Reset the password of a user who has lost their access.',
    },
    'logs-view': {
      question: 'How to view activity logs?',
      description: 'Monitor all actions performed in the system to ensure traceability.',
    },
    'logs-filter': {
      question: 'How to filter logs by user or action?',
      description: 'Use filters to find specific actions in the history.',
    },
  },
};

export default en;
