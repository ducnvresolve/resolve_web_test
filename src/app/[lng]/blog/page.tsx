import Blog from "@/templates/Blog"
import { useTranslation } from "@/app/i18n"
import type { BaseRecord } from "@/types/base.types"
import { Suspense } from "react"

export default async function BlogPage({ params }: { params: { lng: string } }) {
  const { t } = await useTranslation(params.lng, "header")
  const translations: BaseRecord<string> = {
    "blog.title": t("blog.title"),
    "blog.read-more": t("blog.read-more"),
    "resources.read-article": t("resources.read-article")
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blog params={{ lng: params.lng, t: translations }} />
    </Suspense>
  )
} 