import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// This tells Next.js to dynamically generate this route at request time
export const dynamic = 'force-dynamic';
export const revalidate = 0; // Disable caching for this route

// Helper function to provide fallback for empty, null, or missing values
function getValueOrDefault(value: any, defaultValue: any): any {
  if (
    value === null ||
    value === undefined ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
  ) {
    return defaultValue;
  }
  return value;
}

export async function GET(request: Request) {
  try {
    // Read blogs.json
    const filePath = join(process.cwd(), 'components', 'Content', 'blogs.json');
    const fileData = readFileSync(filePath, 'utf-8');
    const blogDataJson = JSON.parse(fileData);

    // Apply fallback system to ensure all fields have values
    const processedBlogs = blogDataJson.map((post: any, index: number) => {
      // Ensure fallback defaults for all fields regardless of index
      const baseFallback = {
        title: "DEFAULT: Dumpster Rental Tips",
        metaTitle: "DEFAULT: Dumpster Rental Information",
        metaDescription: "DEFAULT: Learn about dumpster rental in [location].",
        category: "DEFAULT: general",
        categoryName: "DEFAULT: General",
        slug: `DEFAULT: blog-post-${index + 1}`,
        h1: "DEFAULT: Dumpster Rental Blog Post",
        description: "DEFAULT: Helpful information about dumpster rental.",
        postImageSrc: "https://ik.imagekit.io/h7rza8886p/Default1.jpg?updatedAt=1757319001930",
        postImageAlt: "DEFAULT: blog post image",
        publishedAt: "DEFAULT: 2025-01-01",
        body: "DEFAULT: <p>Blog content about dumpster rental services.</p>"
      };
      
      return {
        title: getValueOrDefault(post?.title, baseFallback.title),
        metaTitle: getValueOrDefault(post?.metaTitle, baseFallback.metaTitle),
        metaDescription: getValueOrDefault(post?.metaDescription, baseFallback.metaDescription),
        category: getValueOrDefault(post?.category, baseFallback.category),
        categoryName: getValueOrDefault(post?.categoryName, baseFallback.categoryName),
        slug: getValueOrDefault(post?.slug, baseFallback.slug),
        h1: getValueOrDefault(post?.h1, baseFallback.h1),
        description: getValueOrDefault(post?.description, baseFallback.description),
        postImageSrc: getValueOrDefault(post?.postImageSrc, baseFallback.postImageSrc),
        postImageAlt: getValueOrDefault(post?.postImageAlt, baseFallback.postImageAlt),
        publishedAt: getValueOrDefault(post?.publishedAt, baseFallback.publishedAt),
        body: getValueOrDefault(post?.body, baseFallback.body),
      };
    });

    // Get today's date in YYYY-MM-DD format
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to start of day
    const todayStr = today.toISOString().split('T')[0]; // Gets YYYY-MM-DD

    // Filter blogs by publishedAt <= today and sort by date (newest first)
    const filteredBlogs = processedBlogs
      .filter((blog: any) => {
        const publishDate = new Date(blog.publishedAt);
        publishDate.setHours(0, 0, 0, 0); // Reset time to start of day
        return publishDate <= today;
      })
      .sort((a: any, b: any) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      });

    if (filteredBlogs.length === 0) {
      return NextResponse.json(
        { message: 'No published blogs found for the current date', currentDate: todayStr },
        { 
          status: 404,
          headers: {
            'Cache-Control': 'no-store, must-revalidate',
            'Pragma': 'no-cache',
          }
        }
      );
    }

    // Return filtered blogs with cache control headers
    return new NextResponse(JSON.stringify({
      blogs: filteredBlogs,
      currentDate: todayStr,
      totalBlogs: filteredBlogs.length
    }), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    console.error('Error in blogs route:', error);
    return NextResponse.json(
      { message: 'Error reading blogs', error: String(error) },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, must-revalidate',
          'Pragma': 'no-cache',
        }
      }
    );
  }
} 