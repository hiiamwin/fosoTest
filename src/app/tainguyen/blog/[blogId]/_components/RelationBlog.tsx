import React from "react";
import { BlogItem } from "../../_components";

function RelationBlog() {
  return (
    <section className="flex flex-col items-start justify-center gap-6 pb-24">
      <h3 className="text-4xl font-extrabold">Bài viết liên quan</h3>
      <div className="flex items-center justify-center gap-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <BlogItem key={index} />
        ))}
      </div>
    </section>
  );
}

export default RelationBlog;
