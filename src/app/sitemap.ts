import { projects } from "@/content/projects";
import type { MetadataRoute } from "next";

const BASE_URL = "https://tomkelve.com";
const LOCALES = ["pt-br", "en"] as const;

const STATIC_ROUTES = ["", "career", "certifications", "contact", "projects"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${route ? `/${route}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }))
  );

  const projectEntries = projects
    .filter((p) => p.status === "public")
    .flatMap((p) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/projects/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    );

  return [...staticEntries, ...projectEntries];
}
