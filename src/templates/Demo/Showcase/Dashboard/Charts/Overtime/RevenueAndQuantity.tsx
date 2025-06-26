"use client"

import React from "react"
import { Chart } from "@sisense/sdk-ui"
import { measureFactory, type Filter } from "@sisense/sdk-data"
import type { ChartProps } from "@/types/chart.type"

export default function RevenueAndQuantity({ data, filters, t }: ChartProps) {
  const unitsSold = `${t["dashboard.unitsSold"]?.charAt(0).toUpperCase()}${t[
    "dashboard.unitsSold"
  ]?.slice(1)}`
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="column"
      dataOptions={{
        category: [data.Commerce.Date.Quarters],
        value: [
          measureFactory.sum(
            data.Commerce.Revenue,
            t["dashboard.total.dashboard.revenue"]
          ),
          {
            column: measureFactory.countDistinct(data.Commerce.Quantity),
            showOnRightAxis: true,
            chartType: "line",
            title: unitsSold,
          },
        ],
        breakBy: [],
      }}
      styleOptions={{
        subtype: "area/spline",
        xAxis: {
          enabled: false,
        },
      }}
      filters={filters as Filter[]}
    />
  )
}
