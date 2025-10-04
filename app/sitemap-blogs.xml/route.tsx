// app/sitemap.ts
import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import contentData from "@/components/Content/ContactInfo.json";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0; // when fetching live data

async function getBlogData(origin: string) {
  const res = await fetch(`${origin}/api/blogs`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load blogs");
  return res.json() as Promise<{ blogs: any[]; currentDate?: string }>;
}

export async function GET() {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const origin = `${proto}://${host}`;

  const { blogs } = await getBlogData(origin);
  const uniqueCategories = Array.from(new Set(blogs.map((url: any) => url.category)));
  const blogCatergoryURL = uniqueCategories.map((catagory: string) => `
    <url>
      <loc>${contentData.baseUrl}${catagory}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join("");

  const blogURL = blogs.map((url: any) => `
    <url>
      <loc>${contentData.baseUrl}blogs/${url.category}/${url.slug}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${contentData.baseUrl}blogs/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>
  ${blogCatergoryURL}
  ${blogURL}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
