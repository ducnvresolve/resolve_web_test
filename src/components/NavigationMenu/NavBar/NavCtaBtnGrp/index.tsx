import Link from "next/link"
import LangToggle from "@/components/LangToggle"
import { Button } from "@/components/Button"
import type { BaseProps } from "@/types/base.types"

type NavCtaButtonGroup = BaseProps & {
  displayText?: boolean
}

export default function NavCtaButtonGroup({
  params: { lng, t },
  displayText,
}: NavCtaButtonGroup) {
  return (
    <>
      <LangToggle lng={lng} displayText={displayText} />
      <Button title={t["see-demo"]} asChild>
        <Link href={`/${lng}/demo`} className="min-w-[200px] font-semibold">
          {t["see-demo"]}
        </Link>
      </Button>
    </>
  )
}
