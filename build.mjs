// Copie le site statique dans dist/ (dossier publié par l’hébergeur).
import { rmSync, mkdirSync, cpSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist");
for (const f of ["index.html", "standalone.js", "assets"]) cpSync(f, `dist/${f}`, { recursive: true });
console.log("Site prêt dans dist/");
