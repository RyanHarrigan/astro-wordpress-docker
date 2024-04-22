/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly SITE: string;
  readonly GRAPHQL_URL: string;
  readonly PUBLIC_FACEBOOK_URL: string;
  readonly PUBLIC_GOOGLE_ANALYTICS_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
