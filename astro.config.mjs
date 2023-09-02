import { defineConfig } from "astro/config";
import { i18n } from "astro-i18n-aut/integration";

const defaultLocale = "en";
const locales = {
    en: "en-US", // the `defaultLocale` value must present in `locales` keys
    es: "es-ES",
    fr: "fr-CA",
};

// https://astro.build/config
export default defineConfig({
    site: "https://example.com/",
    trailingSlash: "always",
    base: "example-base",
    integrations: [
        i18n({
          locales,
          defaultLocale,
        }),
      ],
});
