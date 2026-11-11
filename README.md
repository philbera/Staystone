# Staystone

Club deals, annonces de cession et secret deals dans l’immobilier hôtelier.

## Ce dépôt

- `index.html` : l’application complète (styles, scripts et photos inclus).
- `standalone.js` : mode autonome. Hors de claude.ai, il remplace la base de données
  partagée par un stockage local au navigateur, prérempli avec les données de démonstration.
- `assets/` : la vidéo d’accueil et son image d’affiche.
- `package.json` + `build.mjs` : build minimal (`npm run build` copie le site dans `dist/`).

## Déployer

- **Hébergement statique (recommandé)** : publier le dossier tel quel, ou `dist/` après `npm run build`.
- **Hostinger** : « Déployer en statique », ou application Node avec
  commande de build `npm run build` et dossier de sortie `dist`.

## Limites de la version autonome

- Chaque visiteur a sa propre copie des données : rien n’est partagé entre visiteurs.
- Les prix concurrents en direct (Booking.com) ne sont disponibles que dans la version claude.ai.
- Pour une version multi-utilisateurs réelle : brancher la base Supabase « staystone ».

Pour remettre la démo à zéro dans un navigateur : ouvrir la console et taper `staystoneReset()`.
