// @ts-check
import { defineConfig } from "astro/config";

import { loadEnv } from "vite";

import { storyblok } from "@storyblok/astro";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  integrations: [
    icon(),
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        projects: "components/storyblok/ProjectPost",
        projectsPostList: "components/storyblok/ProjectList",
      },
    }),
  ],
});
