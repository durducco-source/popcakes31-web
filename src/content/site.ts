import type { SiteContent } from "./types";

// Contenido verificado en Instagram @popcakes31 (textos, horario, fotos y vídeos)
// y en fichas públicas del negocio (dirección, teléfono y valoración en Google).
const PHONE = "+34698291893";
const WA = `https://wa.me/34698291893?text=${encodeURIComponent("Hola PopCakes31, me gustaría información para un encargo.")}`;
const URL = "https://durducco-source.github.io/popcakes31-web/";

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
  },
  nav: [
    { label: "La casa", href: "#casa" },
    { label: "Eventos", href: "#eventos" },
    { label: "Galería", href: "#galeria" },
    { label: "Vídeos", href: "#videos" },
    { label: "Visítanos", href: "#visitanos" },
  ],
  cta: { label: "Pedir presupuesto", href: WA, external: true },
  hero: {
    scrollHint: "Desliza",
    acts: [
      { label: "Primer acto", title: "Love *story.*", text: "Tartas de boda que se convierten en el centro de vuestro gran día.", media: { type: "video", src: "/media/boda-tarta.mp4", poster: "/media/boda-tarta-sm.jpg", alt: "Novios cortando su tarta de boda" } },
      { label: "Segundo acto", title: "Candy *bar.*", text: "Mesas dulces de autor: mini postres, tartaletas, merengues y flores.", media: { type: "video", src: "/media/candy-bar.mp4", poster: "/media/candy-bar-sm.jpg", alt: "Candy bar con mini postres" } },
      { label: "Tercer acto", title: "La *tarta.*", text: "Diseños delicados, con flores y acabados a mano.", media: { type: "video", src: "/media/tarta-rosas.mp4", poster: "/media/tarta-rosas-sm.jpg", alt: "Tarta blanca con cascada de rosas" } },
      { label: "Cuarto acto", title: "La *fiesta.*", text: "Repostería creativa para bodas, bautizos, cumpleaños y celebraciones en la Costa Brava.", media: { type: "image", src: "/media/candy-bar-columnas.jpg", alt: "Mesa dulce de celebración" } },
    ],
  },
  intro: {
    id: "casa",
    eyebrow: "La casa",
    title: "Repostería creativa *& coffee.*",
    paragraphs: [
      "PopCakes31 es una pastelería y cafetería en Lloret de Mar dedicada a la repostería creativa: tartas, mini postres y mesas dulces que se recuerdan.",
      "Preparamos candy bars y dessert tables para bodas, bautizos, despedidas y cumpleaños, además de catering de desayunos y brunch. Y en el local, un buen café con algo dulce.",
    ],
    stats: [
      { value: "4,8", label: "Google · 165 reseñas" },
      { value: "Bodas", label: "Tartas y mesas dulces" },
      { value: "Eventos", label: "Catering y brunch" },
      { value: "Coffee", label: "En Lloret de Mar" },
    ],
  },
  chapters: {
    id: "eventos",
    eyebrow: "Eventos",
    title: "Cada celebración, *su mesa dulce.*",
    items: [
      {
        label: "Bodas",
        title: "Once upon *a time.*",
        text: "Tartas de boda de varios pisos y mesas dulces con flores, velas y mini postres, pensadas para el estilo de cada pareja.",
        bullets: ["Tartas de boda personalizadas", "Candy bar y dessert table", "Decoración con flores y velas"],
        media: { type: "image", src: "/media/mesa-dulce-boda.jpg", alt: "Mesa dulce de boda con velas" },
        link: { label: "Pedir presupuesto", href: WA, external: true },
      },
      {
        label: "Celebraciones",
        title: "Bautizos, despedidas *y cumpleaños.*",
        text: "Desde la tarta de princesa para un octavo cumpleaños hasta la mesa de una despedida de soltera o el catering de un bautizo.",
        bullets: ["Tartas temáticas", "Mesas dulces para fiestas", "Catering salado y dulce"],
        media: { type: "image", src: "/media/tarta-princesa.jpg", alt: "Tarta de princesas para un cumpleaños" },
      },
      {
        label: "Brunch",
        title: "Breakfast *& brunch.*",
        text: "Catering de desayunos y brunch con fruta fresca, bagels, pastelería y mucho color.",
        media: { type: "image", src: "/media/brunch.jpg", alt: "Mesa de brunch con fruta fresca y bagels" },
      },
    ],
  },
  gallery: {
    id: "galeria",
    eyebrow: "Galería",
    title: "Dulce *por todas partes.*",
    items: [
      { type: "image", src: "/media/tarta-boda-pisos.jpg", alt: "Tarta de boda de varios pisos" },
      { type: "image", src: "/media/choux-arandanos.jpg", alt: "Choux con crema y arándanos" },
      { type: "image", src: "/media/candy-bar-fresas.jpg", alt: "Candy bar con tartaletas de fresa" },
      { type: "image", src: "/media/trufas-coco.jpg", alt: "Trufas de coco" },
      { type: "image", src: "/media/vasitos-maracuya.jpg", alt: "Vasitos de maracuyá" },
      { type: "image", src: "/media/despedida-soltera.jpg", alt: "Mesa dulce para una despedida de soltera" },
      { type: "image", src: "/media/choux-moras.jpg", alt: "Choux con moras" },
      { type: "image", src: "/media/mesa-flores.jpg", alt: "Mesa dulce con flores" },
      { type: "image", src: "/media/vasitos-tiramisu.jpg", alt: "Vasitos de tiramisú" },
      { type: "image", src: "/media/candy-bar-blanco.jpg", alt: "Candy bar en blanco" },
    ],
  },
  reels: {
    id: "videos",
    eyebrow: "Vídeos",
    title: "Momentos *en movimiento.*",
    items: [
      { type: "video", src: "/media/boda-tarta.mp4", poster: "/media/boda-tarta-sm.jpg", alt: "Love story" },
      { type: "video", src: "/media/candy-bar.mp4", poster: "/media/candy-bar-sm.jpg", alt: "Candy bar" },
      { type: "video", src: "/media/tarta-rosas.mp4", poster: "/media/tarta-rosas-sm.jpg", alt: "Tarta de rosas" },
      { type: "video", src: "/media/candy-bar-2.mp4", poster: "/media/candy-bar-2-sm.jpg", alt: "Dessert table" },
    ],
  },
  contact: {
    id: "visitanos",
    eyebrow: "Visítanos",
    title: "Café y dulces *en Lloret.*",
    address: ["Carrer del Comte Ramon Borrell, 7-9, local 5", "17310 Lloret de Mar (Girona)"],
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=PopCakes31+Lloret+de+Mar",
    mapEmbed: "https://www.google.com/maps?q=PopCakes31,+Carrer+del+Comte+Ramon+Borrell+7,+17310+Lloret+de+Mar&z=17&output=embed",
    phone: { label: "698 29 18 93", href: `tel:${PHONE}` },
    whatsapp: { label: "WhatsApp 698 29 18 93", href: WA },
    hours: [
      { day: "Lunes a sábado", value: "8:00–13:00 · 17:00–20:00" },
      { day: "Domingo", value: "Cerrado" },
    ],
    hoursNote: "Horario publicado por PopCakes31 en Instagram.",
    socials: [
      { label: "Instagram de PopCakes31", href: "https://www.instagram.com/popcakes31/", icon: "instagram" },
      { label: "Facebook de PopCakes31", href: "https://www.facebook.com/popcakes31/", icon: "facebook" },
    ],
  },
  finale: {
    title: "¿Celebramos *algo dulce?*",
    text: "Cuéntanos tu evento y preparamos una propuesta a tu medida.",
    cta: { label: "Pedir presupuesto", href: WA, external: true },
    media: { type: "image", src: "/media/candy-bar-merengues.jpg", alt: "" },
  },
  floating: { label: "Presupuesto", href: WA, external: true, icon: "whatsapp" },
  footer: { line: "© 2026 PopCakes31 · Lloret de Mar", credit: "Diseño web por DURDUC" },
};
