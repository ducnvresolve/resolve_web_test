"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PLATFORM_LIST } from "@/configs/routes.conf";
import { Button } from "@/components/Button";
import type { BaseProps } from "@/types/base.types";

type PlatformFeatureProps = BaseProps & {
  featureName: string;
};

export default function PlatformFeature({
  params: { lng, t },
  featureName,
}: PlatformFeatureProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    const tabLimit =
      featureName === PLATFORM_LIST[2].path?.replace("/platform/", "").trim()
        ? 2
        : 3;
    const interval = setInterval(
      () => setActiveTab((activeTab + 1) % tabLimit),
      5000
    );
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <main className="flex flex-col items-center">
      <article className="w-full flex flex-col items-center bg-white">
        <div className="w-full flex flex-col items-center relative overflow-hidden min-h-[212px] md:min-h-[262px] pt-[86px]">
          <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-12 p-6 pb-0">
            <div className="w-full flex flex-col gap-3 animate-slideup-long">
              <div className="font-bold flex flex-row items-center gap-1">
                <Button variant={"link"} className="w-fit p-0" asChild>
                  <Link
                    href={`/${lng}/platform`}
                    className="text-purple-600 after:bg-purple-600"
                  >
                    {t["platform"]}
                  </Link>
                </Button>
                <ChevronRight
                  width={28}
                  height={28}
                  className="text-purple-600 select-none"
                />
                <Button variant={"link"} className="w-fit p-0" asChild>
                  <Link
                    href={`/${lng}/platform/${featureName}`}
                    className="text-purple-600 after:bg-purple-600"
                  >
                    {t["title"]}
                  </Link>
                </Button>
              </div>
              <h1 className="text-3xl lg:text-[36px] leading-[48px] lg:leading-[56px] max-w-[700px]">
                {t["subtitle"]}
              </h1>
            </div>
            <div className="h-[360px] flex md:flex-shrink-0 justify-center items-center animate-slideup-long-delayed">
              <img
                src={`/images/platform-${featureName}.svg`}
                className={`
                  h-[340px] w-auto mt-[20px] select-none
                  ${
                    featureName ===
                    PLATFORM_LIST[2].path?.replace("/platform/", "").trim()
                      ? "-mb-[1px]"
                      : ""
                  }
                `}
                alt={featureName}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center bg-gray-100 border border-transparent border-t-gray-300 pb-[100px] -mt-[1px]">
          <div className="w-full max-w-screen-xl flex flex-col items-center gap-6 py-6 animate-slideup-long-very-delayed">
            <div className="w-full max-w-screen-lg p-6 text-justify text-lg lg:text-xl leading-8 lg:leading-9">
              {t["description"]}
            </div>
            <div className="w-full max-w-screen-lg flex flex-col-reverse md:flex-row items-start gap-12 px-6">
              <div className="w-full md:w-[220px] flex flex-col items-center gap-6 z-[5]">
                {[
                  ...Array(
                    featureName ===
                      PLATFORM_LIST[2].path?.replace("/platform/", "").trim()
                      ? 2
                      : 3
                  ).keys(),
                ].map((i: number) => (
                  <div
                    key={i + 1}
                    className="w-full md:h-[188px] flex flex-col lg:flex-row justify-evenly gap-6 p-6 md:cursor-pointer md:hover:text-purple-700 duration-100"
                    onClick={() => setActiveTab(i)}
                  >
                    <div className="w-full flex flex-col items-start gap-1">
                      <img
                        src={`/images/platform-${featureName}-${i + 1}.svg`}
                        className="h-[70px] w-auto select-none -ml-2 mb-2"
                        alt={`${featureName}-${i + 1}`}
                      />
                      <p className="font-semibold md:text-sm leading-tight">
                        {t[`li.${i + 1}.title`]}
                      </p>
                    </div>
                    <div className="w-full md:hidden text-justify lg:text-lg leading-7 lg:leading-8">
                      {t[`li.${i + 1}.description`]}
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full min-h-[604px] relative hidden md:flex bg-white flex-col items-center gap-6 p-6 rounded-2xl shadow-lg">
                <div
                  className={`
                    absolute w-[210px] h-[180px] left-[-210px] bg-white rounded-l-3xl shadow-lg duration-200
                    ${
                      activeTab === 1
                        ? "translate-y-[188px]"
                        : activeTab === 2
                          ? "translate-y-[400px]"
                          : "translate-y-[-24px]"
                    }
                  `}
                >
                  <div className="absolute bg-white -right-2 w-4 h-full select-none">
                    &nbsp;
                  </div>
                </div>
                <div className="w-full h-[400px] flex justify-center items-center overflow-hidden animate-skeleton select-none shadow-lg">
                  <img
                    src={`/images/${featureName}-screenshot-${
                      activeTab + 1
                    }.gif`}
                    loading={"lazy"}
                    className={"h-full max-h-[400px] w-auto object-cover"}
                    alt={`${featureName}-screenshot-${activeTab + 1}`}
                  />
                </div>
                <p className="w-full text-justify lg:text-lg leading-7 lg:leading-8">
                  {t[`li.${activeTab + 1}.description`]}
                </p>
              </div>
            </div>
          </div>
        </div>
        {featureName !==
          PLATFORM_LIST[0].path?.replace("/platform/", "").trim() && (
          <div className="w-full bg-gray-100 flex flex-col items-center pb-[100px]">
            <div className="w-full max-w-screen-lg px-6 flex flex-col items-center gap-12 animate-slideup-long-very-delayed">
              <h2 className="font-bold text-xl md:text-3xl text-center">
                Video
              </h2>
              <iframe
                width="100%"
                src={
                  featureName ===
                  PLATFORM_LIST[1].path?.replace("/platform/", "").trim()
                    ? "https://www.youtube.com/embed/ne-9joFqhzs?si=doYqXc4UyjtcdiPf"
                    : "https://www.youtube.com/embed/vMM2IotYYAk?si=ONfeYV-E1avn0LvQ"
                }
                title="Video Demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video rounded-md select-none"
              />
              <Button variant={"outline"} size={"lg"} asChild>
                <Link
                  href={`/${lng}/demo/video`}
                  className="font-semibold w-fit"
                >
                  {t["see-more-videos"]}
                </Link>
              </Button>
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
