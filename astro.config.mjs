// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alloygtm.com',
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = new Date().toISOString().split('T')[0];
        return item;
      },
    }),
  ],
});
