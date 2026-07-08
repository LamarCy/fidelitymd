// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Deployed on Netlify at the root of the custom domain fidelitymd.com,
// so the site serves from "/" (no base path).
export default defineConfig({
  site: 'https://fidelitymd.com',
  integrations: [sitemap()],
});
