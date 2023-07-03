import Link from 'next/link'

export function Cta() {
  return (
    <div className="mx-auto my-40 flex w-full max-w-3xl flex-col items-center">
      <h1 className="text-center font-title text-7xl font-bold tracking-tight text-zinc-800">
        Colaboradores e RHs rosa de{' '}
        <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent">
          satisfação
        </span>
      </h1>
      <p className="mt-6 text-center text-lg leading-relaxed text-zinc-600">
        Os números confirmam: 98% dos profissionais de RHs se sentem satisfeitos
        com a Flash e 62% percebem melhora na retenção de talentos. E tem mais:
        nossa nota de recomendação de NPS é +86.
      </p>

      <div className="mt-6 flex items-center gap-6">
        <button
          className="flex items-center justify-center rounded-full border-2 border-pink-400 bg-pink-400 px-5 py-2 font-semibold text-white
                        transition-colors duration-200 hover:bg-transparent hover:text-zinc-600"
        >
          Contratar agora
        </button>
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
