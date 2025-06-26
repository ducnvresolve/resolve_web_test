"use client"

import axios from "axios"
import React, { useState, useRef } from "react"
import { LoaderCircle, CircleCheckBig } from "lucide-react"
import { Input, EMAIL_REGEX } from "../Input"
import { Textarea } from "../Textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../Select"
import { Checkbox } from "../Checkbox"
import { Label } from "../Label"
import { Button } from "@/components/Button"
import type { BaseProps, BaseRecord } from "@/types/base.types"
import { loggerContact, loggerError } from "@/utils/telegramLogger"

const FORM_FIELDS = [
  {
    name: "name",
    type: "text",
    required: true,
  },
  {
    name: "phone",
    type: "number",
    required: true,
  },
  {
    name: "email",
    type: "email",
    required: true,
  },
  {
    name: "company",
    type: "text",
    required: false,
  },
  {
    name: "category",
    type: "select",
    required: true,
    options: ["contact", "demo", "others"],
  },
  {
    name: "subject",
    type: "text",
    required: true,
  },
  {
    name: "content",
    type: "textarea",
    required: true,
  },
  {
    name: "subscribe",
    type: "checkbox",
    required: false,
  },
]

export default function ContactForm({ params: { t } }: BaseProps) {
  const formRef = useRef<any>()
  const [formState, setFormState] = useState<
    "unsubmitted" | "loading" | "submitted"
  >("unsubmitted")
  const [error, setError] = useState<string | null>(null)

  const onKeyNumberInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (["e", "E", "+", "-"].includes(e.key)) {
      e.preventDefault()
      return
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    let values: BaseRecord<any> = {}
    FORM_FIELDS.map((field: any) => {
      if (field.name === "category") {
        values[field.name] = formRef.current.querySelector("select").value
      } else if (field.name === "subscribe") {
        values[field.name] =
          formRef.current.querySelector("#subscribe")?.attributes[
            "aria-checked"
          ].value === "true"
      } else {
        values[field.name] = formRef.current
          .querySelector(`#${field.name}`)
          .value.trim()
      }
    })

    if (
      values["name"] === "" ||
      values["phone"] === "" ||
      values["email"] === "" ||
      values["subject"] === "" ||
      values["content"] === "" ||
      values["category"] === ""
    ) {
      setError(t["contactForm.error.required"] as string)
      return false
    } else if (!values["email"]?.toLowerCase().match(EMAIL_REGEX)) {
      setError(t["contactForm.error.email"] as string)
      return false
    }

    setError(null)
    setFormState("loading")

    // Send enquiry form
    try {
      loggerContact({
        name: values["name"],
        phone: values["phone"],
        email: values["email"],
        company: values["company"] || "",
        category: values["category"],
        subject: values["subject"],
        content: values["content"],
        subscribe: values["subscribe"],
      })
      const response = await axios({
        method: "POST",
        url: `${process.env.APP_BASE_URL}/api/contact`,
        data: {
          name: values["name"],
          phone: values["phone"],
          email: values["email"],
          company: values["company"] || "",
          category: values["category"],
          subject: values["subject"],
          content: values["content"],
          subscribe: values["subscribe"],
        },
      })
      if (response.status === 200) {
        setError(null)
        setFormState("submitted")
      } else {
        loggerError({
          page: "Contact Form",
          api: "POST",
          headers: response.headers,
          curl: response.config.url,
          error: response.data.msg,
        })
        setError(response.data.msg)
        setFormState("unsubmitted")
        return
      }
    } catch (err) {
      console.error(err)
      loggerError({
        page: "Contact Form",
        // api: "POST",
        // headers: response.headers,
        // curl: response.config.url,
        error: String(err),
      })
      setError(t["contactForm.error.system"] as string)
      setFormState("unsubmitted")
      return
    }
  }

  return (
    <form
      ref={formRef}
      className="w-full bg-white border border-gray-200 rounded-lg shadow-lg py-12 px-6 lg:px-12 animate-slideup-long-very-delayed"
    >
      {formState === "submitted" ? (
        <div className="w-full h-full min-h-[684px] flex items-center justify-center animate-slideup-long">
          <div className="flex flex-col items-center gap-6">
            <CircleCheckBig
              width={80}
              height={80}
              className="text-purple-600"
            />
            <p className="md:text-lg text-center">{t["contactForm.success"]}</p>
          </div>
        </div>
      ) : (
        <>
          <h2 className="font-bold tracking-wider text-2xl mb-9">
            {t["contactForm.title"]}
          </h2>
          {error && (
            <div className="font-semibold text-rose-500 -mt-6 mb-9">
              {error}
            </div>
          )}
          <div className="w-full flex flex-col items-start gap-6">
            {FORM_FIELDS.map((field: any) => {
              switch (field.type) {
                case "select":
                  return (
                    <div key={field.name} className="w-full">
                      <Label>
                        {t[`contactForm.${field.name}.title`]}
                        {field.required && " *"}
                      </Label>
                      <Select name={field.name}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="---" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>
                              {t[`contactForm.${field.name}.title`]}
                            </SelectLabel>
                            {field.options.map((option: string) => (
                              <SelectItem key={option} value={option}>
                                {t[`contactForm.category.${option}`]}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  )
                case "checkbox":
                  return (
                    <div
                      key={field.name}
                      className="w-full flex flex-row items-center gap-3 mt-3"
                    >
                      <Checkbox
                        id={field.name}
                        name={field.name}
                        defaultChecked
                      />
                      <Label>
                        {t[`contactForm.${field.name}`]}
                        {field.required && " *"}
                      </Label>
                    </div>
                  )
                case "textarea":
                  return (
                    <div key={field.name} className="w-full">
                      <Label>
                        {t[`contactForm.${field.name}`]}
                        {field.required && " *"}
                      </Label>
                      <Textarea
                        id={field.name}
                        name={field.name}
                        rows={8}
                        cols={50}
                        className="min-h-[120px] resize-none"
                      />
                    </div>
                  )
                case "email":
                  return (
                    <div key={field.name} className="w-full">
                      <Label>
                        {t[`contactForm.${field.name}`]}
                        {field.required && " *"}
                      </Label>
                      <Input id={field.name} name={field.name} type="email" />
                    </div>
                  )
                case "number":
                  return (
                    <div key={field.name} className="w-full">
                      <Label>
                        {t[`contactForm.${field.name}`]}
                        {field.required && " *"}
                      </Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="number"
                        onKeyDown={onKeyNumberInput}
                      />
                    </div>
                  )
                case "text":
                default:
                  return (
                    <div key={field.name} className="w-full">
                      <Label>
                        {t[`contactForm.${field.name}`]}
                        {field.required && " *"}
                      </Label>
                      <Input id={field.name} name={field.name} />
                    </div>
                  )
              }
            })}
            <Button
              variant={"default"}
              size={"lg"}
              className="text-lg font-bold flex flex-row gap-2 mt-6"
              onClick={handleSubmit}
            >
              {formState === "loading" && (
                <LoaderCircle className="w-8 h-8 animate-spin" />
              )}
              {t["contactForm.submit"]}
            </Button>
          </div>
        </>
      )}
    </form>
  )
}
