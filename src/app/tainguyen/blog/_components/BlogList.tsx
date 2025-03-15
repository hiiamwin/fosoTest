import React from "react";
import Image from "next/image";
import BlogItem from "./BlogItem";
import { blogBanner } from "@/icon";

function BlogList() {
  return (
    <section className="max-w-5xl">
      <h2 className="text-4xl font-extrabold">Tất cả bài viết</h2>
      <div className="mt-6 flex items-center justify-center gap-12 flex-col ">
        <div>
          <Image src={blogBanner} alt="blog-banner" />
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <BlogItem key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
