"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { FilePieChart, BarChart3, SquareDashedBottomCode } from "lucide-react";
import { SOLUTION_LIST } from "@/configs/routes.conf";
import { useMediaQuery, VIEWPOINT } from "@/hooks/useMediaQuery";
import { Button } from "@/components/Button";
import type { BaseProps } from "@/types/base.types";

export default function AboutUs({ params: { lng, t } }: BaseProps) {
  const isDesktop = useMediaQuery(VIEWPOINT.MD);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const icons = [
    <FilePieChart
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <BarChart3
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <SquareDashedBottomCode
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
  ];

  return (
    <section className="w-full bg-white flex flex-col items-center">
      <div
        ref={ref}
        className={`
          w-full max-w-screen-2xl flex flex-col items-center gap-6 md:gap-12 px-6 py-12
          ${inView ? "animate-slideup-long" : "opacity-0"}
        `}
      >
        <div className="w-full max-w-screen-lg flex flex-col items-center gap-6 md:gap-12">
          <img
            src={"/images/logo.svg"}
            className={"w-[100px] h-[100px] select-none"}
            loading={"lazy"}
            alt={"resolve-logo"}
          />
          <div className="w-full flex flex-col items-center gap-6">
            <h2 className="font-bold text-xl md:text-[32px] text-purple-700 text-center">
              {t["about.title"]}
            </h2>
            <p className="text-center md:text-lg leading-7 md:leading-8">
              {t["about.description"]}
            </p>
            <Button variant={"outline"} size={"lg"} asChild>
              <Link href={`${lng}/about`} className="font-semibold w-fit">
                {t["base.learn-more"]}
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-6 md:gap-12 mt-3">
          <p className="w-full font-semibold text-center text-lg lg:text-xl select-none">
            {t["about.authorized-partners"]}
          </p>
          <div className="relative min-h-[90px] overflow-hidden">
            {/* <div className="flex flex-row items-center gap-6 animate-partners-infinite-carousel">
              <Link
                href="https://sisense.com"
                target={"_blank"}
                className="flex-shrink-0 relative select-none"
              >
                <img
                  src={"/images/sisense-logo.png"}
                  className="hover:scale-105 duration-100"
                  style={{ height: "60px", width: "auto" }}
                  alt="sisense-company"
                />
              </Link>
              <Link
                href="https://viettelcloud.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/viettel-cloud.svg"
                  style={{ height: "45px", width: "auto" }}
                  alt="viettel-cloud"
                />
              </Link>
              <Link
                href="https://dnbvietnam.com"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/dnbvietnam.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="dnb-vietnam"
                />
              </Link>
              <Link
                href="https://www.vcci.com.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vcci.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vcci"
                />
              </Link>
              <Link
                href="https://www.vinasa.org.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vinasa.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vinasa"
                />
              </Link>
              <Link
                href="https://sisense.com"
                target={"_blank"}
                className="flex-shrink-0 relative select-none"
              >
                <img
                  src={"/images/sisense-logo.png"}
                  className="hover:scale-105 duration-100"
                  style={{ height: "60px", width: "auto" }}
                  alt="sisense-company"
                />
              </Link>
              <Link
                href="https://viettelcloud.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/viettel-cloud.svg"
                  style={{ height: "45px", width: "auto" }}
                  alt="viettel-cloud"
                />
              </Link>
              <Link
                href="https://dnbvietnam.com"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/dnbvietnam.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="dnb-vietnam"
                />
              </Link>
              <Link
                href="https://www.vcci.com.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vcci.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vcci"
                />
              </Link>
              <Link
                href="https://www.vinasa.org.vn"
                className="flex-shrink-0 hover:scale-105 duration-100 select-none"
                target={"_blank"}
              >
                <img
                  src="/images/vinasa.jpg"
                  style={{ height: "60px", width: "auto" }}
                  alt="vinasa"
                />
              </Link>
            </div> */}
            <div className="flex flex-row items-center gap-12 animate-customer-infinite-carousel">
              <img
                src={"/images/customer-bank-vpbank_logo.svg"}
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="techcombank"
              />
              <img
                src="/images/customer-bank-techcombank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "45px", width: "auto" }}
                alt="vpbank"
              />
              <img
                src="/images/customer-bank-sacombank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="sacombank"
              />
              <img
                src="/images/customer-bank-commerzbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="commerzbank"
              />
              <img
                src="/images/customer-bank-standardcharteredbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="standard-chartered-bank"
              />
              <img
                src="/images/customer-bank-royalbankofscotland_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="royal-bank-of-scotland"
              />
              <img
                src={"/images/customer-bank-techcombank_logo.svg"}
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="techcombank"
              />
              <img
                src="/images/customer-bank-vpbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "45px", width: "auto" }}
                alt="vpbank"
              />
              <img
                src="/images/customer-bank-sacombank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="sacombank"
              />
              <img
                src="/images/customer-bank-commerzbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="commerzbank"
              />
              <img
                src="/images/customer-bank-standardcharteredbank_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="standard-chartered-bank"
              />
              <img
                src="/images/customer-bank-royalbankofscotland_logo.svg"
                className="flex-shrink-0 relative select-none hover:scale-105 duration-100"
                style={{ height: "60px", width: "auto" }}
                alt="royal-bank-of-scotland"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start md:items-center gap-12 mt-12">
          <h2 className="font-bold text-xl md:text-3xl text-purple-700">
            {t["solutions.title"]}
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12">
            {[...Array(3).keys()].map((i: number) => {
              const name = (SOLUTION_LIST[i].path as string)
                .replace("/solutions#", "")
                .trim();
              return (
                <div key={i} className="w-full flex flex-col gap-3">
                  {icons[i]}
                  <Button variant={"link"} className="w-fit p-0" asChild>
                    <p className="font-semibold md:text-lg hover:text-purple-600 after:bg-purple-600">
                      <Link href={`/${lng}/solutions#${name}`}>
                        {t[`solutions.${i + 1}.title`]}
                      </Link>
                    </p>
                  </Button>

                  <p
                    className="text-justify text-sm md:text-base"
                    style={{ lineHeight: isDesktop ? "32px" : "24px" }}
                  >
                    {t[`solutions.${i + 1}.description`]}
                  </p>
                </div>
              );
            })}
          </div>
          <Button variant={"outline"} size={"lg"} asChild>
            <Link href={`${lng}/solutions`} className="font-semibold w-fit">
              {t["solutions.see-all-solutions"]}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
