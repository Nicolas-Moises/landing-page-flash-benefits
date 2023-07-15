'use client'
import Image from 'next/image'

import flashLogo from '../assets/flash-logo.png'
import { Navigation } from './Navigation'
import Link from 'next/link'
import { Button } from './ui/button'

import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 w-full bg-white/40 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, animation: 'ease' }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 xl:px-0">
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              src={flashLogo}
              alt="Logo Flash Benefícios"
              className="w-28"
            />
          </Link>
          <Navigation />
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <Button variant="tertiary">Entrar</Button>

          <Button radii size="xs">
            Contratar agora
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
