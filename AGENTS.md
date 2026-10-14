# AGENTS.md — IB Marketing (copia exacta)

Instrucciones para agentes de IA (Cursor, Claude Code, Codex, etc.) que deben instalar y levantar **una copia exacta** de este sitio para Isaac.

## Objetivo

Replicar el one-pager de **IB Marketing** (tráfego, photoshoot y redes para negocios locales en Puerto Vallarta) tal como está en este repo: mismos componentes, tipografías, assets, copy y animaciones.

Live de referencia (producción Bobsala): https://ibmkt.bobsala.com  
Instagram CTA: https://www.instagram.com/ibmarketingmx/

## Stack (no sustituir)

| Pieza | Versión / detalle |
| --- | --- |
| Vite + React 19 + TypeScript | scripts en `package.json` |
| Tailwind CSS v4 | `@tailwindcss/vite` |
| Motion, GSAP, Lenis | animaciones / scroll |
| Cloudflare Workers (assets SPA) | `wrangler.jsonc` + `npm run deploy` |

No migrar a Next.js, Remix, Pages-only, ni otra UI kit a menos que Isaac lo pida explícitamente.

## Diseño (reglas duras — no “mejorar”)

- Paleta **solo** azul `#0038FF`, negro y blanco. Sin lime/verde/púrpura/cream AI defaults.
- Display: **Monument Extended** (`public/fonts/*`) — headings con `letter-spacing: 0`.
- Body: **Host Grotesk** (Google Fonts en `index.html`).
- Secciones en orden fijo (`src/App.tsx`):
  1. Hero (`src/components/ui/hero.tsx`)
  2. Pain points / ScrollStack (`PainPoints`)
  3. Qué hacemos / FlowingMenu (`QueHacemos`)
  4. Nuestro proceso
  5. Casos de éxito
  6. CTA final → Instagram
- CTAs de conversión apuntan a Instagram; helper en `src/components/sections.tsx`.
- ScrollStack usa page scroll + sticky runway; no volver a un scroller anidado que robe el scroll de la página.

## Setup local (copia exacta)

Prerrequisitos: Node.js 20+ (recomendado), npm.

```bash
git clone https://github.com/bobsaladev/ib-marketing.git
cd ib-marketing
npm install
npm run dev
```

Abrir la URL que imprima Vite (normalmente `http://localhost:5173`).

Verificación rápida:

- Hero azul a full bleed con marca IB / MARKETING
- Card Buen Café con `/buen-cafe.png`
- Monument Extended en títulos
- Scroll de pain points apila cards
- Hover en “Qué hacemos” anima marquee FlowingMenu

```bash
npm run build    # debe pasar tsc + vite build
npm run preview  # opcional
```

## Deploy (Cloudflare Worker) — opcional

Producción actual usa Worker `ibmkt` y dominio `ibmkt.bobsala.com` (cuenta Bobsala). **Isaac no debe redeployar a ese dominio** salvo que se lo pidan.

Para una copia en **su** cuenta Cloudflare:

1. Editar `wrangler.jsonc`:
   - `name`: nombre único del Worker (ej. `ibmkt-isaac`)
   - `routes[].pattern`: su hostname (o quitar `routes` y usar solo `*.workers.dev`)
2. Autenticar Wrangler en **su** cuenta: `npx wrangler login`
3. `npm run deploy` (= `build` + `wrangler deploy`)

Notas DNS (evita el loop NXDOMAIN):

- No abrir el custom domain **antes** de que Wrangler confirme el route.
- Probar primero la URL `*.workers.dev`.
- Si el navegador dice `DNS_PROBE_FINISHED_NXDOMAIN` pero `dig @1.1.1.1 <host>` resuelve: es DNS local/router cacheado — flush DNS o usar `1.1.1.1`.

## Archivos críticos

```
src/App.tsx                          # composición de secciones
src/components/ui/hero.tsx           # hero
src/components/sections.tsx          # resto de secciones + CTA Instagram
src/components/ui/ScrollStack.*      # pain points
src/components/ui/FlowingMenu.*      # servicios
src/index.css                        # fonts + theme
public/fonts/MonumentExtended-*.otf  # tipografía display (requerida)
public/buen-cafe.png                 # asset hero / caso
wrangler.jsonc                       # deploy Worker assets SPA
```

## Qué NO hacer

- No regenerar el diseño desde cero ni “modernizar” la paleta.
- No borrar las fonts Monument ni sustituirlas por Inter/Roboto/system.
- No convertir el hero en card inset / collage / dashboard.
- No committear `node_modules/`, `dist/`, `.wrangler/`, ni secretos (`.env*`).
- No cambiar el custom domain de producción Bobsala sin instrucción explícita.

## Handoff checklist para el agente

1. `npm install` sin errores  
2. `npm run dev` muestra el sitio completo  
3. `npm run build` exit 0  
4. Confirmar con Isaac si quiere solo local o también deploy en su Cloudflare  
5. Si deploy: actualizar `wrangler.jsonc` → login → `npm run deploy` → entregar URL `workers.dev` + custom domain  

## Contexto breve del producto

IB Marketing vende tráfico, photoshoot y social para negocios locales en Puerto Vallarta. El sitio es marketing one-page en español (MX), CTA principal Instagram `@ibmarketingmx`.
