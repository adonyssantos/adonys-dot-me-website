import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.adonys.me',
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  integrations: [mdx(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: "en-US",
        es: "es-ES",
      }
    }
  }), playformCompress()],
  prefetch: true
});