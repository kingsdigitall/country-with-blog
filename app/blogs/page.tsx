import Image from "next/image";
import React from "react";
import BlogPosts from "../components/Widgets/BlogPosts";
import ContactInfo from "@/components/Content/ContactInfo.json";
import Navbar from "../components/Navbar";
import { headers } from "next/headers";
import contactContent from "@/app/Data/content";
const blogsMetas: any = contactContent.locationPageContent;
// Force the page to be dynamic
export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getBlogData() {
  // console.log("getBlogData called");
  const headersList = headers();
  const blogProtocol: any = headersList.get("x-forwarded-proto") || "http";
  const host = headersList.get("host");
  const baseUrl = `${blogProtocol}://${host}`;
  // console.log("protocol   ===", blogProtocol);
  // console.log("host   ===", host);
  const res = await fetch(`${baseUrl}/api/blogs`, {
    cache: "no-store",
  });
  // console.log("res   ===", res);
  return res.json();
}
export async function generateMetadata() {
  const meta = JSON.parse(
    JSON.stringify(blogsMetas.blogMetas)
      .split("[location]")
      .join(ContactInfo.location)
      .split("[phone]")
      .join(ContactInfo.No),
  );
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: {
      canonical: `${ContactInfo.baseUrl}blogs/`,
    },
  };
}

// Function to group and sort data by location
function groupAndSortBycategory(data: any[]) {
  const groupedData = data.reduce((acc: any, item: any) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
  const sortedcategorys = Object.keys(groupedData).sort();
  const sortedOutput = sortedcategorys.reduce((acc: any, category) => {
    acc[category] = groupedData[category];
    return acc;
  }, {});

  return sortedOutput;
}



const page = async () => {
  let blogData: any[] = [];
  let notFound = false;
  let currentDate = "";
  try {
    const data = await getBlogData();
    if (!data || !data.blogs) {
      notFound = true;
      currentDate = data?.currentDate;
    } else {
      blogData = data.blogs;
      currentDate = data.currentDate;
      if (!blogData.length) {
        notFound = true;
      }
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    notFound = true;
  }

  if (notFound || blogData.length === 0) {
    return (
      <div className="">
        <Navbar />
        <div className="mx-auto max-w-[1905px] p-8 text-center text-lg">
          <p>No blogs are currently published.</p>
          <p className="mt-2 text-sm text-gray-600">
            Check back later for new content!
          </p>
          {currentDate && (
            <p className="mt-1 text-xs text-gray-500">
              Current date: {currentDate}
            </p>
          )}
        </div>
      </div>
    );
  }

  const sortedDataBycategory = groupAndSortBycategory(blogData);
  const categorys = Object.keys(sortedDataBycategory);

  return (
    <div className="">
      <Navbar />
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[1905px]">
          <BlogPosts postData={blogData} categorys={categorys} />
        </div>
      </div>
    </div>
  );
};

export default page;
