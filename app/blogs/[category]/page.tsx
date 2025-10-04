import React from "react";
import Image from "next/image";
import DateComponent from "@/app/components/Widgets/DateComponent";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Banner from "@/app/components/Home/Banner";

import contactContent from "@/app/Data/content";

const ContactInfo: any = contactContent.contactContent;
const blogData: any = contactContent.blogContent.posts;
const blogsCategoryMetas: any = contactContent.blogCategoryMetaMap;

interface blogsCategoryType {
  [key: string]: {
    title: string;
    description: string;
    bannerImage: string;
  };
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const blogsMetas = blogsCategoryMetas as blogsCategoryType;
  const metas = blogsMetas[params.category];
  return {
    title: metas?.title,
    description: metas?.description,
    alternates: {
      canonical: `${ContactInfo.baseUrl}blogs/${params?.category}`,
    },
  };
}

function groupAndSortBycategory(data: any) {
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
const page = ({ params }: { params: { category: string } }) => {
  const sortedDataBycategory = groupAndSortBycategory(blogData);
  blogData.forEach((blog: any) => {
    if (blog.otherCategory && Array.isArray(blog.otherCategory)) {
      blog.otherCategory.forEach((otherCat: string) => {
        if (sortedDataBycategory[otherCat]) {
          sortedDataBycategory[otherCat].push(blog);
        } else {
          sortedDataBycategory[otherCat] = [blog];
        }
      });
    }
  });
  const FilteredData = blogData.filter(
    (item: any) => item.category === params.category,
  );
  const blogsMetas = blogsCategoryMetas as blogsCategoryType;
  const metas = blogsMetas[params.category];
  // console.log(metas);
  return (
    <div className="">
      <Navbar />
      <div>
        <Banner
          h1={FilteredData[0]?.categoryName}
          image={metas.bannerImage}
          p1={metas.description}
        />
        <div className="my-10 mt-20 px-4 md:px-10">
          <div className="Card my-10 grid gap-16  md:grid-cols-2 lg:grid-cols-3 ">
            {sortedDataBycategory[params.category]
              .reverse()
              ?.map((item: any, index: number) => {
                return (
                  <div
                    className="relative rounded-lg border text-black duration-300 ease-in-out md:w-11/12"
                    key={index}
                  >
                    <div className="overflow-hidden rounded-lg lg:w-fit">
                      <Image
                        src={`${item.postImageSrc}`}
                        alt={item.h1}
                        width={10000}
                        height={10000}
                        className="h-60 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="container2 p-4  md:pr-12">
                      <div className="ml-2 flex items-center justify-center lg:block lg:w-fit">
                        {/* <Image
                        src={urlForImage(item.newsImage)}
                        alt="News Image"
                        width={150}
                        height={0}
                        className="-ml-2"
                        loading="lazy"
                      /> */}
                      </div>
                      <h2 className="mt-2 w-fit text-center text-xl md:text-left ">
                        <Link
                          href={`/blogs/${item?.category.toLowerCase().split(" ").join("-")}/${item.slug}`}
                        >
                          {" "}
                          {item.h1.toUpperCase()}
                        </Link>
                      </h2>
                      <div className="mt-4 flex justify-between text-sm ">
                        <div className="font-semibold text-main underline-offset-8 duration-300 ease-in-out  hover:underline hover:underline-offset-2">
                          <Link
                            href={`/blogs/${item?.category.toLowerCase().split(" ").join("-")}/${item.slug}`}
                          >
                            Read More
                          </Link>
                        </div>
                        <div className="">
                          <DateComponent publishedAt={item.publishedAt} />
                        </div>
                      </div>
                      <div className="mt-4 w-fit text-sm">{`${item.description.trim()}...`}</div>
                      <div className="">
                        {/* <Knowmore
                              link={`/dubai-communities/${item.location.toLowerCase().split(" ").join("-")}/${item.slug.current}`}
                            /> */}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

export function generateStaticParams() {
  const subDomain = Array.from(
    new Set(blogData.map((item: any) => item.category)),
  );
  // const subDomain = Object.keys(cityData);
  return subDomain.map((locations: any) => ({
    category: locations.toString(),
  }));
}
