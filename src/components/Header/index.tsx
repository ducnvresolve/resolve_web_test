"use client"

import React, { useState, useEffect, memo } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useNavStore } from "@/hooks/useNavStore"
import {NavigationMenu} from "../NavigationMenu"
import NavCtaButtonGroup from "../NavigationMenu/NavBar/NavCtaBtnGrp"
import type { BaseProps } from "@/types/base.types"

const HeaderComponent = ({ params: { lng, t } }: BaseProps) =>{
  const [isHeaderTransparent, setHeaderTransparency] = useState<boolean>(false)
  const { toggleSidebar } = useNavStore()
  const MenuIcon = React.memo(Menu)

  useEffect(() => {
    function toggleHeaderTransparency() {
      if (window.scrollY > 50) {
        setHeaderTransparency(false)
      } else {
        setHeaderTransparency(true)
      }
    }

    toggleHeaderTransparency()
    document.addEventListener("scroll", toggleHeaderTransparency)

    return () =>
      document.removeEventListener("scroll", toggleHeaderTransparency)
  }, [])
  
  return (
    <header
      className={`
        w-full fixed z-[998] flex flex-col items-center shadow-md duration-500
        ${
          isHeaderTransparent
            ? "bg-transparent shadow-transparent"
            : "bg-white shadow-gray-300"
        }
      `}
    >
      <div className="w-full max-w-screen-2xl h-[80px] flex flex-row justify-between items-center gap-6 px-6">
        <div className="w-full flex flex-row items-center justify-between gap-6">
          <div className="min-w-[175px] select-none">
            <Link
              href={`/${lng}`}
              className="w-full flex flex-col items-center justify-center gap-[2px]"
            >
              <img
                src="/images/logo-full.svg"
                style={{ width: "auto", height: 50 }}
                loading="lazy"
                alt="resolve-logo-full"
              />
              <span className="text-xs font-bold">
                At resolve, we solve data
              </span>
            </Link>
          </div>
          <div className="w-full flex flex-row items-center justify-end md:justify-between gap-6">
            <div
              className="block lg:hidden text-gray-500 hover:text-black cursor-pointer"
              onClick={() => toggleSidebar(true)}
            >
              <MenuIcon width={28} height={28} />
            </div>
            <div className="w-fit hidden md:flex lg:hidden flex-row gap-3 p-3">
              <NavCtaButtonGroup params={{ lng, t }} displayText={false} />
            </div>
            <NavigationMenu params={{ lng, t }} />
          </div>
        </div>
      </div>
    </header>
  )
}
export const Header = memo(HeaderComponent);
