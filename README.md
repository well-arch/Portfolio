# Portfolio — Abel TIENE

Vite + React + React Router + Framer Motion + Tailwind.
Style du template (fond grille, dégradé flou, titres animés, curseur, frise, cartes au survol) recoloré en vert/blanc du PDF.

## Modifier le contenu
Tout est dans `src/data.js` (profil, compétences, projets, parcours).

## Lancer en local
```bash
npm install
npm run dev
```

## Déployer sur Vercel
1. Pousser sur GitHub (`git add . && git commit && git push`).
2. vercel.com → Add New… → Project → importer le repo → Deploy.
Le `vercel.json` gère la config Vite et les routes (/about, /projects…).
