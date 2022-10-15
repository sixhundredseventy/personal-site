import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import critters from "astro-critters";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), mdx(), prefetch(), compress(), partytown(), critters(), compressor()],
  adapter: cloudflare(),
  output: 'server',
  build: {
    server: './code/dist/server/',
    client: './code/dist/client/',
    serverEntry: 'entry.mjs'
  }
});