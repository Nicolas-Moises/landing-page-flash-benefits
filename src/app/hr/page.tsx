import { Benefits } from '@/components/Benefits'
import { About } from './components/About'
import { Cta } from './components/Cta'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Stats } from './components/Stats'
import { Faq } from '../../components/Faq'
import { Testimonials } from './components/Testimonials'
import { Companies } from './components/Companies'

export default function HumanResources() {
  return (
    <div className="mt-14">
      <div className="bg-hero-pattern bg-cover">
        <Hero />
      </div>
      <Stats />
      <Companies />
      <About />
      <Features />
      <Benefits />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </div>
  )
}
