import type { Locale } from "@/types/locale.types"
import { PLATFORM_LIST } from "@/configs/routes.conf"

export const PAGE_NAME =
  "platform-" + PLATFORM_LIST[0].path?.replace("/platform/", "").trim()

export const localesPlatformFeature1: Locale[] = [
  { text: "platform" },
  { text: "title" },
  { text: "subtitle" },
  { text: "description" },

  { text: "li.1.title" },
  { text: "li.1.description" },
  { text: "li.2.title" },
  { text: "li.2.description" },
  { text: "li.3.title" },
  { text: "li.3.description" },

  { text: "see-more-videos" },
]
