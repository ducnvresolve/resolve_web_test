"use client";

import type { BaseProps } from "@/types/base.types";

export default function Blog({ params: { lng, t } }: BaseProps) {
  const blogUrl =
    lng === "en"
      ? "https://resolveen.blogspot.com/"
      : "https://resolvevn.blogspot.com/";

  return (
    <main className="flex flex-col items-center bg-white">
      <div className="w-full max-w-screen-xl px-6 py-10 mt-[40px]">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Blog content */}
          <div className="w-full">
            <iframe
              src={blogUrl}
              width="100%"
              height="800px"
              style={{ border: "none" }}
              title={t["blog.title"]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
