import Link from "next/link"
import type { BaseProps } from "@/types/base.types"

export default function FooterCopyright({ params: { lng, t } }: BaseProps) {
  return (
    <div className="w-full flex flex-col items-center text-sm mt-12">
      <div className="w-full max-w-screen-2xl flex flex-col md:flex-row md:items-center justify-center gap-3 md:gap-6 border border-transparent border-t-gray-300 p-6">
        <p>&copy; {new Date().getFullYear()} resolve</p>
        <p className="w-fit hover:underline underline-offset-4">
          <Link href={`/${lng}/terms-and-conditions`} title={t["terms"]}>
            {t["terms"]}
          </Link>
        </p>
        <p className="w-fit hover:underline underline-offset-4">
          <Link href={`/${lng}/privacy-policy`} title={t["privacy"]}>
            {t["privacy"]}
          </Link>
        </p>
      </div>
    </div>
  )
}
