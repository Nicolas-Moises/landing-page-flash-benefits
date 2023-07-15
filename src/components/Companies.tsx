import Link from 'next/link'
import Image from 'next/image'

import companyOne from '../assets/VTEXl-logo.png'
import companyTwo from '../assets/brf-logo.png'
import companyThree from '../assets/cora-logo.png'
import companyFour from '../assets/loggi-logo.png'
import companyFive from '../assets/logo-workana.png'
import companySix from '../assets/neon-logo.png'
import companySeven from '../assets/warren-logo.png'
import companyEight from '../assets/quintoandar-logo.png'
import companyNine from '../assets/elo7-logo.png'
import companyTen from '../assets/ford-logo.png'
import companyEleven from '../assets/livup-logo.webp'
import companyTwelve from '../assets/suzano-logo.png'

import { ArrowRight } from 'lucide-react'

export function Companies() {
  return (
    <section className="relative flex w-full flex-col px-6 py-20 xl:px-0">
      <div className=" mx-auto mt-10 grid max-w-7xl grid-cols-3 items-center gap-x-8 gap-y-10  sm:grid-cols-4 sm:gap-x-10 lg:grid-cols-6">
        <Image
          src={companyOne}
          alt=""
          className=" max-h-10 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyTwo}
          alt=""
          className=" max-h-10 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyThree}
          alt=""
          className=" max-h-7 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyFour}
          alt=""
          className=" max-h-8 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyFive}
          alt=""
          className=" hidden max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1 lg:inline-flex"
        />
        <Image
          src={companySix}
          alt=""
          className=" col-start-2 max-h-7 w-full object-contain sm:col-start-auto lg:col-span-1"
        />

        <Image
          src={companySeven}
          alt=""
          className=" max-h-10 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyEight}
          alt=""
          className=" max-h-6 w-full object-contain lg:col-span-1 lg:max-h-10"
        />
        <Image
          src={companyNine}
          alt=""
          className=" hidden max-h-7 w-full object-contain lg:col-span-1
          lg:inline-flex"
        />
        <Image
          src={companyTen}
          alt=""
          className="max-h-10 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyEleven}
          alt=""
          className=" hidden max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1 lg:inline-flex"
        />
        <Image
          src={companyTwelve}
          alt=""
          className=" col-start-2 hidden max-h-7 w-full object-contain sm:col-start-auto lg:col-span-1 lg:inline-flex"
        />
      </div>
      <span className="mx-auto mt-10 flex flex-shrink items-center gap-2 self-center rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-xs text-zinc-500 lg:text-sm">
        Mais de 10000 empresas usam nossas ferramentas para melhorar seus
        negócios.{' '}
        <Link
          href="#"
          className="flex items-center gap-1 font-semibold text-pink-600 hover:text-pink-400"
        >
          Leia as histórias de nossos clientes
          <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
        </Link>
      </span>
    </section>
  )
}
