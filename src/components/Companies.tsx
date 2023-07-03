'use client'

import companyOne from '../assets/company-1.webp'
import companyTwo from '../assets/company-2.webp'
import companyThree from '../assets/company-3.png'
import companyFour from '../assets/company-4.png'
import companyFive from '../assets/company-5.png'
import companySix from '../assets/company-6.png'
import Image from 'next/image'

export function Companies() {
  return (
    <section className="relative w-full bg-pink-100 py-20 drop-shadow-2xl">
      <h4 className="text-center font-title text-3xl font-extrabold tracking-tight">
        Faça como essas empresas e{' '}
        <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          liberte-se
        </span>{' '}
        da burocracia
      </h4>
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:grid-cols-6">
        <Image
          src={companyOne}
          alt=""
          className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyTwo}
          alt=""
          className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyThree}
          alt=""
          className="col-span-2 max-h-7 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyFour}
          alt=""
          className="col-span-2 max-h-8 w-full object-contain lg:col-span-1"
        />
        <Image
          src={companyFive}
          alt=""
          className="col-span-2 max-h-6 w-full object-contain sm:col-start-2 lg:col-span-1"
        />
        <Image
          src={companySix}
          alt=""
          className="col-span-2 col-start-2 max-h-8 w-full object-contain sm:col-start-auto lg:col-span-1"
        />
      </div>
    </section>
  )
}
