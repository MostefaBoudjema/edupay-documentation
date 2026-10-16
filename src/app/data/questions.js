// Centralized data for all sidebar sections, their questions, and video info
// Each section corresponds to a sidebar module from the EduPay app
// question / description are resolved via i18n (tQuestion(id)) from locale files
// duration is read dynamically from the video file metadata (useVideoDuration hook)
// Icons use @heroicons/react/24/outline components

import {
  ChartBarIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  CreditCardIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  ChartPieIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  CalendarIcon,
  TagIcon,
  ShieldCheckIcon,
  KeyIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/solid';

export const sidebarSections = [
  {
    id: 'dashboard',
    title: 'Tableau de Bord',
    icon: ChartBarIcon,
    isTopLevel: true,
    questions: [
      {
        id: 'dashboard-overview',
        videoUrl: '/videos/student_list.mp4',
        tags: ['Dashboard', 'Navigation'],
      },
    ],
  },
  {
    id: 'gestion-scolaire',
    title: 'Gestion Scolaire',
    icon: BuildingLibraryIcon,
    items: [
      {
        id: 'eleves',
        label: 'Élèves',
        icon: AcademicCapIcon,
        badge: 3, // questions.length
        questions: [
          {
            id: 'eleves-list',
            videoUrl: '/videos/student_list.mp4',
            tags: ['Élèves', 'Liste', 'Consultation'],
          },
          {
            id: 'eleves-add',
            videoUrl: '/videos/create_student.mp4',
            tags: ['Élèves', 'Inscription', 'Ajout'],
          },
          {
            id: 'eleves-search',
            videoUrl: '/videos/search.mp4',
            tags: ['Recherche', 'Filtres', 'Élèves'],
          },
        ],
      },
      {
        id: 'inscriptions',
        label: 'Inscriptions',
        icon: ClipboardDocumentListIcon,
        badge: 1, // questions.length
        questions: [
          {
            id: 'inscriptions-new',
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
    icon: BanknotesIcon,
    items: [
      {
        id: 'paiements',
        label: 'Paiements',
        icon: CreditCardIcon,
        badge: 3, // questions.length
        questions: [
          {
            id: 'paiements-record',
            videoUrl: '/videos/payment.mp4',
            tags: ['Paiements', 'Enregistrement', 'Scolarité'],
          },
          {
            id: 'paiements-receipt',
            videoUrl: '/videos/receipt.mp4',
            tags: ['Reçus', 'Impression', 'Documents'],
          },
          {
            id: 'paiements-invoice',
            videoUrl: '/videos/invoice.mp4',
            tags: ['Facture', 'Documents', 'Paiements'],
          },
        ],
      },
      {
        id: 'depenses',
        label: 'Dépenses',
        icon: DocumentTextIcon,
        badge: 1, // questions.length
        questions: [
          {
            id: 'depenses-add',
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
    icon: PresentationChartLineIcon,
    items: [
      {
        id: 'analyse-paiements',
        label: 'Analyse des paiements',
        icon: ChartPieIcon,
        questions: [
          {
            id: 'analyse-charts',
            videoUrl: '/videos/payment_analyses.mp4',
            tags: ['Graphiques', 'Analyse', 'Statistiques'],
          },
        ],
      },
      {
        id: 'frais-restauration',
        label: 'Frais de restauration',
        icon: BuildingStorefrontIcon,
        questions: [
          {
            id: 'restauration-config',
            videoUrl: '/videos/restauration.mp4',
            tags: ['Restauration', 'Cantine', 'Configuration'],
          },
        ],
      },
      {
        id: 'rapport-mensualites',
        label: 'Rapport des mensualités',
        icon: CalendarDaysIcon,
        questions: [
          {
            id: 'mensualites-report',
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
    icon: Cog6ToothIcon,
    items: [
      {
        id: 'annees-scolaires',
        label: 'Années Scolaires & Tranches',
        icon: CalendarIcon,
        badge: 1, // questions.length
        questions: [
          {
            id: 'annees-tranches',
            videoUrl: '/videos/academic_year_installment.mp4',
            tags: ['Année scolaire', 'Tranches', 'Configuration'],
          },
        ],
      },
      {
        id: 'remises',
        label: 'Remises',
        icon: TagIcon,
        badge: 1, // questions.length
        questions: [
          {
            id: 'remises-create',
            videoUrl: '/videos/discount.mp4',
            tags: ['Remises', 'Réductions', 'Application'],
          },
        ],
      },
      {
        id: 'parametres-general',
        label: 'Paramètres',
        icon: Cog6ToothIcon,
        questions: [
          {
            id: 'settings-school',
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
    icon: ShieldCheckIcon,
    items: [
      {
        id: 'roles-permissions',
        label: 'Rôles & Permissions',
        icon: KeyIcon,
        questions: [
          {
            id: 'roles-permissions-manage',
            videoUrl: '/videos/roles_permissions.mp4',
            tags: ['Rôles', 'Permissions', 'Sécurité', 'Accès'],
          },
        ],
      },
      {
        id: 'journaux-activite',
        label: "Journaux d'activité",
        icon: DocumentMagnifyingGlassIcon,
        badge: 1, // questions.length
        questions: [
          {
            id: 'logs-view',
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
