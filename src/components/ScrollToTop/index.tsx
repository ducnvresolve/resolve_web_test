"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    function showButton() {
      if (window.scrollY > 160) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", showButton)

    return () => window.removeEventListener("scroll", showButton)
  }, [])

  return (
    <div
      className={`
        ${showScrollTop ? "fixed bottom-9 right-6 z-[501]" : "hidden"}
        cursor-pointer rounded-full bg-[#ffffffde] p-4 border-[3px]
        animate-slideup-long hover:text-orange-500 hover:border-orange-500 duration-150
      `}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp width={32} height={32} />
    </div>
  )
}
