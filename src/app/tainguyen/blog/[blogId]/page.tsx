import React from "react";
import {
  MainContent,
  RelationBlog,
  ShareSocial,
  SummaryContent,
} from "./_components";

function BlogDetail() {
  return (
    <section className="px-60 flex flex-col items-start justify-center gap-12 relative">
      <h3 className="text-sm font-normal">
        Trang chủ {">"} Tài nguyên {">"} Blog {">"} Quản lý sản xuất
      </h3>
      <div className="flex items-start justify-center gap-6">
        <MainContent />
        <SummaryContent />
      </div>
      <RelationBlog />

      <ShareSocial />
    </section>
  );
}

export default BlogDetail;
