import React from "react";
import {
  BlogList,
  Pagination,
  SearchBlog,
  SlideBottomToTop,
  SlideLeftToRight,
} from "./_components";
import { Banner } from "./_components";
import Image from "next/image";
import { greenLeft, greenRight } from "@/icon";

async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const page = (await searchParams).page || "1";
  return (
    <section className="flex flex-col items-center justify-center gap-24 w-full">
      <Banner />
      <div className="relative">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-40 flex flex-col items-center justify-center gap-[72px] w-full">
          <div className="flex items-start justify-center gap-8">
            <SlideLeftToRight duration={1} ease="easeOut">
              <BlogList />
            </SlideLeftToRight>

            <SlideBottomToTop duration={1} ease="easeOut">
              <SearchBlog />
            </SlideBottomToTop>
          </div>
          <Pagination page={+page} />
        </div>

        <div className="absolute -top-1/5 left-0 -z-50">
          <Image src={greenLeft} alt="green-left" width={500} height={500} />
        </div>

        <div className="absolute bottom-0 right-0 -z-50">
          <Image src={greenRight} alt="green-left" width={500} height={500} />
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
