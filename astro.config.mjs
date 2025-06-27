import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import svgr from "vite-plugin-svgr";
import sitemap from '@astrojs/sitemap';


import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap(),
    svgr(),
    partytown({
      config: {
        forward: [
          'dataLayer.push']
      }
    })
  ],
  site: 'https://mostavio.com',
  output: 'static'
});