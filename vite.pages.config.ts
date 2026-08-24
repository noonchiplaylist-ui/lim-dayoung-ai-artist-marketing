import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: fileURLToPath(new URL("./pages", import.meta.url)),
  base: "/lim-dayoung-ai-artist-marketing/",
  publicDir: fileURLToPath(new URL("./public", import.meta.url)),
  plugins: [react()],
  build: {
    outDir: fileURLToPath(new URL("./docs", import.meta.url)),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": projectRoot,
    },
  },
});
