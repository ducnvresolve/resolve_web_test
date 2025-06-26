import React from "react"
import { SisenseContextProvider, ThemeProvider } from "@sisense/sdk-ui"
import type { BaseLayoutProps } from "@/types/base.types"

// SisenseProvider:
// Fetch theme configs from useThemeStore() and configure arguments accordingly
export default function SisenseProvider({ children }: BaseLayoutProps) {
  const ssoEnabled =
    process.env.SISENSE_SSO_ENABLED === "TRUE" ||
    process.env.SISENSE_SSO_ENABLED === "true"

  return (
    <SisenseContextProvider
      url={process.env.SISENSE_URL as string}
      ssoEnabled={ssoEnabled}
      wat={process.env.SISENSE_WAT}
      token={process.env.SISENSE_API_TOKEN}
      defaultDataSource={"Sample ECommerce"}
      appConfig={{
        queryCacheConfig: { enabled: true }, // load data and save in cache
      }}
    >
      <ThemeProvider
        theme={{
          chart: {
            backgroundColor: "transparent",
            textColor: "#1e293b",
          },
          palette: {
            variantColors: ["#ab62d0", "#963bc4", "#782f9d", "#5a2376"],
          },
          typography: {
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      >
        {children}
      </ThemeProvider>
    </SisenseContextProvider>
  )
}
