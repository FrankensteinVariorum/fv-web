import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
// import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), image()],
  vite: {
    assetsInclude: "**/*.xml",
    ssr: {
      external: ['firebase/database']
    }
  },
  fileExtensions: {
    ".tei": "tsx"
  },
<<<<<<< HEAD
  site: 'https://frankensteinvariorum.github.io',
  // https://docs.astro.bnpm install netlify-cli -guild/en/guides/deploy/github/
  // base: '/fv-web2023',
  // output: "server",
  // adapter: netlify(),
  // build: {
  //   split: true,
  // },
});
=======
  site: 'https://frankensteinvariorum.github.io', // https://docs.astro.build/en/guides/deploy/github/
  // base: '/fv-web2023',
});
>>>>>>> main
