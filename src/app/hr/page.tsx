import { About } from './components/About'
import { Cta } from './components/Cta'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Pricing } from './components/Pricing'
import { Stats } from './components/Stats'

export default function HumanResources() {
  return (
    <div className="mt-20">
      <Hero />
      <Stats />
      <About />
      <Features />
      <Pricing />
      <Cta />
    </div>
  )
}
