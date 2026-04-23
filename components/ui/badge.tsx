import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'outline' | 'gradient';
}

export function Badge({ children, className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-medium transition-colors",
        {
          'bg-elevated text-primary border border-surface': variant === 'default',
          'border border-brand-start/30 text-brand-end bg-brand-start/10': variant === 'outline',
          'bg-gradient-to-r from-brand-start to-brand-end text-white border-none': variant === 'gradient',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
