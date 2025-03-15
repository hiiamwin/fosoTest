import React from "react";
import Image from "next/image";
import { arrowRight, blogImage, calendar, clock } from "@/icon";

function BlogItem() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div>
        <Image src={blogImage} alt="blog-image" className="rounded-3xl" />
      </div>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <span className="capitalize mt-6 px-2 py-1 rounded-lg bg-[#E2F0FE] text-xs font-medium">
          quản lý sản xuất
        </span>
        <p className="text-2xl font-extrabold">
          Tại sao BOM quan trọng trong quản lý sản xuất?
        </p>
        <span className="flex items-center justify-start gap-3">
          <span className="flex items-center justify-center gap-2 text-base font-medium">
            <Image src={calendar} alt="calendar" />
            17/11/2022
          </span>
          |
          <span className="flex items-center justify-center gap-2 text-base font-medium">
            <Image src={clock} alt="calendar" />
            10 phút đọc
          </span>
        </span>
        <span className="flex items-center justify-start gap-4 text-lg font-semibold">
          Khám phá thêm <Image src={arrowRight} alt="arrow-right" />
        </span>
      </div>
    </div>
  );
}

export default BlogItem;
