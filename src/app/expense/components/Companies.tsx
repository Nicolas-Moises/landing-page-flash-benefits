import Link from 'next/link'
import Image from 'next/image'

import companyOne from '../../../assets/Logo-Inter.png'
import companyTwo from '../../../assets/grupo-nc-logo.webp'
import companyThree from '../../../assets/logo-dori.png'
import companyFour from '../../../assets/logo-rgis.png'
import companyFive from '../../../assets/rappi-logo.png'
import companySix from '../../../assets/tenda-logo.png'
import { ArrowRight } from 'lucide-react'

export function Companies() {
  return (
    <section className="relative flex w-full flex-col py-20">
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-4 items-center gap-x-10 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:grid-cols-6">
        <Image
          src={companyOne}
          alt=""
          className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyTwo}
          alt=""
          className="col-span-2 max-h-7 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyThree}
          alt=""
          className="col-span-2 mb-4 max-h-20 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyFour}
          alt=""
          className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyFive}
          alt=""
          className="col-span-2 max-h-10 w-full object-contain sm:col-start-2 lg:col-span-1"
        />
        <Image
          src={companySix}
          alt=""
          className="col-span-2 col-start-2 max-h-20 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
      </div>
      <span className="mx-auto mt-10 flex flex-shrink items-center gap-2 self-center rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-sm text-zinc-500">
        Faça como essas empresas que crescem com o controle que a Flash Expense
        oferece{' '}
        <Link
          href="#"
          className="flex items-center gap-1 font-semibold text-pink-600 hover:text-pink-400"
        >
          Leia as histórias de nossos clientes
          <ArrowRight size={14} />
        </Link>
      </span>
    </section>
  )
}
