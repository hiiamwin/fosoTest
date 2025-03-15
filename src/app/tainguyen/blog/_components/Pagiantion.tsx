import React from "react";
import Image from "next/image";
import { arrowLeft, arrowRight } from "@/icon";

function Pagination() {
  return (
    <section className="flex items-center justify-between w-full py-5">
      <span className="flex items-center justify-start gap-2 font-semibold">
        <Image src={arrowLeft} alt="arrow-right" width={24} height={24} /> Trang
        trước
      </span>
      <div className="flex items-center justify-center gap-[2px]">
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10 bg-[#D1F7EA] rounded-lg">
          1
        </span>
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10">
          2
        </span>
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10">
          3
        </span>
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10">
          ...
        </span>
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10">
          8
        </span>
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10">
          9
        </span>
        <span className="text-base font-semibold flex items-center justify-center cursor-pointer w-10 h-10">
          10
        </span>
      </div>
      <span className="flex items-center justify-start gap-2 font-semibold">
        Trang kế tiếp
        <Image src={arrowRight} alt="arrow-right" width={24} height={24} />
      </span>
    </section>
  );
}

export default Pagination;
