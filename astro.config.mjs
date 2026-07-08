// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// For GitHub Pages project site: https://lamarcy.github.io/fidelitymd/
// `base` is only applied in production builds so local `npm run dev` stays at "/".
// If you later attach the custom domain fidelitymd.com, set base to '/' always.
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://lamarcy.github.io',
  base: isProd ? '/fidelitymd/' : '/',
});
