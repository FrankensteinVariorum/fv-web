import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import pagefind from "astro-pagefind";
import { remarkModifiedTime } from './remark-modified-time.mjs';


// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [tailwind(), react(), image(), pagefind(
      {logger:
            {info: (message) => console.log(message)}, warn: (message) => {console.warn(`[WARN]: ${message}`);}, error: (message) => {console.error(`[ERROR]: ${message}`);},
      }
  )],
  vite: {
    assetsInclude: "**/*.xml",
    ssr: {
      external: ['firebase/database']
    }
  },
  fileExtensions: {
    ".tei": "tsx"
  },
  site: 'https://2bbcku6v.connect.remote.it/',
  /*base: '/fv'*/

});
