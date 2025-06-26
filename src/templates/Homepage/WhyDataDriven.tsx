"use client"

import React from "react"
import { useInView } from "react-intersection-observer"
import { TrendingUp, UserCheck, FileBarChart } from "lucide-react"
import { useMediaQuery, VIEWPOINT } from "@/hooks/useMediaQuery"
import type { BaseProps } from "@/types/base.types"

export default function WhyDataDriven({ params: { lng, t } }: BaseProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })
  const isDesktop = useMediaQuery(VIEWPOINT.MD)
  const icons = [
    <TrendingUp
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <UserCheck
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
    <FileBarChart
      width={isDesktop ? 44 : 32}
      height={isDesktop ? 44 : 32}
      className="text-purple-600"
    />,
  ]

  return (
    <section className="w-full bg-purple-200 flex flex-col items-center">
      <div
        ref={ref}
        className={`
          w-full max-w-screen-xl px-6 py-12
          ${inView ? "animate-slideup-long" : "opacity-0"}
        `}
      >
        <h2 className="font-bold text-center text-xl md:text-3xl text-purple-700 mb-12">
          {t["why-data-driven.title"]}
        </h2>
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-12">
          {[...Array(3).keys()].map((i: number) => (
            <div key={i} className="w-full flex flex-col gap-3">
              {icons[i]}
              <p className="font-bold text-lg md:text-xl">
                {t[`why-data-driven.${i + 1}.title`]}
              </p>
              <p
                className="text-justify md:text-lg"
                style={{ lineHeight: "32px" }}
              >
                {t[`why-data-driven.${i + 1}.description`]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
