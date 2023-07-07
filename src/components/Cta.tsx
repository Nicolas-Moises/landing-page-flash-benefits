import Link from 'next/link'
import { Button } from './ui/button'
import { Heading } from './ui/heading'

export function Cta() {
  return (
    <div className="mx-auto my-40 flex w-full max-w-3xl flex-col items-center">
      <Heading.Title size="lg" className="text-center">
        Colaboradores e RHs rosa de{' '}
        <Heading.Gradient>satisfação</Heading.Gradient>
      </Heading.Title>
      <p className="mt-6 text-center text-lg leading-relaxed text-zinc-600">
        Os números confirmam: 98% dos profissionais de RHs se sentem satisfeitos
        com a Flash e 62% percebem melhora na retenção de talentos. E tem mais:
        nossa nota de recomendação de NPS é +86.
      </p>

      <div className="mt-6 flex items-center gap-6">
        <Button radii size="lg">
          Contratar agora
        </Button>
        <Link
          href="#"
          className="font-semibold text-zinc-600 hover:text-pink-400"
        >
          Fale conosco
        </Link>
      </div>
    </div>
  )
}
