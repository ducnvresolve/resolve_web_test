"use client"

import React from "react"
import { BaseProps } from "@/types/base.types"

export default function OurMission({ params: { t } }: BaseProps) {
  return (
    <section className="w-full flex flex-col items-center px-6 animate-slideup-long-delayed">
      <div className="w-full max-w-[800px] aspect-video flex justify-center items-center overflow-hidden animate-skeleton select-none -mt-[80px] mb-[80px] rounded-lg shadow-lg">
        <img
          src="/images/resolve-company.jpeg"
          alt="resolve-company"
          className="object-cover z-[10]"
        />
      </div>
      <div className="w-full max-w-screen-lg mb-[100px]">
        <h2
          id="our-mission"
          className="font-bold text-center text-purple-700 text-3xl md:text-[40px] mb-10"
        >
          {t["our-mission.title"]}
        </h2>
        {[...Array(3).keys()].map((i: number) => (
          <p
            key={i + 1}
            className="md:text-lg leading-7 md:leading-8 mb-10 text-justify"
            dangerouslySetInnerHTML={{
              __html: t[`our-mission.description.${i + 1}`] as string,
            }}
          />
        ))}
      </div>
    </section>
  )
}
