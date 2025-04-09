// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      defaultLocale: "es",
      favicon: "favicon.png",
      logo: {
        src: "./src/assets/geh_large_logo.png",
      },
      title: "API docs",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/innovacion00/agencias-api-doc",
        },
      ],
      sidebar: [
        {
          label: "Disponibilidad",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Explicacion", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
