import type { MetadataRoute } from "next";

const baseUrl = "https://www.vesani.co.za";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/modular-solutions",
    "/about",
    "/training",
    "/contact",
    "/projects",
    "/bee-certificate",
  ];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
