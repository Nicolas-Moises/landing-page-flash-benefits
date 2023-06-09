import { Companies } from './components/Companies'
import { Cta } from './components/Cta'
import { Excluses } from './components/Excluses'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Products } from './components/Products'
import { Testimonials } from './components/Testimonials'

export default function Expense() {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Products />
      <Excluses />
      <Pricing />
      <Testimonials />
      <Faq />
      <Cta />
    </>
  )
}
