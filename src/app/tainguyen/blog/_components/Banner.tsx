import React from "react";
import Image from "next/image";
import { dairy, handWriting } from "@/icon";

function Banner() {
  return (
    <section className="w-full flex items-center justify-center">
      <div className="p-10">
        <Image src={dairy} alt="dairy" />
      </div>
      <div className="flex-1">
        <p className="gap-2 text-gray-600 text-sm font-normal text-center">
          Trang chủ {">"} Tài nguyên {">"} Blog
        </p>
        <div className="text-center mt-16 text-[64px] font-normal mb-2">
          <h1>
            Blog <span className="text-[#53B086] font-extrabold">FOSO</span> -
          </h1>
          <h2>
            Cập Nhật Tin Tức{" "}
            <strong className="text-black relative">
              Mới Nhất
              <span className="absolute left-0 top-3/5 w-full h-[20px] bg-[#85EEB3B5] rounded-[40px] -z-10"></span>
            </strong>
          </h2>
        </div>
        <p className="text-lg font-medium text-center">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p>
      </div>
      <div className="p-10">
        <Image src={handWriting} alt="hand-writing" />
      </div>
    </section>
  );
}

export default Banner;
