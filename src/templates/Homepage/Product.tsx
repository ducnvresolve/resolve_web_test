"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { PLATFORM_LIST_2 as PLATFORM_LIST } from "@/configs/routes.conf";
import { Button } from "@/components/Button";
import type { BaseProps } from "@/types/base.types";

export default function Product({ params: { t, lng } }: BaseProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      id="product"
      className="w-full bg-white flex flex-col items-center py-[100px] animate-slideup-very-delayed"
    >
      <div
        ref={ref}
        className={`
          flex flex-col items-center gap-12 px-6
          ${inView ? "animate-slideup-long" : "opacity-0"}
        `}
      >
        <h2 className="font-bold text-xl md:text-3xl text-purple-700">
          {t["platform.title"]}
        </h2>
        <div className="w-full max-w-screen-xl flex flex-col gap-[100px]">
          {[...Array(3).keys()].map((i: number) => {
            const name = (PLATFORM_LIST[i].path as string)
              .replace("/platform/", "")
              .trim();
            return (
              <div
                key={i}
                className={`
                    w-full flex flex-col-reverse items-center justify-between gap-[72px] p-6 
                    ${
                      i === 1
                        ? "2xl:ml-[60px] md:flex-row-reverse"
                        : "2xl:ml-[-60px] md:flex-row"
                    }
                  `}
              >
                <div className="w-full flex flex-col gap-3 relative">
                  <span className="absolute top-[-70px] lg:top-[-120px] text-[120px] lg:text-[200px] text-purple-200 font-mono select-none">
                    {i + 1}
                  </span>
                  <h3 className="w-fit font-bold text-xl md:text-[32px] md:leading-10 mb-3 z-[2] hover:text-purple-600 after:bg-purple-600 after:h-[2px] after:bottom-[-4px] text-purple-700">
                    {t[`platform.${i + 1}.title`]}
                  </h3>
                  <p className="text-justify md:text-lg leading-7 md:leading-8 mb-3 z-[2]">
                    {t[`platform.${i + 1}.description`]}
                  </p>
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:mt-3">
                    <div className="w-full max-w-[220px] md:max-w-[120px] flex flex-row items-center md:flex-col md:items-start gap-3">
                      <img
                        src={`/images/platform-${name}-1.svg`}
                        className="h-[50px] md:h-[70px] w-auto select-none"
                        alt={`${name}-1`}
                      />
                      <p className="font-semibold text-base leading-6">
                        {t[`platform.${i + 1}.li.1`]}
                      </p>
                    </div>
                    <div className="w-full max-w-[220px] md:max-w-[120px] flex flex-row items-center md:flex-col md:items-start gap-3">
                      <img
                        src={`/images/platform-${name}-2.svg`}
                        className="h-[50px] md:h-[70px] w-auto select-none"
                        alt={`${name}-2`}
                      />
                      <p className="font-semibold text-base leading-6">
                        {t[`platform.${i + 1}.li.2`]}
                      </p>
                    </div>
                    {i !== 2 && (
                      <div className="w-full max-w-[220px] md:max-w-[120px] flex flex-row items-center md:flex-col md:items-start gap-3">
                        <img
                          src={`/images/platform-${name}-3.svg`}
                          className="h-[50px] md:h-[70px] w-auto select-none"
                          alt={`${name}-3`}
                        />
                        <p className="font-semibold text-base leading-6">
                          {t[`platform.${i + 1}.li.3`]}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative w-full flex justify-center items-center select-none">
                  <img
                    src={`/images/${name}-screenshot-1.gif`}
                    className={
                      "h-full max-h-[600px] w-auto object-cover rounded-lg shadow-lg z-[2]"
                    }
                    loading={"lazy"}
                    alt={`${name}-screenshot-1`}
                  />
                  <img
                    src={`/images/platform-${name}.svg`}
                    className={`
                      absolute -bottom-[50px] max-h-[120px] lg:max-h-[160px] w-auto z-[3] drop-shadow-lg
                      ${i % 2 === 1 ? "-left-[30px] lg:-left-[40px]" : "-right-[30px] lg:-right-[40px]"}
                    `}
                    alt={`${name}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
