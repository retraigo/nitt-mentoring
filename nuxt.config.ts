// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "rotate",
      mode: "out-in",
    },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],
});
