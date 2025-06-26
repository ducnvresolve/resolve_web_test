"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../Button";
import { cn } from "@/utils/ui.utils";
import { usePathname } from "next/navigation";

type LangToggleProps = {
  lng: string;
  displayText?: boolean;
  className?: string;
  text?: {
    en: string;
    vi: string;
  };
  html?: {
    en: string;
    vi: string;
  };
};

// Custom hook để lấy query params ở client-side
function useQueryParams() {
  const [params, setParams] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const search = window.location.search;
      const urlParams = new URLSearchParams(search);
      const result: { [key: string]: string } = {};
      urlParams.forEach((value, key) => {
        result[key] = value;
      });
      setParams(result);
    }
  }, []);

  return params;
}

export default function LangToggle({
  lng,
  displayText,
  className,
  text,
  html,
}: LangToggleProps) {
  const searchParams = useQueryParams();
  const pathname = usePathname();
  const newSearchParams = new URLSearchParams(searchParams.toString());

  const displayContent = () => {
    if (html) {
      return (
        <span
          className={
            displayText === undefined
              ? "block lg:hidden"
              : displayText
                ? ""
                : "hidden"
          }
          dangerouslySetInnerHTML={{
            __html: lng === "en" ? html.en : html.vi,
          }}
        />
      );
    }
    return (
      <span
        className={
          displayText === undefined
            ? "block lg:hidden"
            : displayText
              ? ""
              : "hidden"
        }
      >
        {text
          ? lng === "en"
            ? text.en
            : text.vi
          : lng === "en"
            ? "Tiếng Việt"
            : "English"}
      </span>
    );
  };

  return (
    <Button
      variant={"outline"}
      className={cn("p-2", className)}
      title={
        lng === "en"
          ? "Chuyển ngôn ngữ sang tiếng Việt"
          : "Change language to English"
      }
      asChild
    >
      <Link
        href={`${lng === "en" ? "/vi" : "/en"}${pathname?.substring(3)}${newSearchParams.toString() ? `?${newSearchParams.toString()}` : ""}`}
        className="flex flex-row items-center gap-2"
      >
        <img
          src={lng === "vi" ? "/images/flag-vi.svg" : "/images/flag-en.svg"}
          className="max-w-[25px]"
          alt={lng === "vi" ? "flag-vi" : "flag-en"}
        />
        {displayContent()}
      </Link>
    </Button>
  );
}
