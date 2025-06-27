"use client";

import React, { useState, useRef, Fragment } from "react";
// import { Grid2 as Grid } from "@mui/material";
// import * as DM from "@/configs/sample-ecommerce";
// import SisenseProvider from "@/configs/sisense.conf";
// import DashboardCard from "./Charts/DashboardCard";
// import TotalRevenue from "./Charts/Total/Revenue";
// import TotalUnitsSold from "./Charts/Total/UnitsSold";
// import TotalSales from "./Charts/Total/Sales";
// import TotalBrands from "./Charts/Total/Brands";
// import RevenueAndQuantity from "./Charts/Overtime/RevenueAndQuantity";
// import SitePopularity from "./Charts/Overtime/SitePopularity";
// import RevenuePercentage from "./Charts/Proportion/Revenue";
// import RevenueByCountry from "./Charts/Map/RevenueByCountry";
// import { Button } from "@/components/Button";
// import type { Filter } from "@sisense/sdk-data";
import type { BaseProps } from "@/types/base.types";
// import { DashboardById, SisenseContextProvider } from "@sisense/sdk-ui";

export default function ShowcaseDashboard({
  params: { lng, t, tab },
}: BaseProps & {
  params: { lng: string; t: any; tab: "ecommerce" | "healthcare" };
}) {
  const containerRef = useRef<any>();
  const [breakBy, setBreakBy] = useState<any[]>([]);
  // const [filterAgeRange, setFilterAgeRange] = useState<Filter | null>(null);
  // const [filterBrand, setFilterBrand] = useState<Filter | null>(null);
  // const [filterCountry, setFilterCountry] = useState<Filter | null>(null);
  // const [filterGender, setFilterGender] = useState<Filter | null>(null);
  // const activeFilters: Filter[] = [
  //   filterAgeRange,
  //   filterBrand,
  //   filterCountry,
  //   filterGender,
  // ].filter((f) => {
  //   if (f) return f; // make sure no filters are undefined
  // }) as Filter[];

  const IFRAME_LINKS = {
    ecommerce:
      "https://sisense-dev-fusion.sisense.com/app/main/dashboards/65a82171719e7f004018691c?embed=true&edit=true&r=true&l=false&t=false&h=flase",
    healthcare:
      "https://sisense-dev-fusion.sisense.com/app/main/dashboards/5e0a081a37e4b42e449c9e99?embed=true&edit=true&r=true&l=false&t=false&h=flase",
  };

  // const BreakByButtonGroup = () => (
  //   <div className="flex flex-wrap flex-row items-center gap-2 min-h-[40px] mt-4 md:mt-2 mb-2">
  //     <Button
  //       variant={"outline"}
  //       className={`
  //         border-2 font-semibold
  //         ${!breakBy[0] ? "border-purple-700 text-purple-700" : ""}
  //       `}
  //       onClick={() => setBreakBy([])}
  //     >
  //       {t["dashboard.all"]}
  //     </Button>
  //     <Button
  //       variant={"outline"}
  //       className={`
  //         border-2 font-semibold
  //         ${
  //           breakBy[0] && breakBy[0].name === t["dashboard.gender"]
  //             ? "border-purple-700 text-purple-700"
  //             : ""
  //         }
  //       `}
  //       onClick={() =>
  //         setBreakBy([
  //           { column: DM.Commerce.Gender, name: t["dashboard.gender"] },
  //         ])
  //       }
  //     >
  //       {t["dashboard.by.dashboard.gender"]}
  //     </Button>
  //     <Button
  //       variant={"outline"}
  //       className={`
  //         border-2 font-semibold
  //         ${
  //           breakBy[0] && breakBy[0].name === t["dashboard.ageRange"]
  //             ? "border-purple-700 text-purple-700"
  //             : ""
  //         }
  //       `}
  //       onClick={() =>
  //         setBreakBy([
  //           { column: DM.Commerce.AgeRange, name: t["dashboard.ageRange"] },
  //         ])
  //       }
  //     >
  //       {t["dashboard.by.dashboard.ageRange"]}
  //     </Button>
  //   </div>
  // );

  return (
    <div className="w-full h-[600px] md:h-[80vh] flex flex-col relative">
      {/* Ecommerce iframe */}
      <iframe
        src={IFRAME_LINKS.ecommerce}
        width="100%"
        height="100%"
        loading="eager"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          flex: 1,
          position: tab === "ecommerce" ? "relative" : "absolute",
          opacity: tab === "ecommerce" ? 1 : 0,
          pointerEvents: tab === "ecommerce" ? "auto" : "none",
          zIndex: tab === "ecommerce" ? 1 : 0,
        }}
        allowFullScreen
      />
      {/* Healthcare iframe */}
      <iframe
        src={IFRAME_LINKS.healthcare}
        width="100%"
        height="100%"
        loading="eager"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
          flex: 1,
          position: tab === "healthcare" ? "relative" : "absolute",
          opacity: tab === "healthcare" ? 1 : 0,
          pointerEvents: tab === "healthcare" ? "auto" : "none",
          zIndex: tab === "healthcare" ? 1 : 0,
        }}
        allowFullScreen
      />
    </div>
  );
}
