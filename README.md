# IB Marketing

One-pager de marketing para **IB Marketing** (Puerto Vallarta): tráfico, photoshoot y redes sociales.

- Stack: Vite · React 19 · TypeScript · Tailwind v4 · Motion / GSAP / Lenis  
- Deploy: Cloudflare Worker (assets SPA)  
- Referencia live: [ibmkt.bobsala.com](https://ibmkt.bobsala.com)

## Para Isaac / agentes de IA

Lee **[`AGENTS.md`](./AGENTS.md)** primero. Ahí está el protocolo completo para instalar una **copia exacta** (diseño, assets, orden de secciones y reglas de no-regresión).

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run deploy   # build + wrangler deploy — edita wrangler.jsonc antes si no eres la cuenta Bobsala
```

## Scripts

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Vite local |
| `npm run build` | `tsc -b` + build de producción en `dist/` |
| `npm run preview` | Preview del build |
| `npm run deploy` | Build + deploy Worker |
| `npm run lint` | Oxlint |

## Estructura

```
src/
  App.tsx                 # Hero + secciones
  components/ui/hero.tsx
  components/sections.tsx
  components/ui/ScrollStack.*
  components/ui/FlowingMenu.*
  index.css               # Monument Extended + Host Grotesk
public/
  fonts/                  # Monument Extended (requerido)
  buen-cafe.png
wrangler.jsonc            # Worker `ibmkt` / custom domain (producción Bobsala)
```

## Licencia de tipografía

`public/fonts/MonumentExtended-*.otf` se incluye para reproducir el sitio. Respeta la licencia comercial de Monument Extended en usos fuera de esta copia del proyecto.
