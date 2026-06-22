import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Summit Global Foundation - MBBS Admission Consultants",
    short_name: "Summit Global",
    description: "Leading MBBS admission consultancy in Noida for India & abroad medical admissions.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0e24",
    theme_color: "#0b0e24",
    icons: [
      { src: "/logo.png", sizes: "any", type: "image/png" },
    ],
  };
}
