import { useTranslation } from "@/app/i18n";
import { googleCloudMetadata, PAGE_NAME } from "./locales";
import CtaSection from "@/components/CtaSection";
import { GoogleCloudContent } from "@/templates/Products";
import { translate } from "@/utils/locales.utils";
import {
  CTA_SECTION_NAME,
  localesCtaSection,
} from "@/components/CtaSection/locales";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";
import { GoogleCloudSubNav } from "@/templates/Products/GoogleCloud/components";

import type { Metadata, ResolvingMetadata } from "next";

const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

export async function generateMetadata(
  { params }: { params: any },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lng = params.lng;
  const meta =
    googleCloudMetadata[lng as keyof typeof googleCloudMetadata] ||
    googleCloudMetadata.en;
  const openGraphPrevImages = (await parent).openGraph?.images || [];
  const twitterPrevImages = (await parent).twitter?.images || [];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${APP_BASE_URL}/products/google-cloud`,
      images: [...openGraphPrevImages],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      site: `${APP_BASE_URL}/products/google-cloud`,
      images: [...twitterPrevImages],
    },
  };
}

export default async function GoogleCloudPage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const lng = params.lng;

  const tCtaSection = await useTranslation(lng, CTA_SECTION_NAME)
    .then((response: any) => translate(response.t, localesCtaSection))
    .catch((err: any) => {
      console.error(err);
      return {};
    });
  const t = { ...tCtaSection };
  return (
    <main className="flex flex-col items-center bg-white">
      <ContentPageHeader title="Google Cloud" subTitle="" />
      <GoogleCloudSubNav active={searchParams.feature} />
      <GoogleCloudContent activeFeature={searchParams.feature} lng={lng} />
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
