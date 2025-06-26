import { useTranslation } from "@/app/i18n"
import ShowcaseDemo from "@/templates/Demo/Showcase"
import { localesDemoShowcase, PAGE_NAME } from "./locales"
import {
  localesCtaSection,
  CTA_SECTION_NAME,
} from "@/components/CtaSection/locales"
import { translate } from "@/utils/locales.utils"
import type { Metadata, ResolvingMetadata } from "next"
import type { BaseRouteProps } from "@/types/base.types"

const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000"

export async function generateMetadata(
  { params: { lng } }: BaseRouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { t } = await useTranslation(lng, `${PAGE_NAME}-metadata`)
  const openGraphPrevImages = (await parent).openGraph?.images || []
  const twitterPrevImages = (await parent).twitter?.images || []

  return {
    title: t("title"),
    description: t("description"),
    keywords: ["resolve", "data analytics", "phân tích dữ liệu"],
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${APP_BASE_URL}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...openGraphPrevImages],
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      site: `${APP_BASE_URL}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...twitterPrevImages],
    },
  }
}

export default async function ShowcasePage({
  params: { lng },
}: BaseRouteProps) {
  const tDemoShowcase = await useTranslation(lng, PAGE_NAME)
    .then((response: any) => translate(response.t, localesDemoShowcase))
    .catch((err: any) => {
      console.error(err)
      return {}
    })
  const tCtaSection = await useTranslation(lng, CTA_SECTION_NAME)
    .then((response: any) => translate(response.t, localesCtaSection))
    .catch((err: any) => {
      console.error(err)
      return {}
    })
  const t = { ...tDemoShowcase, ...tCtaSection }

  return <ShowcaseDemo params={{ lng, t }} />
}
