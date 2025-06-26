"use client"

import React from "react"
import { BaseProps } from "@/types/base.types"

export default function OurTeam({ params: { t } }: BaseProps) {
  return (
    <section className="w-full flex flex-col items-center px-6 mb-[100px] animate-slideup-long-delayed">
      <div className="w-full max-w-[800px] max-h-[300px] aspect-video flex justify-center items-center overflow-hidden animate-skeleton select-none mb-[80px] rounded-lg shadow-lg">
        <img
          src="/images/resolve-our-team.png"
          loading="lazy"
          alt="resolve-our-team"
          className="object-cover z-[10]"
        />
      </div>
      <div className="w-full max-w-screen-lg">
        <h2
          id="our-team"
          className="font-bold text-center text-purple-700 text-3xl md:text-[40px] mb-10"
        >
          {t["our-team.title"]}
        </h2>
        <p className="md:text-lg leading-7 md:leading-8 mb-10 text-justify">
          {t[`our-team.description`]}
        </p>
      </div>
    </section>
  )
}
