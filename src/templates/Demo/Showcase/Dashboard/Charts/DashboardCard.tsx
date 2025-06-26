"use client";

import React from "react";
import { FilterX } from "lucide-react";
import { Grid2 as Grid } from "@mui/material";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type DashboardCardProps = {
  title?: string;
  widthThreshold?: number;
  size: number;
  children?: React.ReactNode;
  isClearFilterEnabled?: boolean;
  clearFilterText?: string;
  clearFilter?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function DashboardCard({
  title = "",
  widthThreshold = 1024,
  size,
  children,
  isClearFilterEnabled,
  clearFilterText = "Clear selection",
  clearFilter,
}: DashboardCardProps) {
  const isThreshold = useMediaQuery(`(min-width: ${widthThreshold}px)`);
  return (
    <Grid size={isThreshold ? size : 12}>
      <div className="p-3 bg-white rounded-lg shadow-lg border border-gray-200">
        {title ? (
          <div className="min-h-[40px] flex flex-col md:flex-row md:items-start justify-start md:justify-between gap-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            {isClearFilterEnabled && clearFilter ? (
              <button
                onClick={clearFilter}
                className="min-w-[120px] text-sm p-2 rounded-md flex flex-row items-center gap-1 text-justify hover:text-purple-600 duration-100"
              >
                <FilterX className="w-5 h-5" />
                {clearFilterText}
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        {children}
      </div>
    </Grid>
  );
}
