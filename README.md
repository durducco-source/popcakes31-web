# PopCakes31 · Repostería creativa & coffee en Lloret de Mar

Web de **PopCakes31**, pastelería y cafetería de repostería creativa en Lloret de Mar (candy bars, tartas de boda y eventos).
Diseño "cinematográfico" por actos inspirado en la dirección creativa de referencia. Desarrollo: **DURDUC**.

- Web publicada: https://durducco-source.github.io/popcakes31-web/
- Código: https://github.com/durducco-source/popcakes31-web

## Tecnologías

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4.
Sin dependencias adicionales: animaciones con CSS y hooks propios.

## Ejecutar en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # compila la web estática en la carpeta out/
npm run lint       # revisa el código
npm run typecheck  # comprueba los tipos de TypeScript
npm run deploy     # compila y publica en GitHub Pages (rama gh-pages)
```

## Estructura

```
src/
├── app/            → layout (SEO, tipografías), página y estilos globales (tema en :root)
├── components/     → componentes reutilizables (CinemaHero, Gallery, Reels, Menu, Sections, Nav, Modal…)
├── content/
│   ├── site.ts     → TODO el contenido (textos, imágenes, enlaces) ← editar aquí
│   └── types.ts    → modelo de contenido
└── lib/            → utilidades y hooks (progreso de scroll, aparición, etc.)
public/media/       → fotos y vídeos
scripts/deploy.mjs  → publicación en GitHub Pages
```

## Personalizar

- **Textos, precios e imágenes:** `src/content/site.ts` (en los títulos, `*texto*` sale en cursiva destacada).
- **Colores:** variables `--bg`, `--bg-2`, `--fg`, `--accent` en `src/app/globals.css`.
- **Tipografías:** `src/app/layout.tsx`.

## Funcionalidades

- Portada cinematográfica por actos ligada al scroll (zoom lento, fundidos, franjas de cine, grano de
  película, viñeta y contador tipo vídeo).
- Menú fijo y menú móvil a pantalla completa.
- Capítulos con parallax, carta/servicios con pestañas navegables con teclado.
- Galería horizontal controlada por el scroll, con visor (teclado y Escape).
- Vídeos verticales que se previsualizan en silencio y se abren con sonido.
- Preguntas frecuentes, contacto con mapa y botón flotante de contacto.
- SEO: metadatos, Open Graph y datos estructurados (schema.org).
- Accesible y respetuosa con `prefers-reduced-motion`.
- Horario con los datos publicados por el negocio y botones de presupuesto por WhatsApp y teléfono.

## Fuentes del contenido

- Instagram @popcakes31: fotos, vídeos, descripción y horario (lunes a sábado 8–13 h y 17–20 h).
- Dirección, teléfono y valoración (4,8 en Google, 165 reseñas): fichas públicas del negocio.
- ⚠️ Confirmar con el cliente que el 698 29 18 93 tiene WhatsApp. Otros directorios dan un horario distinto al de Instagram.
