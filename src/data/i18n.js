export const getInitialLang = () => {
  const saved = localStorage.getItem('lang');
  if (saved) return saved;
  const nav = navigator.language || navigator.userLanguage || 'en';
  return nav.startsWith('fr') ? 'fr' : 'en';
};

export const translations = {
  fr: {
    menu: [
      { label: 'Accueil', id: 'hero' },
      { label: 'À propos', id: 'about' },
      { label: 'Compétences', id: 'skills' },
      { label: 'Projets', id: 'projects' },
      { label: 'Formation', id: 'education' },
      { label: 'Contact', id: 'contact' }
    ],
    about: {
      title: "À propos de moi",
      who: "Qui suis-je ?",
      p1: "Junior Software Developer spécialisé dans les systèmes et applications logicielles. Solide formation en Java (OOP, Swing), développement web, Flutter, bases de données, réseaux GSM et systèmes de paiement mobile.",
      p2: "Capable de concevoir des applications complètes depuis l'analyse jusqu'au déploiement. Réalisation de projets académiques et personnels couvrant la conception, le développement, l'intégration de bases de données et la phase de tests.",
      p3: "Motivé par la résolution de problèmes concrets et l'amélioration continue pour délivrer des solutions fiables et maintenables."
    ,
      highlights: [
        {
          title: "Junior Software Developer",
          description: "Conception et développement d'applications logicielles (analyse → déploiement)"
        },
        {
          title: "Java & Applications Desktop",
          description: "Java (OOP, Swing), développement d'applications desktop, débogage et optimisation"
        },
        {
          title: "Développement Web & Mobile",
          description: "HTML/CSS/JS, WordPress, responsive design et développement mobile avec Flutter"
        },
        {
          title: "Réseaux & Paiements Mobiles",
          description: "Travail sur modems GSM, SMS/USSD et intégration de services de paiement mobile"
        }
      ]
    },
    skills: {
      title: "Mes Compétences",
      softTitle: "💡 Compétences transversales"
    ,
      softSkills: [
        "Travail d'équipe",
        "Résolution de problèmes",
        "Communication",
        "Apprentissage continu",
        "Gestion du temps",
        "Esprit d'analyse"
      ]
    },
    projects: {
      title: "Mes Projets",
      intro: "Découvrez une sélection de mes projets récents, réalisés avec diverses technologies modernes."
    },
    education: {
      title: "Formation & Expérience"
    ,
      experience: [
        {
          title: "Junior Software Developer — Academic & Personal Projects",
          company: "Academic & personal projects",
          period: "2022 - Present",
          description: "Development of software applications and complete systems",
          responsibilities: [
            "Built Java OOP applications with Swing interfaces",
            "Designed management systems (grades, expenses, archives)",
            "Integrated PostgreSQL databases",
            "Tested, debugged and improved features"
          ]
        },
        {
          title: "Junior Web Developer — Institutional & Personal Projects",
          company: "Institutional & personal projects",
          period: "2022 - Present",
          description: "Built showcase and educational websites",
          responsibilities: [
            "Created interactive web pages and sites",
            "Integrated animations and dynamic content",
            "Used WordPress and modern frontend tools",
            "Deployed websites online"
          ]
        },
        {
          title: "Junior Network & Telecom Technician — Practical Projects",
          company: "Practical projects",
          period: "2021 - Present",
          description: "Worked with GSM equipment and serial communication",
          responsibilities: [
            "Handled GSM modems & gateways (e.g. NeoGate TG200)",
            "Executed AT commands for SMS and USSD",
            "Tested serial communication tools",
            "Operated in Linux / WSL environments"
          ]
        },
        {
          title: "Junior Functional Analyst — Academic Projects",
          company: "Academic projects",
          period: "2020 - Present",
          description: "Functional analysis and documentation",
          responsibilities: [
            "Analyzed user needs",
            "Wrote user stories and acceptance criteria",
            "Documented functional requirements",
            "Exported structured deliverables (PDF)"
          ]
        }
      ]
    },
    header: {
      langToggle: 'EN',
      themeToggleDark: 'Sombre',
      themeToggleLight: 'Clair'
    }
  },
  en: {
    menu: [
      { label: 'Home', id: 'hero' },
      { label: 'About', id: 'about' },
      { label: 'Skills', id: 'skills' },
      { label: 'Projects', id: 'projects' },
      { label: 'Education', id: 'education' },
      { label: 'Contact', id: 'contact' }
    ],
    about: {
      title: "About Me",
      who: "Who am I?",
      p1: "Junior Software Developer specialized in software systems and applications. Strong foundation in Java (OOP, Swing), Web Development, Flutter, Databases, GSM Networks, and Mobile Payment Systems.",
      p2: "Capable of designing complete applications from analysis to deployment. I worked on academic and personal projects covering design, development, database integration and testing.",
      p3: "I enjoy solving practical problems and continuous improvement to deliver reliable and maintainable solutions."
    ,
      highlights: [
        {
          title: "Junior Software Developer",
          description: "Design and development of software applications (analysis → deployment)"
        },
        {
          title: "Java & Desktop Applications",
          description: "Java (OOP, Swing), desktop app development, debugging and optimization"
        },
        {
          title: "Web & Mobile Development",
          description: "HTML/CSS/JS, WordPress, responsive design and mobile development with Flutter"
        },
        {
          title: "Networks & Mobile Payments",
          description: "Work with GSM modems, SMS/USSD and integration of mobile payment services"
        }
      ]
    },
    skills: {
      title: "My Skills",
      softTitle: "💡 Soft Skills"
    ,
      softSkills: [
        "Teamwork",
        "Problem solving",
        "Communication",
        "Continuous learning",
        "Time management",
        "Analytical thinking"
      ]
    },
    projects: {
      title: "Projects",
      intro: "Explore a selection of my recent projects, built with modern technologies."
    },
    education: {
      title: "Education & Experience"
    ,
      experience: [
        {
          title: "Junior Software Developer — Academic & Personal Projects",
          company: "Academic & personal projects",
          period: "2022 - Present",
          description: "Development of software applications and complete systems",
          responsibilities: [
            "Built Java OOP applications with Swing interfaces",
            "Designed management systems (grades, expenses, archives)",
            "Integrated PostgreSQL databases",
            "Tested, debugged and improved features"
          ]
        },
        {
          title: "Junior Web Developer — Institutional & Personal Projects",
          company: "Institutional & personal projects",
          period: "2022 - Present",
          description: "Built showcase and educational websites",
          responsibilities: [
            "Created interactive web pages and sites",
            "Integrated animations and dynamic content",
            "Used WordPress and modern frontend tools",
            "Deployed websites online"
          ]
        },
        {
          title: "Junior Network & Telecom Technician — Practical Projects",
          company: "Practical projects",
          period: "2021 - Present",
          description: "Worked with GSM equipment and serial communication",
          responsibilities: [
            "Handled GSM modems & gateways (e.g. NeoGate TG200)",
            "Executed AT commands for SMS and USSD",
            "Tested serial communication tools",
            "Operated in Linux / WSL environments"
          ]
        },
        {
          title: "Junior Functional Analyst — Academic Projects",
          company: "Academic projects",
          period: "2020 - Present",
          description: "Functional analysis and documentation",
          responsibilities: [
            "Analyzed user needs",
            "Wrote user stories and acceptance criteria",
            "Documented functional requirements",
            "Exported structured deliverables (PDF)"
          ]
        }
      ]
    },
    header: {
      langToggle: 'FR',
      themeToggleDark: 'Dark',
      themeToggleLight: 'Light'
    }
  }
};
