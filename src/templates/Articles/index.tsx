"use client"

import PageHeader from "@/components/PageHeader"
import type { BaseProps } from "@/types/base.types"

export default function Articles({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={params} />
      <div className="w-full max-w-screen-xl flex items-start justify-center px-6 py-[100px]">
        Coming soon...
      </div>
    </main>
  )
}
