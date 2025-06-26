import type { Locale } from "@/types/locale.types"

export const PAGE_NAME = "customer-stories"

export const localesCustomerStories: Locale[] = [
  { text: "page.title" },
  { text: "page.subtitle" },

  { text: "featured" },
  { text: "read", options: { entity: "article" } },
  { text: "read", options: { entity: "case-study" } },

  { text: "case-studies.1.name" },
  { text: "case-studies.1.title" },
  { text: "case-studies.1.file" },
  { text: "case-studies.2.name" },
  { text: "case-studies.2.title" },
  { text: "case-studies.2.file" },

  { text: "contact.title" },
  { text: "contact.description" },
  { text: "contact.action" },
]
