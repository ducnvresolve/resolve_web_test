"use client"

import PageHeader from "@/components/PageHeader"
import ContactInfo from "./ContactInfo"
import ContactForm from "@/components/Form/ContactForm"
import type { BaseProps } from "@/types/base.types"

export default function ContactUs({ params }: BaseProps) {
  return (
    <main className="flex flex-col items-center">
      <PageHeader params={params} />
      <div className="w-full bg-white border border-transparent border-t-gray-300 flex flex-col items-center gap-6 p-6 md:pt-12 pb-12 -mt-[2px] animate-slideup-very-delayed">
        <div className="max-w-screen-xl w-full flex flex-col md:flex-row gap-6 py-3">
          <ContactInfo params={params} />
          <div className="w-full h-auto md:-mt-[145px] z-[10]">
            <ContactForm params={params} />
          </div>
        </div>
      </div>
    </main>
  )
}
