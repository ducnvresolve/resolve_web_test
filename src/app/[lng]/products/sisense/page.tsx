import PageHeader from "@/components/PageHeader";
import { BaseRouteProps } from "@/types/base.types";
import { useTranslation } from "@/app/i18n";
import { sisenseMetadata } from "./locales";
import type { Metadata, ResolvingMetadata } from "next";

import {
  localesCtaSection,
  CTA_SECTION_NAME,
} from "@/components/CtaSection/locales";
import { translate } from "@/utils/locales.utils";
import { SisenseContent } from "@/templates/Products/Sisense";
import CtaSection from "@/components/CtaSection";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";

const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

export async function generateMetadata(
  { params }: { params: any },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lng = params.lng;
  const meta =
    sisenseMetadata[lng as keyof typeof sisenseMetadata] || sisenseMetadata.en;
  const openGraphPrevImages = (await parent).openGraph?.images || [];
  const twitterPrevImages = (await parent).twitter?.images || [];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${APP_BASE_URL}/products/sisense`,
      images: [...openGraphPrevImages],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      site: `${APP_BASE_URL}/products/sisense`,
      images: [...twitterPrevImages],
    },
  };
}

export default async function SisensePage({ params: { lng } }: BaseRouteProps) {
  const tCtaSection = await useTranslation(lng, CTA_SECTION_NAME)
    .then((response: any) => translate(response.t, localesCtaSection))
    .catch((err: any) => {
      console.error(err);
      return {};
    });
  const t = { ...tCtaSection };
  return (
    <main className="flex flex-col items-center bg-white">
      <ContentPageHeader
        title={
          lng === "en" ? "Data & Analytic Tools" : "Công cụ Phân tích & Dữ liệu"
        }
        subTitle={""}
      />

      <SisenseContent lng={lng} />
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
