# Portfolio d'Abel TIENE

Site d'une page en français et en anglais, avec thème sombre et clair, et une page de détail par projet.
Stack : Vite, React, React Router et Tailwind CSS. Les polices sont auto-hébergées.

## Modifier le contenu

Tout le contenu est dans `src/data.js`. Les textes de l'interface (boutons, titres) sont dans `src/i18n.jsx`.

## Champs à compléter

Ces champs de `src/data.js` sont marqués `À COMPLÉTER`. Tant qu'ils sont vides, le site les masque.

| Champ | Effet une fois rempli |
| --- | --- |
| `profile.photo` | Remplace les initiales dans le cadre du hero. Déposer l'image dans `public/`. |
| `profile.links.linkedin`, `profile.links.hackthebox` | Ajoute le lien dans le hero et la section Contact. |
| `profile.contactEndpoint` | Envoie le formulaire au service choisi au lieu de préparer un e-mail. |
| `projects[].images` | Ajoute une vignette sur la carte et une galerie sur la page du projet. Le format `{ src, alt, width, height }` est utilisé par Bailo. |
| `projects[].repo`, `projects[].demo` | Ajoute les boutons sur la page du projet. |
| `experience`, `certifications` | Fait apparaître ces blocs dans la section Parcours. |

Une fois le domaine connu, décommenter aussi les balises `canonical` et `og:` dans `index.html`.

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer sur Vercel

Importer le dépôt dans Vercel. `vercel.json` configure le build, les routes et les en-têtes de sécurité.
Le site n'utilise ni script ni style inline, ce qui permet une CSP stricte. Si `contactEndpoint` pointe vers
un autre domaine que `formspree.io`, l'ajouter à `connect-src` dans `vercel.json`.
