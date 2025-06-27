"use client";

import React, { memo } from "react";
import Link from "next/link";
import type { BaseProps } from "@/types/base.types";

interface SolutionConfig {
  name: string;
  slug: string;
  name_vi: string;
  description: string;
  description_vn: string;
  image: string;
  name_en: string;
  path: string;
}

interface NavBtn2Props extends BaseProps {
  solution: SolutionConfig;
}

function handleSharePdf({ path, lang }: { path: string; lang: string }) {
  if (path.includes("pdf")) {
    const extension = path.substring(path.lastIndexOf("."));
    const basePath = path.substring(0, path.lastIndexOf("."));
    const newPath = `${basePath}-${lang}${extension}`;
    return newPath;
  }
  return path;
}

export const NavBtn2 = memo(function NavBtn2({
  params: { lng, t },
  solution,
}: NavBtn2Props) {
  const path = solution.path;

  return (
    <li>
      <Link
        key={path}
        href={
          path?.includes(".pdf")
            ? handleSharePdf({ path: path, lang: lng })
            : `/${lng}${path}`
        }
        target={path?.includes(".pdf") ? "_blank" : "_self"}
        title={lng === "vi" ? solution.description_vn : solution.description}
        className="w-full flex flex-col justify-between relative p-3 rounded-md border border-transparent hover:text-violet-600 hover:border-purple-400"
      >
        <span className="font-bold lg:text-lg mb-1">
          {lng === "vi" ? solution.name_vi : solution.name_en}
        </span>
        <span className="text-sm lg:text-base text-gray-800">
          {lng === "vi" ? solution.description_vn : solution.description}
        </span>
      </Link>
    </li>
  );
});
