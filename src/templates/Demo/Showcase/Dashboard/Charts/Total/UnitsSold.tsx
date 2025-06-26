"use client"

import React from "react"
import { Chart } from "@sisense/sdk-ui"
import { measureFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function TotalUnitsSold({
  data,
  filters,
  title = "dashboard.total.dashboard.unitsSold",
  t,
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.DataSource}
      dataOptions={{
        value: [measureFactory.sum(data.Commerce.Quantity)],
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
