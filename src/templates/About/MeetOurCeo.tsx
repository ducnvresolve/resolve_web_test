"use client"

import React from "react"
import { BaseProps } from "@/types/base.types"

export default function MeetOurCeo({ params: { t } }: BaseProps) {
  return (
    <section className="w-full flex flex-col items-center px-6 animate-slideup-long-delayed mb-[150px]">
      <h2
        id="meet-our-ceo"
        className="font-bold text-center text-purple-600 text-3xl md:text-[40px] mb-10"
      >
        {t["meet-our-ceo.title"]}
      </h2>
      <div className="w-full max-w-screen-xl flex flex-col items-center md:flex-row md:items-start md:justify-center gap-10">
        <div className="w-full max-w-[300px] h-[400px] flex justify-center items-center overflow-hidden animate-skeleton select-none rounded-lg shadow-lg">
          <img
            src="/images/resolve-ceo.jpg"
            loading="lazy"
            alt="resolve-ceo"
            className="flex-shrink-0 min-w-full min-h-full object-cover"
          />
        </div>
        <div className="w-full max-w-[800px]">
          {[2, 3, 4].map((i: number) => (
            <p
              key={i}
              className="md:text-lg leading-7 md:leading-8 mb-10 text-justify"
            >
              {i === 2 ? (
                <strong>{t["meet-our-ceo.description.1"]}</strong>
              ) : (
                ""
              )}
              {t[`meet-our-ceo.description.${i}`]}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
