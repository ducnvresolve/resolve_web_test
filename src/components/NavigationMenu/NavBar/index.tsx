"use client";

import React, { memo } from "react";
import { NAV_LIST } from "@/configs/routes.conf";
import { NavSection } from "./NavSection";
import NavCtaButtonGroup from "./NavCtaBtnGrp";
import { cn } from "@/utils/ui.utils";
import type { NavbarProps } from "@/types/route.types";
import { BaseRecord } from "@/types/base.types";

const NavBarComponent = ({
  params: { lng, t },
  className,
  pathname,
  ...rest
}: NavbarProps) => {
  return (
    <nav
      {...rest}
      className={cn(
        "w-full flex flex-col lg:flex-row items-center justify-between gap-12",
        className
      )}
    >
      <ul className="w-full flex flex-col lg:flex-row items-center gap-3 lg:px-0">
        {NAV_LIST.map((item: BaseRecord<string>, index: number) => (
          <NavSection
            key={item.name}
            params={{ lng, t }}
            name={item.name!}
            path={item.path ?? "https://resolvevn.blogspot.com/"}
          />
        ))}
      </ul>
      <div className="w-full lg:w-fit flex flex-col lg:flex-row gap-3 p-3 -mb-4 lg:p-0 lg:mb-0">
        <NavCtaButtonGroup params={{ lng, t }} />
      </div>
    </nav>
  );
};

export const NavBar = memo(NavBarComponent);
