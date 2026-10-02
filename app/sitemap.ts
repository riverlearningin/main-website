import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/training", "/products", "/contact"].map((p) => ({ url: `https://riverlearning.in${p}` }));
}
