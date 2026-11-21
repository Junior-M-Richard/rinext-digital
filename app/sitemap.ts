import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rinext-digital.vercel.app"; // À remplacer par ton domaine final une fois en ligne

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-11-21"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}