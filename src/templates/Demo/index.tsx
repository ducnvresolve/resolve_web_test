"use client"

import Link from "next/link"
import { AppWindow, MonitorPlay, MessageCircleQuestion } from "lucide-react"
import PageHeader from "@/components/PageHeader"
import type { BaseProps } from "@/types/base.types"

export default function Demo({ params: { lng, t } }: BaseProps) {
  const DEMO_LIST = [
    {
      icon: (
        <AppWindow className="w-[100px] h-[100px] absolute -mt-[30px] text-purple-700 bg-white p-3" />
      ),
      name: "showcase",
      path: `/${lng}/demo/showcase`,
      badge: (
        <img
          src={"/images/sisense-compose-sdk-badge.png"}
          className="w-fit h-[70px] md:h-[80px] select-none absolute -bottom-4 -right-4 z-[2]"
          loading="lazy"
          alt="sisense-compose-sdk-badge"
        />
      ),
    },
    {
      icon: (
        <MonitorPlay className="w-[100px] h-[100px] absolute -mt-[30px] text-purple-700 bg-white p-3" />
      ),
      name: "video",
      path: `/${lng}/demo/video`,
      badge: null,
    },
    {
      icon: (
        <MessageCircleQuestion className="w-[100px] h-[100px] absolute -mt-[30px] text-purple-700 bg-white p-3" />
      ),
      name: "contact",
      path: `/${lng}/contact`,
      badge: null,
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <PageHeader params={{ lng, t }} />
      <div className="w-full bg-white flex flex-col items-center py-[100px]">
        <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-start justify-between gap-[100px] md:gap-6 px-6 animate-slideup-long-slow">
          {DEMO_LIST.map((section: any) => (
            <Link key={section.title} href={section.path} className="w-full">
              <div className="w-full relative flex flex-col items-center gap-6 p-3 rounded-lg border-2 border-gray-300 bg-white text-gray-500 hover:border-purple-600 hover:text-purple-700 duration-200">
                <div className="flex justify-center items-center">
                  {section.icon}
                </div>
                <p className="text-lg font-bold mt-6 text-center">
                  {t[`${section.name}.title`]}
                </p>
                <p className="lg:text-center mb-12">
                  {t[`${section.name}.description`]}
                </p>
                {section.badge}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
