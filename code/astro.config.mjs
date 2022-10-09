import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import vercel from "@astrojs/vercel/serverless";
import prefetch from "@astrojs/prefetch";

import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), mdx(), prefetch(), compress()],
  output: "server",
  adapter: vercel()
});