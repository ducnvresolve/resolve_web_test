"use client"

import React from "react"
import Link from "next/link"
import { useMediaQuery, VIEWPOINT } from "@/hooks/useMediaQuery"
import { Button } from "@/components/Button"
import { Database, BarChart3, FilePieChart } from "lucide-react"
import type { BaseProps } from "@/types/base.types"

export default function Hero({ params: { lng, t } }: BaseProps) {
  const isDesktop = useMediaQuery(VIEWPOINT.LG)
  return (
    <section className="w-full flex flex-col items-center relative bg-gray-100 overflow-hidden">
      <div className="w-full max-w-screen-2xl relative flex flex-col items-justify px-6">
        <div className="w-full lg:w-[50%] flex flex-col gap-6 pt-[200px] pb-[100px]">
          <h1 className="font-bold text-[40px] md:text-[52px] text-orange-400 leading-[48px] md:leading-[60px] drop-shadow-[0_1px_1px_#000000bb] animate-slideup-long">
            {t["hero.title"]}
          </h1>
          <p
            className="font-semibold text-lg md:text-xl animate-slideup-long"
            style={{ lineHeight: "36px" }}
          >
            {t["hero.subtitle"]}
          </p>
          <div className="flex flex-row items-start gap-3 md:gap-6 animate-slideup-long">
            <div className="flex flex-col gap-3">
              <Database
                width={isDesktop ? 32 : 28}
                height={isDesktop ? 32 : 28}
                className="text-purple-600"
              />
              <p className="w-[100px] md:w-[120px] md:text-lg">
                {t["hero.features.1"]}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <BarChart3
                width={isDesktop ? 32 : 28}
                height={isDesktop ? 32 : 28}
                className="text-purple-600"
              />
              <p className="w-[100px] md:w-[120px] md:text-lg">
                {t["hero.features.2"]}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <FilePieChart
                width={isDesktop ? 32 : 28}
                height={isDesktop ? 32 : 28}
                className="text-purple-600"
              />
              <p className="w-[100px] md:w-[120px] md:text-lg">
                {t["hero.features.3"]}
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mt-3 animate-slideup-long-delayed">
            <Button variant={"default"} size={"lg"} asChild>
              <Link href={`${lng}/demo`} className="font-semibold">
                {t["hero.see-demo"]}
              </Link>
            </Button>
            <Button variant={"secondary"} size={"lg"} asChild>
              <Link href={`${lng}/contact`} className="font-semibold">
                {t["base.contact-and-collab"]}
              </Link>
            </Button>
          </div>
        </div>
        <img
          src="/images/hero.svg"
          className="w-full h-auto animate-slideup-long-very-delayed -mb-[50px] lg:mb-0 lg:absolute lg:h-full lg:-bottom-[17%] lg:-right-[50%] select-none"
          alt="hero-image"
        />
      </div>
    </section>
  )
}
