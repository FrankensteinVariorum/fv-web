import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
// https://astro.build/config

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    assetsInclude: "**/*.xml",
    ssr: {
      external: ['firebase/database']
    },
  },
  fileExtensions: {
    ".tei": "tsx",
  },

});