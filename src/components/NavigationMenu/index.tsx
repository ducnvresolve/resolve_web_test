"use client";

import React, { memo, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery, VIEWPOINT } from "@/hooks/useMediaQuery";
import { useNavStore } from "@/hooks/useNavStore";
import { NavBar as MemoizedNavbar } from "./NavBar";
import { X } from "lucide-react";
import type { BaseProps } from "@/types/base.types";

const NavigationMenuComponent = ({ params }: BaseProps) => {
  const pathname = usePathname() || "";
  const isDesktop = useMediaQuery(VIEWPOINT.LG);
  const { isSidebarActive, toggleSidebar } = useNavStore();

  useEffect(() => {
    isSidebarActive && toggleSidebar(false);
  }, [pathname]);

  if (isDesktop) {
    return <MemoizedNavbar params={params} pathname={pathname} />;
  } else if (isSidebarActive)
    return (
      <>
        <div
          onClick={() => toggleSidebar(false)}
          className="fixed lg:hidden z-[999] bg-[#00000099] w-screen h-screen top-0 left-0"
        />
        <aside className="w-[280px] h-full fixed flex flex-col z-[1000] top-0 bottom-0 right-0 bg-white md:w-[370px] py-4 overflow-y-auto custom-scrollbar-hidden">
          <div className="w-full flex flex-row justify-end mb-3 px-5 select-none">
            <X
              width={24}
              height={24}
              onClick={() => toggleSidebar(false)}
              className="cursor-pointer text-gray-500 hover:text-black"
            />
          </div>
          <MemoizedNavbar
            params={params}
            className="h-full"
            pathname={pathname}
          />
        </aside>
      </>
    );
  else return <></>;
};

export const NavigationMenu = memo(NavigationMenuComponent);
