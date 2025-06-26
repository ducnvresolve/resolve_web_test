import PageHeader from "@/components/PageHeader";
import { BaseRouteProps } from "@/types/base.types";
import { useTranslation } from "@/app/i18n";
import { localesPlatform, PAGE_NAME } from "./locales";
import CtaSection from "@/components/CtaSection";
import { LookerContent } from "@/templates/Products";
import { translate } from "@/utils/locales.utils";
import {
  CTA_SECTION_NAME,
  localesCtaSection,
} from "@/components/CtaSection/locales";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";

export default async function LookerPage({ params: { lng } }: BaseRouteProps) {
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
      <ContentPageHeader title="Data & Analytics Tools" subTitle="" />
      <LookerContent lng={lng} />
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
