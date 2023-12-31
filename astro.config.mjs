import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({include: ['**/react/*']})],
  vite: {
    assetsInclude: "**/*.xml",
    ssr: {
      external: ['firebase/database']
    }
  },
  build: {
    format: 'directory' // Generate `page.html` instead of `page/index.html` during build. https://docs.astro.build/en/reference/configuration-reference/#buildformat
  },
  output: 'static',
  fileExtensions: {
    ".tei": "tsx"
  },
  site: 'https://frankensteinvariorum.github.io',
});
