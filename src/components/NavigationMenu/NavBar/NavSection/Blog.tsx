"use client"

import Link from "next/link"
import type { BaseProps } from "@/types/base.types"

export default function BlogNavSection({ params: { lng, t } }: BaseProps) {
  return (
    <div className="w-full max-w-screen-2xl">
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="w-full flex flex-col lg:flex-row gap-6 p-3 px-6 lg:pr-3">
          <div className="w-full flex flex-col gap-3">
            <Link
              href={`/${lng}/blog`}
              className="w-full flex flex-row items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-purple-400 duration-150"
            >
              <span className="text-sm lg:text-base font-semibold">
                {t["blog.title"]}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
