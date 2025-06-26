"use client";

import React from "react";
import Link from "next/link";
import type { NavbtnProps } from "@/types/route.types";

export default function NavBtn({
  params: { lng, t },
  name,
  path,
}: NavbtnProps) {
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
        title={t[`${name}.description`]}
        className="w-full flex flex-col justify-between relative p-3 rounded-md border border-transparent hover:text-violet-600 hover:border-purple-400"
      >
        <span className="font-bold lg:text-lg mb-1">{t[`${name}.title`]}</span>
        <span className="text-sm lg:text-base text-gray-800">
          {t[`${name}.description`]}
        </span>
      </Link>
    </li>
  );
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
