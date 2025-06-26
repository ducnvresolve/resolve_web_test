"use client"

import React from "react"
import { Chart, type DataPoint } from "@sisense/sdk-ui"
import { measureFactory, filterFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function SitePopularity({
  data,
  filters,
  setFilters,
  breakBy = [],
  t,
}: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="line"
      dataOptions={{
        category: [data.Commerce.Date.Weeks],
        value: [
          measureFactory.countDistinct(
            data.Commerce.VisitID,
            t["dashboard.total.dashboard.visits"]
          ),
        ],
        breakBy: breakBy,
      }}
      styleOptions={{
        subtype: "line/spline",
        xAxis: {
          enabled: false,
        },
      }}
      filters={filters as Filter[]}
      onDataPointClick={(point: DataPoint) => {
        setFilters &&
          setFilters(
            filterFactory.equals(breakBy[0].column, point.seriesValue as string)
          )
      }}
    />
  )
}
