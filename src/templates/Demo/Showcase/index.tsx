"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChevronRight, MonitorPlay, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/Button";
import CtaSection from "@/components/CtaSection";
import type { BaseProps } from "@/types/base.types";

export default function ShowcaseDemo({ params: { lng, t } }: BaseProps) {
  const ShowcaseDashboard = dynamic(() => import("./Dashboard"), {
    ssr: false,
  });
  const [activeTab, setActiveTab] = useState<"ecommerce" | "healthcare">(
    "ecommerce"
  );
  const DEMO_LIST = [
    {
      icon: <MonitorPlay className="w-[100px] h-[100px] text-purple-700 p-3" />,
      name: "video",
      path: `/${lng}/demo/video`,
      badge: null,
    },
    {
      icon: (
        <MessageCircleQuestion className="w-[100px] h-[100px] text-purple-700 p-3" />
      ),
      name: "contact",
      path: `/${lng}/contact`,
      badge: null,
    },
  ];

  return (
    <main className="flex flex-col items-center">
      <section className="w-full flex flex-col items-center bg-white">
        <div className="w-full flex flex-col items-center relative overflow-hidden min-h-[212px] md:min-h-[262px] pt-[86px]">
          <div className="max-w-screen-xl w-full flex flex-col md:flex-row items-center justify-between gap-12 p-6 pb-0">
            <div className="w-full flex flex-col gap-3 mb-[100px] animate-slideup-long">
              <div className="font-bold flex flex-row items-center gap-1">
                <Button variant={"link"} className="w-fit p-0" asChild>
                  <Link
                    href={`/${lng}/demo`}
                    className="text-purple-600 after:bg-purple-600"
                  >
                    {t["demo"]}
                  </Link>
                </Button>
                <ChevronRight
                  width={28}
                  height={28}
                  className="text-purple-600 select-none"
                />
                <Button variant={"link"} className="w-fit p-0" asChild>
                  <Link
                    href={`/${lng}/demo/video`}
                    className="text-purple-600 after:bg-purple-600"
                  >
                    {t["title"]}
                  </Link>
                </Button>
              </div>
              <h1 className="text-3xl lg:text-[36px] leading-[48px] lg:leading-[56px] max-w-[750px]">
                {t["subtitle"]}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center bg-gray-100 border border-transparent border-t-gray-300 pb-[80px]">
          {/* Tabs */}
          <div className="w-full max-w-screen-xl flex flex-row gap-4 px-6 mt-4 mb-2">
            <button
              className={`px-4 py-2 rounded-t-lg font-bold border-b-2 ${activeTab === "ecommerce" ? "border-purple-600 text-purple-700 bg-white" : "border-transparent text-gray-500 bg-gray-100"}`}
              onClick={() => setActiveTab("ecommerce")}
            >
              {lng === "vi" ? "Thương mại điện tử" : "Ecommerce"}
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-bold border-b-2 ${activeTab === "healthcare" ? "border-purple-600 text-purple-700 bg-white" : "border-transparent text-gray-500 bg-gray-100"}`}
              onClick={() => setActiveTab("healthcare")}
            >
              {lng === "vi" ? "Chăm sóc sức khỏe" : "Healthcare"}
            </button>
          </div>
          <div
            id="showcase-dashboard"
            className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between gap-6 md:gap-12 px-6 animate-slideup-long-delayed"
          >
            <ShowcaseDashboard params={{ lng, t, tab: activeTab }} />
          </div>
          <div className="w-full max-w-screen-xl flex flex-col items-center mt-10 px-6 animate-slideup-long-very-delayed">
            <div className="w-full flex flex-col lg:flex-row items-center gap-6">
              {DEMO_LIST.map((section: any) => (
                <Link key={section.name} href={section.path} className="w-full">
                  <div className="w-full relative flex flex-row items-center gap-6 p-3 rounded-lg border-2 border-gray-300 bg-gray-100 text-gray-500 hover:border-purple-600 hover:text-purple-700 duration-200">
                    <div className="flex justify-center items-center">
                      {section.icon}
                    </div>
                    <div className="">
                      <p className="text-lg font-bold">
                        {t[`${section.name}.title`]}
                      </p>
                      <p>{t[`${section.name}.description`]}</p>
                      {section.badge}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaSection params={{ lng, t }} />
    </main>
  );
}
