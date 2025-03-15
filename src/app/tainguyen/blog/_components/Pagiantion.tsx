import React from "react";
import Image from "next/image";
import { arrowLeft, arrowRight } from "@/icon";
import Link from "next/link";

const totalPage = 10;
function Pagination({ page }: { page: number }) {
  const pageList = () => {
    const items: string[] = [];
    const maxVisiblePages = 7;
    if (totalPage <= maxVisiblePages) {
      for (let i = 1; i <= totalPage; i++) {
        items.push(`${i}`);
      }
    } else {
      items.push("1");

      if (page > 3) {
        items.push("...");
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPage - 1, page + 1);

      for (let i = start; i <= end; i++) {
        items.push(`${i}`);
      }

      if (page < totalPage - 2) {
        items.push("...");
      }

      items.push(`${totalPage}`);
    }
    return items;
  };

  return (
    <section className="flex items-center justify-between w-full py-5">
      {page > 1 ? (
        <Link
          scroll={false}
          href={`/tainguyen/blog?page=${page - 1}`}
          className="flex items-center justify-start gap-2 font-semibold"
        >
          <Image src={arrowLeft} alt="arrow-right" width={24} height={24} />{" "}
          Trang trước
        </Link>
      ) : (
        <span
          className="flex items-center justify-start gap-2 font-semibold"
          aria-disabled="true"
        >
          <Image src={arrowLeft} alt="arrow-right" width={24} height={24} />{" "}
          Trang trước
        </span>
      )}

      <div className="flex items-center justify-center gap-[2px]">
        {pageList().map((item, index) =>
          item === "..." ? (
            <span
              key={index}
              className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10"
            >
              {item}
            </span>
          ) : (
            <Link
              scroll={false}
              href={`/tainguyen/blog?page=${item}`}
              key={index}
              className={`text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10 ${
                item === `${page}` ? "bg-[#D1F7EA]" : ""
              } rounded-lg`}
            >
              {item}
            </Link>
          )
        )}
      </div>

      {page < totalPage ? (
        <Link
          href={`/tainguyen/blog?page=${page + 1}`}
          scroll={false}
          className="flex items-center justify-start gap-2 font-semibold"
        >
          Trang kế tiếp
          <Image src={arrowRight} alt="arrow-right" width={24} height={24} />
        </Link>
      ) : (
        <span className="flex items-center justify-start gap-2 font-semibold">
          Trang kế tiếp
          <Image src={arrowRight} alt="arrow-right" width={24} height={24} />
        </span>
      )}
    </section>
  );
}

export default Pagination;
