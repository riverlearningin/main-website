import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/training", "/products", "/case-studies", "/contact"].map((p) => ({ url: `https://riverlearning.in${p}` }));
}
