const ar = {
  // General
  dir: 'rtl',
  locale: 'ar',
  langName: 'العربية',
  langFlag: '🇸🇦',

  // App
  appName: 'EduPay',
  appSubtitle: 'التوثيق',
  searchPlaceholder: 'البحث عن سؤال...',
  searchHeaderPlaceholder: 'بحث...',

  // Welcome
  welcomeTitle: 'مرحباً بكم في توثيق EduPay',
  welcomeSubtitle:
    'استكشف وثائقنا التفاعلية مع دروس فيديو لكل وحدة من تطبيق EduPay. اختر وحدة من الشريط الجانبي للبدء.',
  statModules: 'الوحدات',
  statQuestions: 'الأسئلة',
  statVideos: 'الفيديوهات',

  // Navigation
  breadcrumbHome: 'توثيق EduPay',

  // Content
  selectQuestion: 'اختر سؤالاً لمشاهدة فيديو العرض التوضيحي المقابل.',
  noQuestions: 'لم يتم العثور على أسئلة لهذه الوحدة.',
  backToQuestions: 'العودة إلى الأسئلة ←',
  clickToPlay: 'انقر لتشغيل فيديو العرض التوضيحي',
  descriptionLabel: '📝 الوصف',
  modules: 'الوحدات',
  questions: 'الأسئلة',

  // Sidebar sections
  sections: {
    dashboard: {
      title: 'لوحة التحكم',
      questions: {
        'dashboard-overview': {
          question: 'كيفية التنقل في لوحة التحكم؟',
          description: 'تعرف على كيفية استخدام لوحة التحكم الرئيسية للحصول على نظرة عامة على مدرستك.',
        },
        'dashboard-stats': {
          question: 'كيفية قراءة إحصائيات لوحة التحكم؟',
          description: 'افهم الإحصائيات المختلفة المعروضة: عدد الطلاب، المعلمين، المدفوعات والمصروفات.',
        },
        'dashboard-widgets': {
          question: 'كيفية تخصيص أدوات لوحة التحكم؟',
          description: 'تعلم كيفية تكوين وإعادة ترتيب الأدوات لتكييف لوحة التحكم مع احتياجاتك.',
        },
      },
    },
    'gestion-scolaire': { title: 'الإدارة المدرسية' },
    finances: { title: 'المالية' },
    crm: { title: 'إدارة العلاقات' },
    parametres: { title: 'الإعدادات' },
    securite: { title: 'الأمان' },
  },

  // Sidebar items
  items: {
    eleves: { label: 'الطلاب' },
    enseignants: { label: 'المعلمون' },
    parents: { label: 'أولياء الأمور' },
    freres: { label: 'الإخوة' },
    inscriptions: { label: 'التسجيلات' },
    paiements: { label: 'المدفوعات' },
    'eleves-impayes': { label: 'الطلاب غير المسددين' },
    depenses: { label: 'المصروفات' },
    'analyse-paiements': { label: 'تحليل المدفوعات' },
    'frais-restauration': { label: 'رسوم المطعم' },
    'rapports-financiers': { label: 'التقارير المالية' },
    'rapport-mensualites': { label: 'تقرير الأقساط الشهرية' },
    'recettes-depenses': { label: 'الإيرادات والمصروفات' },
    'annees-scolaires': { label: 'السنوات الدراسية' },
    tranches: { label: 'الأقساط' },
    'plans-scolarite': { label: 'خطط الرسوم الدراسية' },
    remises: { label: 'الخصومات' },
    'categories-depenses': { label: 'فئات المصروفات' },
    'parametres-general': { label: 'الإعدادات' },
    permissions: { label: 'الصلاحيات' },
    roles: { label: 'الأدوار' },
    utilisateurs: { label: 'المستخدمون' },
    'journaux-activite': { label: 'سجلات النشاط' },
  },

  // Questions
  q: {
    // الطلاب
    'eleves-list': {
      question: 'كيفية عرض قائمة الطلاب؟',
      description: 'تصفح القائمة الكاملة للطلاب المسجلين مع معلوماتهم الأساسية وحالتهم.',
    },
    'eleves-add': {
      question: 'كيفية إضافة طالب جديد؟',
      description: 'دليل خطوة بخطوة لتسجيل طالب جديد في نظام EduPay.',
    },
    'eleves-search': {
      question: 'كيفية البحث عن الطلاب وتصفيتهم؟',
      description: 'استخدم الفلاتر المتقدمة للعثور بسرعة على طالب بالاسم أو المستوى أو الحالة.',
    },
    'eleves-edit': {
      question: 'كيفية تعديل معلومات الطالب؟',
      description: 'حدّث البيانات الشخصية والأكاديمية والمالية لطالب موجود.',
    },
    'eleves-levels': {
      question: 'كيفية إدارة المستويات (ابتدائي، متوسط، ثانوي)؟',
      description: 'افهم تصنيف الطلاب حسب المرحلة والمستوى الدراسي.',
    },
    // المعلمون
    'enseignants-add': {
      question: 'كيفية إضافة معلم؟',
      description: 'سجّل معلماً جديداً وقم بتكوين مواده وفصوله.',
    },
    'enseignants-manage': {
      question: 'كيفية إدارة تعيينات المعلمين؟',
      description: 'عيّن الفصول والمواد للمعلمين وأدر جداولهم الزمنية.',
    },
    // أولياء الأمور
    'parents-add': {
      question: 'كيفية إضافة ولي أمر؟',
      description: 'سجّل ولي أمر جديد واربطه بأبنائه في النظام.',
    },
    'parents-link': {
      question: 'كيفية ربط ولي أمر بعدة أبناء؟',
      description: 'أدر العلاقات الأسرية واربط ولي أمر بعدة طلاب.',
    },
    // الإخوة
    'freres-manage': {
      question: 'كيفية إدارة الإخوة؟',
      description: 'حدد وأدر الإخوة والأخوات المسجلين في المؤسسة.',
    },
    // التسجيلات
    'inscriptions-new': {
      question: 'كيفية تسجيل طالب للسنة الجديدة؟',
      description: 'العملية الكاملة لتسجيل طالب لسنة دراسية جديدة.',
    },
    'inscriptions-renew': {
      question: 'كيفية تجديد التسجيل؟',
      description: 'سهّل إعادة تسجيل الطلاب الحاليين من سنة إلى أخرى.',
    },
    'inscriptions-status': {
      question: 'كيفية متابعة حالة التسجيلات؟',
      description: 'اعرض التسجيلات المعلقة والمقبولة والمرفوضة.',
    },
    // المدفوعات
    'paiements-record': {
      question: 'كيفية تسجيل دفعة؟',
      description: 'سجّل دفعة رسوم دراسية لطالب مع تتبع المبلغ وطريقة الدفع.',
    },
    'paiements-history': {
      question: 'كيفية عرض سجل المدفوعات؟',
      description: 'الوصول إلى السجل الكامل للمدفوعات مع فلاتر حسب التاريخ أو الطالب أو الحالة.',
    },
    'paiements-receipt': {
      question: 'كيفية إنشاء إيصال دفع؟',
      description: 'أنشئ واطبع إيصالات الدفع لأولياء الأمور.',
    },
    'paiements-invoice': {
      question: 'كيفية إنشاء فاتورة؟',
      description: 'أنشئْ فواتير مفصّلة لمدفوعات الرسوم الدراسية وغيرها من الرسوم.',
    },
    // غير المسددين
    'impayes-list': {
      question: 'كيفية تحديد الطلاب ذوي المدفوعات المتأخرة؟',
      description: 'اعرض قائمة الطلاب الذين لديهم مدفوعات متأخرة أو غير مكتملة.',
    },
    'impayes-notify': {
      question: 'كيفية إرسال تذكيرات الدفع؟',
      description: 'أرسل إشعارات لأولياء الأمور بشأن المدفوعات المتأخرة.',
    },
    // المصروفات
    'depenses-add': {
      question: 'كيفية تسجيل مصروف؟',
      description: 'أضف مصروفاً جديداً مع الفئة والمبلغ والوثيقة المؤيدة.',
    },
    'depenses-categories': {
      question: 'كيفية إدارة فئات المصروفات؟',
      description: 'أنشئ ونظّم فئات المصروفات لمتابعة أفضل.',
    },
    // CRM
    'analyse-charts': {
      question: 'كيفية قراءة رسوم التحليل البيانية؟',
      description: 'فسّر رسوم المدفوعات الشهرية والسنوية وحسب المستوى.',
    },
    'restauration-config': {
      question: 'كيفية تكوين رسوم المطعم؟',
      description: 'حدد أسعار المقصف وأدر تسجيلات خدمة الوجبات.',
    },
    'rapports-generate': {
      question: 'كيفية إنشاء تقرير مالي؟',
      description: 'أنشئ تقارير مالية مفصلة لفترة معينة.',
    },
    'mensualites-report': {
      question: 'كيفية عرض تقرير الأقساط الشهرية؟',
      description: 'حلل الأقساط حسب الشهر والمستوى وحالة الدفع.',
    },
    'recettes-balance': {
      question: 'كيفية عرض ميزان الإيرادات/المصروفات؟',
      description: 'قارن الإيرادات والمصروفات لتقييم الصحة المالية للمؤسسة.',
    },
    // الإعدادات
    'annees-tranches': {
      question: 'كيفية تكوين السنوات الدراسية وأقساط الدفع؟',
      description: 'أنشئْ سنة دراسية جديدة وحدّد جداول الدفع بالمبالغ وتواريخ الاستحقاق.',
    },
    'annees-create': {
      question: 'كيفية إنشاء سنة دراسية جديدة؟',
      description: 'قم بإعداد سنة دراسية جديدة بتواريخها ومعاملاتها.',
    },
    'annees-switch': {
      question: 'كيفية التبديل بين السنوات الدراسية؟',
      description: 'تنقل بين السنوات الدراسية المختلفة لعرض البيانات التاريخية.',
    },
    'tranches-config': {
      question: 'كيفية تكوين أقساط الدفع؟',
      description: 'حدد جداول الدفع مع المبالغ وتواريخ الاستحقاق.',
    },
    'plans-create': {
      question: 'كيفية إنشاء خطة رسوم دراسية؟',
      description: 'حدد خطط الرسوم الدراسية بأسعار متباينة حسب المستوى والخيارات.',
    },
    'remises-create': {
      question: 'كيفية إنشاء وتطبيق الخصومات؟',
      description: 'قم بتكوين خصومات (إخوة، منحة، إلخ) وطبّقها على الطلاب.',
    },
    'categories-manage': {
      question: 'كيفية إدارة فئات المصروفات؟',
      description: 'أنشئ وعدّل ونظّم فئات المصروفات الخاصة بك.',
    },
    'settings-school': {
      question: 'كيفية تكوين إعدادات المدرسة؟',
      description: 'خصص اسم وشعار وعنوان ومعلومات مؤسستك.',
    },
    'settings-notifications': {
      question: 'كيفية تكوين الإشعارات؟',
      description: 'أدر إشعارات الرسائل القصيرة والبريد الإلكتروني وواتساب لأولياء الأمور والموظفين.',
    },
    // الأمان
    'roles-permissions-manage': {
      question: 'كيفية إدارة الأدوار والصلاحيات؟',
      description: 'حدّد أدوار المستخدمين وقم بتكوين صلاحيات الوصول لكل وحدة من التطبيق.',
    },
    'permissions-manage': {
      question: 'كيفية إدارة الصلاحيات؟',
      description: 'قم بتكوين صلاحيات الوصول لكل وحدة من التطبيق.',
    },
    'roles-create': {
      question: 'كيفية إنشاء وتكوين الأدوار؟',
      description: 'حدد أدوار المستخدمين بمجموعات صلاحيات محددة.',
    },
    'users-manage': {
      question: 'كيفية إدارة المستخدمين؟',
      description: 'أضف وعدّل وعطّل حسابات المستخدمين في النظام.',
    },
    'users-password': {
      question: 'كيفية إعادة تعيين كلمة المرور؟',
      description: 'أعد تعيين كلمة مرور مستخدم فقد وصوله.',
    },
    'logs-view': {
      question: 'كيفية عرض سجلات النشاط؟',
      description: 'راقب جميع الإجراءات المنفذة في النظام لضمان إمكانية التتبع.',
    },
    'logs-filter': {
      question: 'كيفية تصفية السجلات حسب المستخدم أو الإجراء؟',
      description: 'استخدم الفلاتر للعثور على إجراءات محددة في السجل.',
    },
  },
};

export default ar;
