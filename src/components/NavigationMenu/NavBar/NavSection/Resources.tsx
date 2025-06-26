"use client"

import Link from "next/link"
import { Paperclip } from "lucide-react"
import {
  IconFacebook,
  IconLinkedIn,
  IconYoutube,
} from "@/components/Footer/Contact"
import {
  RESOLVE_FACEBOOK_URL,
  RESOLVE_LINKEDIN_URL,
  RESOLVE_YOUTUBE_URL,
} from "@/configs/brand.conf"
import { RESOURCE_LIST } from "@/configs/routes.conf"
import { Button } from "@/components/Button"
import NavBtn from "./NavBtn"
import type { BaseProps, BaseRecord } from "@/types/base.types"

export default function ResourcesNavSection({ params: { lng, t } }: BaseProps) {
  const FEATURE_DOCS: BaseRecord<any>[] = [
    {
      name: "end-user-experience",
      title: {
        en: "How product managers can deliver innovative data experiences to end users",
        vi: "Làm sao để mang lại trải nghiệm dữ liệu đột phá cho end-user",
      },
    },
    {
      name: "the-role-of-data-warehouse",
      title: {
        en: "The role of data warehouses in Business Analytics and Business Intelligence",
        vi: "Vai trò của data warehouse trong Business Analytics và Business Intelligence",
      },
    },
  ]

  return (
    <div className="w-full max-w-screen-2xl">
      <div className="w-full flex flex-col lg:flex-row gap-3">
        <div className="w-full flex flex-col lg:flex-row gap-6 p-3 px-6 lg:pr-3">
          <ul className="w-full flex flex-col gap-3">
            <p className="w-full border-2 border-transparent border-b-purple-700 text-purple-700 font-bold leading-8 mb-3">
              {t["resources.title"]?.charAt(0).toUpperCase()}
              {t["resources.title"]?.substring(1).toLowerCase()}
            </p>
            {[...Array(RESOURCE_LIST.length).keys()].map((i: number) => (
              <NavBtn
                key={i}
                params={{ lng, t }}
                name={`resources.${RESOURCE_LIST[i].name}`}
                path={RESOURCE_LIST[i].path!}
              />
            ))}
          </ul>
          <div className="w-full flex flex-col gap-3">
            <p className="w-full border-2 border-transparent border-b-purple-700 text-purple-700 font-bold leading-8 mb-3">
              {t["base.learn-more"]?.charAt(0).toUpperCase()}
              {t["base.learn-more"]?.substring(1).toLowerCase()}
            </p>
            <div className="w-full flex flex-col gap-3">
              {FEATURE_DOCS.map((doc, i) => (
                <Link
                  key={i}
                  href={`/pdf/${doc.name}-${lng}.pdf`}
                  target={"_blank"}
                  title={doc.title[lng]}
                  className="w-full flex flex-row items-start gap-3 p-3 rounded-lg border border-gray-200 hover:border-purple-400 duration-150"
                >
                  <Paperclip className="w-8 h-8 text-purple-700" />
                  <div className="w-full flex flex-col justify-between">
                    <span className="text-sm lg:text-base font-semibold">
                      {doc.title[lng]}
                    </span>
                    <Button
                      variant={"link"}
                      className="w-fit p-0 hover:text-purple-600 hover:after:bg-purple-600"
                    >
                      &#10551;&nbsp;<i>{t["resources.read-article"]} (PDF)</i>
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[550px] bg-gray-200 p-3 px-6">
          <p className="w-full border-2 border-transparent border-b-purple-700 text-purple-700 font-bold leading-8 mb-6">
            {t["resources.external-link"]}
          </p>
          <div className="w-full flex flex-col gap-1">
            <Link
              href={RESOLVE_FACEBOOK_URL}
              className={
                "w-full flex flex-row items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-purple-400 duration-150"
              }
              title={"Facebook"}
              target={"_blank"}
            >
              <IconFacebook className="w-10 h-10 text-purple-700" />
              <div className="w-full flex flex-col justify-between">
                <span className="text-sm lg:text-base font-semibold">
                  Facebook
                </span>
              </div>
            </Link>
            <Link
              href={RESOLVE_LINKEDIN_URL}
              className={
                "w-full flex flex-row items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-purple-400 duration-150"
              }
              title={"LinkedIn"}
              target={"_blank"}
            >
              <IconLinkedIn className="w-10 h-10 text-purple-700" />
              <div className="w-full flex flex-col justify-between">
                <span className="text-sm lg:text-base font-semibold">
                  LinkedIn
                </span>
              </div>
            </Link>
            <Link
              href={RESOLVE_YOUTUBE_URL}
              className={
                "w-full flex flex-row items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-purple-400 duration-150"
              }
              title={"YouTube"}
              target={"_blank"}
            >
              <IconYoutube className="w-10 h-10 text-purple-700" />
              <div className="w-full flex flex-col justify-between">
                <span className="text-sm lg:text-base font-semibold">
                  YouTube
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
