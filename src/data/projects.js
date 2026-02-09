// frontend/src/data/projects.js
export const projects = [
  {
    id: 1,
    title: "Application de gestion de stock",
    description: "Système de gestion de stock pour suivre entrées/sorties, gérer produits et catégories, avec alertes de stock et génération de rapports. Projet axé sur la fiabilité des opérations et l'intégration PostgreSQL.",
    description_en: "Stock management system to track inbound/outbound flows, manage products and categories, with low-stock alerts and report generation. Focus on operational reliability and PostgreSQL integration.",
    technologies: ["React", "NestJS", "PostgreSQL", "TypeORM", "Tailwind CSS"],
    category: "Full-Stack",
    features: [
      "Gestion des produits et catégories",
      "Suivi des entrées/sorties",
      "Alertes de stock bas automatiques",
      "Tableaux de bord et statistiques",
      "Export de rapports"
    ],
    image: "/images/stock-app.png",
    github: "https://github.com/votre-username/stock-app",
    demo: "https://demo-stock.com"
  },
  {
    id: 2,
    title: "Système de réservation d'hôtels",
    description: "Plateforme de réservation pour gérer chambres, clients et planning, avec vérification des disponibilités et gestion des profils clients. Focus sur l'UX et la robustesse du calendrier de réservations.",
    description_en: "Hotel booking platform to manage rooms, guests and schedules with availability checks and customer profiles. Focus on UX and robust booking calendar.",
    technologies: ["React", "NestJS", "MongoDB", "Mongoose", "Material-UI"],
    category: "Full-Stack",
    features: [
      "Gestion des chambres et tarifs",
      "Système de réservation en ligne",
      "Calendrier des disponibilités",
      "Profils clients",
      "Notifications par email"
    ],
    image: "/images/hotel-booking.png",
    github: "https://github.com/votre-username/hotel-booking",
    demo: "https://demo-hotel.com"
  },
  {
    id: 3,
    title: "CRM Simplifié",
    description: "CRM simplifié pour le suivi des clients, opportunités et historique des interactions, conçu pour améliorer le suivi commercial et les rapports.",
    description_en: "Simplified CRM for tracking customers, opportunities and interaction history, designed to improve sales tracking and reporting.",
    technologies: ["React", "NestJS", "PostgreSQL", "Redux Toolkit"],
    category: "Full-Stack",
    features: [
      "Base de données clients",
      "Suivi des opportunités commerciales",
      "Historique des interactions",
      "Pipeline de ventes visuel",
      "Rapports et analytics"
    ],
    image: "/images/crm.png",
    github: "https://github.com/votre-username/crm",
    demo: "https://demo-crm.com"
  },
  {
    id: 4,
    title: "Gestion RH",
    description: "Système RH pour suivre employés, départements, contrats et demandes de congés, avec tableaux de bord et rapports RH.",
    description_en: "HR management system to track employees, departments, contracts and leave requests, with dashboards and HR reports.",
    technologies: ["React", "NestJS", "MySQL", "TypeORM", "Chart.js"],
    category: "Full-Stack",
    features: [
      "Fiches employés complètes",
      "Gestion des départements",
      "Suivi des contrats",
      "Demandes de congés",
      "Rapports RH"
    ],
    image: "/images/hr-system.png",
    github: "https://github.com/votre-username/hr-system",
    demo: "https://demo-hr.com"
  },
  {
    id: 5,
    title: "Système de tickets support",
    description: "Plateforme de support technique pour créer, prioriser et assigner des tickets, avec historique et notifications en temps réel.",
    description_en: "Support ticketing platform to create, prioritize and assign tickets, with history and real-time notifications.",
    technologies: ["React", "NestJS", "PostgreSQL", "Socket.io"],
    category: "Full-Stack",
    features: [
      "Création et suivi de tickets",
      "Système de priorités",
      "Assignation automatique",
      "Commentaires et historique",
      "Notifications en temps réel"
    ],
    image: "/images/ticketing.png",
    github: "https://github.com/votre-username/ticketing",
    demo: "https://demo-ticketing.com"
  },
  {
    id: 6,
    title: "Plateforme de blog administrable",
    description: "CMS de blog avec éditeur riche, gestion des catégories, modération des commentaires et optimisation SEO pour les contenus.",
    description_en: "Administered blog CMS with rich editor, category management, comment moderation and SEO optimizations for content.",
    technologies: ["React", "NestJS", "MongoDB", "TipTap Editor"],
    category: "Full-Stack",
    features: [
      "Éditeur de contenu riche",
      "Gestion des catégories et tags",
      "Système de commentaires",
      "Optimisation SEO",
      "Interface d'administration"
    ],
    image: "/images/blog.png",
    github: "https://github.com/votre-username/blog-cms",
    demo: "https://demo-blog.com"
  }
];

export const projectCategories = [
  "Tous",
  "Full-Stack",
  "Frontend",
  "Backend",
  "Mobile"
];