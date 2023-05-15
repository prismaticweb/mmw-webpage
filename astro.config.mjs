import { defineConfig } from 'astro/config';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [vanillaExtractPlugin()]
  }
});