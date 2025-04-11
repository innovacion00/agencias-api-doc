// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      defaultLocale: "es",
      favicon: "favicon.png",
      title: "Booking connect Api",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/innovacion00/agencias-api-doc",
        },
      ],
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Autenticacion",
          link: "autenticacion/",
        },
        {
          label: "Disponibilidad",
          link: "disponibilidad/",
        },
      ],
    }),
  ],
});
