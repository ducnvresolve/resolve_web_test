"use client"

import React from "react"
import { ScattermapChart } from "@sisense/sdk-ui"
import { measureFactory, filterFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function RevenueByCountry({
  data,
  filters,
  setFilters,
  t,
}: ChartProps) {
  return (
    <ScattermapChart
      dataSet={data.DataSource}
      dataOptions={{
        geo: [data.Country.Country],
        size: measureFactory.sum(data.Commerce.Cost, t["dashboard.cost"]),
        colorBy: {
          column: measureFactory.sum(
            data.Commerce.Revenue,
            t["dashboard.total.dashboard.revenue"]
          ),
          color: "#963bc4",
        },
        details: {
          column: data.Category.Category,
          name: t["dashboard.category"],
        },
      }}
      filters={filters as Filter[]}
      onDataPointClick={(point: any) => {
        setFilters &&
          setFilters(
            filterFactory.equals(
              data.Country.Country,
              point.displayName as string
            )
          )
      }}
    />
  )
}
