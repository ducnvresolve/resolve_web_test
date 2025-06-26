"use client"

import { useEffect } from "react"

const disableKeydown = (e: React.KeyboardEvent | KeyboardEvent) => {
  if (
    e.ctrlKey &&
    (e.keyCode == 61 ||
      e.keyCode == 107 ||
      e.keyCode == 173 ||
      e.keyCode == 109 ||
      e.keyCode == 187 ||
      e.keyCode == 189)
  ) {
    e.preventDefault()
  }
}

const disableWheel = (e: React.WheelEvent | WheelEvent) => {
  if (e.ctrlKey) {
    e.preventDefault()
  }
}

const DisableZoom = () => {
  useEffect(() => {
    document.addEventListener("keydown", disableKeydown)
    document.addEventListener("wheel", disableWheel, { passive: false })

    return () => {
      document.removeEventListener("keydown", disableKeydown)
      document.removeEventListener("wheel", disableWheel)
    }
  }, [])

  return <></>
}

export default DisableZoom
