"use client"

import React from "react"
import { Chart } from "@sisense/sdk-ui"
import { measureFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function TotalRevenue({
  data,
  filters,
  title = "dashboard.total.dashboard.revenue",
  t,
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.DataSource}
      dataOptions={{
        value: [
          {
            column: measureFactory.sum(data.Commerce.Revenue),
            numberFormatConfig: {
              name: "Currency",
              decimalScale: 2,
              trillion: true,
              billion: true,
              million: true,
              kilo: true,
              thousandSeparator: true,
              prefix: true,
              symbol: "$",
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
