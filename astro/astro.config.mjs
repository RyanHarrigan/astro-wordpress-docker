import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';

const { SITE } = loadEnv(process?.env?.NODE_ENV, process?.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: SITE, // sets up canonicals, sitemaps, etc
  trailingSlash: "never",
  output: 'server',
  integrations: [
    // react(), // https://docs.astro.build/en/guides/integrations-guide/react/
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
  server: ({command}) => ({
    port: command === 'dev' ? 4321 : 3000, // comment
    host: true,
    headers: { // https://docs.astro.build/en/reference/configuration-reference/#serverheaders also see https://docs.astro.build/en/reference/api-reference/#astroresponse
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
    },
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  devToolbar: {
    enabled: true,
  },
});
