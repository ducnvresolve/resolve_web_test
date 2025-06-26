"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  IconFacebook,
  IconLinkedIn,
  IconYoutube,
} from "@/components/Footer/Contact";
import {
  RESOLVE_EMAIL,
  RESOLVE_MOBILE,
  RESOLVE_LOCATION_MAP,
  RESOLVE_LOCATION_EN,
  RESOLVE_LOCATION_VI,
  RESOLVE_EMAIL_MARKETING,
  RESOLVE_FACEBOOK_URL,
  RESOLVE_LINKEDIN_URL,
  RESOLVE_YOUTUBE_URL,
} from "@/configs/brand.conf";
import SubscribeEmail from "@/components/Form/SubscribeEmail";
import type { BaseProps } from "@/types/base.types";

export default function ContactInfo({ params: { lng, t } }: BaseProps) {
  return (
    <section className="p-6 w-full md:max-w-[40%] flex flex-col gap-6 md:text-lg animate-slideup-long-delayed">
      <h2 className="font-bold text-xl md:text-2xl">{t["info.title"]}</h2>
      <div className="flex flex-row items-center gap-3">
        <div className="w-full max-w-[28px] mt-1">
          <Mail width={28} height={28} />
        </div>
        <Link
          className="no-underline font-bold text-purple-600 hover:text-black hover:underline underline-offset-4"
          href={`mailto:${RESOLVE_EMAIL}`}
        >
          {RESOLVE_EMAIL}
        </Link>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="w-full max-w-[28px]">
          <Phone width={28} height={28} />
        </div>
        <Link
          className="no-underline font-bold text-purple-600 hover:text-black hover:underline underline-offset-4"
          href={`tel:${RESOLVE_MOBILE}`}
        >
          {RESOLVE_MOBILE.substring(0, 3)} {RESOLVE_MOBILE.substring(3, 6)}{" "}
          {RESOLVE_MOBILE.substring(6, 8)} {RESOLVE_MOBILE.substring(8, 10)}{" "}
          {RESOLVE_MOBILE.substring(10, 12)}
        </Link>
      </div>
      <div className="flex flex-row gap-3">
        <div className="w-full max-w-[28px] mt-1">
          <MapPin width={28} height={28} />
        </div>
        <Link
          className="no-underline font-bold text-purple-600 hover:text-black hover:underline underline-offset-4"
          href={RESOLVE_LOCATION_MAP}
          target={"_blank"}
        >
          {lng === "en" ? RESOLVE_LOCATION_EN : RESOLVE_LOCATION_VI}
        </Link>
      </div>
      {/* <h2 className="font-bold text-xl md:text-2xl mt-6">
        {t["info.for-marketing"]}
      </h2>
      <div className="flex flex-row items-center gap-3">
        <div className="w-full max-w-[28px] mt-1">
          <Mail width={28} height={28} />
        </div>
        <Link
          className="no-underline font-bold text-purple-600 hover:text-black hover:underline underline-offset-4"
          href={`mailto:${RESOLVE_EMAIL_MARKETING}`}
        >
          {RESOLVE_EMAIL_MARKETING}
        </Link>
      </div> */}
      <h2 className="font-bold text-xl md:text-2xl mt-6">
        {t["info.subscribe-email"]}
      </h2>
      <SubscribeEmail params={{ lng, t }} />
      <h2 className="font-bold text-xl md:text-2xl mt-6">
        {t["info.socials"]}
      </h2>
      <div className="flex flex-row items-center gap-2 -mx-1">
        <Link
          href={RESOLVE_FACEBOOK_URL}
          className="text-purple-600 hover:text-black"
          title={"Facebook"}
          target={"_blank"}
        >
          <IconFacebook width={48} height={48} />
        </Link>
        <Link
          href={RESOLVE_LINKEDIN_URL}
          className="text-purple-600 hover:text-black"
          title={"LinkedIn"}
          target={"_blank"}
        >
          <IconLinkedIn width={48} height={48} />
        </Link>
        <Link
          href={RESOLVE_YOUTUBE_URL}
          className="text-purple-600 hover:text-black"
          title={"YouTube"}
          target={"_blank"}
        >
          <IconYoutube width={48} height={48} />
        </Link>
      </div>
    </section>
  );
}
