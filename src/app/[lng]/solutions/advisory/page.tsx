import { useTranslation } from "@/app/i18n";
import { AdvisorySolution } from "@/templates/Solutions/Advisory";
import {
  localesCtaSection,
  CTA_SECTION_NAME,
} from "@/components/CtaSection/locales";
import { translate } from "@/utils/locales.utils";
import type { Metadata, ResolvingMetadata } from "next";
import type { BaseRouteProps } from "@/types/base.types";
import CtaSection from "@/components/CtaSection";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";
import { localesSolutions, PAGE_NAME } from "./locales";
const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

export async function generateMetadata(
  { params: { lng } }: BaseRouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { t } = await useTranslation(lng, `${PAGE_NAME}-metadata`);
  const openGraphPrevImages = (await parent).openGraph?.images || [];
  const twitterPrevImages = (await parent).twitter?.images || [];

  return {
    title: t("title"),
    description: t("description"),
    keywords: ["resolve", "data analytics", "phân tích dữ liệu"],
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${APP_BASE_URL}/${PAGE_NAME}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...openGraphPrevImages],
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      site: `${APP_BASE_URL}/${PAGE_NAME}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...twitterPrevImages],
    },
  };
}

export default async function SolutionsPage({
  params: { lng },
}: BaseRouteProps) {
  const tSolutions = await useTranslation(lng, PAGE_NAME)
    .then((response: any) => translate(response.t, localesSolutions))
    .catch((err: any) => {
      console.error(err);
      return {};
    });
  const tCtaSection = await useTranslation(lng, CTA_SECTION_NAME)
    .then((response: any) => translate(response.t, localesCtaSection))
    .catch((err: any) => {
      console.error(err);
      return {};
    });
  const t = { ...tSolutions, ...tCtaSection };

  return (
    <main className="flex flex-col items-center bg-white">
      <ContentPageHeader
        title={lng === "vi" ? "Tư vấn" : "Advisory"}
        subTitle=""
      />
      <AdvisorySolution lng={lng} />
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
