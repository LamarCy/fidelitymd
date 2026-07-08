# Fidelity Healthcare Group — Website

Marketing site for Fidelity Healthcare Group, built with [Astro](https://astro.build).
Flagship direction: **duotone** (navy + royal blue, from the shield logo) with warm
flare accents, vivid glassmorphism, and a moving amorphic background.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:4321)
npm run build    # build static site to ./dist
npm run preview  # preview the production build
```

## Structure

```
public/
  favicon.svg              # shield mark (SVG recreation of the logo)
src/
  consts.ts                # ← single source of truth for all site copy
  styles/global.css        # design tokens + animations (blobs, sheen, lens flare)
  layouts/BaseLayout.astro # <head>, fonts, animated background, slot
  components/
    Logo.astro             # shield + wordmark (variant: full | mark, light)
    AnimatedBackground.astro
    Nav.astro  Hero.astro  Services.astro  Screener.astro
    Founders.astro  Testimonials.astro  Faq.astro  Contact.astro  Footer.astro
  pages/
    index.astro            # flagship page — assembles the sections
```

## Editing content

Update phone, services, FAQs, testimonials, founders, and nav in **`src/consts.ts`**.
Every component reads from there.

## Brand colors (from the logo)

| Token | Hex | Use |
|-------|-----|-----|
| `--navy` | `#0E2A4E` | primary text / dark panels |
| `--blue` | `#3F86EE` | royal blue accent (shield border) |
| `--sky` / `--powder` | `#8FC2F5` / `#C6DFF6` | light-blue accents (shield fill) |
| `--coral` / `--amber` | `#FB7A5A` / `#FDBA74` | warm lens-flare highlights |

## To-do (client input needed)

- Replace the SVG logo recreation with the exact artwork (`public/fidelity-logo.svg`).
- Founder photos, names, bios (`src/consts.ts` + `Founders.astro`).
- Real Wellness Screener screenshots (`Screener.astro` placeholders).
- Testimonial attributions.
- **Phase 2:** CRM build-out (after client approval).
