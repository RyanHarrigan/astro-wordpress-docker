import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // site: https://productionurl.com, // sets up canonicals, sitemaps, etc
  trailingSlash: "never",
  output: 'server',
  integrations: [
    react(), // https://docs.astro.build/en/guides/integrations-guide/react/
    tailwind({ // https://docs.astro.build/en/guides/integrations-guide/tailwind/
      configFile: './tailwind.config.js',
      applyBaseStyles: false, // https://docs.astro.build/en/guides/integrations-guide/tailwind/#applybasestyles
      nesting: false // https://docs.astro.build/en/guides/integrations-guide/tailwind/#nesting,
    }),
  ],
  adapter: node({
    mode: 'standalone',
  }),
  build: {
    inlineStylesheets: 'always',
    // assetsPrefix: { // @TODO: serve wordpress images through CDN. https://docs.astro.build/en/reference/configuration-reference/#buildassetsprefix
    //
    // }
  },
  server: {
    port: 3000,
    host: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  devToolbar: {
    enabled: true,
  },
});
