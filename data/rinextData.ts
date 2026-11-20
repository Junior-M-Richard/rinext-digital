export const WHATSAPP_NUMBER = "243974451186";

export interface SubService {
  id: string;
  shortTitle: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface ClientPortfolio {
  id: string;
  name: string;
  fullName: string;
  logo: string;
  service: string;
  domain: string;
  url: string;
  status?: string;
}

export const SUB_SERVICES: SubService[] = [
  {
    id: "web-design",
    shortTitle: "Web Développement & Design",
    title: "Développement Web, Bases de Données & Web Design",
    tagline: "Sites modernes, applications métiers et identité visuelle",
    description:
      "Conception de plateformes web rapides et esthétiques pour églises, ONG, institutions et entreprises, alliée à une identité graphique professionnelle.",
    deliverables: [
      "Création de sites web (Églises, Organisations, Vitrines, Portfolios)",
      "Applications web sur mesure & systèmes de gestion avec bases de données",
      "Interfaces responsives optimisées sur ordinateur et smartphone",
    ],
  },
  {
    id: "seo",
    shortTitle: "SEO & Référencement",
    title: "SEO & Visibilité sur les Moteurs de Recherche",
    tagline: "Soyez trouvé en premier sur Google en RDC",
    description:
      "Optimisation technique et éditoriale de votre site web pour améliorer votre classement sur Google et attirer davantage de clients locaux.",
    deliverables: [
      "Audit SEO technique, vitesse de chargement et structure sémantique",
      "Configuration Sitemap XML, Robots.txt et données structurées",
      "Référencement local (Google Business Profile)",
      "Optimisation des mots-clés stratégiques liés à votre activité",
    ],
  },
  {
    id: "vente-materiel",
    shortTitle: "Vente Matériel Info & Réseau",
    title: "Vente & Expédition de Matériel Informatique et Réseau",
    tagline: "Approvisionnement direct sur l'axe Burundi – Uvira (RDC)",
    description:
      "Commandez directement vos équipements informatiques et réseau auprès de notre équipe : achat certifié, vérification technique et expédition rapide entre le Burundi et la RDC.",
    deliverables: [
      "Ordinateurs portables (Laptops), postes fixes, imprimantes et accessoires",
      "Équipements réseau : routeurs Wi-Fi, switchs, câbles RJ45, antennes, kits Starlink",
      "Onduleurs (UPS), disques durs externes et solutions de stockage",
      "Service direct de commande et livraison entre Bujumbura et Uvira",
    ],
  },
  {
    id: "audit-reseau",
    shortTitle: "Audit Systèmes & Réseau",
    title: "Audit, Installation & Sécurité des Systèmes et Réseaux",
    tagline: "Infrastructures IT fiables, sécurisées et sans interruption",
    description:
      "Diagnostic approfondi de votre parc informatique et déploiement d'infrastructures réseaux performantes pour organisations, écoles et bureaux.",
    deliverables: [
      "Audit complet des systèmes d'information et de la sécurité réseau",
      "Installation et configuration d'appareils réseau (routeurs, points d'accès, VLAN)",
      "Gestion et maintenance préventive des infrastructures IT",
      "Configuration de serveurs locaux et sécurisation des accès et données",
    ],
  },
];

// Liste évolutive des organisations et entreprises accompagnées
export const CLIENT_PORTFOLIO: ClientPortfolio[] = [
  {
    id: "ahaa-rdc",
    name: "AHAA RDC",
    fullName: "Action Humanitaire pour l'Assistance et l'Accompagnement",
    logo: "/images/clients/logo-ahaa.png",
    service: "Web Développement & SEO",
    domain: "ahaa-rdc.org",
    url: "https://ahaa-rdc.org",
    status: "",
  },
];