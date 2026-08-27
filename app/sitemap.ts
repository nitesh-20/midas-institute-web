import { MetadataRoute } from "next";
import { coursesData } from "@/data/coursesData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.midastechnologies.in";

  // Static routes
  const routes = [
    "",
    "/about",
    "/courses",
    "/services",
    "/internship",
    "/contact",
    "/privacy"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic course routes
  const courseRoutes = coursesData.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...courseRoutes];
}
