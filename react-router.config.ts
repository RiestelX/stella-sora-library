import type { Config } from "@react-router/dev/config";

const isProd = process.env.NODE_ENV === "production";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  basename: isProd ? "/stella-sora-library/" : "/",
} satisfies Config;
