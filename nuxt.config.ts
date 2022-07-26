import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  meta: {
    title: "Your Awesome Website",
    link: [
      {
        href: "https://fonts.googleapis.com/css2?family=Helvetica:wght@100",
        rel: "stylesheet",
      },
    ],
  },
  generate: {
    fallback: "true",
  },
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {
    viewer: false,
    config: {
      darkMode: "class",
      content: [
        `components/**/*.{vue,js}`,
        `composables/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
      ],
    },
  },
});
