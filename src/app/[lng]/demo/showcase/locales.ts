import type { Locale } from "@/types/locale.types"

export const PAGE_NAME = "demo-showcase"

export const localesDemoShowcase: Locale[] = [
  { text: "demo" },
  { text: "title" },
  { text: "subtitle" },

  { text: "dashboard.all" },
  { text: "dashboard.by" },
  { text: "dashboard.clearSelection" },
  { text: "dashboard.gender" },
  { text: "dashboard.ageRange" },
  { text: "dashboard.cost" },
  { text: "dashboard.unitsSold" },
  { text: "dashboard.category" },
  { text: "dashboard.revenueTrend" },
  { text: "dashboard.sitePopularity" },
  { text: "dashboard.demographics" },
  { text: "dashboard.geography" },

  { text: "dashboard.total", options: { entity: "dashboard.revenue" } },
  { text: "dashboard.total", options: { entity: "dashboard.unitsSold" } },
  { text: "dashboard.total", options: { entity: "dashboard.sales" } },
  { text: "dashboard.total", options: { entity: "dashboard.brands" } },
  { text: "dashboard.total", options: { entity: "dashboard.visits" } },

  { text: "dashboard.by", options: { entity: "dashboard.gender" } },
  { text: "dashboard.by", options: { entity: "dashboard.ageRange" } },

  { text: "video.title" },
  { text: "video.description" },
  { text: "contact.title" },
  { text: "contact.description" },
]
