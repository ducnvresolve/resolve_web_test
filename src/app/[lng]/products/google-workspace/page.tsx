import { useTranslation } from "@/app/i18n";
import { localesPlatform, PAGE_NAME } from "./locales";
import CtaSection from "@/components/CtaSection";
import { GoogleWorkspaceContent } from "@/templates/Products";
import { translate } from "@/utils/locales.utils";
import {
  CTA_SECTION_NAME,
  localesCtaSection,
} from "@/components/CtaSection/locales";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";
import { GoogleWorkspaceSubNav } from "@/templates/Products/GoogleWorkspace/components";

export default async function GoogleWorkspacePage({
  params,
  searchParams,
}: {
  params: any;
  searchParams: any;
}) {
  const lng = params.lng;
  const tPlatform = await useTranslation(lng, PAGE_NAME)
    .then((response: any) => translate(response.t, localesPlatform))
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
  const t = { ...tPlatform, ...tCtaSection };
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
