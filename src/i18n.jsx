import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "lang";

const ui = {
  fr: {
    meta: {
      title: "Abel TIENE, futur ingénieur DevSecOps",
      description:
        "Abel TIENE, étudiant ingénieur à l'EPITA en majeure DevSecOps. Infrastructure et cybersécurité. Recherche un stage de 6 mois à partir de février 2027.",
    },
    skip: "Aller au contenu",
    nav: { about: "À propos", skills: "Compétences", projects: "Projets", journey: "Parcours", contact: "Contact" },
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    switchLang: "Choisir la langue",
    themeDark: "Passer en thème sombre",
    themeLight: "Passer en thème clair",
    hero: { projects: "Voir mes projets", contact: "Me contacter", cv: "Télécharger le CV (PDF)", available: "Disponible", photoAlt: "Portrait d'Abel TIENE" },
    pipeline: { title: "Mes outils, du commit à la supervision" },
    about: { title: "À propos", summary: "En résumé" },
    skills: { title: "Compétences", intro: "Les outils et langages que j'ai utilisés en projet.", learning: "en cours" },
    projects: {
      title: "Projets",
      intro: "De l'infrastructure au code système, ce que j'ai conçu et livré.",
      filter: "Filtrer les projets",
      open: "Voir le projet",
      back: "Retour aux projets",
      done: "Réalisations",
      stack: "Technologies",
      repo: "Voir le code",
      demo: "Voir la démo",
      notFound: "Ce projet n'existe pas.",
    },
    journey: {
      title: "Parcours",
      education: "Formation",
      experience: "Expérience",
      certifications: "Certifications",
      looking: "Ce que je recherche",
      where: "Lieu : ",
      cv: "Télécharger le CV (PDF)",
    },
    contact: {
      title: "Contact",
      intro: "Une offre de stage ou une question ? Écrivez-moi.",
      email: "E-mail",
      phone: "Téléphone",
      location: "Localisation",
      formName: "Nom",
      formEmail: "E-mail",
      formMessage: "Message",
      prepare: "Préparer l'e-mail",
      prepareHint: "Le message s'ouvre dans votre messagerie, prêt à être envoyé.",
      send: "Envoyer le message",
      sending: "Envoi en cours",
      sent: "Message envoyé. Je vous réponds dès que possible.",
      failed: "L'envoi a échoué. Écrivez directement à",
      subject: "Contact depuis le portfolio : ",
      from: "De : ",
    },
    footer: { rights: "Tous droits réservés." },
    notFound: { title: "Cette page n'existe pas.", home: "Retour à l'accueil" },
  },
  en: {
    meta: {
      title: "Abel TIENE, DevSecOps engineering student",
      description:
        "Abel TIENE, engineering student at EPITA majoring in DevSecOps. Infrastructure and cybersecurity. Looking for a 6-month internship from February 2027.",
    },
    skip: "Skip to content",
    nav: { about: "About", skills: "Skills", projects: "Projects", journey: "Background", contact: "Contact" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLang: "Choose language",
    themeDark: "Switch to dark theme",
    themeLight: "Switch to light theme",
    hero: { projects: "See my projects", contact: "Contact me", cv: "Download my resume (PDF, in French)", available: "Available", photoAlt: "Portrait of Abel TIENE" },
    pipeline: { title: "My tools, from commit to monitoring" },
    about: { title: "About", summary: "At a glance" },
    skills: { title: "Skills", intro: "The tools and languages I've used on projects.", learning: "learning" },
    projects: {
      title: "Projects",
      intro: "From infrastructure to systems code, what I've designed and delivered.",
      filter: "Filter projects",
      open: "View project",
      back: "Back to projects",
      done: "What I did",
      stack: "Technologies",
      repo: "View the code",
      demo: "View the demo",
      notFound: "This project doesn't exist.",
    },
    journey: {
      title: "Background",
      education: "Education",
      experience: "Experience",
      certifications: "Certifications",
      looking: "What I'm looking for",
      where: "Location: ",
      cv: "Download my resume (PDF, in French)",
    },
    contact: {
      title: "Contact",
      intro: "An internship offer or a question? Write to me.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      prepare: "Prepare the email",
      prepareHint: "The message opens in your email app, ready to send.",
      send: "Send message",
      sending: "Sending",
      sent: "Message sent. I'll reply as soon as I can.",
      failed: "Sending failed. Write directly to",
      subject: "Contact from the portfolio: ",
      from: "From: ",
    },
    footer: { rights: "All rights reserved." },
    notFound: { title: "This page doesn't exist.", home: "Back to home" },
  },
};

function readStoredLang() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "en" || stored === "fr" ? stored : "fr";
  } catch {
    return "fr";
  }
}

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Stockage indisponible : le choix vaut pour cette visite.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", ui[lang].meta.description);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      ui: ui[lang],
      // Résout un texte traduit { fr, en } ; une chaîne simple est rendue telle quelle.
      tr: (text) => (text && typeof text === "object" && !Array.isArray(text) ? text[lang] : text),
    }),
    [lang, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}
