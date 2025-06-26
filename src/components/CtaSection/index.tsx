"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/Button";
import type { BaseProps } from "@/types/base.types";

export default function CtaSection({ params: { lng, t } }: BaseProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className="w-full bg-purple-400 flex flex-col items-center z-40">
      <div
        ref={ref}
        className={`
          max-w-screen-xl w-full p-[60px] px-6 my-12 md:text-lg
          flex flex-col xl:flex-row justify-between items-center gap-12
          ${inView ? "animate-slideup-long" : "opacity-0"}
        `}
      >
        <div className="w-full flex flex-col justify-between items-start gap-6 py-3">
          <h2 className="text-lg lg:text-xl font-bold">{t["cta.contact"]}</h2>
          <Button variant={"default"} size={"lg"} asChild>
            <Link href={`/${lng}/contact`} className="font-semibold">
              {t["base.contact-and-collab"]}
            </Link>
          </Button>
        </div>
        <div className="w-[2px] h-[200px] bg-purple-700 select-none hidden xl:block">
          &nbsp;
        </div>
        <div className="w-full flex flex-col justify-between items-end gap-6 py-3">
          <h2 className="text-lg lg:text-xl font-bold text-right">
            {t["cta.jobs"]}
          </h2>
          <Button variant={"secondary"} size={"lg"} asChild>
            <Link href={`/${lng}/jobs`} className="font-semibold">
              {t["base.join-resolve"]}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
