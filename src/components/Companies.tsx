'use client'

import companyOne from '../assets/company-1.png'
import companyTwo from '../assets/company-2.png'
import companyThree from '../assets/company-3.png'
import companyFour from '../assets/company-4.png'
import companyFive from '../assets/company-5.png'
import companySix from '../assets/company-6.png'
import Image from 'next/image'

const companies = [
  {
    id: 1,
    logoUrl: companyOne,
  },
  {
    id: 2,
    logoUrl: companyTwo,
  },
  {
    id: 3,
    logoUrl: companyThree,
  },
  {
    id: 4,
    logoUrl: companyFour,
  },
  {
    id: 5,
    logoUrl: companyFive,
  },
  {
    id: 6,
    logoUrl: companySix,
  },
]

export function Companies() {
  return (
    <section className="w-full bg-pink-100 py-20 relative">
      <h4 className="font-extrabold font-title text-3xl text-center tracking-tight">
        Faça como essas empresas e{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
          liberte-se
        </span>{' '}
        da burocracia
      </h4>
      <div className="items-center mt-20 mx-auto grid grid-cols-6 w-full max-w-7xl">
        {companies.map((company) => {
          return (
            <div className="flex items-center justify-center" key={company.id}>
              <Image
                src={company.logoUrl}
                alt=""
                className="object-contain opacity-70 w-1/2 max-h-12 hover:opacity-90 transition-opacity"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
