"use client"

import companyOne from '../assets/company-1.png'
import companyTwo from '../assets/company-2.png'
import companyThree from '../assets/company-3.png'
import companyFour from '../assets/company-4.png'
import companyFive from '../assets/company-5.png'
import companySix from '../assets/company-6.png'
import Image from 'next/image'

import { useKeenSlider } from 'keen-slider/react';

const animation = { duration: 15000, easing: (t: any) => t }

export function Companies() {
    const [sliderRef] = useKeenSlider({
        loop: true,
        slides: {
          perView: 8,
        },
        mode: "snap",
        renderMode: "performance",
        drag: false,
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        
      })
    return (
        <section className="w-full bg-pink-100 py-20 relative">
                <h4 className="font-extrabold font-title text-3xl text-center tracking-tight">
                    Faça como essas empresas e <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">liberte-se</span> da burocracia
                </h4>
            <div className='absolute top-0 bottom-0 left-0 z-50 w-40 bg-gradient-to-r from-pink-100' />
            <div className='absolute top-0 bottom-0 right-0 z-50 w-60 bg-gradient-to-l from-pink-100' />
           <div className=" items-center mt-20 keen-slider" ref={sliderRef}>
                <Image src={companyTwo} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companyThree} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companyFour} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companyFive} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companySix} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companyTwo} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companyThree} alt="" className='keen-slider__slide grayscale  opacity-75 h-14 object-contain' />
                <Image src={companyFour} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companyFive} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
                <Image src={companySix} alt="" className='keen-slider__slide grayscale  opacity-75 h-10 object-contain' />
           </div>
        </section>
    )
}