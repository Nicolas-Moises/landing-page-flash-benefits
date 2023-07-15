import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

import Balancer from 'react-wrap-balancer'

interface TitleProps {
  children: ReactNode
  size?: 'lg' | 'md' | 'sm' | 'xs'
  className?: string
}

export function Title({ children, size = 'md', className }: TitleProps) {
  return (
    <h4
      className={cn(
        'font-title font-bold tracking-tight text-zinc-800',
        size === 'lg' && 'text-6xl md:text-7xl',
        size === 'md' && 'text-4xl md:text-5xl',
        size === 'sm' && 'text-xl md:text-2xl',
        size === 'xs' && 'text-lg md:text-xl',
        className,
      )}
    >
      <Balancer>{children}</Balancer>
    </h4>
  )
}
