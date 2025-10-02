// @ts-check
import { defineConfig } from "astro/config";

import { loadEnv } from "vite";

import { storyblok } from "@storyblok/astro";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

import svelte from "@astrojs/svelte";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  site: "https://lincie.me",
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  integrations: [
    svelte(),
    icon(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        projects: "components/storyblok/ProjectPost",
        projectsPostList: "components/storyblok/ProjectList",
      },
    }),
    sitemap(),
    robotsTxt(),
  ],
});
