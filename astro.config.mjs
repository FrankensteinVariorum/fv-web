import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config

export default defineConfig({
  integrations: [tailwind(), react(), image()],
  vite: {
    assetsInclude: "**/*.xml",
    ssr: {
      external: ['firebase/database']
    },
  },
  fileExtensions: {
    ".tei": "tsx"
  },
  site: 'https://frankensteinvariorum.github.io', // https://docs.astro.build/en/guides/deploy/github/
  // base: '/fv-web2023',
});