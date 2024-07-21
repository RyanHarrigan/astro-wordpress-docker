/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly SITE: string;
  readonly WP_SITE: string;
  readonly GRAPHQL_URL: string;
  readonly ASTRO_TELEMETRY_DISABLED: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
