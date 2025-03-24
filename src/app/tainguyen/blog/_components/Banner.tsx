import React from "react";
import Image from "next/image";
import { dairy, handWriting } from "@/icon";
import Link from "next/link";
import TextReveal from "./TextReveal";
import SlideBottomToTop from "./SlideBottomToTop";
import SlideLeftToRight from "./SlideLeftToRight";
import SlideRightToLeft from "./SlideRightToLeft";

function Banner() {
  return (
    <section className="w-full flex items-center justify-center pt-[48px]">
      <SlideLeftToRight duration={1} ease="easeOut" className="p-10">
        <Image src={dairy} alt="dairy" />
      </SlideLeftToRight>
      {/* <div className="p-10">
      </div> */}
      <SlideBottomToTop duration={1} ease="easeOut" className="flex-1">
        <div>
          <div className="gap-2 text-gray-600 text-sm font-normal text-center">
            <Link href="/" className="hover:text-[#53B086]">
              Trang chủ
            </Link>{" "}
            {">"}{" "}
            <Link href="/tainguyen" className="hover:text-[#53B086]">
              Tài nguyên
            </Link>{" "}
            {">"}{" "}
            <Link
              href="/tainguyen/blog"
              className="hover:text-[#53B086] last:text-black last:font-bold last:pointer-events-none"
            >
              Blog
            </Link>
            {/* Trang chủ {">"} Tài nguyên {">"} Blog */}
          </div>
          <div className="text-center mt-16 text-[64px] font-normal mb-2">
            <h1>
              Blog <span className="text-[#53B086] font-extrabold">FOSO</span> -
            </h1>

            <h2>
              Cập Nhật Tin Tức{" "}
              <strong className="text-black relative font-extrabold">
                Mới Nhất
                <span className="absolute left-0 top-3/5 w-full h-[28px] bg-[#a3eed6] rounded-[40px] -z-10"></span>
              </strong>
            </h2>
          </div>
          {/* <p className="text-lg font-medium text-center">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </p> */}

          <TextReveal
            content="Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!"
            className="text-lg font-medium text-center"
          />
        </div>
      </SlideBottomToTop>

      {/* <div className="p-10">
        <Image src={handWriting} alt="hand-writing" />
      </div> */}

      <SlideRightToLeft duration={1} ease="easeOut" className="p-10">
        <Image src={handWriting} alt="hand-writing" />
      </SlideRightToLeft>
    </section>
  );
}

export default Banner;
