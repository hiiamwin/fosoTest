"use client";
import React from "react";
import Image from "next/image";
import BlogItem from "./BlogItem";
import { mainBlog, decoBlog1, decoBlog2 } from "@/icon";
import Link from "next/link";
import UpDownInfinity from "./UpDownInfinity";
import { motion } from "framer-motion";

function BlogList() {
  return (
    <section className="max-w-5xl">
      <h2 className="text-4xl font-extrabold">Tất cả bài viết</h2>
      <div className="mt-6 flex items-center justify-center gap-12 flex-col">
        <div
          className="w-full rounded-[40px] flex items-center justify-center px-16 gap-4"
          style={{
            background:
              "linear-gradient(to right, #013DA0, #0142A9, #0148B3, #024EBC, #0254C5, #025ACE, #0261D7, #0267E1, #036EEA, #0375F3)",
          }}
        >
          <div className="flex-1">
            <p className="font-bold text-4xl text-white">
              Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
            </p>
            <button className="py-2 px-6 border-2 border-white rounded-[40px] text-white mt-8 cursor-pointer hover:bg-white hover:text-black">
              Tham gia ngay
            </button>
          </div>
          <div className="relative flex-1">
            <Image
              src={mainBlog}
              alt="mainBlog"
              className="w-full relative z-20"
            />

            <Image
              src={decoBlog1}
              alt="decoBlog1"
              className="absolute top-4 left-2/5 w-3/5"
            />

            <UpDownInfinity
              duration={4}
              ease="easeInOut"
              className="absolute top-1/5 left-1/5 w-4/5 z-30"
            >
              <Image src={decoBlog2} alt="decoBlog2" />
            </UpDownInfinity>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <Link href={`/tainguyen/blog/${index + 1}`} key={index}>
              <BlogItem key={index} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;
