import type { Media, SiteContent } from "./types";

// Contenido verificado en Instagram @popcakes31 (textos, horario, fotos y vídeos)
// y en fichas públicas del negocio (dirección, teléfono y valoración en Google). No se ha inventado información.
const PHONE = "+34698291893";
const WA = `https://wa.me/34698291893?text=${encodeURIComponent("Hola PopCakes31, me gustaría información para un encargo.")}`;
const URL = "https://durducco-source.github.io/popcakes31-web/";
const MAPS = "https://www.google.com/maps/dir/?api=1&destination=PopCakes31+Lloret+de+Mar";

const v = (name: string, alt: string): Media => ({ type: "video", src: `/media/${name}.mp4`, poster: `/media/${name}-sm.jpg`, alt });
const im = (name: string, alt: string): Media => ({ src: `/media/${name}.jpg`, sm: `/media/${name}-sm.jpg`, alt });

const presupuesto = { label: "Pedir presupuesto", href: WA, external: true };

export const site: SiteContent = {
  lang: "es",
  brand: { name: "PopCakes31", top: "Lloret de Mar", sub: "Repostería creativa & coffee" },
  seo: {
    title: "PopCakes31 · Repostería creativa y café en Lloret de Mar | Candy bars, tartas de boda y eventos",
    description:
      "PopCakes31, repostería creativa y cafetería en Lloret de Mar. Tartas de boda, candy bars y mesas dulces, tartas de cumpleaños, catering de brunch y eventos. 4,8 ★ en Google.",
    url: URL,
    image: `${URL}media/og-popcakes31.jpg`,
    keywords: ["pastelería Lloret de Mar", "candy bar Lloret de Mar", "mesa dulce boda Costa Brava", "tarta de boda Lloret", "cafetería Lloret de Mar", "PopCakes31"],
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: "PopCakes31",
    url: URL,
    telephone: PHONE,
    address: { "@type": "PostalAddress", streetAddress: "Carrer del Comte Ramon Borrell, 7-9, local 5", addressLocality: "Lloret de Mar", postalCode: "17310", addressRegion: "Girona", addressCountry: "ES" },
    geo: { "@type": "GeoCoordinates", latitude: 41.6997551, longitude: 2.8449081 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "08:00", closes: "13:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "17:00", closes: "20:00" },
    ],
    sameAs: ["https://www.instagram.com/popcakes31/", "https://www.facebook.com/popcakes31/"],
  },
  primary: { label: "Presupuesto", href: WA, external: true, icon: "whatsapp" },
  phone: PHONE,

  scenes: [
    {
      kind: "arrival", id: "inicio", n: "00", label: "Inicio",
      a: v("boda-tarta", "Novios cortando su tarta de boda"),
      b: im("mesa-dulce-boda", "Mesa dulce de boda con velas"),
      kicker: "Repostería creativa & coffee · Lloret de Mar", title: "PopCakes31", sub: "4,8 ★ en Google · 165 reseñas", enter: "Algo dulce",
    },
    {
      kind: "door", id: "candy-bar", n: "01", label: "Candy bar",
      door: im("candy-bar-columnas", "Mesa dulce de celebración"),
      track: [
        v("candy-bar-2", "Dessert table"), im("candy-bar-fresas", "Tartaletas de fresa"), im("candy-bar-merengues", "Merengues"),
        im("candy-bar-tartaletas", "Tartaletas"), im("candy-bar-pedestal", "Mini postres en pedestal"),
      ],
      title: "Mesas dulces de autor", sub: "Mini postres, tartaletas, merengues y flores.", cta: presupuesto,
    },
    {
      kind: "pullback", id: "bodas", n: "02", label: "Bodas",
      a: im("tarta-boda-pisos", "Tarta de boda de varios pisos"), origin: "50% 30%",
      b: im("boda-novios", "Novios con su tarta de boda"),
      title: "Once upon a time", sub: "Tartas de boda y mesas dulces con flores y velas, pensadas para cada pareja.", cta: presupuesto,
    },
    {
      kind: "reel", id: "tartas", n: "03", label: "Tartas",
      videos: [v("tarta-rosas", "Tarta blanca con cascada de rosas"), v("candy-bar", "Candy bar con mini postres")],
      title: "Diseños delicados", sub: "Flores y acabados hechos a mano para bodas, bautizos y cumpleaños.",
    },
    {
      kind: "depth", id: "celebraciones", n: "04", label: "Fiestas",
      back: im("despedida-soltera", "Mesa dulce para una despedida de soltera"),
      cards: [im("tarta-princesa", "Tarta de princesas"), im("bautizo-catering", "Catering de bautizo")],
      title: "Bautizos, despedidas y cumpleaños", sub: "Tartas temáticas, mesas dulces y catering salado y dulce.",
    },
    {
      kind: "tilt", id: "brunch", n: "05", label: "Brunch",
      a: im("brunch", "Mesa de brunch con fruta fresca y bagels"),
      b: im("mesa-flores", "Mesa dulce con flores"),
      title: "Breakfast & brunch", title2: "Y en el local, un buen café", cta: presupuesto,
    },
    {
      kind: "strip", id: "dulces", n: "06", label: "Dulces",
      items: [
        im("choux-arandanos", "Choux con arándanos"), im("trufas-coco", "Trufas de coco"), im("vasitos-maracuya", "Vasitos de maracuyá"),
        im("choux-moras", "Choux con moras"), im("vasitos-tiramisu", "Vasitos de tiramisú"), im("mini-postres", "Mini postres"),
      ],
    },
    {
      kind: "finale", id: "visitanos", n: "07", label: "Visítanos",
      a: im("candy-bar-blanco", "Candy bar en blanco"),
      title: "¿Celebramos *algo dulce?*",
      note: "Cuéntanos tu evento y preparamos una propuesta a tu medida.",
      ctas: [presupuesto, { label: "Llamar", href: `tel:${PHONE}` }, { label: "Cómo llegar", href: MAPS, external: true }],
      info: [
        { label: "Dirección", value: "C/ Comte Ramon Borrell, 7-9 · Lloret de Mar", href: MAPS },
        { label: "Horario", value: "Lun–sáb 8–13 h · 17–20 h" },
      ],
    },
  ],

  footer: {
    address: { label: "Carrer del Comte Ramon Borrell, 7-9, local 5 · 17310 Lloret de Mar", href: MAPS },
    contacts: [{ label: "698 29 18 93", href: `tel:${PHONE}` }, { label: "WhatsApp", href: WA }],
    hours: [{ day: "Lunes a sábado", value: "8–13 · 17–20 h" }, { day: "Domingo", value: "Cerrado" }],
    hoursNote: "Horario publicado por PopCakes31 en Instagram.",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/popcakes31/" }, { label: "Facebook", href: "https://www.facebook.com/popcakes31/" }],
    sources: "Fotos y vídeos: Instagram @popcakes31",
    line: "© 2026 PopCakes31 · Lloret de Mar",
  },
};
