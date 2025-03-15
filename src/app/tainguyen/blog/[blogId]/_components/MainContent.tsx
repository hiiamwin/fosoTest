import { blogDetailData } from "@/data";
import {
  angryFace,
  authorIdea,
  calendar,
  clock,
  feelingSleep,
  greenHeart,
  like,
  starSmile,
  supriseFace,
} from "@/icon";
import Image from "next/image";
import React from "react";

function MainContent() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 flex-2">
      <div className="flex flex-col items-start justify-center gap-4">
        <span className="text-xs font-medium px-2 py-1 rounded-lg bg-[#E2F0FE]">
          {blogDetailData.tag}
        </span>

        <h1 className="text-4xl font-extrabold">{blogDetailData.title}</h1>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-[40px] border border-[#F1F5F7] flex items-center justify-center">
              <Image src={blogDetailData.author.logo} alt="author-logo" />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="text-sm font-medium text-[#667F93]">
                Tác giả
              </span>
              <span className="text-base font-bold text-[#33404A]">
                {blogDetailData.author.name}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <span className="flex items-center justify-center gap-2 text-base font-medium text-[#667F93] ">
              <Image src={calendar} alt="updated-date" />
              Cập nhật vào: {blogDetailData.updatedDate}
            </span>
            |
            <span className="flex items-center justify-center gap-2 text-base font-medium text-[#667F93]">
              <Image src={clock} alt="time-read" />
              {blogDetailData.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 w-full">
        {blogDetailData.sections.map((section, mainIndex) => (
          <div
            key={mainIndex}
            className="flex flex-col items-start justify-center gap-6 w-full"
          >
            {section.sectionImg && (
              <div className="flex flex-col items-center justify-center gap-2 w-full">
                <Image
                  src={section.sectionImg.src}
                  alt={section.sectionImg.alt}
                />
                <span>{section.sectionImg.alt}</span>
              </div>
            )}

            {section.authorIdea && (
              <div className="relative">
                <p className="italic text-xl font-medium text-center text-[#33404A]">
                  {section.authorIdea}
                </p>
                <Image
                  src={authorIdea}
                  alt="author-logo"
                  className="absolute top-0 left-0 transform -translate-x-4/5 -translate-y-1/2"
                />
              </div>
            )}

            <h2 className="text-xl text-[#15AA7A] font-extrabold">
              {mainIndex + 1}. {section.title}
            </h2>
            {section.contents.map((sectionContent, subIndex) => {
              return sectionContent.type === "paragraph" ? (
                <p key={subIndex} className="text-base font-medium">
                  {sectionContent.content}
                </p>
              ) : sectionContent.type === "list" ? (
                <ul key={subIndex} className="list-disc list-inside">
                  {sectionContent.content.map((item, index) => {
                    return (
                      <li key={index}>
                        <span
                          className={item.color ? `text-[${item.color}]` : ""}
                        >
                          {item.item}
                        </span>
                        <span> ({item.description})</span>
                      </li>
                    );
                  })}
                </ul>
              ) : sectionContent.type === "subTitle" ? (
                <div key={mainIndex + subIndex}>
                  <h3 className="text-base font-bold text-[#15AA7A]">
                    {mainIndex + 1}.{subIndex} {sectionContent.subtitle}
                  </h3>
                  <p className="text-base font-medium">
                    {sectionContent.content}
                  </p>
                </div>
              ) : (
                <div key={subIndex} className="border-l-4 border-[#15AA7A]">
                  <p className="italic text-xl font-medium pt-3 pr-4 pb-2 pl-9">
                    {sectionContent.content}
                  </p>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="rounded-3xl py-[72px] shadow flex flex-col items-center justify-center gap-6 w-full">
        <div className="flex flex-col items-center justify-center gap-1">
          <h2 className="text-xl font-extrabold">
            Bạn thấy bài viết như thế nào?
          </h2>
          <span className="text-base font-medium">4 phản hồi</span>
        </div>
        <div className="flex items-center justify-center gap-8 mx-1">
          <div className="flex flex-col items-center justify-center p-1 border border-[#10805B] rounded-sm w-20">
            <Image src={like} alt="like" width={48} height={48} />
            <span className="text-base font-bold text-[#10805B]">1</span>
            <span className="text-sm font-medium text-[#10805B]">Hữu ích</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1 border rounded-sm w-20">
            <Image src={greenHeart} alt="like" width={48} height={48} />
            <span className="text-base font-bold ">1</span>
            <span className="text-sm font-medium ">Hữu ích</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1 border rounded-sm w-20">
            <Image src={starSmile} alt="like" width={48} height={48} />
            <span className="text-base font-bold ">1</span>
            <span className="text-sm font-medium ">Hữu ích</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1 border rounded-sm w-20">
            <Image src={supriseFace} alt="like" width={48} height={48} />
            <span className="text-base font-bold ">1</span>
            <span className="text-sm font-medium ">Hữu ích</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1 border rounded-sm w-20">
            <Image src={feelingSleep} alt="like" width={48} height={48} />
            <span className="text-base font-bold ">1</span>
            <span className="text-sm font-medium ">Hữu ích</span>
          </div>
          <div className="flex flex-col items-center justify-center p-1 border rounded-sm w-20">
            <Image src={angryFace} alt="like" width={48} height={48} />
            <span className="text-base font-bold ">1</span>
            <span className="text-sm font-medium ">Hữu ích</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainContent;
