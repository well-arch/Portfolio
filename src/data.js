// Tout le contenu du portfolio est ici : modifie ce fichier, le reste suit.

export const profile = {
  name: "Abel TIENE",
  title: "Ingénieur DevSecOps",
  subtitle: "Infrastructure & Cybersécurité",
  lines: [
    "Étudiant en dernière année d'ingénieur, EPITA (majeure DevSecOps)",
    "Recherche un stage de 6 mois à partir de février 2027",
  ],
  email: "sindou.tiene@epita.fr",
  phone: "07 83 23 82 10",
  location: "Paris / Rennes",
  profiles: ["@well-arch1", "@Well-arch"],
  pdf: "/Portfolio_Abel_TIENE.pdf",
  availability:
    "Stage de 6 mois à partir de février 2027, avec possibilité de prolonger en stage de fin d'études.",
};

export const about =
  "Futur ingénieur passionné par le développement logiciel, l'infrastructure et la cybersécurité, je conçois des applications robustes, je les déploie sur des infrastructures sécurisées et résilientes, et je les livre dans des pipelines automatisés. Mon parcours couvre l'architecture d'entreprise (Proxmox, Active Directory, PCA/PRA, IaC avec Terraform et Ansible), l'audit de sécurité selon les référentiels ANSSI, la sécurité CI/CD (Gitleaks, Trivy, Syft, Semgrep, Cosign) ainsi que le développement backend et frontend et les architectures distribuées. Curieux des nouvelles technologies, je m'entraîne aussi sur HackTheBox et HackerRank et je participe à des hackathons.";

export const skills = [
  ["DevSecOps & Cloud", ["Docker", "Docker-compose", "Kubernetes", "Terraform", "Ansible", "GitLab CI / GitHub", "AWS (en cours)", "Rancher (en cours)"]],
  ["Infrastructure & réseau", ["Proxmox", "Active Directory", "Apache Guacamole (bastion)", "OpenVPN", "Routeurs en haute disponibilité", "Segmentation réseau", "PCA / PRA"]],
  ["Sécurité & observabilité", ["Wazuh (SIEM)", "Prometheus", "Grafana", "Gitleaks", "Trivy", "Syft", "Semgrep", "Cosign", "OIDC", "Audit AD", "Référentiels ANSSI", "HackTheBox"]],
  ["Backend", ["Java", "Quarkus", "Spring Boot", "Hibernate", "Node.js", "Prisma", "FastAPI", "API REST / Swagger", "Kafka", "Redis"]],
  ["Frontend", ["JavaScript", "TypeScript", "React", "Angular", "Vite", "HTML"]],
  ["Bases de données", ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Neo4j"]],
  ["Langages", ["Python", "Java", "C", "C++", "C#", "JavaScript / TypeScript", "Bash", "PowerShell", "PHP", "R", "Assembleur x86_64 / 68k"]],
  ["Tests & qualité", ["JUnit", "Jest", "pytest", "googletest", "Postman", "ESLint", "Prettier", "Méthode Agile"]],
  ["Systèmes & langues", ["Linux", "Windows", "Français (langue maternelle)", "Anglais (C1)"]],
];

export const projects = [
  {
    category: "infra",
    title: "Architecture d'entreprise sécurisée et résiliente",
    meta: "EPITACORP · avril 2025 – avril 2026",
    stack: ["Proxmox", "Active Directory", "Guacamole", "OpenVPN", "Terraform", "Ansible", "Wazuh", "Prometheus", "Grafana"],
    points: [
      "Orchestration du réseau et segmentation des flux sous Proxmox.",
      "Administration d'Active Directory et déploiement d'un bastion d'accès Apache Guacamole.",
      "Définition et mise en œuvre des plans de continuité et de reprise d'activité (PCA / PRA).",
      "Routeurs en haute disponibilité et VPN sécurisé via OpenVPN.",
      "Provisionnement et gestion de configuration automatisés avec Terraform et Ansible.",
      "Supervision et analyse de sécurité centralisées avec Wazuh (SIEM), Prometheus et Grafana.",
    ],
  },
  {
    category: "infra",
    title: "Audit d'infrastructure selon les référentiels ANSSI",
    meta: "Groupe de 4 · février – juillet 2026",
    stack: ["Active Directory", "Architecture réseau", "Analyse de risques", "Conformité ANSSI"],
    points: [
      "Évaluation de la conformité de l'infrastructure d'entreprise selon les règles de l'art de l'ANSSI.",
      "Audit approfondi de la sécurité de l'annuaire Active Directory et analyse des configurations réseau.",
      "Identification des vulnérabilités, cartographie des risques et rédaction de préconisations de correction.",
    ],
  },
  {
    category: "infra",
    title: "Assistant SRE de réponse à incident",
    meta: "Hackathon OVH · 2026 · Python",
    stack: ["Python", "FastAPI", "Grafana", "Prometheus", "Gitleaks", "Trivy", "Syft", "Semgrep", "Cosign"],
    points: [
      "Conception d'une API REST haute performance avec FastAPI pour automatiser la gestion des incidents.",
      "Sécurité CI/CD : vérifications automatisées dans le pipeline (Gitleaks, Trivy, Syft, Semgrep, Cosign).",
      "Tableau de bord de métriques opérationnelles avec Prometheus et Grafana.",
    ],
  },
  {
    category: "dev",
    title: "TinyX : micro-blogging distribué",
    meta: "Projet de groupe (14 personnes) · fév. – juin 2025",
    stack: ["Java", "Quarkus", "MongoDB", "Elasticsearch", "Neo4j", "Redis", "Kubernetes", "Docker", "GitLab"],
    points: [
      "Conception d'une application de micro-blogging en architecture microservices.",
      "Bases de données polyglottes, choisies selon l'usage : MongoDB, Elasticsearch et Neo4j.",
      "Mise à jour temps réel des fils d'actualité via Redis ; déploiement sur cluster Kubernetes et Docker.",
      "Gestion du dépôt GitLab d'un groupe de 14 personnes.",
    ],
  },
  {
    category: "dev",
    title: "EPIBAZARD : backend d'un jeu de gestion de ressources",
    meta: "2025 · Java",
    stack: ["Java", "Quarkus", "Hibernate", "PostgreSQL", "Kafka", "Swagger", "JUnit", "Postman"],
    points: [
      "Architecture en couches et persistance avec Hibernate / PostgreSQL.",
      "Communication asynchrone inter-services via Kafka.",
      "Conception et documentation d'API REST à partir de spécifications Swagger ; tests avec JUnit et Postman.",
    ],
  },
  {
    category: "dev",
    title: "Eplace : client web d'un clone collaboratif de r/place",
    meta: "Avril 2025 · JavaScript",
    stack: ["JavaScript", "React", "Vite", "Socket.IO", "OIDC", "Jest", "ESLint", "Prettier"],
    points: [
      "Authentification OIDC et requêtes authentifiées vers l'API REST.",
      "Synchronisation temps réel via WebSockets (Socket.IO) ; gestion des rate limits côté client et validation des formulaires.",
      "Tests unitaires avec Jest ; qualité du code avec ESLint et Prettier.",
    ],
  },
  {
    category: "sys",
    title: "Tigger : compilateur C++",
    meta: "2025 · C++",
    stack: ["C++", "Tests fonctionnels (scripts)"],
    points: [
      "Conception et développement d'un compilateur complet, de la source à un langage intermédiaire.",
      "Validation par une suite de tests fonctionnels automatisés.",
    ],
  },
  {
    category: "sys",
    title: "42sh : shell POSIX",
    meta: "2024 – 2025 · C",
    stack: ["C", "Autotools", "Makefile", "pytest", "googletest"],
    points: [
      "Développement d'un interpréteur de commandes en C, avec système de build (autotools, Makefile).",
      "Automatisation des tests (pytest, googletest) et travail en méthode Agile (GitHub, GitLab).",
    ],
  },
];

export const education = [
  ["2024 – 2027", "Diplôme d'ingénieur informatique, EPITA (Paris)", "Majeure DevSecOps"],
  ["2022 – 2024", "Classe préparatoire MPSI/MP, ESTEM (Casablanca, Maroc)", ""],
  ["2021 – 2022", "Baccalauréat scientifique, EMPT (Bingerville, Côte d'Ivoire)", ""],
];

export const categories = [
  ["all", "Tous"],
  ["infra", "Infra & sécurité"],
  ["dev", "Développement"],
  ["sys", "Systèmes"],
];
