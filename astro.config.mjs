import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svgr from 'vite-plugin-svgr';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push']
      }
    })
  ],
  vite: {
    plugins: [
      tailwindcss(),
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
      }),
    ],
  },
  site: 'https://mostavio.com',
  output: 'static'
});
