import { useTranslation } from "@/app/i18n"
import ContactUs from "@/templates/Contact"
import { localesContact, PAGE_NAME } from "./locales"
import {
  localesSubscribeEmail,
  SUBSCRIBE_EMAIL_NAME,
} from "@/components/Form/SubscribeEmail/locales"
import {
  localesContactForm,
  CONTACT_FORM_NAME,
} from "@/components/Form/ContactForm/locales"
import { translate } from "@/utils/locales.utils"
import type { Metadata, ResolvingMetadata } from "next"
import type { BaseRouteProps } from "@/types/base.types"

const APP_BASE_URL = process.env.APP_BASE_URL || "http://localhost:3000"

export async function generateMetadata(
  { params: { lng } }: BaseRouteProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { t } = await useTranslation(lng, `${PAGE_NAME}-metadata`)
  const openGraphPrevImages = (await parent).openGraph?.images || []
  const twitterPrevImages = (await parent).twitter?.images || []

  return {
    title: t("title"),
    description: t("description"),
    keywords: ["resolve", "data analytics", "phân tích dữ liệu"],
    robots: "index, follow",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${APP_BASE_URL}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...openGraphPrevImages],
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      site: `${APP_BASE_URL}`,
      images: [`${APP_BASE_URL}/images/logo-full.svg`, ...twitterPrevImages],
    },
  }
}

export default async function ContactPage({ params: { lng } }: BaseRouteProps) {
  const tContact = await useTranslation(lng, PAGE_NAME)
    .then((response: any) => translate(response.t, localesContact))
    .catch((err: any) => {
      console.error(err)
      return {}
    })
  const tSubscribeEmail = await useTranslation(lng, SUBSCRIBE_EMAIL_NAME)
    .then((response: any) => translate(response.t, localesSubscribeEmail))
    .catch((err: any) => {
      console.error(err)
      return {}
    })
  const tContactForm = await useTranslation(lng, CONTACT_FORM_NAME)
    .then((response: any) => translate(response.t, localesContactForm))
    .catch((err: any) => {
      console.error(err)
      return {}
    })
  const t = { ...tContact, ...tSubscribeEmail, ...tContactForm }

  return <ContactUs params={{ lng, t }} />
}
