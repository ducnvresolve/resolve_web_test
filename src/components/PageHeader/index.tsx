"use client";

import React from "react";
import type { BaseProps } from "@/types/base.types";

export default function PageHeader({ params: { t } }: BaseProps) {
  return (
    <div className="w-full flex flex-col items-center relative bg-gray-50 overflow-hidden min-h-[236px] md:min-h-[286px] pt-[86px] border border-b-gray-300">
      <div className="max-w-screen-2xl w-full flex flex-col md:gap-3 p-6 py-12 pb-[88px] z-[5] drop-shadow-lg animate-slideup-long">
        <h1 className="w-full font-bold text-[40px] md:text-[52px] text-center text-orange-400 drop-shadow-[0_1px_1px_#000000bb] leading-[60px]">
          {t["page.title"]}
        </h1>
        <p className="font-semibold w-full text-center text-lg md:text-xl mb-[48px]">
          {t["page.subtitle"]}
        </p>
      </div>
    </div>
  );
}
