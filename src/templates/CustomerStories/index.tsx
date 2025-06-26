"use client"

import PageHeader from "@/components/PageHeader"
import CaseStudies from "./CaseStudies"
import CtaSection from "@/components/CtaSection"
import type { BaseProps } from "@/types/base.types"

export default function CustomerStories({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={params} />
      <CaseStudies params={params} />
      <CtaSection params={params} />
    </main>
  )
}
