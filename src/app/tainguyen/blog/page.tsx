import React from "react";
import { BlogList, Pagination, SearchBlog } from "./_components";
import { Banner } from "./_components";
import Image from "next/image";
import { greenLeft, greenRight } from "@/icon";

function BlogPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-24 w-full">
      <Banner />
      <div className="flex flex-col items-center justify-center gap-[72px] relative">
        <div className=" flex items-start justify-center gap-8 px-60">
          <BlogList />
          <SearchBlog />
        </div>
        <Pagination />

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
