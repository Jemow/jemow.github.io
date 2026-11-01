// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://jemo.github.io",
  base: '/',
  integrations: [mdx(), sitemap(), icon()],

  // Old URLs from the previous theme, kept so shared links don't break
  redirects: {
    "/blog": "/projects",
    "/blog/opengl": "/projects/opengl",
    "/blog/rollback": "/projects/rollback",
    "/about": "/",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
