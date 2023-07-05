// import { Cta } from './components/Cta'
import { CtaVariant } from './components/CtaVariant'
import { Exceptions } from './components/Exceptions'
import { Faq } from './components/Faq'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { Solutions } from './components/Solutions'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Solutions />
      <Exceptions />
      <Faq />
      <CtaVariant />
    </main>
  )
}
