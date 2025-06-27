"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import type { BaseProps } from "@/types/base.types";

export default function Partners({ params: { lng, t } }: BaseProps) {
  console.log(t, lng);
  const partnerLogo = [
    <Link
      href="https://sisense.com"
      target={"_blank"}
      className="w-full flex items-center justify-center p-6"
    >
      <img
        src={"/images/sisense-logo.png"}
        className="h-[60px] max-w-full object-contain select-none"
        loading="lazy"
        alt="sisense-company"
      />
    </Link>,
    <Link
      href="#"
      target={"_blank"}
      className="w-full flex items-center justify-center p-6"
    >
      <img
        src={"/assets/images/Google_2015_logo.svg.webp"}
        className="h-[60px] max-w-full object-contain select-none"
        loading="lazy"
        alt="sisense-company"
      />
    </Link>,
    <Link
      href="https://viettelcloud.vn"
      target={"_blank"}
      className="w-full flex items-center justify-center p-6"
    >
      <img
        src={"/images/viettel-cloud.svg"}
        className="h-[45px] max-w-full object-contain select-none"
        loading="lazy"
        alt="sisense-company"
      />
    </Link>,
    <Link
      href="https://cloudaz.io/"
      target={"_blank"}
      className="w-full flex items-center justify-center p-6"
    >
      <img
        src={"/images/cloudAZ.png"}
        className="h-[60px] max-w-full object-contain select-none"
        loading="lazy"
        alt="cloudaz-company"
      />
    </Link>,
  ];

  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={{ lng, t }} />
      <section className="w-full max-w-screen-xl flex flex-col items-center gap-[100px] py-[100px] px-6 animate-slideup-long-slow">
        <div className="w-full flex flex-col items-start gap-12">
          <h2 className="font-bold text-xl lg:text-3xl text-purple-700 -mb-6">
            {t["partners.title"]}
          </h2>
          {[...Array(4).keys()].map((i: number) => (
            <div
              key={i + 1}
              className="flex flex-col-reverse items-start gap-6"
            >
              <p
                className="w-full text-justify lg:text-lg leading-7 lg:leading-8"
                dangerouslySetInnerHTML={{
                  __html: t[`partners.${i + 1}`] as string,
                }}
              />
              <div className="w-full max-w-full h-[100px] flex items-center justify-center border-2 rounded-lg hover:border-purple-600 duration-150 overflow-hidden">
                {partnerLogo[i]}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-start gap-12">
          <h2 className="font-bold text-xl lg:text-3xl text-purple-700 -mb-6">
            {t["others.title"]}
          </h2>
          <p
            className="w-full text-justify lg:text-lg leading-7 lg:leading-8"
            dangerouslySetInnerHTML={{
              __html: t["others.description"] as string,
            }}
          />
          <div className="w-full flex items-center flex-col md:flex-row md:flex-wrap gap-6 md:gap-[2%] md:gap-y-6">
            {[
              {
                href: "https://dnbvietnam.com",
                src: "/images/dnbvietnam.jpg",
                alt: "dnb-vietnam",
              },
              {
                href: "https://www.vcci.com.vn",
                src: "/images/vcci.jpg",
                alt: "vcci",
              },
              {
                href: "https://www.vinasa.org.vn",
                src: "/images/vinasa.jpg",
                alt: "vinasa",
              },
              {
                href: "https://ciovn.org",
                src: "/images/partners/cioVN.png",
                alt: "cioVN",
              },
              {
                href: "https://hanoiba.org.vn/",
                src: "/images/partners/hanoiBA.png",
                alt: "hanoiBA",
              },
            ].map((item) => (
              <div
                key={item.href}
                className="w-full md:w-[32%] bg-white p-2 h-[100px] md:h-[120px] flex items-center justify-center border-2 rounded-lg hover:border-purple-600 duration-150"
              >
                <Link
                  href={item.href}
                  target="_blank"
                  className="w-full h-full flex items-center justify-center"
                >
                  <img
                    src={item.src}
                    className="max-h-full max-w-full object-contain select-none"
                    alt={item.alt}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
