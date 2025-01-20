// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/modules
  extends: [
    './base',
  ],
  modules: [
    // '@nuxthub/core',
    'nuxt-i18n-micro',
    '@nuxt/eslint',
  ],

  // https://devtools.nuxt.com
  devtools: { enabled: true },

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      helloText: 'Hello from the Edge 👋',
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  nitro: {
    storage: {
      data: {
        driver: 'vercelKV',
      },
    },
  },

  // https://hub.nuxt.com/docs/getting-started/installation#options
  // hub: {},

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en_EN', displayName: 'English' },
      { code: 'de', iso: 'de_DE', displayName: 'German' },
      { code: 'fr', iso: 'fr_FR', displayName: 'French' },
      { code: 'ru', iso: 'ru_RU', displayName: 'Russian' },
      { code: 'es', iso: 'es_ES', displayName: 'Spanish' },
      { code: 'it', iso: 'it_IT', displayName: 'Italian' },
    ],
    defaultLocale: 'en',
    includeDefaultLocaleRoute: true,
    disablePageLocales: true,
    translationDir: 'locales',
    fallbackLocale: 'en',
    meta: false,
    autoDetectLanguage: false,
  },
})
