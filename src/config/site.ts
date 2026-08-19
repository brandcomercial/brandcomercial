/**
 * CONFIGURACIÓN CENTRAL DEL SITIO
 * ============================================
 * Este archivo contiene TODOS los datos editables del sitio.
 * Para cambiar menú, contacto, redes sociales, etc., edita aquí.
 * Los componentes (Header, Footer) Los datos se importan automáticamente.
 * ============================================
 */

import Benefits from "../components/home/Benefits.astro";

export const siteConfig = {
  // --- Información de la marca ---
  brand: {
    name: "Brandcomercial",
    suffix: "Spotz",
    tagline: "Conectando marcas",
    description:
      "Especialistas en soluciones gráficas, impresión de gran formato e instalación profesional.",
  },

  // --- Navegación principal (Header) ---
  navigation: [
    { label: "Inicio", href: "/", id: "inicio", icon: "home" },
    { label: "Nosotros", href: "/nosotros", id: "nosotros", icon: "users" },
    { label: "Servicios", href: "/servicios", id: "servicios", icon: "wrench" },
    {
      label: "Productos",
      href: "/productos",
      id: "productos",
      icon: "package",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
      id: "proyectos",
      icon: "folder-open",
    },
    {
      label: "Contacto",
      href: "/contacto",
      id: "contacto",
      icon: "headset",
      isButton: true,
    },
  ],

  // --- Contacto ---
  contact: {
    phone: "+51 977 938 339",
    phoneLink: "tel:+51977938339",
    email: "ventas@brandcomercial.com.pe",
    emailLink: "mailto:ventas@brandcomercial.com.pe",
    address: "Cerro Centinela 154, San Borja, Lima",
    whatsappNumber: "51977938339",
    whatsappMessage: "Hola, me gustaría solicitar una cotización.",
  },

  // --- Redes sociales (Footer) ---
  social: {
    tiktok: "https://tiktok.com/@brandcomercial",
    youtube: "https://youtube.com/@brandcomercial",
    facebook: "https://facebook.com/brandcomercial",
    instagram: "https://instagram.com/brand_comercial",
  },

  // --- Links del Footer ---
  footerLinks: {
    company: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Productos", href: "/productos" },
      { label: "Blog", href: "/blog" },
    ],
    // --- Links de ayuda ---
    help: [
      { label: "Contacto", href: "/contacto" },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
      { label: "Política de cookies", href: "/politica-cookies" },
    ],
  },

  // --- Slides del Hero (Home) ---
  heroSlides: [
    {
      eyebrow: "Impresión de gran formato",
      title: "Gigantografías de alto impacto",
      text: "Producción profesional para campañas, eventos y puntos de venta.",
      cta: "Cotizar ahora",
      url: "/contacto",
      theme: "slide--print",
      image: "/hero-print.png",
    },
    {
      eyebrow: "Instalación profesional",
      title: "Comunicación visual precisa",
      text: "Viniles, lonas y señalética instalados con experiencia.",
      cta: "Ver servicios",
      url: "/servicios",
      theme: "slide--install",
      image: "/instalador.png",
    },
    {
      eyebrow: "Brandeo corporativo",
      title: "Espacios que conectan",
      text: "Recursos gráficos para transformar tu negocio en experiencia.",
      cta: "Conocer más",
      url: "/productos",
      theme: "slide--brand",
      image: "/hero-brand.png",
    },
  ],

  // --- Beneficios (tarjetas sobre el slider) ---
  benefits: [
    {
      icon: "badge-check",
      title: "Asesoría personalizada",
      text: "En cada paso de tu proyecto.",
    },
    {
      icon: "clipboard-list",
      title: "Soluciones personalizada",
      text: "Proyectos a medida y escalables",
    },
    {
      icon: "printer",
      title: "Impresión de gran formato",
      text: "Gigantografías, Viniles, Lonas, Letreros.",
    },
    {
      icon: "shield-check",
      title: "Instalación y Brandeos",
      text: "Trabajos de calidad y con experiencia.",
    },

    /* {
      icon: "",
      title: "",
      text: ""
    } */
  ],

  solutions: [
    {
      icon: "wrench",
      title: "Instalación profedional",
      text: "Viniles, lonas y señaleticas instalados con precisión y cuidado.",
      url: "/servicios",
      image: "/instalador-banner-promo.png",
    },

    {
      icon: "package",
      title: "Productos gráficos",
      text: "Gigantografias, lona, rollscreen y más para tu marca",
      url: "/productos",
      image: "/hero-print.png",
    },

    {
      icon: "palette",
      title: "Brandeo corporativo",
      text: "Transformamos espacios en experiencias de marca",
      url: "/proyectos",
      image: "/hero-brand.png",
    },
  ],

  promoBanners: [
    {
      title: "Impresiones publicitarias para tu hogar o negocio",
      text: "Descubre cómo nuestras impresiones publicitarias pueden transformar tu hogar o negocio. <span class='promo-highlight'>Imprime tus ideas</span> en gran formato y a grandes escalas.",
      image: "/hero-brand.png",
    },
    {
      title: "Decoración y brandeo publicitario",
      text: "Ofrecemos un servicio especializado en la instalación de viniles y lonas, garantizando <span class='promo-highlight'>calidad y durabilidad</span> en cada proyecto.",
      image: "/instalador-banner-promo.png",
    },
  ],

  // --- Catálogo destacado (slider + cards) ---
  catalogSlides: [
    {
      title: "Ruleta Publicitaria",
      text: "Tu ruleta publicitaria a medida. Atrae miradas, interactúa con tu público y multiplica tus ventas.",
      cta: "Ver Catálogo",
      url: "/catalogo",
      image: "/corporeo ruleta perspectiva.png",
    },
    
    {
      title: "Marco Selfie Decorativo",
      text: "Tamaño Personalizado con diseños ajustados a tus necesidades y espacio de foto.",
      cta: "Ver catálogo",
      url: "/catalogo",
      image: "/selfie2.png",
    },

    {
      title: "Stickers troquelados",
      text: "Dale personalidad a tus empaques con vinil adhesivo full color y cortes precisos según la silueta de tu marca.",
      cta: "Ver Catálogo",
      url: "/catalogo",
      image: "/sticker-troqueado.png",
    },

    {
      title: "Parante Tijera",
      text: "Tu publicidad exterior en el lugar correcto. Parante resistente y fácil de mover, perfecto para exhibir tus promociones.",
      cta: "Ver Catálogo",
      url: "/catalogo",
      image: "/caballete madera.png",
    },

  ],
  catalogCards: [
    {
      title: "Parante Rollscreen",
      text: "Estructura de aluminio y sistema enrollable. Para lugares estratégicos.",
      cta: "Ver más",
      url: "/productos",
      image: "/rollscreen.png",
      theme: "orange",
    },
    {
      title: "Modulo de mesa",
      text: "Counters publicitarios de PVC: para activaciones, ferias y puntos de venta",
      cta: "Ver más",
      url: "/productos",
      image: "/counter.png",
      theme: "blue",
    },
  ],

  // --- CTA Final (conversión WhatsApp) ---
  finalCta: {
    eyebrow: "¿Listo para empezar?",
    title: "Hagamos realidad tu proyecto",
    text: "Cuéntanos tu idea y recibe una cotización personalizada en menos de 24 horas.",
    cta: "Cotizar por WhatsApp",
    url: "https://wa.me/51977938339?text=Hola%2C%20quiero%20cotizar%20un%20proyecto"
  },

  brands: [
    {name: "Nissan", image: ""},
    {name: "Innco", image: ""},
    {name: "Metaboo", image: ""},
    {name: "DeWalt", image: ""},
    {name: "Bosch", image: ""},
    {name: "Standley", image: ""},
  ],

    // --- Acerca de nosotros (Home) ---
  aboutHome: {
    eyebrow: "Sobre nosotros",
    title: "Expertos que hacen destacar tu marca",
    text: "Somos un equipo especializado en soluciones gráficas, impresión de gran formato e instalación profesional. Transformamos ideas en experiencias visuales memorables.",
    stats: [
      { value: "+12", label: "Años de experiencia" },
      { value: "+100", label: "Proyectos realizados" }
    ],
    ctaBrochure: { text: "Descargar brochure", url: "/brochure BC 2026.pdf" },
    image: "/grupo de trabajo.png"
  },

  // --- Redes sociales (SocialOrbit) ---
  socials: [
    { name: "YouTube", url: "https://youtube.com/@brandcomercial", icon: "youtube" },
    { name: "TikTok", url: "https://tiktok.com/@brandcomercial", icon: "tiktok" },
    { name: "Facebook", url: "https://facebook.com/brandcomercial", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com/brand_comercial", icon: "instagram" }
  ],

};

// Helper para generar URL de WhatsApp
export const getWhatsAppUrl = () => {
  const { whatsappNumber, whatsappMessage } = siteConfig.contact;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
};
