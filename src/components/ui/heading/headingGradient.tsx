import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
  className?: string
}

export function Gradient({ children, className }: TitleProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  )
}
