import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            'bg-gold text-background hover:bg-gold-hover': variant === 'primary',
            'bg-surface text-primary hover:bg-elevated': variant === 'secondary',
            'border border-surface text-primary hover:bg-surface': variant === 'outline',
            'hover:bg-surface text-secondary hover:text-primary': variant === 'ghost',
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
