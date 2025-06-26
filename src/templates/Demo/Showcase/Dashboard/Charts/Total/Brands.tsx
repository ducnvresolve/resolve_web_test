"use client"

import React from "react"
import { Chart } from "@sisense/sdk-ui"
import { measureFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function TotalBrands({
  data,
  filters,
  title = "dashboard.total.dashboard.brands",
  t,
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.DataSource}
      dataOptions={{
        value: [
          {
            column: measureFactory.countDistinct(data.Commerce.BrandID),
            numberFormatConfig: {
              decimalScale: 0,
              trillion: false,
              billion: false,
              million: false,
              kilo: false,
              thousandSeparator: false,
              prefix: true,
            },
          },
        ],
        secondary: [],
      }}
      styleOptions={{
        subtype: "indicator/numeric",
        skin: "vertical",
        indicatorComponents: {
          title: {
            shouldBeShown: true,
            text: t[title],
          },
        },
      }}
      filters={filters as Filter[]}
    />
  )
}
