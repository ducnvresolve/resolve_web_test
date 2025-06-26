"use client"

import axios from "axios"
import { useState, useRef } from "react"
import { LoaderCircle, MailCheck } from "lucide-react"
import { Button } from "@/components/Button"
import { Input, EMAIL_REGEX } from "@/components/Form/Input"
import type { BaseProps } from "@/types/base.types"

export default function SubscribeEmail({ params: { t } }: BaseProps) {
  const emailRef = useRef<any>()
  const [subscribeState, setSubscribeState] = useState<
    "unsubbed" | "loading" | "subbed"
  >("unsubbed")
  const [error, setError] = useState<string | null>(null)

  const handleType = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" &&
    (e.target as HTMLInputElement).value !== "" &&
    handleSubmit()

  const handleSubmit = async () => {
    if (
      emailRef.current?.value === "" ||
      !emailRef.current?.value.toLowerCase().match(EMAIL_REGEX)
    ) {
      setError(t["subscribe-email.error.invalidEmail"] as string)
      return
    }
    setSubscribeState("loading")
    try {
      const response = await axios({
        method: "POST",
        url: `${process.env.APP_BASE_URL}/api/subscribe`,
        data: {
          email: emailRef.current?.value,
        },
      })
      if (response.status === 200) {
        setError(null)
        setSubscribeState("subbed")
      } else {
        setSubscribeState("unsubbed")
        setError(response.data.msg)
      }
    } catch (err) {
      console.error(err)
      setSubscribeState("unsubbed")
      setError(t["subscribe-email.error.systemError"] as string)
    }
  }

  if (subscribeState === "subbed") {
    return (
      <div className="text-lg font-semibold flex flex-row items-center gap-3 text-purple-600 select-none">
        <MailCheck className="w-10 h-10 flex-shrink-0" />
        <span>{t["subscribe-email.success"]}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center gap-3">
        <Input
          ref={emailRef}
          type="email"
          id="subscribe-email"
          name="subscribe-email"
          placeholder={t["subscribe-email.placeholder"]}
          onKeyDown={handleType}
          className="md:max-w-[400px]"
        />
        <Button
          variant={"default"}
          className="lg:text-lg font-semibold flex flex-row items-center gap-1"
          onClick={handleSubmit}
        >
          {subscribeState === "loading" && (
            <LoaderCircle className="w-8 h-8 animate-spin" />
          )}
          {t["subscribe-email.button"]}
        </Button>
      </div>
      {error && (
        <div className="font-semibold text-rose-500">
          {t["subscribe-email.error.1"]} {error}. {t["subscribe-email.error.2"]}
        </div>
      )}
    </div>
  )
}
