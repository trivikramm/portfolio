import { cn } from "@/lib/utils"
import { HTMLAttributes, forwardRef } from "react"

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl border border-surface bg-background/50 backdrop-blur-sm p-6 text-primary shadow-sm transition-all duration-300 hover:shadow-glow-purple hover:border-brand-start/40",
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"
