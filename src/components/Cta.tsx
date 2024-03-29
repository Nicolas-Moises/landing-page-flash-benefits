import Link from 'next/link'
import { ReactElement } from 'react'

import Balancer from 'react-wrap-balancer'

interface CtaProps {
  title: string
  description: string
  link: string
  imageBg: ReactElement
  ctaLink?: string
  ctaButton?: string
}

export function Cta({
  title,
  description,
  link,
  imageBg,
  ctaLink,
  ctaButton = 'Fale conosco',
}: CtaProps) {
  return (
    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="relative isolate overflow-hidden bg-pink-600 px-6 pt-16 shadow-2xl sm:rounded-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx="512"
            cy="512"
            r="512"
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#e98ed5" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="font-title text-3xl tracking-tight text-white sm:text-4xl ">
            <Balancer>{title}</Balancer>
          </h2>
          <p className="mt-6 text-lg font-normal leading-8 text-zinc-100">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href={`${link}`}
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaLink}
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold text-white hover:text-pink-100 "
            >
              {ctaButton}
            </Link>
          </div>
        </div>
        <div className="relative mt-16 h-80 lg:mt-8">{imageBg}</div>
      </div>
    </div>
  )
}
