'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { ReactNode } from 'react'

interface SubMenuProductsProps {
  children: ReactNode
}

export function SubMenuProducts(props: SubMenuProductsProps) {
  return (
    <NavigationMenu.Root delayDuration={100} skipDelayDuration={1000}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger asChild>
            {props.children}
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="w-full bg-white absolute top-[88px] right-0 left-0 h-[500px] z-50">
            <NavigationMenu.Link asChild>
              <Link href="#">Flash Benefícios</Link>
            </NavigationMenu.Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  )
}
