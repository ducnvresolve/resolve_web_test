"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, AppWindow, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/Button";
import CtaSection from "@/components/CtaSection";
import type { BaseProps, BaseRecord } from "@/types/base.types";

export default function VideoDemo({ params: { lng, t } }: BaseProps) {
  const [isVideoSelected, setIsVideoSelected] = useState<number>(0);
  const [selectedVideo, setSelectedVideo] = useState<number>(0);

  const VIDEO_LIST: BaseRecord<any> = [
    {
      name: {
        en: "Introduction to Sisense",
        vi: "Giới thiệu về Sisense",
      },
      path: "https://www.youtube.com/embed/YmGYGMZAhE4?si=ghNNGz3ZveXlwnMZ",
    },
    {
      name: {
        en: "Marketing Demo",
        vi: "Demo ngành Marketing",
      },
      path: "https://www.youtube.com/embed/sKoYZYslRpw?si=qDRxLAjS8DVanVBm",
    },
    {
      name: {
        en: "eCommerce Demo",
        vi: "Demo ngành Thương mại Điện tử",
      },
      path: "https://www.youtube.com/embed/JS5mjPppJ3g?si=SrhvYbObl_BOFfQ7",
    },
  ];

  const DEMO_LIST = [
    {
      icon: <AppWindow className="w-[100px] h-[100px] text-purple-700 p-3" />,
      name: "showcase",
      path: `/${lng}/demo/showcase`,
      badge: (
        <img
          src={"/images/sisense-compose-sdk-badge.png"}
          className="w-fit h-[70px] select-none absolute -bottom-4 -right-4 z-[2]"
          loading="lazy"
          alt="sisense-compose-sdk-badge"
        />
      ),
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
            <div className="w-full flex flex-col gap-3 mb-12 animate-slideup-long">
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
        <div className="w-full flex flex-col items-center bg-gray-100 border border-transparent border-t-gray-300 py-[80px]">
          <div className="w-full max-w-screen-xl flex flex-col md:flex-row justify-between gap-6 md:gap-12 px-6 animate-slideup-long-delayed">
            <div className="w-full md:max-w-[400px]">
              <h2 className="font-bold text-xl md:text-3xl text-justify text-purple-700 p-3 mb-3 md:mb-6">
                Video{lng === "en" ? "s" : ""}
              </h2>
              {VIDEO_LIST.map((video: any, index: number) => {
                return (
                  <button
                    key={video.path}
                    className={`
                      w-full p-3 
                      font-bold text-justify lg:text-lg
                      border-2 rounded-r-full
                      ${
                        selectedVideo === index
                          ? "border-black text-black"
                          : "border-transparent text-gray-500 hover:text-black duration-100"
                      }
                    `}
                    onClick={() => {
                      setSelectedVideo(index);
                      setIsVideoSelected(1);
                    }}
                  >
                    {video.name[lng]}
                  </button>
                );
              })}
            </div>
            <iframe
              width="100%"
              src={`${VIDEO_LIST[selectedVideo].path}&autoplay=${isVideoSelected}`}
              title={VIDEO_LIST[selectedVideo].name[lng]}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="aspect-video rounded-md select-none"
            />
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
