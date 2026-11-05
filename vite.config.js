import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Pas de ressources en data: : la CSP de vercel.json n'autorise que font-src 'self'.
  build: { assetsInlineLimit: 0 },
});
