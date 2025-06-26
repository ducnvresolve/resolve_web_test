import type { TFunction } from "i18next"
import type { BaseRecord } from "@/types/base.types"
import type { Locale } from "@/types/locale.types"

export const translate = (t: TFunction<any, any>, list: Locale[]) => {
  const results: BaseRecord<string> = {}
  list.map((c: Locale) => {
    if (!c.options) {
      results[c.text] = t(c.text)
    } else {
      let id = c.text
      let options: any = {}
      Object.keys(c.options).map((option: string, i: number) => {
        options[option] = t(Object.values(c.options!)[i])
        id += "." + Object.values(c.options!)[i]
      })
      results[id] = t(c.text, options as Record<string, string>)
    }
  })
  return results
}
