import Link from 'next/link'
import Image from 'next/image'

import companyOne from '../../../assets/company-1.webp'
import companyTwo from '../../../assets/company-2.webp'
import companyThree from '../../../assets/company-3.png'
import companyFour from '../../../assets/company-4.png'
import companyFive from '../../../assets/company-5.png'
import companySix from '../../../assets/company-6.png'

import { ArrowRight } from 'lucide-react'

export function Companies() {
    return (
        <section className="w-full py-20 relative flex flex-col">
           
            <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:grid-cols-6 max-w-7xl">
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
            <span className='text-zinc-500 bg-zinc-100 border border-zinc-200 rounded-full text-sm px-4 py-2 mx-auto flex gap-2 items-center self-center flex-shrink mt-10'>
                Mais de 2500 empresas usam nossas ferramentas para melhorar seus negócios.{' '}
                <Link 
                    href='#'
                    className='text-pink-600 hover:text-pink-400 font-semibold flex items-center gap-1' 
                >
                    Leia as histórias de nossos clientes
                    <ArrowRight size={14} />
                </Link>
            </span>
        </section>
    )
}