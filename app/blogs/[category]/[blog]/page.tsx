import React from "react";
import Image from "next/image";
import DateComponent from "@/app/components/Widgets/DateComponent";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

import contactContent from "@/app/Data/content";

const ContactInfo: any = contactContent.contactContent;
const BlogJson: any = contactContent.blogContent.posts;

export function generateMetadata({
  params,
}: {
  params: { blog: string; category: string };
}) {
  const blogFilteredData = BlogJson.filter(
    (blog: any) => blog.slug === params.blog,
  );
  return {
    title: blogFilteredData[0]?.metaTitle,
    description: blogFilteredData[0]?.metaDescription,
    alternates: {
      canonical: `${ContactInfo.baseUrl}blogs/${params?.category}/${params.blog}`,
    },
  };
}

const page = ({ params }: { params: { blog: string } }) => {
  const blogFilteredData = BlogJson.filter(
    (blog: any) => blog.slug === params.blog,
  );
  return (
    <div className="">
      <Navbar />

      <div className="">
        <div className="mx-auto max-w-[1905px]">
          {/* Content */}
          <div className="text-cream relative   px-6 delay-1000 duration-1000 ease-in-out md:px-32 lg:px-40 xl:px-80 ">
            {/*Content*/}
            <div>
              <div className="">
                <div className="  lg:w-fit">
                  {/* <Image
                src="/long-shot-men-working-roof.jpg"
                alt="image"
                width={10000}
                height={10000}
                className="w-60 object-cover"
                loading="lazy"
              /> */}
                </div>
                {blogFilteredData[0].h1 && (
                  <h1 className="mt-6 flex items-center gap-4 text-4xl xl:w-10/12">
                    {blogFilteredData[0].h1.toUpperCase()}
                  </h1>
                )}
                <div className="mt-6 flex justify-between text-sm lg:w-80">
                  {blogFilteredData[0].publishedAt && (
                    <div className="">
                      <DateComponent
                        publishedAt={blogFilteredData[0].publishedAt}
                      />
                    </div>
                  )}
                </div>
                {blogFilteredData[0].postImageSrc && (
                  <div className="mt-6 overflow-hidden  rounded-lg lg:w-fit">
                    <Image
                      src={`${blogFilteredData[0].postImageSrc}`}
                      alt={`${blogFilteredData[0].postImageAlt}`}
                      width={10000}
                      height={10000}
                      className=" h-[60vh] max-h-96 object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                {blogFilteredData[0].body && (
                  <div
                    className="mt-6 overflow-x-auto text-sm  md:overflow-x-auto"
                    dangerouslySetInnerHTML={{
                      __html: blogFilteredData[0].body,
                    }}
                  ></div>
                )}
                {/* <div className="mt-6 text-sm">
              {NewsPost.p && (
                <div
                  className="mt-6 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: NewsPost.p.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              )}
              {NewsPost.h2one && (
                <h2 className="mt-6 flex items-center gap-4 text-2xl ">
                  {NewsPost.h2one}
                </h2>
              )}
              {NewsPost.pone && (
                <div
                  className="mt-6 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: NewsPost.pone.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              )}
              {NewsPost.h2two && (
                <h2 className="mt-6 flex items-center gap-4 text-2xl ">
                  {NewsPost.h2two}
                </h2>
              )}
              {NewsPost.ptwo && (
                <div
                  className="mt-6 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: NewsPost.ptwo.replace(/\n/g, "<br/>"),
                  }}
                ></div>
              )}
            </div> */}
              </div>
            </div>
            {/*Content*/}
          </div>
          {/* Recent Post  */}
          {BlogJson.length > 1 && (
            <div className="text-cream relative px-4 py-20 md:px-14">
              <h2 className="flex items-center gap-4 text-3xl">
                RECENT BLOGS
                <span className=" hidden  h-0.5 w-20 justify-center bg-main md:flex"></span>
              </h2>
              {/* Para */}
              <p className="my-6 text-sm lg:w-1/3">
                DISCOVER YOUR TRUSTED HANDYMAN INSIGHTS WITH US CONTACT US TODAY
                TO BEGIN YOUR HOME-REPAIR JOURNEY!
              </p>
              {/* Cards */}
              <div className="text-cream mt-10 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
                {BlogJson.reverse()
                  .slice(1, 4)
                  .map((item: any, index: number) => {
                    return (
                      <div
                        className="relative rounded-lg border shadow-xl shadow-black/40 md:w-11/12"
                        key={index}
                      >
                        <div className="overflow-hidden rounded-lg lg:w-fit">
                          <Image
                            src={`${item.postImageSrc}`}
                            alt={`${item.postImageAlt}`}
                            width={10000}
                            height={10000}
                            className=" h-60 object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="container2 text-cream p-4 md:pr-12">
                          <div className="flex items-center justify-center lg:block lg:w-fit "></div>
                          <h4 className="mt-2 w-fit text-center text-xl md:text-left">
                            {item.h1}
                          </h4>
                          <div className="mt-4 flex justify-between text-sm">
                            <div className="font-semibold">{item.type}</div>
                            <div className="">{item.date}</div>
                          </div>
                          <div className="mt-4 w-fit text-sm">
                            {item.description}
                          </div>
                          <div className="">
                            <div className="mt-2 font-semibold text-main underline-offset-8 duration-300 ease-in-out  hover:underline hover:underline-offset-2">
                              <Link
                                href={`/blogs/${item?.category.toLowerCase().split(" ").join("-")}/${item.slug}`}
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {/* Cards */}
            </div>
          )}

          {/* Recent Post  */}
        </div>
      </div>
    </div>
  );
};

export default page;

// export  function generateStaticParams() {
//   const subDomain = Array.from(new Set(BlogJson.map((item) => item.slug)));
//   // const subDomain = Object.keys(cityData);
//   return subDomain.map((locations: any) => ({
//     blog: locations.toString(),
//   }));
// }
