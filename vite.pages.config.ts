import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/growup-digital-hub/",
  plugins: [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] }), react()],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`,
    },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
});
