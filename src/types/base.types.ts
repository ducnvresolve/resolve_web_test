import React from "react"

export type BaseRecord<T> = {
  [key: string]: T | undefined
}

export type BaseProps = Readonly<{
  params: {
    lng: string
    t: BaseRecord<string>
  }
  className?: string
}>

export type BaseRouteProps = Readonly<{
  params: {
    lng: string
  }
}>

export type BaseLayoutProps = BaseRouteProps &
  Readonly<{
    children: React.ReactNode
  }>
