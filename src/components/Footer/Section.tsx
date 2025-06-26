import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import {
  ABOUT_LIST,
  SOLUTION_LIST,
  PLATFORM_LIST,
  RESOURCE_LIST,
} from "@/configs/routes.conf";
import type { BaseRecord } from "@/types/base.types";

type FooterSectionProps = {
  lng: string;
  section: string;
};

export default async function FooterSection({
  lng,
  section,
}: FooterSectionProps) {
  const { t } = await useTranslation(lng, "header");
  let sections;
  switch (section) {
    case "about":
      sections = ABOUT_LIST;
      break;
    case "solutions":
      sections = SOLUTION_LIST;
      break;
    case "platform":
      sections = PLATFORM_LIST;
      break;
    case "resources":
    default:
      sections = RESOURCE_LIST;
      break;
  }

  return (
    <section className="w-fit md:w-full flex flex-col gap-2 mx-6 mt-5">
      <h2 className="font-bold tracking-wider text-xl text-purple-400 mb-3">
        {t(`${section === "solutions" ? "about." : ""}${section}.title`)}
      </h2>
      {sections.map((route: BaseRecord<string>) => {
        return (
          <div key={route.name} className="w-fit">
            <Link
              href={
                route.path?.includes(".pdf")
                  ? handleSharePdf({ path: route.path, lang: lng })
                  : `/${lng}${route.path}`
              }
              target={route.path?.includes(".pdf") ? "_blank" : "_self"}
              title={t(
                `${section === "solutions" ? "about." : ""}${section}.${
                  route.name
                }.description`
              )}
            >
              <p className="text-sm hover:text-orange-600">
                {t(
                  `${section === "solutions" ? "about." : ""}${section}.${
                    route.name
                  }.title`
                )}
              </p>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

function handleSharePdf({ path, lang }: { path: string; lang: string }) {
  if (path.includes("pdf")) {
    const extension = path.substring(path.lastIndexOf("."));

    const basePath = path.substring(0, path.lastIndexOf("."));

    const newPath = `${basePath}-${lang}${extension}`;

    return newPath;
  }

  return path;
}
