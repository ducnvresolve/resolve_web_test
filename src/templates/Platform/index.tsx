"use client";

import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/CtaSection";
import PlatformContent from "./Content";
import type { BaseProps } from "@/types/base.types";

export default function Platform({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center bg-white">
      <PageHeader params={params} />
      <PlatformContent params={params} />
      <CtaSection params={params} />
    </main>
  );
}
