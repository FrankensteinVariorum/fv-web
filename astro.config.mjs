import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
// import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  vite: {
    assetsInclude: "**/*.xml",
    ssr: {
      external: ['firebase/database']
    },
//     plugins: [
//       dynamicImportVars(),
//     ],
  },
  fileExtensions: {
    ".tei": "tsx"
  },
});