import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-2xl bg-surface p-8 text-primary transition-all duration-300 hover:-translate-y-1 cursor-pointer group",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"
