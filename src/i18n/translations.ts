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
  home_subtitle: string;
  home_intro: string;
  home_intro_secondary: string;
  home_cta_store: string;

  // Home — retailers
  retailers_heading: string;
  retailers_body: string;
  retailers_cta: string;

  // Home — gallery
  gallery_heading: string;
  gallery_image_alt_prefix: string;

  // Store
  store_kicker: string;
  store_title: string;
  store_intro: string;
  store_back_home: string;

  // Newsletter confirmation landing page
  confirmed_meta_title: string;
  confirmed_meta_description: string;
  confirmed_kicker: string;
  confirmed_title: string;
  confirmed_intro: string;

  // Coming soon
  coming_soon_label: string;
  coming_soon_note: string;

  // Newsletter signup
  newsletter_heading: string;
  newsletter_intro: string;
  newsletter_email_label: string;
  newsletter_email_placeholder: string;
  newsletter_submit: string;
  newsletter_submitting: string;
  newsletter_success_heading: string;
  newsletter_success_body: string;
  newsletter_error_generic: string;

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

/**
 * MailerLite embedded form endpoint.
 *
 * MailerLite's own embed HTML posts to dashboard.mailerlite.com, but that
 * host answers with a 301 redirect to assets.mailerlite.com. Browsers turn a
 * redirected POST into a GET, which drops the form body and the API then
 * reports the email field as missing. Posting straight to the assets host
 * skips the redirect and keeps the POST body intact.
 */
export const newsletter = {
  action: "https://assets.mailerlite.com/jsonp/2637449/forms/198701218312226400/subscribe",
} as const;

export const translations: Record<Locale, Translations> = {
  en: {
    meta_title: "Phoebe O'Gorman — Designed in Lancashire",
    meta_description:
      "Phoebe O'Gorman is an independent fashion label rooted in considered design, quality craftsmanship and thoughtful garment construction. A new collection is in development.",
    store_meta_title: "Store — Phoebe O'Gorman",
    store_meta_description:
      "The Phoebe O'Gorman store is opening soon.",

    skip_to_content: "Skip to content",
    logo_alt: "Phoebe O'Gorman",

    home_kicker: "Designed in Lancashire",
    home_title: "Phoebe O'Gorman",
    home_subtitle: "A new collection in development",
    home_intro:
      "Phoebe O'Gorman is an independent fashion label rooted in considered design, quality craftsmanship and thoughtful garment construction.",
    home_intro_secondary:
      "The first collection is currently in development and will be released in limited quantities through selected retailers and online.",
    home_cta_store: "Store",

    retailers_heading: "Retailers & Stockists",
    retailers_body: "Interested in stocking Phoebe O'Gorman?",
    retailers_cta: "Enquire about wholesale",

    gallery_heading: "Gallery",
    gallery_image_alt_prefix: "Jacket by Phoebe O'Gorman",

    store_kicker: "Store",
    store_title: "Opening Soon",
    store_intro:
      "The store is not open yet. Pieces will be listed here once the collection is ready.",
    store_back_home: "Back",

    confirmed_meta_title: "Subscription confirmed — Phoebe O'Gorman",
    confirmed_meta_description: "Your newsletter subscription is confirmed.",
    confirmed_kicker: "Newsletter",
    confirmed_title: "You're on the list",
    confirmed_intro:
      "Thank you for confirming your email. You'll hear from us as soon as there's news.",

    coming_soon_label: "In preparation",
    coming_soon_note: "Get in touch",

    newsletter_heading: "Register your interest",
    newsletter_intro:
      "Be the first to hear about the collection, launch and availability.",
    newsletter_email_label: "Email address",
    newsletter_email_placeholder: "Email",
    newsletter_submit: "Register your interest",
    newsletter_submitting: "Sending…",
    newsletter_success_heading: "Almost there",
    newsletter_success_body:
      "Check your inbox and confirm your email to complete your subscription.",
    newsletter_error_generic: "Something went wrong. Please try again.",

    footer_rights: "All rights reserved.",

    language_switch_label: "Cambiar a español",
    language_switch_text: "ES",
  },

  es: {
    meta_title: "Phoebe O'Gorman — Diseñado en Lancashire",
    meta_description:
      "Phoebe O'Gorman es una firma de moda independiente basada en el diseño meditado, la artesanía de calidad y la construcción cuidadosa de cada prenda. Una nueva colección está en desarrollo.",
    store_meta_title: "Tienda — Phoebe O'Gorman",
    store_meta_description: "La tienda de Phoebe O'Gorman abrirá pronto.",

    skip_to_content: "Saltar al contenido",
    logo_alt: "Phoebe O'Gorman",

    home_kicker: "Diseñado en Lancashire",
    home_title: "Phoebe O'Gorman",
    home_subtitle: "Una nueva colección en desarrollo",
    home_intro:
      "Phoebe O'Gorman es una firma de moda independiente basada en el diseño meditado, la artesanía de calidad y la construcción cuidadosa de cada prenda.",
    home_intro_secondary:
      "La primera colección está actualmente en desarrollo y se lanzará en cantidades limitadas a través de minoristas seleccionados y en línea.",
    home_cta_store: "Tienda",

    retailers_heading: "Minoristas y puntos de venta",
    retailers_body: "¿Te interesa distribuir Phoebe O'Gorman?",
    retailers_cta: "Consulta sobre venta al por mayor",

    gallery_heading: "Galería",
    gallery_image_alt_prefix: "Chaqueta de Phoebe O'Gorman",

    store_kicker: "Tienda",
    store_title: "Apertura próxima",
    store_intro:
      "La tienda aún no está abierta. Las piezas aparecerán aquí cuando la colección esté lista.",
    store_back_home: "Volver",

    confirmed_meta_title: "Suscripción confirmada — Phoebe O'Gorman",
    confirmed_meta_description: "Tu suscripción al newsletter está confirmada.",
    confirmed_kicker: "Newsletter",
    confirmed_title: "Ya estás dentro",
    confirmed_intro:
      "Gracias por confirmar tu correo. Te escribiremos en cuanto haya novedades.",

    coming_soon_label: "En preparación",
    coming_soon_note: "Escríbenos",

    newsletter_heading: "Registra tu interés",
    newsletter_intro:
      "Sé la primera persona en conocer la colección, el lanzamiento y la disponibilidad.",
    newsletter_email_label: "Correo electrónico",
    newsletter_email_placeholder: "Correo electrónico",
    newsletter_submit: "Registra tu interés",
    newsletter_submitting: "Enviando…",
    newsletter_success_heading: "Ya casi está",
    newsletter_success_body:
      "Revisa tu correo y confirma tu email para completar la suscripción.",
    newsletter_error_generic: "Algo ha salido mal. Inténtalo de nuevo.",

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

/**
 * "/newsletter/confirmed/" for the default locale, "/es/newsletter/confirmed/"
 * otherwise. Paste this URL into MailerLite's form settings, under
 * Double opt-in -> Confirmation thank you page -> "Or use your own landing
 * page", so subscribers land back on the site after clicking the
 * confirmation link in their email.
 */
export function localeConfirmedPath(locale: Locale): string {
  return `${localePrefix(locale)}/newsletter/confirmed/`;
}
