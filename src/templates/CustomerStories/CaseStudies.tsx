"use client"

import React from "react"
import Link from "next/link"
import { MessageCircleQuestion } from "lucide-react"
import { Button } from "@/components/Button"
import type { BaseProps, BaseRecord } from "@/types/base.types"

export default function CaseStudies({ params: { lng, t } }: BaseProps) {
  const FEATURE_POST: BaseRecord<any> = {
    title: {
      en: "How product managers can deliver innovative data experiences to end users",
      vi: "Làm sao để mang lại trải nghiệm dữ liệu đột phá cho end-user",
    },
  }

  const CASE_STUDIES = [
    {
      name: "Nasdaq",
      title: {
        en: "Nasdaq gives customers a new way to interact with financial data",
        vi: "Nasdaq mang đến cho khách hàng trải nghiệm mới khi tương tác với dữ liệu tài chính",
      },
      logo: (
        <img
          src={"/images/customer-stories-nasdaq.png"}
          className={"h-[30px] w-auto my-4 select-none"}
          loading={"lazy"}
          alt={"nasdaq"}
        />
      ),
      file: "nasdaq-case-study",
    },
    {
      name: "Pomerleau",
      title: {
        en: "Construction company Pomerleau boosts data analysis productivity tenfold by using Sisense",
        vi: "Công ty xây dựng Pomerleau cải thiện năng suất phân tích dữ liệu tới 10 lần nhờ sử dụng Sisense",
      },
      logo: (
        <img
          src={"/images/customer-stories-pomerleau.png"}
          className={"h-[60px] w-auto select-none"}
          loading={"lazy"}
          alt={"pomerleau"}
        />
      ),
      file: "pomerleau-case-study",
    },
    {
      name: "Interfolio",
      title: {
        en: "Interfolio streamlines faculty management with a modern cloud data strategy",
        vi: "Interfolio tối ưu quy trình quản lý giảng viên với chiến lược dữ liệu đám mây tối tân",
      },
      logo: (
        <img
          src={"/images/customer-stories-interfolio.svg"}
          className={"h-[60px] w-auto select-none"}
          loading={"lazy"}
          alt={"interfolio"}
        />
      ),
      file: "interfolio-case-study",
    },
    {
      name: "Avionté",
      title: {
        en: "How SaaS platform Avionté used Sisense to transform staffing analytics, win customers, and boost retention",
        vi: "Avionté sử dụng Sisense để cải thiện phân tích nhân sự, thu hút và giữ chân khách hàng",
      },
      logo: (
        <img
          src={"/images/customer-stories-avionte.jpg"}
          className={"h-[60px] w-auto select-none"}
          loading={"lazy"}
          alt={"avionte"}
        />
      ),
      file: "avionte-case-study",
    },
  ]

  return (
    <section className="w-full flex flex-col items-center gap-12 pb-[100px] px-6">
      <div className="w-full max-w-screen-lg bg-white flex flex-col md:flex-row items-center border shadow-lg rounded-lg overflow-hidden -mt-[80px] z-[10] animate-slideup-long-slow">
        <img
          src={"/images/customer-stories-featured-image.png"}
          className={"w-full md:max-w-[40%] h-full object-cover select-none"}
          loading={"lazy"}
          alt={"customer-stories-featured-image"}
        />
        <div className="w-full flex flex-col gap-3 p-6">
          <span className="w-fit p-1 px-3 rounded-full lg:text-lg bg-purple-500 text-white select-none">
            {t["featured"]}
          </span>
          <h2 className="font-semibold text-lg lg:text-2xl leading-7 lg:leading-8">
            {FEATURE_POST.title[lng]}
          </h2>
          <Button variant={"link"} className={"w-fit p-0 m-0"} asChild>
            <Link
              href={`/pdf/end-user-experience-${lng}.pdf`}
              target={"_blank"}
              className="lg:text-lg flex flex-row items-start gap-3 rounded-lg hover:border-purple-400 duration-150"
            >
              &#10551;&nbsp;<i>{t["read.article"]}</i>
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full max-w-screen-xl flex flex-col items-start md:flex-row md:flex-wrap gap-6 md:gap-[2%] md:gap-y-6 animate-slideup-long-very-slow">
        {CASE_STUDIES.map((usecase: any) => (
          <div
            key={usecase.name}
            className="w-full md:w-[32%] rounded-lg p-6 shadow-lg border hover:border-purple-600 duration-200"
          >
            {usecase.logo}
            <h3 className="font-semibold text-lg lg:text-xl leading-7 md:leading-8">
              {usecase.name}
            </h3>
            <p className="py-2">{usecase.title[lng]}</p>
            <Button
              variant={"link"}
              className={
                "w-fit p-0 m-0 hover:text-purple-600 hover:after:bg-purple-600"
              }
              asChild
            >
              <Link
                href={`/pdf/${usecase.file}-${lng}.pdf`}
                target={"_blank"}
                className="flex flex-row items-start gap-3 rounded-lg hover:border-purple-400 duration-150"
              >
                &#10551;&nbsp;<i>{t["read.case-study"]}</i>
              </Link>
            </Button>
          </div>
        ))}
        <div className="w-full md:w-[32%] rounded-lg p-6 shadow-lg border hover:border-purple-600 duration-200">
          <MessageCircleQuestion className="h-[44px] w-auto mb-4 text-purple-700 select-none" />
          <h3 className="font-semibold text-lg lg:text-xl leading-7 md:leading-8">
            {t["contact.title"]}
          </h3>
          <p className="py-2">{t["contact.description"]}</p>
          <Button
            variant={"link"}
            className={
              "w-fit p-0 m-0 hover:text-purple-600 hover:after:bg-purple-600"
            }
            asChild
          >
            <Link
              href={`/${lng}/contact`}
              className="flex flex-row items-start gap-3 rounded-lg hover:border-purple-400 duration-150"
            >
              &#10551;&nbsp;<i>{t["contact.action"]}</i>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
