// import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  // BELOW TO BE USED FOR API
  // runtimeConfig: {
  //   // Private config that is only available on the server
  //   apiSecret: "123",
  //   // Config within public will be also exposed to the client
  //   public: {
  //     apiBase: "/api",
  //   },
  // },

  // alias: {
  //   assets: "/<rootDir>/assets",
  // },

  css: [
    // Load a Node.js module directly (here it's a Sass file)
    "~/assets/main.scss",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],

  plugins: ["~/plugins/Vue3Lottie.client.ts"],
});
