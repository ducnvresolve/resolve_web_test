"use client"

import React from "react"
import { Chart, type DataPoint } from "@sisense/sdk-ui"
import { measureFactory, filterFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function RevenuePercentage({
  data,
  filters,
  setFilters,
  breakBy = [],
  t,
}: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="pie"
      dataOptions={{
        category: breakBy,
        value: [
          measureFactory.sum(
            data.Commerce.Revenue,
            t["dashboard.total.dashboard.revenue"]
          ),
        ],
        breakBy: [],
      }}
      styleOptions={{
        legend: {
          enabled: false,
        },
        convolution: {
          enabled: false,
        },
      }}
      filters={filters as Filter[]}
      onDataPointClick={(point: DataPoint) => {
        setFilters &&
          setFilters(
            filterFactory.equals(
              breakBy[0].column,
              point.categoryValue as string
            )
          )
      }}
    />
  )
}
