import PageHeader from "@/components/PageHeader";
import { BaseRouteProps } from "@/types/base.types";
import { useTranslation } from "@/app/i18n";

import { localesPlatform, PAGE_NAME } from "./locales";
import {
  localesCtaSection,
  CTA_SECTION_NAME,
} from "@/components/CtaSection/locales";
import { translate } from "@/utils/locales.utils";
import { SisenseContent } from "@/templates/Products/Sisense";
import CtaSection from "@/components/CtaSection";
import { ContentPageHeader } from "@/components/ContentPageHeader/ContentPageHeader";

export default async function SisensePage({ params: { lng } }: BaseRouteProps) {
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
      {/* <PageHeader params={params} />
        <PlatformContent params={params} />
        <CtaSection params={params} />
      */}
      <ContentPageHeader
        title={
          lng === "en" ? "Data & Analytic Tools" : "Công cụ Phân tích & Dữ liệu"
        }
        subTitle={""}
        // subTitle={
        //   lng === "en"
        //     ? "Sisense Analytics Platform"
        //     : "Nền tảng Phân tích Sisense"
        // }
      />
      {/* <h1>Sisense</h1> */}
      <SisenseContent lng={lng} />
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
