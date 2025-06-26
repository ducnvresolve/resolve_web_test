import type { Filter } from "@sisense/sdk-data"
import { BaseRecord } from "./base.types"

export type ChartProps = {
  data: any
  title?: string
  filters?: Filter[]
  setFilters?: Function
  breakBy?: any[]
  t: BaseRecord<string>
}
