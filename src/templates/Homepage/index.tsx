"use client"

import Hero from "./Hero"
import WhyDataDriven from "./WhyDataDriven"
import AboutUs from "./AboutUs"
import Product from "./Product"
import CtaSection from "@/components/CtaSection"
import type { BaseProps } from "@/types/base.types"

export default function Homepage({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center">
      <Hero params={params} />
      <WhyDataDriven params={params} />
      <AboutUs params={params} />
      <Product params={params} />
      <CtaSection params={params} />
    </main>
  )
}
