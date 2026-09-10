/**
 * Every piece of copy on the site lives here.
 *
 * `Record<Locale, Translations>` means that adding a key to the interface
 * below forces both locales to supply it: a missing translation is a compile
 * error rather than an empty string in production.
 *
 * Keys are always English identifiers. Values are the product content and are
 * written in the language of their locale.
 */

export const defaultLocale = "en" as const;
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export interface Translations {
  // Meta / SEO
  meta_title: string;
  meta_description: string;
  store_meta_title: string;
  store_meta_description: string;

  // Shared
  skip_to_content: string;
  logo_alt: string;

  // Home — hero
  home_kicker: string;
  home_title: string;
  home_intro: string;
  home_cta_store: string;

  // Home — bio
  bio_kicker: string;
  bio_heading: string;
  bio_body: string;

  // Home — gallery
  gallery_heading: string;
  gallery_image_alt_prefix: string;

  // Store
  store_kicker: string;
  store_title: string;
  store_intro: string;
  store_back_home: string;

  // Coming soon
  coming_soon_label: string;
  coming_soon_note: string;

  // Footer
  footer_rights: string;

  // Language switcher
  language_switch_label: string;
  language_switch_text: string;
}

/**
 * Contact details.
 *
 * Locale independent, hence outside the translations object.
 */
export const contact = {
  email: "info@phoebeogorman.co.uk",
  instagram: "https://www.instagram.com/phoebeogorman/",
  instagramHandle: "@phoebeogorman",
} as const;

export const translations: Record<Locale, Translations> = {
  en: {
    meta_title: "Phoebe O'Gorman — Fashion Designer",
    meta_description:
      "London-based fashion designer specialising in bespoke tailored jackets and coats.",
    store_meta_title: "Store — Phoebe O'Gorman",
    store_meta_description:
      "The Phoebe O'Gorman store is opening soon.",

    skip_to_content: "Skip to content",
    logo_alt: "Phoebe O'Gorman",

    home_kicker: "Fashion designer",
    home_title: "Phoebe O'Gorman",
    home_intro:
      "Tailored outerwear made with intention. Each piece begins as a conversation about fit, fabric, and the way a garment should feel.",
    home_cta_store: "Store",

    bio_kicker: "About",
    bio_heading: "Craft before everything",
    bio_body:
      "Phoebe O'Gorman is a London-based fashion designer specialising in bespoke tailored jackets and coats. Trained in pattern cutting and garment construction, she works one piece at a time — from the first toile to the finished seam. Her work sits at the intersection of structure and softness: precise silhouettes built to be worn, not just admired.",

    gallery_heading: "The collection",
    gallery_image_alt_prefix: "Jacket by Phoebe O'Gorman",

    store_kicker: "Store",
    store_title: "Opening Soon",
    store_intro:
      "The store is not open yet. Pieces will be listed here once the collection is ready.",
    store_back_home: "Back",

    coming_soon_label: "In preparation",
    coming_soon_note: "Get in touch",

    footer_rights: "All rights reserved.",

    language_switch_label: "Cambiar a español",
    language_switch_text: "ES",
  },

  es: {
    meta_title: "Phoebe O'Gorman — Diseñadora de moda",
    meta_description:
      "Diseñadora de moda afincada en Londres, especializada en chaquetas y abrigos a medida.",
    store_meta_title: "Tienda — Phoebe O'Gorman",
    store_meta_description: "La tienda de Phoebe O'Gorman abrirá pronto.",

    skip_to_content: "Saltar al contenido",
    logo_alt: "Phoebe O'Gorman",

    home_kicker: "Diseñadora de moda",
    home_title: "Phoebe O'Gorman",
    home_intro:
      "Ropa de abrigo hecha con intención. Cada pieza comienza con una conversación sobre el ajuste, la tela y la manera en que una prenda debe sentirse.",
    home_cta_store: "Tienda",

    bio_kicker: "Sobre Phoebe",
    bio_heading: "El oficio primero",
    bio_body:
      "Phoebe O'Gorman es diseñadora de moda afincada en Londres, especializada en chaquetas y abrigos a medida. Formada en patronaje y confección, trabaja pieza a pieza — desde el primer prototipo hasta la costura final. Su trabajo se sitúa en la intersección entre estructura y suavidad: siluetas precisas pensadas para llevarse, no sólo para admirarse.",

    gallery_heading: "La colección",
    gallery_image_alt_prefix: "Chaqueta de Phoebe O'Gorman",

    store_kicker: "Tienda",
    store_title: "Apertura próxima",
    store_intro:
      "La tienda aún no está abierta. Las piezas aparecerán aquí cuando la colección esté lista.",
    store_back_home: "Volver",

    coming_soon_label: "En preparación",
    coming_soon_note: "Escríbenos",

    footer_rights: "Todos los derechos reservados.",

    language_switch_label: "Switch to English",
    language_switch_text: "EN",
  },
};

export function t(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

/** "" for the default locale, "/es" otherwise. */
export function localePrefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** "/" for the default locale, "/es/" otherwise. */
export function localeHomePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}/`;
}

/** "/store/" for the default locale, "/es/store/" otherwise. */
export function localeStorePath(locale: Locale): string {
  return `${localePrefix(locale)}/store/`;
}
