import { useTranslation } from "@/app/i18n";
import { PAGE_NAME, googleWorkspaceMetadata } from "./locales";
import CtaSection from "@/components/CtaSection";
import { GoogleWorkspaceContent } from "@/templates/Products";
import { translate } from "@/utils/locales.utils";
import {
  CTA_SECTION_NAME,
  localesCtaSection,
} from "@/components/CtaSection/locales";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";
import { GoogleWorkspaceSubNav } from "@/templates/Products/GoogleWorkspace/components";
import type { Metadata, ResolvingMetadata } from "next";

const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000";

export async function generateMetadata(
  { params }: { params: any },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lng = params.lng;
  const meta =
    googleWorkspaceMetadata[lng as keyof typeof googleWorkspaceMetadata] ||
    googleWorkspaceMetadata.en;
  const openGraphPrevImages = (await parent).openGraph?.images || [];
  const twitterPrevImages = (await parent).twitter?.images || [];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${APP_BASE_URL}/products/google-workspace`,
      images: [...openGraphPrevImages],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      site: `${APP_BASE_URL}/products/google-workspace`,
      images: [...twitterPrevImages],
    },
  };
}

export default async function GoogleWorkspacePage({
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
      <ContentPageHeader
        title={
          searchParams.feature ? "Google Workspace" : "Data & Analytic Tools"
        }
        subTitle=""
      />
      <GoogleWorkspaceSubNav active={searchParams.feature} />
      <GoogleWorkspaceContent activeFeature={searchParams.feature} lng={lng} />
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
