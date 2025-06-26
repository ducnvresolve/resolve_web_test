"use client"

import React from "react"
import { BaseProps } from "@/types/base.types"

export default function OurValues({ params: { t } }: BaseProps) {
  return (
    <section className="w-full flex flex-col items-center px-6 animate-slideup-long-delayed">
      <div className="w-full max-w-screen-xl mb-[100px]">
        <h2
          id="our-values"
          className="font-bold text-center text-purple-700 text-3xl md:text-[40px] mb-10"
        >
          {t["our-values.title"]}
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-10">
          {[...Array(3).keys()].map((i: number) => (
            <div
              key={i + 1}
              className="w-full flex flex-row md:flex-col items-start gap-6 mb-10"
            >
              <div className="w-full max-w-[140px] h-[140px] flex flex-shrink-0 justify-center items-center select-none">
                <img
                  src={`/images/about-our-values-${i + 1}.svg`}
                  loading={"lazy"}
                  alt={`about-our-values-${i + 1}`}
                  className={"h-[250px] w-auto"}
                />
              </div>
              <p className="md:text-lg leading-7 md:flex md:flex-col md:gap-3 text-justify">
                <span className="font-semibold md:text-left">
                  {t[`our-values.${i + 1}.h`]}:{" "}
                </span>
                <span>{t[`our-values.${i + 1}.p`]}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
