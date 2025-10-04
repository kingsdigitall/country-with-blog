// app/sitemap-subdomains/sitemap.xml/route.ts
import { NextResponse } from "next/server";
import contentData from "@/components/Content/ContactInfo.json";
import subdomainMap from "@/components/Content/subDomainUrlContent.json";
import { headers } from "next/headers";

// Add dynamic export for API support
export const dynamic = 'force-dynamic';

// Helper function to get base URL from headers or fallback
function getBaseUrl(headersList: any): string {
  try {
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'https';
    
    if (host) {
      return `${protocol}://${host}/`;
    }
  } catch (error) {
    console.warn('Error getting host from headers:', error);
  }
  
  // Fallback to static content
  return contentData.baseUrl || 'https://localhost:3000/';
}

// Helper function to get API base URL (avoiding subdomain issues in development)
function getApiBaseUrl(headersList: any): string {
  try {
    const host = headersList.get('host');
    const protocol = headersList.get('x-forwarded-proto') || 'https';
    
    if (host) {
      // Check if we're in development (localhost)
      if (host.includes('localhost')) {
        return `${protocol}://${host}`;
      }
      
      // In production, ensure we use main domain for API calls
      const [hostname, port] = host.split(':');
      const domainParts = hostname.split('.');
      
      // If it's a subdomain, use the main domain
      if (domainParts.length > 2) {
        const mainDomain = domainParts.slice(1).join('.');
        return `${protocol}://${mainDomain}${port ? `:${port}` : ''}`;
      }
      
      return `${protocol}://${host}`;
    }
  } catch (error) {
    console.warn('Error getting host from headers:', error);
  }
  
  // Fallback to static content
  return contentData.baseUrl || 'https://localhost:3000/';
}

// Helper function to fetch data from API with fallback
async function fetchWithFallback<T>(url: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });
    
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('API fetch failed, using fallback:', error);
    return fallback;
  }
}

export async function GET() {
  const headersList = headers();
  const baseUrl = getBaseUrl(headersList);
  const apiBaseUrl = getApiBaseUrl(headersList);

  // Fetch subdomain data from API with fallback to static JSON
  const subdomainData = await fetchWithFallback(
    `${apiBaseUrl}/api/subdomains`,
    { subdomains: Object.keys(subdomainMap || {}).map(key => ({ slug: key, ...(subdomainMap as any)[key] })) }
  );

  // Normalize the base host (no protocol, no trailing slash)
  const host = String(contentData.host)
    .replace(/^https?:\/\//, "")
    .replace(/\/$/, "");

  const subdomains = subdomainData.subdomains || [];
  const now = new Date().toISOString();

  // Build <sitemap> entries pointing to each subdomain's sitemap.xml
  const entries = subdomains
    .map((subdomainItem: any) => {
      const slug = subdomainItem.slug;
      return `  <sitemap>
    <loc>https://${slug}.${host}/sitemap.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`;
    })
    .join("\n");

  // Full XML response as a sitemap index
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
