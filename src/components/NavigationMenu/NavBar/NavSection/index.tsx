"use client";

import { useState, memo } from "react";
import { ChevronDown } from "lucide-react";
import { useMediaQuery, VIEWPOINT } from "@/hooks/useMediaQuery";
import type { NavbtnProps } from "@/types/route.types";
import { NavButtons } from "./NavButtons";

const NavSectionComponent = ({
  params: { lng, t },
  name,
  path,
  pathname,
}: NavbtnProps) => {
  const isDesktop = useMediaQuery(VIEWPOINT.LG);

  const [openSubheading, toggleSubheading] = useState(
    pathname?.includes(`/${lng}${path}`)
  );

  const handleClick = (e: React.MouseEvent) => {
    if (name === "blog") {
      e.preventDefault();
      window.location.href = `/${lng}/blog`;
    } else {
      toggleSubheading(!openSubheading);
    }
  };

  return (
    <>
      <li
        className={`w-full lg:w-fit ${name === "blog" ? "" : "dropdown-container"}`}
      >
        <div
          className="w-full flex flex-row items-center justify-between p-1 px-2 rounded-md cursor-pointer select-none"
          onClick={handleClick}
        >
          <span
            className="w-full font-bold md:text-lg px-4 lg:px-0"
            title={t[`${name}.description`]}
            onClick={() =>
              isDesktop ? null : toggleSubheading(!openSubheading)
            }
          >
            {t[`${name}.title`]}
          </span>
          {name !== "blog" && (
            <ChevronDown
              width={isDesktop ? 20 : 28}
              height={isDesktop ? 20 : 28}
              onClick={() => toggleSubheading(!openSubheading)}
              className={
                isDesktop
                  ? "dropdown-arrow text-black"
                  : openSubheading
                    ? "mr-3 rotate-180 text-black duration-100"
                    : "mr-3 text-gray-500 hover:text-black"
              }
            />
          )}
        </div>
        {!isDesktop && openSubheading ? (
          <NavButtons params={{ lng, t }} name={name!} path={path} />
        ) : isDesktop ? (
          <NavButtons params={{ lng, t }} name={name!} path={path} />
        ) : (
          <></>
        )}
      </li>
    </>
  );
};

export const NavSection = memo(NavSectionComponent);
