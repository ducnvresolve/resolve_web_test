"use client";

import React, { useState, useRef, Fragment } from "react";
import { Grid2 as Grid } from "@mui/material";
import * as DM from "@/configs/sample-ecommerce";
import SisenseProvider from "@/configs/sisense.conf";
import DashboardCard from "./Charts/DashboardCard";
import TotalRevenue from "./Charts/Total/Revenue";
import TotalUnitsSold from "./Charts/Total/UnitsSold";
import TotalSales from "./Charts/Total/Sales";
import TotalBrands from "./Charts/Total/Brands";
import RevenueAndQuantity from "./Charts/Overtime/RevenueAndQuantity";
import SitePopularity from "./Charts/Overtime/SitePopularity";
import RevenuePercentage from "./Charts/Proportion/Revenue";
import RevenueByCountry from "./Charts/Map/RevenueByCountry";
import { Button } from "@/components/Button";
import type { Filter } from "@sisense/sdk-data";
import type { BaseProps } from "@/types/base.types";
import { DashboardById, SisenseContextProvider } from "@sisense/sdk-ui";

export default function ShowcaseDashboard({ params: { lng, t } }: BaseProps) {
  const containerRef = useRef<any>();
  const [breakBy, setBreakBy] = useState<any[]>([]);
  const [filterAgeRange, setFilterAgeRange] = useState<Filter | null>(null);
  const [filterBrand, setFilterBrand] = useState<Filter | null>(null);
  const [filterCountry, setFilterCountry] = useState<Filter | null>(null);
  const [filterGender, setFilterGender] = useState<Filter | null>(null);
  const activeFilters: Filter[] = [
    filterAgeRange,
    filterBrand,
    filterCountry,
    filterGender,
  ].filter((f) => {
    if (f) return f; // make sure no filters are undefined
  }) as Filter[];

  const BreakByButtonGroup = () => (
    <div className="flex flex-wrap flex-row items-center gap-2 min-h-[40px] mt-4 md:mt-2 mb-2">
      <Button
        variant={"outline"}
        className={`
          border-2 font-semibold
          ${!breakBy[0] ? "border-purple-700 text-purple-700" : ""}
        `}
        onClick={() => setBreakBy([])}
      >
        {t["dashboard.all"]}
      </Button>
      <Button
        variant={"outline"}
        className={`
          border-2 font-semibold
          ${
            breakBy[0] && breakBy[0].name === t["dashboard.gender"]
              ? "border-purple-700 text-purple-700"
              : ""
          }
        `}
        onClick={() =>
          setBreakBy([
            { column: DM.Commerce.Gender, name: t["dashboard.gender"] },
          ])
        }
      >
        {t["dashboard.by.dashboard.gender"]}
      </Button>
      <Button
        variant={"outline"}
        className={`
          border-2 font-semibold
          ${
            breakBy[0] && breakBy[0].name === t["dashboard.ageRange"]
              ? "border-purple-700 text-purple-700"
              : ""
          }
        `}
        onClick={() =>
          setBreakBy([
            { column: DM.Commerce.AgeRange, name: t["dashboard.ageRange"] },
          ])
        }
      >
        {t["dashboard.by.dashboard.ageRange"]}
      </Button>
    </div>
  );
  if (typeof window == "undefined") {
    console.log("window is undefined");
    return <Fragment>{/* <iframe src="" ></iframe> */}</Fragment>;
  }
  return (
    <Fragment>
      {/* <iframe src="" ></iframe> */}
      <SisenseContextProvider
        url="https://sisense-dev-fusion.sisense.com"
        defaultDataSource="Sample ECommerce"
        appConfig={{ queryCacheConfig: { enabled: true } }}
        enableSilentPreAuth={true}
        ssoEnabled={true}
      >
        {/* <AiContextProvider volatile={true}> */}
        {/* <MuiThemeProvider theme={muiTheme}> */}
        {/* <CssBaseline />
              {true &&
                <ThemeProvider
                  theme={{
                    typography: {
                      fontFamily: 'Poppins, Verdana',
                      primaryTextColor: 'rgba(0, 0, 0, 0.6)',
                    },
                    palette: {
                      variantColors: ['#4361ee', '#f72585', '#4cc9f0', '#7209b7', '#3a0ca3',]
                    },
                    general: {
                      brandColor: '#94F5F0',
                      backgroundColor: '#fdfdfd',
                      primaryButtonTextColor: '#000',
                    },
                    chart: {
                      backgroundColor: '#fdfdfd',
                      panelBackgroundColor: '#fdfdfd',
                      textColor: 'rgba(0, 0, 0, 0.6)',
                    },
                    dashboard: {
                      backgroundColor: '#fbfbfb',
                      dividerLineWidth: 0,
                    },
                    filter: {
                      panel : {
                        titleColor: 'rgba(0, 0, 0, 0.6)',
                        backgroundColor: '#fdfdfd',
                      },
                    },
                    widget: {
                      spaceAround: 'Small',
                      shadow: 'Medium',
                      header: {
                        backgroundColor: '#eaeaea',
                        titleTextColor: 'rgba(0, 0, 0, 0.6)',
                      }
                    }
                  }}
                >
                  <div style={{ margin: '15px' }}>
                    <App />
                  </div>
                </ThemeProvider>
              } */}
        {/* <div style={{ margin: "15px" }}> */}
        <div className="w-full">
          <DashboardById dashboardOid="65a82171719e7f004018691c" />
        </div>

        {/* </div> */}
        {/* </MuiThemeProvider>
          </AiContextProvider> */}
      </SisenseContextProvider>
    </Fragment>
  );

  // if (typeof window !== "undefined")
  //   return (
  //     <SisenseProvider params={{ lng }}>
  //       <div className="w-full flex flex-col items-center gap-3 z-[10]">
  //         <Grid
  //           container
  //           spacing={2}
  //           className="w-full"
  //           ref={containerRef as any}
  //         >
  //           <DashboardCard size={3}>
  //             <TotalRevenue data={DM} filters={activeFilters} t={t} />
  //           </DashboardCard>
  //           <DashboardCard size={3}>
  //             <TotalUnitsSold data={DM} filters={activeFilters} t={t} />
  //           </DashboardCard>
  //           <DashboardCard size={3}>
  //             <TotalSales data={DM} filters={activeFilters} t={t} />
  //           </DashboardCard>
  //           <DashboardCard size={3}>
  //             <TotalBrands data={DM} filters={activeFilters} t={t} />
  //           </DashboardCard>
  //           <DashboardCard size={4} title={t["dashboard.revenueTrend"]}>
  //             <div className="hidden lg:block h-[55px] mx-2"></div>
  //             <RevenueAndQuantity data={DM} filters={activeFilters} t={t} />
  //           </DashboardCard>
  //           <DashboardCard
  //             size={8}
  //             title={`
  //             ${t["dashboard.sitePopularity"]}${
  //               breakBy[0]
  //                 ? ` ${t[`dashboard.by`]
  //                     ?.replace(" {{ entity }}", "")
  //                     .trim()
  //                     .toLowerCase()} ${breakBy[0]?.name}`
  //                 : ""
  //             }`}
  //             isClearFilterEnabled={
  //               filterAgeRange !== null || filterGender !== null
  //             }
  //             clearFilterText={t["dashboard.clearSelection"]}
  //             clearFilter={() => {
  //               setFilterAgeRange(null)
  //               setFilterGender(null)
  //             }}
  //           >
  //             <BreakByButtonGroup />
  //             <SitePopularity
  //               data={DM}
  //               breakBy={breakBy}
  //               filters={activeFilters}
  //               setFilters={
  //                 !breakBy[0]
  //                   ? undefined
  //                   : breakBy[0] && breakBy[0].name === t["dashboard.gender"]
  //                     ? setFilterGender
  //                     : setFilterAgeRange
  //               }
  //               t={t}
  //             />
  //           </DashboardCard>
  //           <DashboardCard
  //             size={6}
  //             title={`${t["dashboard.demographics"]}${
  //               breakBy[0]
  //                 ? ` ${t[`dashboard.by`]
  //                     ?.replace(" {{ entity }}", "")
  //                     .trim()
  //                     .toLowerCase()} ${breakBy[0]?.name}`
  //                 : ""
  //             }`}
  //             isClearFilterEnabled={
  //               filterAgeRange !== null || filterGender !== null
  //             }
  //             clearFilterText={t["dashboard.clearSelection"]}
  //             clearFilter={() => {
  //               setFilterAgeRange(null)
  //               setFilterGender(null)
  //             }}
  //           >
  //             <BreakByButtonGroup />
  //             <RevenuePercentage
  //               data={DM}
  //               breakBy={breakBy}
  //               filters={activeFilters}
  //               setFilters={
  //                 !breakBy[0]
  //                   ? undefined
  //                   : breakBy[0] && breakBy[0].name === t["dashboard.gender"]
  //                     ? setFilterGender
  //                     : setFilterAgeRange
  //               }
  //               t={t}
  //             />
  //           </DashboardCard>
  //           <DashboardCard
  //             size={6}
  //             title={`${t["dashboard.geography"]}`}
  //             isClearFilterEnabled={filterCountry !== null}
  //             clearFilterText={t["dashboard.clearSelection"]}
  //             clearFilter={() => setFilterCountry(null)}
  //           >
  //             <div className="hidden lg:block h-[55px] mx-2"></div>
  //             <RevenueByCountry
  //               data={DM}
  //               filters={activeFilters}
  //               setFilters={setFilterCountry}
  //               t={t}
  //             />
  //           </DashboardCard>
  //         </Grid>
  //       </div>
  //     </SisenseProvider>
  //   )
}
