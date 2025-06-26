import { useTranslation } from "@/app/i18n"
import PageHeader from "@/components/PageHeader"
import { translate } from "@/utils/locales.utils"
import type { BaseRouteProps } from "@/types/base.types"
import type { Metadata, ResolvingMetadata } from "next"

const PAGE_NAME = "terms-and-conditions"
const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000"

export async function generateMetadata(
  { params: { lng } }: BaseRouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { t } = await useTranslation(lng, PAGE_NAME)
  const openGraphPrevImages = (await parent).openGraph?.images || []
  const twitterPrevImages = (await parent).twitter?.images || []
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: ["resolve", "data analytics", "phân tích dữ liệu"],
    robots: "index, follow",
    openGraph: {
      title: t("meta.title"),
      description: t("meta.description"),
      url: `${APP_BASE_URL}/${PAGE_NAME}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...openGraphPrevImages],
    },
    twitter: {
      title: t("meta.title"),
      description: t("meta.description"),
      site: `${APP_BASE_URL}/${PAGE_NAME}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...twitterPrevImages],
    },
  }
}

export default async function TermsAndConditionsPage({
  params: { lng },
}: BaseRouteProps) {
  const { t } = await useTranslation(lng, PAGE_NAME)
  const translated = await useTranslation(lng, PAGE_NAME)
    .then((response: any) =>
      translate(response.t, [{ text: "page.title" }, { text: "page.subtitle" }])
    )
    .catch((err: any) => {
      console.error(err)
      return {}
    })

  const structure = [3, 3, 1, 8, 5, 4, 5, 1, 1, 1, 3, 2, 3, 4, 1, 2, 2, 1, 1]

  return (
    <main>
      <article className="w-full flex flex-col items-center">
        <PageHeader params={{ t: translated, lng }} />
        <div className="w-full flex flex-col items-center bg-white border border-transparent border-t-gray-300 py-12 pb-[100px]">
          <div className="w-full max-w-screen-xl flex flex-col gap-12 p-6 animate-slideup-long-delayed">
            <p className="text-justify lg:text-lg leading-7 lg:leading-8">
              {t("intro")}
            </p>
            {structure.map((paragraphLength: number, index: number) => {
              let paragraphs = [...Array(paragraphLength).keys()]
              return (
                <div key={index} className="flex flex-col gap-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-purple-600">
                    {t(`${index + 1}.title`)}
                  </h2>
                  {paragraphs.length <= 1 ? (
                    paragraphs.map((p: number) => (
                      <p
                        key={p}
                        className="text-justify lg:text-lg leading-7 lg:leading-8"
                      >
                        {t(`${index + 1}.content.${p + 1}`)}
                      </p>
                    ))
                  ) : (
                    <ul className="list-disc flex flex-col gap-6 ml-12">
                      {paragraphs.map((p: number) => (
                        <li
                          key={p}
                          className="text-justify lg:text-lg leading-7 lg:leading-8"
                        >
                          {t(`${index + 1}.content.${p + 1}`)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </main>
  )
}
