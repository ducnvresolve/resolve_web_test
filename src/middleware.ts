import { NextRequest, NextResponse } from "next/server"
import acceptLanguage from "accept-language"
import { fallbackLng, languages, cookieName } from "./app/i18n/settings"

acceptLanguage.languages(languages)

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/images|_next/pdf|images|pdf|assets|favicon.ico|sw.js|site.webmanifest).*)",
  ],
}

export function middleware(req: NextRequest) {
  // If not configured, set language to fall back language
  let lng
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value)
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"))
  if (!lng) lng = fallbackLng

  // Redirect if lang in path is not supported
  if (
    !languages.some((loc: string) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    )
  }

  // Set cookie with configured language
  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer")!)
    const lngInReferer = languages.find((l: string) =>
      refererUrl.pathname.startsWith(`/${l}`)
    )
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}
