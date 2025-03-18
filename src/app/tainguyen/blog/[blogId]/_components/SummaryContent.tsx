import { arrowUp, searchBanner1, searchBanner2 } from "@/icon";
import Image from "next/image";
import React from "react";
import { blogDetailData } from "@/data";
import Link from "next/link";

function SummaryContent() {
  return (
    <section className="flex-1 flex flex-col items-start justify-center gap-6">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-extrabold">Nội dung bài viết</h2>
        <Image src={arrowUp} alt="arrow-up" width={32} height={32} />
      </div>

      <ul>
        {blogDetailData.sections.map((section, mainIndex) => (
          <li
            key={mainIndex}
            className={
              mainIndex === 0
                ? "text-lg font-bold text-[#15AA7A] leading-10"
                : "text-lg font-medium text-[#33404A] leading-10"
            }
          >
            <Link href={`#${section.title}`} className="inline-block">
              {mainIndex + 1}. {section.title}
            </Link>
            {section.contents.map((content, subIndex) => {
              return (
                content.type === "subTitle" && (
                  <Link
                    href={`#${content.subtitle}`}
                    key={subIndex}
                    className="ml-6 inline-block"
                  >
                    {mainIndex + 1}.{subIndex} {content.subtitle}
                  </Link>
                )
              );
            })}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-8 w-full">
        <Image src={searchBanner1} alt="search-banner-1" className="w-4/5" />
        <Image src={searchBanner2} alt="search-banner-2" className="w-4/5" />
      </div>
    </section>
  );
}

export default SummaryContent;
