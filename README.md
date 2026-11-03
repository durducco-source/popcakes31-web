# PopCakes31 · Repostería creativa & coffee en Lloret de Mar

Web de **PopCakes31**, pastelería y cafetería de repostería creativa en Lloret de Mar: candy bars, tartas de boda y eventos.

Toda la web es **un único recorrido cinematográfico ligado al scroll** (inspirado en el Reel de referencia):
las fotografías y los vídeos son los protagonistas y el texto se reduce a una palabra por capítulo, una frase y los datos útiles.
Dirección creativa, diseño y desarrollo: **DURDUC**.

- Web publicada: https://durducco-source.github.io/popcakes31-web/
- Código: https://github.com/durducco-source/popcakes31-web
- Versión anterior conservada en la etiqueta git `v1-antes-recorrido`.

## El recorrido

| Escena | Movimiento de cámara |
|---|---|
| Inicio | Vídeo de la tarta de boda con avance; «POPCAKES31» se abre; fundido a la mesa dulce, «Algo dulce» |
| 01 Candy bar | Puerta corredera y travelling por mesas dulces (vídeo y fotos) |
| 02 Bodas | Retroceso desde el detalle de la tarta de pisos; deriva a los novios |
| 03 Tartas | Vídeos verticales en un marco que crece |
| 04 Fiestas | Capas de profundidad: despedida, tarta de princesas y catering |
| 05 Brunch | Panorámica vertical sobre el brunch; avance a la mesa de flores |
| 06 Dulces | Tira de película con visor |
| 07 Visítanos | La cámara se aleja; presupuesto, llamar, cómo llegar y horario |

## Tecnologías

Next.js 16 (App Router, exportación estática) · React 19 · TypeScript · Tailwind CSS 4 · Motion (Framer Motion).

## Ejecutar en local

Requisitos: Node.js 20 o superior.

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # web estática en out/
npm run lint       # ESLint
npm run typecheck  # TypeScript
npm run deploy     # compila y publica en GitHub Pages (rama gh-pages)
```

## Cómo editar

Todo el guion está en `src/content/site.ts`: cada escena tiene un `kind` (movimiento de cámara), sus imágenes/vídeos y textos.
Tipos disponibles: `arrival` (llegada), `dive` (picado), `door` (puerta corredera + travelling), `pullback` (retroceso),
`depth` (capas de profundidad), `tilt` (panorámica vertical), `reel` (vídeos verticales), `list` (carta), `strip` (tira con visor) y `finale`.
Colores en `src/app/globals.css` y tipografías en `src/app/layout.tsx`.

```
src/
├── app/              → layout (SEO, fuentes, JSON-LD), página y tema
├── components/
│   ├── cinema.tsx    → primitivas: Scene, Shot (imagen/vídeo con cámara), ChapterWord, Caption, useRange
│   ├── scenes.tsx    → los 10 tipos de escena y el pie
│   ├── Header.tsx    → barra fina, menú a pantalla completa y barra de acción móvil
│   └── Hud.tsx       → capítulo actual y progreso
├── content/          → site.ts (guion y contenido) y types.ts (modelo)
└── lib/              → utilidades (fullRange para animaciones de scroll) y capítulos
```

## Fuentes del contenido

- Instagram @popcakes31: fotos, vídeos, descripción y horario (lunes a sábado 8–13 h y 17–20 h).
- Fichas públicas: dirección, teléfono y valoración (4,8 · 165 reseñas). Conviene confirmar que el número tiene WhatsApp.
