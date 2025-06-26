"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PLATFORM_LIST } from "@/configs/routes.conf";
import { Button } from "@/components/Button";
import type { BaseProps, BaseRecord } from "@/types/base.types";

export default function PlatformContent({ params: { lng, t } }: BaseProps) {
  const router = useRouter();
  return (
    <div className="w-full bg-white flex flex-col items-center">
      <section className="w-full max-w-screen-xl flex flex-col items-center gap-[100px] py-[100px] px-6">
        <div className="w-full flex flex-col lg:flex-row lg:min-h-[320px] items-start justify-between gap-[120px] lg:gap-6 mt-[60px] animate-slideup-long-delayed">
          {PLATFORM_LIST.map((feature: BaseRecord<string>) => {
            const name = feature.path?.replace("/platform/", "").trim();
            return (
              <Link
                key={feature.name}
                href={`/${lng}${feature.path as string}`}
                className="w-full"
              >
                <div className="w-full flex flex-col items-center gap-6 p-3 rounded-lg border-2 border-gray-300 bg-white text-gray-500 hover:border-purple-600 hover:text-purple-700 duration-200 cursor-pointer overflow-hidden lg:h-[175px] lg:hover:h-fit">
                  <div className="flex justify-center items-center">
                    <img
                      src={`/images/platform-${name}.svg`}
                      className="h-[200px] w-auto absolute bg-white select-none"
                      alt={`platform-${name}`}
                    />
                  </div>
                  <div className="flex flex-col items-center lg:items-start gap-3">
                    <p className="w-full font-semibold text-center mt-[100px]">
                      {t[`features.${feature.name}.title`]}
                    </p>
                    <p className="text-justify">
                      {t[`features.${feature.name}.description`]}
                    </p>
                    <Button
                      variant={"link"}
                      className="w-fit p-0 text-purple-700 after:bg-purple-700 text-sm -mt-2 text-center"
                    >
                      &#10551;&nbsp;<i>{t["learn-more"]}</i>
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="w-full max-w-screen-lg flex flex-col items-center gap-6 animate-slideup-long-very-delayed">
          <h2 className="font-semibold text-2xl md:text-[32px] md:leading-10 text-purple-700">
            {t["video.title"]}
          </h2>
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/YmGYGMZAhE4?si=ghNNGz3ZveXlwnMZ"
            title={t["video.title"]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video rounded-md select-none"
          />
          <Button variant={"outline"} size={"lg"} asChild>
            <Link href={`/${lng}/demo/video`} className="font-semibold w-fit">
              {t["video.button"]}
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
