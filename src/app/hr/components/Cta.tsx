import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Cta() {
  return (
    <div className="mx-auto my-40 flex w-full max-w-3xl flex-col items-center">
      <h1 className="text-center font-title text-7xl font-bold tracking-tight text-zinc-800">
        Conheça a liberdade que só a{' '}
        <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          Flash{' '}
        </span>
        te dá
      </h1>
      <p className="mt-6 text-center text-lg leading-relaxed text-zinc-600">
        Agende agora e tenha simplesmente a melhor experiência de uso
      </p>

      <div className="mt-6 flex items-center gap-6">
        <Button radii size="lg">
          Agendar agora
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
