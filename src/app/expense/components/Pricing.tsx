import { Check } from 'lucide-react'

const tiers = [
    {
      name: "Free",
      price: 0,
      description: "Free forever, for teams just getting started",
      features: ["10k Events per month", "1 Alert"],
      cta: "Get Started for Free",
    },
    {
      name: "Pro",
      price: 20,
      description: "For larger teams with increased usage",
      features: ["50k Events per month", "10 Alerts"],
      cta: "Try Pro for 14 days",
    },
    {
      name: "Enterprise",
      price: 50,
      description: "For businesses with custom needs",
      features: ["500k Events per month", "Unlimited Alerts"],
      cta: "Scale Up",
    },
  ];

export function Pricing() {
  return (
    <section className="w-full py-16 max-w-7xl mx-auto flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <span className="text-sm text-pink-500 mb-2">Dentro disso tudo...</span>
        <h4 className="font-title text-5xl text-zinc-700 font-bold max-w-2xl text-center tracking-tight">
          Confira nossos{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-pink-500">
            diferenciais
          </span>
        </h4>
        <p className="leading-relaxed mt-6 text-center max-w-2xl">
          Aproveite tudo por zero de taxa de contratação e utilização de nossos
          serviços primários.
        </p>
      </div>

      
    </section>
  )
}
