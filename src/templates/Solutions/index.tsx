"use client";

import PageHeader from "@/components/PageHeader";
import SolutionSection, { SOLUTION_NAME } from "./Section";
import CtaSection from "@/components/CtaSection";
import type { BaseProps } from "@/types/base.types";
import { memo } from "react";

export const Solutions = memo(function Solutions({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={params} />
      {[...Array(3).keys()].map((i: number) => (
        <>
          <span id={SOLUTION_NAME[i]} className="h-[100px]" />
          <SolutionSection params={params} solutionNumber={i} />
        </>
      ))}
      <span className="h-[100px]" />
      <CtaSection params={params} />
    </main>
  );
});
