import { useState, useEffect } from "react"

export const VIEWPOINT = {
  SM: "(min-width: 640px)",
  MD: "(min-width: 768px)",
  LG: "(min-width: 1024px)",
  XL: "(min-width: 1280px)",
  XXL: "(min-width: 1536px)",
} as const

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener("change", onChange)
    setValue(result.matches)

    return () => result.removeEventListener("change", onChange)
  }, [query])

  return value
}
