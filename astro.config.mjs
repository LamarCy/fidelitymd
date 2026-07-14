// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// Deployed on Netlify at the root of the custom domain fidelitymd.com,
// so the site serves from "/" (no base path).
// Production serves at the domain root ('/'). Set PREVIEW_BASE (e.g.
// '/fidelity-preview/') to build a shareable GitHub Pages preview at a subpath.
export default defineConfig({
  site: 'https://fidelitymd.com',
  base: process.env.PREVIEW_BASE || '/',
  integrations: [sitemap()],
});
