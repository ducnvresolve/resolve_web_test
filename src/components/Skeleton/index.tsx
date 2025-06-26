import { cn } from "@/utils/ui.utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-skeleton rounded-md bg-gray-100 dark:bg-gray-800",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
