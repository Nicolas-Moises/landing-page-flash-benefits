import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'lg' | 'md' | 'sm' | 'xs'
  className?: 'string'
  radii?: boolean
  icon?: ReactElement
}

export function Button({
  children,
  variant = 'primary',
  size = 'sm',
  radii = false,
  className,
  icon,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        'ease flex items-center justify-center gap-2 font-bold transition-all duration-150',
        radii === true ? 'rounded-full' : 'rounded-md',
        variant === 'primary' &&
          'bg-gradient-to-bl from-pink-300 via-pink-600 to-pink-400 text-white hover:from-pink-400 hover:via-pink-500 hover:to-pink-400',
        variant === 'secondary' &&
          'border-2 border-transparent bg-gradient-to-bl from-pink-600 to-pink-400 text-white hover:border-pink-400 hover:bg-none hover:text-zinc-600',
        variant === 'tertiary' &&
          'bg-transparent text-zinc-700 hover:text-pink-600',
        size === 'lg' && 'px-6 py-4 text-base',
        size === 'md' && 'px-5 py-4 text-sm',
        size === 'sm' && 'px-3.5 py-2.5 text-sm',
        size === 'xs' && 'px-2.5 py-1.5 text-sm',
        className,
      )}
      {...rest}
    >
      {children}
      {icon && icon}
    </button>
  )
}
