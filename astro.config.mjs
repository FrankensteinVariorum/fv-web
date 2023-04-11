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
    routes: [
      {
        path: '/viewer/f:ed/C:ch',
        component: './components/Viewer/f[ed]_C[ch].astro',
        props: ({ params }) => ({
          ed: params.ed,
          ch: params.ch
        })
      }
    ]
  },
  fileExtensions: {
    ".tei": "tsx"
  },
});