// Tout le contenu du portfolio est ici.
// Un texte traduit s'écrit { fr: "...", en: "..." }.
// Les champs marqués « À COMPLÉTER » peuvent rester vides : le site masque
// proprement ce qui manque et l'affiche dès que le champ est rempli.

export const profile = {
  firstName: "Abel",
  lastName: "TIENE",
  initials: "AT",

  // À COMPLÉTER : déposer l'image dans public/ puis indiquer "/photo.jpg".
  // Sans photo, le cadre affiche les initiales.
  photo: "",

  role: {
    fr: "Futur ingénieur DevSecOps",
    en: "DevSecOps engineering student",
  },
  speciality: {
    fr: "Infrastructure et cybersécurité",
    en: "Infrastructure and cybersecurity",
  },
  pitch: {
    fr: "Je conçois des applications robustes, je les déploie sur des infrastructures sécurisées et résilientes, et je les livre dans des pipelines automatisés.",
    en: "I build robust applications, deploy them on secure and resilient infrastructure, and ship them through automated pipelines.",
  },
  location: "Paris / Rennes",
  email: "sindou.tiene@epita.fr",
  phone: "07 83 23 82 10",
  cv: "/Portfolio_Abel_TIENE.pdf",

  links: {
    github: "https://github.com/Well-arch",
    gitlab: "https://gitlab.com/well-arch1",
    linkedin: "", // À COMPLÉTER : https://www.linkedin.com/in/...
    hackthebox: "", // À COMPLÉTER : lien du profil public
  },

  // À COMPLÉTER (facultatif) : URL d'un service de formulaire, par exemple
  // https://formspree.io/f/xxxx. Vide, le formulaire prépare un e-mail.
  // Un autre domaine que formspree.io doit être ajouté à connect-src dans vercel.json.
  contactEndpoint: "",

  availability: {
    title: { fr: "Stage de 6 mois", en: "6-month internship" },
    from: { fr: "à partir de février 2027", en: "from February 2027" },
    detail: {
      fr: "Prolongation possible en stage de fin d'études.",
      en: "Can be extended into an end-of-studies internship.",
    },
  },
};

export const about = {
  paragraphs: {
    fr: [
      "Étudiant en dernière année d'ingénieur à l'EPITA, en majeure DevSecOps, je m'intéresse à toute la vie d'une application : son développement, son infrastructure et sa sécurité.",
      "Mon parcours couvre l'architecture d'entreprise (Proxmox, Active Directory, PCA/PRA, IaC avec Terraform et Ansible), l'audit de sécurité selon les référentiels ANSSI, la sécurité CI/CD ainsi que le développement backend, frontend et les architectures distribuées.",
      "Curieux des nouvelles technologies, je m'entraîne aussi sur HackTheBox et HackerRank et je participe à des hackathons.",
    ],
    en: [
      "I'm in the final year of my engineering degree at EPITA, majoring in DevSecOps. I care about the whole life of an application: how it's built, where it runs and how it's secured.",
      "My work covers enterprise architecture (Proxmox, Active Directory, BCP/DRP, IaC with Terraform and Ansible), security audits based on ANSSI guidelines, CI/CD security, backend and frontend development, and distributed systems.",
      "I also train on HackTheBox and HackerRank and take part in hackathons.",
    ],
  },
  highlights: [
    {
      title: { fr: "Infrastructure", en: "Infrastructure" },
      value: "Proxmox, Terraform, Ansible",
      detail: {
        fr: "Architecture d'entreprise résiliente pour EPITACORP, avec PCA/PRA",
        en: "Resilient enterprise architecture for EPITACORP, with BCP/DRP",
      },
    },
    {
      title: { fr: "Sécurité", en: "Security" },
      value: "ANSSI, Active Directory, Wazuh",
      detail: {
        fr: "Audit d'infrastructure en groupe de 4 et supervision SIEM",
        en: "Infrastructure audit in a team of 4 and SIEM monitoring",
      },
    },
    {
      title: { fr: "Pipelines", en: "Pipelines" },
      value: "Gitleaks, Semgrep, Trivy",
      detail: {
        fr: "Contrôles de sécurité bloquants dans le pipeline GitLab de Bailo",
        en: "Blocking security checks in Bailo's GitLab pipeline",
      },
    },
    {
      title: { fr: "Développement", en: "Development" },
      value: "Java, Python, C, React",
      detail: {
        fr: "L'application Bailo, des microservices, un compilateur C++ et un shell POSIX",
        en: "The Bailo application, microservices, a C++ compiler and a POSIX shell",
      },
    },
  ],
};

// Chaîne de livraison affichée sous le hero : outils tirés des compétences.
export const pipeline = [
  { name: { fr: "Commit", en: "Commit" }, tools: ["GitLab CI", "GitHub"] },
  { name: { fr: "Analyse", en: "Scan" }, tools: ["Semgrep", "Gitleaks"] },
  { name: { fr: "Build", en: "Build" }, tools: ["Docker", "Trivy", "Syft"] },
  { name: { fr: "Signature", en: "Sign" }, tools: ["Cosign"] },
  { name: { fr: "Déploiement", en: "Deploy" }, tools: ["Terraform", "Ansible", "Kubernetes"] },
  { name: { fr: "Supervision", en: "Monitor" }, tools: ["Prometheus", "Grafana", "Wazuh"] },
];

const learning = (name) => ({ fr: name, en: name, learning: true });

export const skills = [
  {
    label: "DevSecOps & Cloud",
    items: ["Docker", "Docker Compose", "Kubernetes", "Terraform", "OpenTofu", "Ansible", "GitLab CI / GitHub", learning("AWS"), learning("Rancher")],
  },
  {
    label: { fr: "Infrastructure et réseau", en: "Infrastructure and network" },
    items: [
      "Proxmox",
      "Active Directory",
      { fr: "Apache Guacamole (bastion)", en: "Apache Guacamole (bastion)" },
      "OpenVPN",
      "OPNsense",
      "Caddy",
      "nftables",
      "LoRa / MeshCore",
      { fr: "Routeurs en haute disponibilité", en: "High-availability routers" },
      { fr: "Segmentation réseau", en: "Network segmentation" },
      { fr: "PCA / PRA", en: "BCP / DRP" },
    ],
  },
  {
    label: { fr: "Sécurité et observabilité", en: "Security and observability" },
    items: [
      "Wazuh (SIEM)", "Prometheus", "Grafana", "Zabbix", "Gitleaks", "Trivy", "Syft", "Semgrep", "Hadolint", "Cosign", "OIDC", "Keycloak",
      { fr: "PKI step-ca", en: "step-ca PKI" },
      "restic",
      "SOPS / age",
      { fr: "Audit AD", en: "AD audit" },
      { fr: "Référentiels ANSSI", en: "ANSSI guidelines" },
      "HackTheBox",
    ],
  },
  {
    label: { fr: "IA et machine learning", en: "AI and machine learning" },
    items: ["XGBoost", "Random Forest", "RAG", "ChromaDB", "vLLM", "LiteLLM", "Open WebUI", "Qdrant", "Docling", "Langfuse"],
  },
  {
    label: "Backend",
    items: ["Java", "Quarkus", "Spring Boot", "Hibernate", "Node.js", "Express", "Prisma", "FastAPI", "REST / Swagger", "Kafka", "Redis"],
  },
  { label: "Frontend", items: ["JavaScript", "TypeScript", "React", "Angular", "Vite", "HTML", "Flutter"] },
  {
    label: { fr: "Bases de données", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "Elasticsearch", "Neo4j"],
  },
  {
    label: { fr: "Langages", en: "Programming languages" },
    items: ["Python", "Java", "C", "C++", "C#", "JavaScript / TypeScript", "Bash", "PowerShell", "PHP", "R",
      { fr: "Assembleur x86_64 / 68k", en: "x86_64 / 68k assembly" }],
  },
  {
    label: { fr: "Tests et qualité", en: "Testing and quality" },
    items: ["JUnit", "Jest", "Vitest", "pytest", "googletest", "Postman", "ESLint", "Prettier", { fr: "Méthode Agile", en: "Agile" }],
  },
  { label: { fr: "Systèmes", en: "Operating systems" }, items: ["Linux", "Windows"] },
  {
    label: { fr: "Langues", en: "Languages" },
    items: [
      { fr: "Français (langue maternelle)", en: "French (native)" },
      { fr: "Anglais (C1)", en: "English (C1)" },
    ],
  },
];

export const categories = [
  { key: "all", label: { fr: "Tous", en: "All" } },
  { key: "infra", label: { fr: "Infra et sécurité", en: "Infra and security" } },
  { key: "ia", label: { fr: "IA", en: "AI" } },
  { key: "dev", label: { fr: "Développement", en: "Development" } },
  { key: "sys", label: { fr: "Systèmes", en: "Systems" } },
];

// categories : un projet peut figurer dans plusieurs filtres, ex. ["infra", "ia"].
// Pour chaque projet, À COMPLÉTER si disponible :
//   images : [{ src: "/projets/tinyx-1.png", alt: "Description" }]
//            (la première sert de vignette sur la carte)
//   repo, demo : URL du code et de la démo (boutons masqués si vides)
export const projects = [
  {
    slug: "bailo",
    categories: ["dev"],
    featured: true,
    date: { fr: "Depuis mai 2026", en: "Since May 2026" },
    context: { fr: "Projet personnel", en: "Personal project" },
    title: { fr: "Bailo : logiciel de gestion locative", en: "Bailo: rental management software" },
    summary: {
      fr: "Application en ligne pour les propriétaires en Côte d'Ivoire : avis et relances automatiques, quittances, bail signé en ligne et annonces. Les loyers vont directement au bailleur.",
      en: "An online application for landlords in Côte d'Ivoire: automatic notices and reminders, rent receipts, online lease signing and listings. Rent goes straight to the landlord.",
    },
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Flutter", "Docker", "GitLab CI", "Gitleaks", "Semgrep", "Trivy", "Hadolint", "Stripe", "Vitest"],
    points: {
      fr: [
        "Conception et développement du produit : API Node.js et Express, base PostgreSQL avec Prisma, interface React et application mobile Flutter en préparation.",
        "Pipeline GitLab dont les contrôles de sécurité bloquent la livraison : Gitleaks, Semgrep, Trivy sur les dépendances et l'image Docker, Hadolint, SBOM CycloneDX et image sans root.",
        "Sécurité applicative : double authentification TOTP, rotation des jetons de session, journal d'audit chaîné par SHA-256 et contrôle du type réel des fichiers déposés.",
        "Bail et états des lieux rédigés selon la loi ivoirienne n° 2019-576, avec signature électronique tracée et empreinte SHA-256 du document.",
        "Recouvrement automatisé des loyers, du rappel au dossier pour l'huissier, et quittances PDF émises dès la confirmation du paiement.",
        "Abonnements par Wave, Orange Money ou Stripe, avec webhooks authentifiés par HMAC et montant revérifié chez le fournisseur.",
        "Plus de 820 tests unitaires et d'intégration, près de 90 tests contre un vrai PostgreSQL, et sauvegardes chiffrées avec test de restauration.",
      ],
      en: [
        "Product design and development: Node.js and Express API, PostgreSQL with Prisma, a React interface and a Flutter mobile app in preparation.",
        "GitLab pipeline whose security checks block delivery: Gitleaks, Semgrep, Trivy on dependencies and the Docker image, Hadolint, a CycloneDX SBOM and a non-root image.",
        "Application security: TOTP two-factor authentication, session token rotation, a SHA-256 chained audit log and checks on the real type of uploaded files.",
        "Leases and inventories drafted under Ivorian law no. 2019-576, with traceable electronic signatures and a SHA-256 document fingerprint.",
        "Automated rent collection, from the first reminder to the bailiff file, and PDF receipts issued as soon as payment is confirmed.",
        "Subscriptions through Wave, Orange Money or Stripe, with HMAC-authenticated webhooks and amounts rechecked with the provider.",
        "More than 820 unit and integration tests, nearly 90 tests against a real PostgreSQL database, and encrypted backups with restore testing.",
      ],
    },
    images: [
      {
        src: "/projets/bailo/tableau-de-bord-bailleur.webp",
        alt: { fr: "Tableau de bord du bailleur (données d'exemple)", en: "Landlord dashboard (sample data)" },
        width: 1400,
        height: 875,
      },
      {
        src: "/projets/bailo/mobile-bailleur.webp",
        alt: { fr: "Accueil du bailleur sur l'application mobile (données d'exemple)", en: "Landlord home screen in the mobile app (sample data)" },
        width: 780,
        height: 1688,
      },
      {
        src: "/projets/bailo/mobile-locataire.webp",
        alt: { fr: "Loyer à régler sur l'application mobile (données d'exemple)", en: "Rent due in the mobile app (sample data)" },
        width: 780,
        height: 1688,
      },
      {
        src: "/projets/bailo/mobile-bienvenue.webp",
        alt: { fr: "Écran de bienvenue de l'application mobile", en: "Mobile app welcome screen" },
        width: 780,
        height: 1688,
      },
      {
        src: "/projets/bailo/espace-locataire.webp",
        alt: { fr: "Espace du locataire (données d'exemple)", en: "Tenant area (sample data)" },
        width: 1400,
        height: 875,
      },
      {
        src: "/projets/bailo/logements.webp",
        alt: { fr: "Recherche de logements à louer (données d'exemple)", en: "Search for homes to rent (sample data)" },
        width: 1400,
        height: 875,
      },
      {
        src: "/projets/bailo/accueil.jpg",
        alt: { fr: "Page d'accueil de bailo.space", en: "bailo.space home page" },
        width: 1440,
        height: 900,
      },
    ],
    repo: "",
    demo: "https://bailo.space",
  },
  {
    slug: "ia-corp",
    categories: ["infra", "ia"],
    date: { fr: "Novembre 2026", en: "November 2026" },
    context: "Ansible",
    title: { fr: "IA-Corp : socle d'un assistant IA on-premise", en: "IA-Corp: foundation for an on-premise AI assistant" },
    summary: {
      fr: "Infrastructure as code d'un assistant hébergé dans l'entreprise, réservé aux employés authentifiés et sans aucun flux vers Internet.",
      en: "Infrastructure as code for an assistant hosted inside the company, limited to authenticated employees, with no traffic to the internet.",
    },
    stack: ["Ansible", "Docker Compose", "Keycloak", "Open WebUI", "LiteLLM", "vLLM", "Qdrant", "Docling", "Langfuse", "Prometheus", "Grafana", "Caddy", "nftables", "restic", "Gitleaks"],
    points: {
      fr: [
        "Déploiement par Ansible et Docker Compose sur deux types de serveurs : un serveur central et un serveur GPU hors ligne.",
        "Authentification par Keycloak, fédéré en lecture seule à Active Directory, avec OTP obligatoire.",
        "Pare-feu nftables, conteneurs sans accès sortant, TLS par CA interne et poids des modèles figés par révision et SHA-256.",
        "Observabilité avec Langfuse, Prometheus et Grafana sans journaliser le contenu des conversations ; sauvegarde restic chiffrée chaque nuit.",
        "Contrôles avant modification : Gitleaks en pre-commit, lint Ansible et validation de Compose, nftables, Caddy et Prometheus.",
        "État actuel : SSO, MFA, TLS et passerelle LiteLLM testés dans des conteneurs temporaires, avec un vLLM simulé. Pas encore de déploiement sur un serveur réel.",
      ],
      en: [
        "Deployment with Ansible and Docker Compose on two server types: a central server and an offline GPU server.",
        "Authentication through Keycloak, federated read-only with Active Directory, with mandatory OTP.",
        "nftables firewall, containers without outbound access, TLS from an internal CA, and model weights pinned by revision and SHA-256.",
        "Observability with Langfuse, Prometheus and Grafana without logging conversation content; encrypted nightly restic backups.",
        "Checks before any change: Gitleaks in pre-commit, Ansible lint, and validation of Compose, nftables, Caddy and Prometheus configs.",
        "Current status: SSO, MFA, TLS and the LiteLLM gateway tested in temporary containers with a simulated vLLM. Not yet deployed on a real server.",
      ],
    },
    images: [],
    repo: "https://github.com/well-arch/IA-Corp",
    demo: "",
  },
  {
    slug: "detection-intrusion-ml",
    categories: ["infra", "ia"],
    date: { fr: "2026", en: "2026" },
    context: { fr: "Groupe de 3", en: "Team of 3" },
    title: { fr: "Détection d'intrusion réseau par machine learning", en: "Network intrusion detection with machine learning" },
    summary: {
      fr: "Détecteur XGBoost en deux étapes entraîné sur 2,3 millions de flux CICIDS2017 : 99,22 % des attaques détectées et 0,10 % de fausses alertes, avec un protocole d'évaluation sans fuite.",
      en: "A two-stage XGBoost detector trained on 2.3 million CICIDS2017 flows: 99.22% of attacks detected and 0.10% false alarms, with a leak-free evaluation protocol.",
    },
    stack: ["Python", "XGBoost", "Random Forest", "Jupyter", "Parquet", "CICIDS2017"],
    points: {
      fr: [
        "Système en deux étapes à partir de 77 statistiques de flux : un XGBoost binaire détecte l'attaque, puis un XGBoost multi-classe la nomme parmi 13 types.",
        "Protocole sans fuite : découpage chronologique par type d'attaque, choix du modèle sur la validation et test évalué une seule fois. Un découpage aléatoire donnait 0,998, un score gonflé par des quasi-doublons.",
        "Résultat sur le test : F1 macro de 0,996, 99,22 % des attaques détectées, 0,10 % de fausses alertes ; 96,2 % des attaques détectées et correctement nommées.",
        "Douze configurations comparées sur la validation, dont un classifieur constant, une régression logistique et RandomForest, avec une règle de sélection fixée avant de lire les résultats.",
        "Limites mesurées : une nouvelle session d'une attaque connue chute à 69 % pour GoldenEye et 79 % pour PortScan, et un type jamais vu n'est détecté qu'à 57-63 %. Les données sont du trafic de laboratoire de 2017.",
        "Analyse des 523 attaques manquées et des 380 fausses alertes, et prototype d'inférence utilisable en ligne de commande et en notebook.",
      ],
      en: [
        "Two-stage system built on 77 flow statistics: a binary XGBoost detects the attack, then a multi-class XGBoost names it among 13 types.",
        "Leak-free protocol: chronological split per attack type, model selection on validation and a test set evaluated only once. A random split gave 0.998, a score inflated by near-duplicates.",
        "Test results: macro F1 of 0.996, 99.22% of attacks detected, 0.10% false alarms; 96.2% of attacks both detected and correctly named.",
        "Twelve configurations compared on validation, including a constant classifier, logistic regression and RandomForest, with a selection rule set before reading the results.",
        "Measured limits: a new session of a known attack drops to 69% for GoldenEye and 79% for PortScan, and an unseen type is only detected 57-63% of the time. The data is lab traffic from 2017.",
        "Analysis of the 523 missed attacks and 380 false alarms, and an inference prototype usable from the command line and a notebook.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "epimesh",
    categories: ["infra", "sys"],
    date: { fr: "Soutenance en janvier 2027", en: "Final defense in January 2027" },
    context: { fr: "Projet de fin d'études, équipe de 2, en cours", en: "Final-year project, team of 2, in progress" },
    title: { fr: "EpiMesh : réseau radio hors-grid sécurisé", en: "EpiMesh: secure off-grid radio network" },
    summary: {
      fr: "Démonstrateur de réseau de communication autonome en LoRa mesh, qui fonctionne sans Internet. Le lien radio et l'application sont validés ; le chiffrement post-quantique est la prochaine grande étape.",
      en: "A demonstrator for an autonomous LoRa mesh communication network that works without internet. The radio link and application are validated; post-quantum encryption is the next major step.",
    },
    stack: ["LoRa", "MeshCore", "Python", "React", "SQLite", "Heltec V3", "Raspberry Pi"],
    points: {
      fr: [
        "Réseau LoRa mesh sous MeshCore, pensé pour le mode hors ligne, avec à terme un nœud solaire sur le toit d'EPITA Rennes.",
        "Application meshxfer pour les messages et les fichiers : protocole de transfert fiable, démon, API locale sécurisée, historique SQLite et interface web React.",
        "Premier lien radio et premier transfert réels validés entre deux cartes Heltec V3, avec vérification SHA-256 du fichier à l'arrivée.",
        "121 tests Python exécutables sans matériel et 24 tests de l'interface.",
        "Prochaines étapes : chiffrement post-quantique hybride X25519 et ML-KEM, multi-saut, analyse STRIDE, tests SDR et de brouillage en cage de Faraday, autonomie solaire.",
      ],
      en: [
        "LoRa mesh network running MeshCore, designed for offline use, with a planned solar node on the roof of EPITA Rennes.",
        "meshxfer application for messages and files: reliable transfer protocol, daemon, secured local API, SQLite history and a React web interface.",
        "First real radio link and file transfer validated between two Heltec V3 boards, with SHA-256 verification on arrival.",
        "121 Python tests that run without hardware and 24 interface tests.",
        "Next steps: hybrid post-quantum encryption with X25519 and ML-KEM, multi-hop, STRIDE analysis, SDR and jamming tests in a Faraday cage, solar autonomy.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "epitacorp-iac",
    categories: ["infra"],
    date: { fr: "Octobre – novembre 2026", en: "October – November 2026" },
    context: "EPITACORP",
    title: { fr: "EpitaCorp : infrastructure as code", en: "EpitaCorp: infrastructure as code" },
    summary: {
      fr: "Infrastructure d'une PME fictive de 33 employés décrite sous forme de code : 13 VM sous Proxmox, Active Directory, bastion, PKI interne et pipeline GitLab CI.",
      en: "The infrastructure of a fictional 33-employee company described as code: 13 Proxmox VMs, Active Directory, a bastion, an internal PKI and a GitLab CI pipeline.",
    },
    stack: ["OpenTofu", "Ansible", "PowerShell", "GitLab CI", "Proxmox", "OPNsense", "Active Directory", "Guacamole", "step-ca", "Zabbix", "Wazuh"],
    points: {
      fr: [
        "Adoption de 13 VM existantes dans OpenTofu via l'API Proxmox, sans rien installer sur l'hyperviseur.",
        "Pipeline GitLab CI lint, plan, déploiement manuel et vérification, avec tofu validate, ansible-lint, PSScriptAnalyzer et scan de secrets.",
        "Active Directory configuré par des scripts PowerShell idempotents : OU, groupes AGDLP, délégation, stratégies de mot de passe et GPO de durcissement.",
        "Arrivée d'un employé pilotée par une merge request sur un référentiel YAML : compte, groupes, dossier personnel et accès au bastion.",
        "PKI interne step-ca et LDAPS sur le contrôleur de domaine ; bastion Guacamole authentifié par l'AD avec enregistrement des sessions d'administration.",
        "Réseau segmenté en VLAN derrière OPNsense et documentation d'exploitation en 11 guides.",
      ],
      en: [
        "Brought 13 existing VMs under OpenTofu through the Proxmox API, with nothing installed on the hypervisor.",
        "GitLab CI pipeline with lint, plan, manual deploy and verify stages, using tofu validate, ansible-lint, PSScriptAnalyzer and secret scanning.",
        "Active Directory configured by idempotent PowerShell scripts: OUs, AGDLP groups, delegation, password policies and hardening GPOs.",
        "Employee onboarding driven by a merge request on a YAML reference file: account, groups, home folder and bastion access.",
        "Internal step-ca PKI and LDAPS on the domain controller; Guacamole bastion authenticated through AD, with admin sessions recorded.",
        "VLAN-segmented network behind OPNsense, and operations documentation in 11 guides.",
      ],
    },
    images: [],
    repo: "https://gitlab.com/well-arch1/epitacorp",
    demo: "",
  },
  {
    slug: "homelab",
    categories: ["infra"],
    date: { fr: "Depuis octobre 2026", en: "Since October 2026" },
    context: { fr: "En cours", en: "In progress" },
    title: { fr: "Homelab : architecture reconstructible par le code", en: "Homelab: an architecture rebuilt from code" },
    summary: {
      fr: "Conception d'un homelab segmenté, sans port entrant, à reconstruire entièrement avec une seule commande. L'architecture et les garde-fous sont posés ; le déploiement arrive par étapes.",
      en: "Design of a segmented homelab with no inbound ports, to be fully rebuilt with a single command. The architecture and safeguards are in place; deployment comes in stages.",
    },
    stack: ["Proxmox", "OPNsense", "OpenTofu", "Ansible", "SOPS", "age", "Gitleaks", "pre-commit"],
    points: {
      fr: [
        "Feuille de route en 5 niveaux, chacun validé par un test de passage, d'un serveur vide à une reconstruction complète par make deploy.",
        "Plan réseau segmenté en VLAN derrière OPNsense : adressage, refus par défaut et matrice de flux documentés.",
        "Exposition publique prévue uniquement par un tunnel Cloudflare sortant depuis la DMZ, sans aucun port entrant.",
        "Décisions d'architecture consignées en ADR : Docker Compose avant Kubernetes, dépôt IaC hors de l'infrastructure, secrets SOPS et age.",
        "Garde-fous déjà actifs sur le dépôt : Gitleaks, détection de clés privées et refus des secrets non chiffrés en pre-commit.",
        "Prochaines étapes : déployer le premier nœud avec OpenTofu et Ansible, puis le SIEM Wazuh, puis k3s et ArgoCD sur trois nœuds.",
      ],
      en: [
        "A 5-level roadmap, each level validated by a pass/fail test, from an empty server to a full rebuild with make deploy.",
        "VLAN-segmented network plan behind OPNsense: addressing, default deny and a documented flow matrix.",
        "Public exposure planned only through an outbound Cloudflare tunnel from the DMZ, with no inbound ports.",
        "Architecture decisions recorded as ADRs: Docker Compose before Kubernetes, the IaC repository outside the infrastructure, secrets with SOPS and age.",
        "Safeguards already active on the repository: Gitleaks, private key detection and rejection of unencrypted secrets in pre-commit.",
        "Next steps: deploy the first node with OpenTofu and Ansible, then the Wazuh SIEM, then k3s and ArgoCD on three nodes.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "architecture-entreprise",
    categories: ["infra"],
    date: { fr: "Avril 2025 – avril 2026", en: "April 2025 – April 2026" },
    context: "EPITACORP",
    title: { fr: "Architecture d'entreprise sécurisée et résiliente", en: "Secure and resilient enterprise architecture" },
    summary: {
      fr: "Réseau segmenté sous Proxmox, Active Directory, bastion d'accès, PCA/PRA et supervision centralisée, provisionnés avec Terraform et Ansible.",
      en: "Segmented network on Proxmox, Active Directory, access bastion, BCP/DRP and central monitoring, provisioned with Terraform and Ansible.",
    },
    stack: ["Proxmox", "Active Directory", "Guacamole", "OpenVPN", "Terraform", "Ansible", "Wazuh", "Prometheus", "Grafana"],
    points: {
      fr: [
        "Orchestration du réseau et segmentation des flux sous Proxmox.",
        "Administration d'Active Directory et déploiement d'un bastion d'accès Apache Guacamole.",
        "Définition et mise en œuvre des plans de continuité et de reprise d'activité (PCA / PRA).",
        "Routeurs en haute disponibilité et VPN sécurisé via OpenVPN.",
        "Provisionnement et gestion de configuration automatisés avec Terraform et Ansible.",
        "Supervision et analyse de sécurité centralisées avec Wazuh (SIEM), Prometheus et Grafana.",
      ],
      en: [
        "Network orchestration and traffic segmentation on Proxmox.",
        "Active Directory administration and deployment of an Apache Guacamole access bastion.",
        "Definition and implementation of business continuity and disaster recovery plans (BCP / DRP).",
        "High-availability routers and a secure VPN with OpenVPN.",
        "Automated provisioning and configuration management with Terraform and Ansible.",
        "Central monitoring and security analysis with Wazuh (SIEM), Prometheus and Grafana.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "audit-anssi",
    categories: ["infra"],
    date: { fr: "Février – juillet 2026", en: "February – July 2026" },
    context: { fr: "Groupe de 4", en: "Team of 4" },
    title: { fr: "Audit d'infrastructure selon les référentiels ANSSI", en: "Infrastructure audit based on ANSSI guidelines" },
    summary: {
      fr: "Évaluation de la conformité d'une infrastructure d'entreprise, audit d'Active Directory, cartographie des risques et préconisations de correction.",
      en: "Compliance assessment of an enterprise infrastructure, Active Directory audit, risk mapping and remediation recommendations.",
    },
    stack: [
      "Active Directory",
      { fr: "Architecture réseau", en: "Network architecture" },
      { fr: "Analyse de risques", en: "Risk analysis" },
      { fr: "Conformité ANSSI", en: "ANSSI compliance" },
    ],
    points: {
      fr: [
        "Évaluation de la conformité de l'infrastructure d'entreprise selon les règles de l'art de l'ANSSI.",
        "Audit approfondi de la sécurité de l'annuaire Active Directory et analyse des configurations réseau.",
        "Identification des vulnérabilités, cartographie des risques et rédaction de préconisations de correction.",
      ],
      en: [
        "Assessment of the enterprise infrastructure against ANSSI best practices.",
        "In-depth security audit of the Active Directory and analysis of network configurations.",
        "Vulnerability identification, risk mapping and written remediation recommendations.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "assistant-sre",
    categories: ["infra", "ia"],
    date: { fr: "2026", en: "2026" },
    context: { fr: "Hackathon OVH, groupe de 3", en: "OVH hackathon, team of 3" },
    title: { fr: "Assistant SRE de réponse à incident", en: "SRE incident response assistant" },
    summary: {
      fr: "API FastAPI qui automatise la gestion des incidents, avec pipeline CI/CD sécurisé et métriques opérationnelles dans Grafana.",
      en: "A FastAPI service that automates incident handling, with a secured CI/CD pipeline and operational metrics in Grafana.",
    },
    stack: ["Python", "ChromaDB", "FastAPI", "Grafana", "Prometheus", "Gitleaks", "Trivy", "Syft", "Semgrep", "Cosign"],
    points: {
      fr: [
        "Agent IA d'analyse d'incident, ancré par RAG dans des runbooks (ChromaDB, bge-m3), avec un modèle de garde contre l'injection de prompt.",
        "Conception d'une API REST haute performance avec FastAPI pour automatiser la gestion des incidents.",
        "Sécurité CI/CD : vérifications automatisées dans le pipeline (Gitleaks, Trivy, Syft, Semgrep, Cosign).",
        "Tableau de bord de métriques opérationnelles avec Prometheus et Grafana.",
      ],
      en: [
        "AI incident analysis agent, grounded through RAG in runbooks (ChromaDB, bge-m3), with a guard model against prompt injection.",
        "Design of a high-performance REST API with FastAPI to automate incident handling.",
        "CI/CD security: automated checks in the pipeline (Gitleaks, Trivy, Syft, Semgrep, Cosign).",
        "Operational metrics dashboard with Prometheus and Grafana.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "tinyx",
    categories: ["dev"],
    date: { fr: "Février – juin 2025", en: "February – June 2025" },
    context: { fr: "Groupe de 14", en: "Team of 14" },
    title: { fr: "TinyX : micro-blogging distribué", en: "TinyX: distributed micro-blogging" },
    summary: {
      fr: "Application en microservices avec bases polyglottes, fils d'actualité en temps réel et déploiement sur Kubernetes.",
      en: "A microservices application with polyglot databases, real-time feeds and deployment on Kubernetes.",
    },
    stack: ["Java", "Quarkus", "MongoDB", "Elasticsearch", "Neo4j", "Redis", "Kubernetes", "Docker", "GitLab"],
    points: {
      fr: [
        "Conception d'une application de micro-blogging en architecture microservices.",
        "Bases de données polyglottes, choisies selon l'usage : MongoDB, Elasticsearch et Neo4j.",
        "Mise à jour temps réel des fils d'actualité via Redis ; déploiement sur cluster Kubernetes et Docker.",
        "Gestion du dépôt GitLab d'un groupe de 14 personnes.",
      ],
      en: [
        "Design of a micro-blogging application with a microservices architecture.",
        "Polyglot persistence, chosen by use case: MongoDB, Elasticsearch and Neo4j.",
        "Real-time feed updates through Redis; deployment on a Kubernetes cluster and Docker.",
        "Management of the GitLab repository for a team of 14.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "epibazard",
    categories: ["dev"],
    date: { fr: "2025", en: "2025" },
    context: "Java",
    title: { fr: "EPIBAZARD : backend d'un jeu de gestion de ressources", en: "EPIBAZARD: backend for a resource management game" },
    summary: {
      fr: "Backend en couches avec persistance PostgreSQL, communication asynchrone via Kafka et API REST documentées.",
      en: "A layered backend with PostgreSQL persistence, asynchronous messaging through Kafka and documented REST APIs.",
    },
    stack: ["Java", "Quarkus", "Hibernate", "PostgreSQL", "Kafka", "Swagger", "JUnit", "Postman"],
    points: {
      fr: [
        "Architecture en couches et persistance avec Hibernate / PostgreSQL.",
        "Communication asynchrone inter-services via Kafka.",
        "Conception et documentation d'API REST à partir de spécifications Swagger ; tests avec JUnit et Postman.",
      ],
      en: [
        "Layered architecture and persistence with Hibernate / PostgreSQL.",
        "Asynchronous communication between services through Kafka.",
        "REST APIs designed and documented from Swagger specifications; tested with JUnit and Postman.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "eplace",
    categories: ["dev"],
    date: { fr: "Avril 2025", en: "April 2025" },
    context: "JavaScript",
    title: { fr: "Eplace : client web d'un clone collaboratif de r/place", en: "Eplace: web client for a collaborative r/place clone" },
    summary: {
      fr: "Client React avec authentification OIDC, synchronisation temps réel par WebSockets et gestion des rate limits.",
      en: "A React client with OIDC authentication, real-time sync over WebSockets and rate limit handling.",
    },
    stack: ["JavaScript", "React", "Vite", "Socket.IO", "OIDC", "Jest", "ESLint", "Prettier"],
    points: {
      fr: [
        "Authentification OIDC et requêtes authentifiées vers l'API REST.",
        "Synchronisation temps réel via WebSockets (Socket.IO) ; gestion des rate limits côté client et validation des formulaires.",
        "Tests unitaires avec Jest ; qualité du code avec ESLint et Prettier.",
      ],
      en: [
        "OIDC authentication and authenticated requests to the REST API.",
        "Real-time sync over WebSockets (Socket.IO); client-side rate limit handling and form validation.",
        "Unit tests with Jest; code quality with ESLint and Prettier.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "tigger",
    categories: ["sys"],
    date: { fr: "2025", en: "2025" },
    context: "C++",
    title: { fr: "Tigger : compilateur C++", en: "Tigger: C++ compiler" },
    summary: {
      fr: "Compilateur complet, de la source à un langage intermédiaire, validé par une suite de tests fonctionnels automatisés.",
      en: "A complete compiler, from source to an intermediate language, validated by an automated functional test suite.",
    },
    stack: ["C++", { fr: "Tests fonctionnels (scripts)", en: "Functional tests (scripts)" }],
    points: {
      fr: [
        "Conception et développement d'un compilateur complet, de la source à un langage intermédiaire.",
        "Validation par une suite de tests fonctionnels automatisés.",
      ],
      en: [
        "Design and development of a complete compiler, from source to an intermediate language.",
        "Validation through an automated functional test suite.",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
  {
    slug: "42sh",
    categories: ["sys"],
    date: { fr: "2024 – 2025", en: "2024 – 2025" },
    context: "C",
    title: { fr: "42sh : shell POSIX", en: "42sh: POSIX shell" },
    summary: {
      fr: "Interpréteur de commandes en C avec système de build autotools et tests automatisés, développé en méthode Agile.",
      en: "A command interpreter in C with an autotools build system and automated tests, developed with Agile methods.",
    },
    stack: ["C", "Autotools", "Makefile", "pytest", "googletest"],
    points: {
      fr: [
        "Développement d'un interpréteur de commandes en C, avec système de build (autotools, Makefile).",
        "Automatisation des tests (pytest, googletest) et travail en méthode Agile (GitHub, GitLab).",
      ],
      en: [
        "Development of a command interpreter in C, with a build system (autotools, Makefile).",
        "Test automation (pytest, googletest) and Agile teamwork (GitHub, GitLab).",
      ],
    },
    images: [],
    repo: "",
    demo: "",
  },
];

export const education = [
  {
    years: "2024 – 2027",
    title: { fr: "Diplôme d'ingénieur informatique", en: "Master's-level engineering degree in computer science" },
    place: "EPITA, Paris",
    detail: { fr: "Majeure DevSecOps", en: "DevSecOps major" },
  },
  {
    years: "2022 – 2024",
    title: { fr: "Classe préparatoire MPSI/MP", en: "Preparatory classes in maths and physics (MPSI/MP)" },
    place: { fr: "ESTEM, Casablanca, Maroc", en: "ESTEM, Casablanca, Morocco" },
  },
  {
    years: "2021 – 2022",
    title: { fr: "Baccalauréat scientifique", en: "Scientific baccalaureate" },
    place: { fr: "EMPT, Bingerville, Côte d'Ivoire", en: "EMPT, Bingerville, Côte d'Ivoire" },
  },
];

// À COMPLÉTER : la section correspondante apparaît dès qu'il y a une entrée.
// experience : { years, title, place, points: { fr: [...], en: [...] } }
export const experience = [];
// certifications : { name, issuer, url }
export const certifications = [];
