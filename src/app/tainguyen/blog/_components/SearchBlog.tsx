import React from "react";
import Image from "next/image";
import { lookupIcon, searchBanner1, searchBanner2 } from "@/icon";

const categoryList = [
  {
    title: "Tất cả",
    quantity: 108,
  },
  {
    title: "Thiết Kế Website",
    quantity: 36,
  },
  {
    title: "Thiết Kế App Mobile",
    quantity: 13,
  },
  {
    title: "Quản Lý Sản Xuất",
    quantity: 25,
  },
  {
    title: "Quản Lý Bán Hàng",
    quantity: 22,
  },
  {
    title: "Báo Chí Nói Về FOSO",
    quantity: 7,
  },
  {
    title: "Tin Tức FOSO",
    quantity: 5,
  },
];
function SearchBlog() {
  return (
    <section>
      <h2 className="text-2xl font-extrabold">Tìm kiếm</h2>

      <div className="flex flex-col gap-8 mt-6">
        <div className="relative rounded-xl flex items-center">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết"
            className="border-none outline-none pr-2 pl-6 py-3 flex-grow"
          />
          <div className="absolute w-12 h-12 rounded-xl bg-[#15AA7A] flex items-center justify-center right-0 top-1/2 transform -translate-y-1/2 ">
            <Image src={lookupIcon} alt="search" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-extrabold">Danh mục</h3>
          <ul className="flex flex-col gap-4 items-start justify-center mt-6">
            {categoryList.map((category, index) => (
              <li
                key={index}
                className="flex items-center justify-between w-full text-lg font-medium hover:text-[#15AA7A] cursor-pointer"
              >
                <span>{category.title}</span>
                <span>{category.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <Image src={searchBanner1} alt="search-banner-1" />
          <Image src={searchBanner2} alt="search-banner-2" />
        </div>
      </div>
    </section>
  );
}

export default SearchBlog;
