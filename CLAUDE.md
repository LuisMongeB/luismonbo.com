# luismonbo.com

Personal website for an AI Engineer. Three pillars: AI Engineering, Analogue Photography, Writing (politics/philosophy/tech).
Built with Astro, TypeScript (strict), Tailwind CSS v4. Deployed on Vercel from main branch.

## Commands
```bash
npm run dev        # Dev server with hot reload
npm run build      # Production build — ALWAYS run after changes to verify no errors
npm run preview    # Preview production build locally
```

## Verification
After making changes, run `npm run build` to catch TypeScript and Astro errors before committing.
If the build fails, fix the error before moving on.

## Project Structure
- `src/pages/` — File-based routing. Each .astro file becomes a URL.
- `src/layouts/` — Shared page templates (Layout.astro is the base)
- `src/components/` — Reusable UI components (PascalCase: Header.astro, Footer.astro)
- `src/content/` — Markdown content collections (to be created)
- `src/styles/global.css` — Tailwind v4 entry point (`@import "tailwindcss";`)
- `public/` — Static assets served as-is (images, fonts, favicon)

## Code Conventions
- Strict TypeScript: always type component props with `interface Props { ... }`
- Tailwind utility classes for all styling; no custom CSS unless Tailwind cannot express it
- Pages: lowercase filenames (about.astro, writing.astro)
- Components: PascalCase filenames (Header.astro, PhotoGrid.astro)
- npm as package manager; never use yarn or pnpm

## Git Workflow
- Conventional Commits: feat:, fix:, chore:, docs:, style:
- Work on feature branches: `feat/header-nav`, `feat/about-page`
- Merge to main triggers Vercel auto-deploy
- Keep commits atomic — one logical change per commit

## Do NOT
- Edit anything in `.astro/` — it's a generated cache folder
- Add `node_modules/` or `.astro/` to git (already in .gitignore)
- Use Tailwind v3 syntax (@apply with @tailwind directives); this project uses Tailwind v4
- Install packages with anything other than npm
- Skip the build check before committing

## Design Direction
Apple-like minimal aesthetic. Clean typography, generous whitespace, restrained color palette.
When in doubt, less is more.

## Owner Context
The owner is learning TypeScript and web development (experienced Python/Rust developer).
When introducing new TypeScript or Astro patterns, add a brief comment explaining what it does and why.
Prefer clarity over cleverness.
