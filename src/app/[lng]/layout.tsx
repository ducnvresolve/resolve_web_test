import { useTranslation } from "../i18n";
import { languages, fallbackLng } from "../i18n/settings";
// import DisableZoom from "@/utils/zoom.utils";
import { Header } from "@/components/Header";
import { localesHeader, HEADER_NAME } from "@/components/Header/locales";
import Footer from "@/components/Footer";
import { localesFooter, FOOTER_NAME } from "@/components/Footer/locales";
import {
  localesSubscribeEmail,
  SUBSCRIBE_EMAIL_NAME,
} from "@/components/Form/SubscribeEmail/locales";
import { translate } from "@/utils/locales.utils";
import type { BaseLayoutProps } from "@/types/base.types";
import dynamic from "next/dynamic";
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
  ssr: false,
});
const TableOfContents = dynamic(
  () =>
    import("@/components/TableOfContents").then((mod) => mod.TableOfContents),
  {
    ssr: false,
  }
);
export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }));
}

export default async function RootLayout({
  params: { lng = fallbackLng },
  children,
}: BaseLayoutProps) {
  const tHeader = await useTranslation(lng, HEADER_NAME)
    .then((response: any) => translate(response.t, localesHeader))
    .catch((err: any) => {
      console.error(err);
      return {};
    });

  const tFooterBase = await useTranslation(lng, FOOTER_NAME)
    .then((response: any) => translate(response.t, localesFooter))
    .catch((err: any) => {
      console.error(err);
      return {};
    });
  const tSubscribeEmail = await useTranslation(lng, SUBSCRIBE_EMAIL_NAME)
    .then((response: any) => translate(response.t, localesSubscribeEmail))
    .catch((err: any) => {
      console.error(err);
      return {};
    });
  const tFooter = { ...tFooterBase, ...tSubscribeEmail };

  return (
    <body className="bg-neutral-800 custom-scrollbar">
      {/* <DisableZoom /> */}
      <Header params={{ lng, t: tHeader }} />
      {children!}
      <Footer params={{ lng, t: tFooter }} />
      <ScrollToTop />
      {/* <TableOfContents /> */}
    </body>
  );
}
