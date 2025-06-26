import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import {
  RESOLVE_EMAIL,
  RESOLVE_MOBILE,
  RESOLVE_LOCATION_MAP,
  RESOLVE_LOCATION_EN,
  RESOLVE_LOCATION_VI,
  RESOLVE_FACEBOOK_URL,
  RESOLVE_LINKEDIN_URL,
  RESOLVE_YOUTUBE_URL,
} from "@/configs/brand.conf"
import LangToggle from "../LangToggle"
import type { SVGProps } from "react"
import type { BaseProps } from "@/types/base.types"
import SubscribeEmail from "@/components/Form/SubscribeEmail"

export function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      ></path>
    </svg>
  )
}

export function IconYoutube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
      ></path>
    </svg>
  )
}

export default function FooterContact({ params: { lng, t } }: BaseProps) {
  return (
    <section className="w-fit md:w-full md:max-w-[400px] flex flex-col gap-3 mx-6 mt-5">
      <img
        src="/images/logo-full-white.svg"
        className="h-[55px] w-fit mb-6 select-none"
        loading="lazy"
        alt="resolve-logo"
      />
      <div className="flex flex-row gap-3">
        <Mail width={24} height={24} className="flex-shrink-0" />
        <Link
          className="no-underline font-bold text-violet-400 hover:text-white hover:underline underline-offset-4"
          href={`mailto:${RESOLVE_EMAIL}`}
        >
          {RESOLVE_EMAIL}
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <Phone width={24} height={24} className="flex-shrink-0" />
        <Link
          className="no-underline font-bold text-violet-400 hover:text-white hover:underline underline-offset-4"
          href={`TEL:${RESOLVE_MOBILE}`}
        >
          {RESOLVE_MOBILE.substring(0, 3)} {RESOLVE_MOBILE.substring(3, 6)}{" "}
          {RESOLVE_MOBILE.substring(6, 8)} {RESOLVE_MOBILE.substring(8, 10)}{" "}
          {RESOLVE_MOBILE.substring(10, 12)}
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <MapPin width={24} height={24} className="flex-shrink-0" />
        <Link
          className="no-underline font-bold text-violet-400 hover:text-white hover:underline underline-offset-4"
          href={RESOLVE_LOCATION_MAP}
          target={"_blank"}
        >
          {lng === "en" ? RESOLVE_LOCATION_EN : RESOLVE_LOCATION_VI}
        </Link>
      </div>
      <div className="mt-3 text-black">
        <SubscribeEmail params={{ lng, t }} />
      </div>
      <div className="flex flex-row items-center gap-2 my-3 -mx-1">
        <Link
          href={RESOLVE_FACEBOOK_URL}
          className="hover:text-violet-500 hover:scale-125"
          title={"Facebook"}
          target={"_blank"}
        >
          <IconFacebook width={32} height={32} />
        </Link>
        <Link
          href={RESOLVE_LINKEDIN_URL}
          className="hover:text-violet-500 hover:scale-125"
          title={"LinkedIn"}
          target={"_blank"}
        >
          <IconLinkedIn width={32} height={32} />
        </Link>
        <Link
          href={RESOLVE_YOUTUBE_URL}
          className="hover:text-violet-500 hover:scale-125"
          title={"YouTube"}
          target={"_blank"}
        >
          <IconYoutube width={32} height={32} />
        </Link>
      </div>
      <LangToggle
        displayText
        lng={lng}
        className="w-full max-w-[150px] text-gray-100 bg-neutral-800 hover:bg-neutral-900 hover:text-white mt-6"
      />
    </section>
  )
}
