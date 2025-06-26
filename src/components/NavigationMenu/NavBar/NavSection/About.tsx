"use client";

import React from "react";
import Link from "next/link";
import { ABOUT_LIST, SOLUTION_LIST } from "@/configs/routes.conf";
import { Skeleton } from "@/components/Skeleton";
import { Button } from "@/components/Button";
import NavBtn from "./NavBtn";
import type { BaseProps } from "@/types/base.types";

export default function AboutNavSection({ params: { lng, t } }: BaseProps) {
  return (
    <div className="w-full max-w-screen-2xl">
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="w-full p-3 px-6 lg:pr-3">
          <p className="w-full border-2 border-transparent border-b-purple-700 text-purple-700 font-bold leading-8 mb-6">
            {t["about.who-we-are"]}
          </p>
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <div className="w-full flex flex-col items-start gap-3">
              <Skeleton className="w-full h-[180px] flex items-center justify-center mb-3 overflow-hidden select-none">
                <img
                  src="/images/resolve-company.jpeg"
                  className="flex-shrink-0 min-w-full min-h-full object-cover"
                  loading="lazy"
                  alt="resolve-company"
                />
              </Skeleton>
              <img
                src="/images/logo-full.svg"
                className="w-fit h-[40px] md:h-[50px] select-none"
                loading="lazy"
                alt="resolve-logo-full"
              />
              <p className="text-sm lg:text-base leading-6 lg:leading-7">
                {t["about.resolve.intro"]}
              </p>
            </div>
            <ul className="w-full flex flex-col gap-3">
              {[...Array(ABOUT_LIST.length).keys()].map((i: number) => (
                <NavBtn
                  key={i}
                  params={{ lng, t }}
                  name={`about.${ABOUT_LIST[i].name}`}
                  path={ABOUT_LIST[i].path!}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[550px] bg-gray-200 p-3 px-6">
          <p className="w-full border-2 border-transparent border-b-purple-700 text-purple-700 font-bold leading-8 mb-6">
            {t["about.what-we-do"]}
          </p>
          <ul className="w-full flex flex-col gap-3">
            {[...Array(SOLUTION_LIST.length).keys()].map((i: number) => (
              <NavBtn
                key={i}
                params={{ lng, t }}
                name={`about.solutions.${SOLUTION_LIST[i].name}`}
                path={SOLUTION_LIST[i].path!}
              />
            ))}
          </ul>
          <Button variant={"link"} className="w-fit p-0 m-3 mt-6" asChild>
            <Link href="/solutions">
              &#10551;&nbsp;<i>{t["about.solutions.see-all-solutions"]}</i>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
