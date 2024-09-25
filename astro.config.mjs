import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import winston from "winston";
import pagefind from "astro-pagefind";
import { remarkModifiedTime } from './remark-modified-time.mjs';
import {tsImportType} from "@babel/types";

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format[process.env.LOG_FORMAT || 'json'](),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.Console()],
});
// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [tailwind(), react(), image(), pagefind({
    logger: {
      info: logger.info,
      warn: logger.warn,
      error: logger.error,
    },
  })],
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
