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

  // Home
  home_kicker: string;
  home_title: string;
  home_intro: string;
  home_cta_store: string;

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
    meta_title: "Phoebe O'Gorman — Coming soon",
    meta_description:
      "A new fashion brand. The first collection arrives Spring Summer 2027.",
    store_meta_title: "Store — Phoebe O'Gorman",
    store_meta_description:
      "The Phoebe O'Gorman store is opening soon.",

    skip_to_content: "Skip to content",
    logo_alt: "Phoebe O'Gorman",

    home_kicker: "A new brand",
    home_title: "Coming soon",
    home_intro:
      "The first collection arrives Spring Summer 2027. In the meantime, you are welcome to get in touch.",
    home_cta_store: "Store",

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
    meta_title: "Phoebe O'Gorman — Próximamente",
    meta_description:
      "Una nueva marca de moda. La primera colección llega en Spring Summer 2027.",
    store_meta_title: "Tienda — Phoebe O'Gorman",
    store_meta_description: "La tienda de Phoebe O'Gorman abrirá pronto.",

    skip_to_content: "Saltar al contenido",
    logo_alt: "Phoebe O'Gorman",

    home_kicker: "Una nueva marca",
    home_title: "Próximamente",
    home_intro:
      "La primera colección llega en Spring Summer 2027. Mientras tanto, puedes escribirnos.",
    home_cta_store: "Tienda",

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
